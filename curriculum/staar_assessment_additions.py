from curriculum.staar_2026_practice import STAAR_2026_PRACTICE


def _normalize_options(options):
    normalized = []

    for index, option in enumerate(options or []):
        letter = option.get("letter") or chr(ord("A") + index)
        text = option.get("text") or ""
        normalized.append({
            "letter": letter,
            "text": text,
            "label": letter,
            "answer": text,
        })

    return normalized


def _base_question(item, prompt, options, correct_answer, explanation, title_suffix=""):
    title = item.get("title", "STAAR Practice")
    if title_suffix:
        title = f"{title} - {title_suffix}"

    return {
        "title": title,
        "teks": item.get("teks", "5th Grade Science"),
        "grade": "5",
        "grade_level": "5",
        "source": "Science Studio STAAR Practice",
        "year": "Question Pool",
        "item_number": item.get("item_number"),
        "skill_focus": item.get("skill_focus", ""),
        "question": prompt,
        "prompt": prompt,
        "stem": prompt,
        "sentence_prompt": item.get("sentence_prompt", ""),
        "options": _normalize_options(options),
        "choices": _normalize_options(options),
        "answer_choices": _normalize_options(options),
        "correct_answer": correct_answer,
        "answer": correct_answer,
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
        for part in item["parts"]:
            prompt = item.get("prompt", "")
            part_prompt = part.get("prompt", "")
            combined_prompt = f"{prompt} {part_prompt}".strip()

            STAAR_ASSESSMENT_ADDITIONS.append(
                _base_question(
                    item,
                    combined_prompt,
                    part.get("options", []),
                    part.get("correct_answer", ""),
                    part.get("explanation", ""),
                    part.get("label", "")
                )
            )
    else:
        prompt = item.get("prompt", "")
        if item.get("sentence_prompt"):
            prompt = f"{prompt} {item.get('sentence_prompt')}".strip()

        STAAR_ASSESSMENT_ADDITIONS.append(
            _base_question(
                item,
                prompt,
                item.get("options", []),
                item.get("correct_answer", ""),
                item.get("explanation", "")
            )
        )
