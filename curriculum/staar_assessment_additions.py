from curriculum.staar_2026_practice import STAAR_2026_PRACTICE


def _normalize_options(options):
    result = []

    for index, option in enumerate(options or []):
        letter = option.get("letter") or chr(ord("A") + index)
        text = option.get("text") or ""

        result.append({
            "letter": letter,
            "text": text,
            "label": letter,
            "answer": text,
        })

    return result


def _make_assessment_question(item, prompt, options, correct_answer, explanation, title_suffix=""):
    title = item.get("title", "STAAR Practice Question")
    if title_suffix:
        title = f"{title} - {title_suffix}"

    normalized_options = _normalize_options(options)

    return {
        "title": title,
        "name": title,
        "teks": item.get("teks", "5th Grade Science"),
        "TEKS": item.get("teks", "5th Grade Science"),
        "grade": "5",
        "grade_level": "5",
        "source": "Science Studio STAAR Practice",
        "year": "Question Pool",
        "item_number": item.get("item_number"),
        "skill_focus": item.get("skill_focus", ""),
        "focus": item.get("skill_focus", ""),
        "question": prompt,
        "prompt": prompt,
        "stem": prompt,
        "text": prompt,
        "sentence_prompt": item.get("sentence_prompt", ""),
        "options": normalized_options,
        "choices": normalized_options,
        "answer_choices": normalized_options,
        "correct_answer": correct_answer,
        "answer": correct_answer,
        "correct": correct_answer,
        "explanation": explanation,
        "rationale": explanation,
        "teacher_note": item.get("teacher_note", ""),
        "stimulus_image": item.get("stimulus_image", ""),
        "image": item.get("stimulus_image", ""),
        "image_path": item.get("stimulus_image", ""),
    }


STAAR_ASSESSMENT_ADDITIONS = []

for item in STAAR_2026_PRACTICE:
    if item.get("parts"):
        for part in item.get("parts", []):
            combined_prompt = f"{item.get('prompt', '')} {part.get('prompt', '')}".strip()

            STAAR_ASSESSMENT_ADDITIONS.append(
                _make_assessment_question(
                    item=item,
                    prompt=combined_prompt,
                    options=part.get("options", []),
                    correct_answer=part.get("correct_answer", ""),
                    explanation=part.get("explanation", ""),
                    title_suffix=part.get("label", "")
                )
            )
    else:
        prompt = item.get("prompt", "")
        if item.get("sentence_prompt"):
            prompt = f"{prompt} {item.get('sentence_prompt')}".strip()

        STAAR_ASSESSMENT_ADDITIONS.append(
            _make_assessment_question(
                item=item,
                prompt=prompt,
                options=item.get("options", []),
                correct_answer=item.get("correct_answer", ""),
                explanation=item.get("explanation", "")
            )
        )
