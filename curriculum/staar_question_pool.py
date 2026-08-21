from importlib import import_module


SOURCE_MODULES = [
    "curriculum.staar_practice",
    "curriculum.staar_2022_practice",
    "curriculum.staar_2026_practice",
]


def _options_to_list(options):
    if not options:
        return []

    if isinstance(options, dict):
        return [
            {"letter": str(letter), "text": str(text)}
            for letter, text in options.items()
        ]

    if isinstance(options, list):
        cleaned = []
        for index, option in enumerate(options):
            letter = chr(ord("A") + index)

            if isinstance(option, dict):
                cleaned.append({
                    "letter": str(option.get("letter", letter)),
                    "text": str(option.get("text", option.get("answer", option.get("label", ""))))
                })
            else:
                cleaned.append({
                    "letter": letter,
                    "text": str(option)
                })

        return cleaned

    return []


def _normalize_parts(parts):
    if not isinstance(parts, list):
        return []

    normalized_parts = []

    for index, part in enumerate(parts):
        if not isinstance(part, dict):
            continue

        label = part.get("label") or f"Part {chr(ord('A') + index)}"
        prompt = part.get("prompt") or part.get("question") or ""
        options = _options_to_list(part.get("options") or part.get("answer_choices") or part.get("choices"))
        correct_answer = part.get("correct_answer") or part.get("answer") or ""
        explanation = part.get("explanation") or part.get("rationale") or ""

        if prompt and options:
            normalized_parts.append({
                "label": label,
                "prompt": prompt,
                "options": options,
                "correct_answer": correct_answer,
                "explanation": explanation,
            })

    return normalized_parts


def _normalize_question(raw_question, source_name, source_index):
    if not isinstance(raw_question, dict):
        return None

    title = (
        raw_question.get("title")
        or raw_question.get("name")
        or raw_question.get("skill_focus")
        or f"STAAR Practice Question {source_index}"
    )

    prompt = (
        raw_question.get("prompt")
        or raw_question.get("question")
        or raw_question.get("stem")
        or raw_question.get("text")
        or ""
    )

    parts = _normalize_parts(raw_question.get("parts"))

    options = _options_to_list(
        raw_question.get("options")
        or raw_question.get("answer_choices")
        or raw_question.get("choices")
    )

    if not parts and not options:
        return None

    teks = raw_question.get("teks") or raw_question.get("TEKS") or "Science Review"
    focus = raw_question.get("skill_focus") or raw_question.get("focus") or raw_question.get("standard") or "STAAR evidence practice"

    stimulus_image = (
        raw_question.get("stimulus_image")
        or raw_question.get("image")
        or raw_question.get("image_path")
        or ""
    )

    sentence_prompt = raw_question.get("sentence_prompt") or ""
    correct_answer = raw_question.get("correct_answer") or raw_question.get("answer") or ""
    explanation = raw_question.get("explanation") or raw_question.get("rationale") or ""
    teacher_note = raw_question.get("teacher_note") or ""

    original_number = raw_question.get("item_number") or raw_question.get("number") or source_index

    return {
        "pool_id": None,
        "pool_number": None,
        "title": str(title),
        "teks": str(teks),
        "skill_focus": str(focus),
        "prompt": str(prompt),
        "sentence_prompt": str(sentence_prompt),
        "stimulus_image": str(stimulus_image),
        "options": options,
        "parts": parts,
        "correct_answer": str(correct_answer),
        "explanation": str(explanation),
        "teacher_note": str(teacher_note),
        "original_number": original_number,
        "source_name": source_name,
    }


def _find_question_lists(module):
    question_lists = []
    seen_ids = set()

    for attribute_name in dir(module):
        if attribute_name.startswith("_"):
            continue

        value = getattr(module, attribute_name)

        if id(value) in seen_ids:
            continue

        if not isinstance(value, list):
            continue

        if not value:
            continue

        if not all(isinstance(item, dict) for item in value[:3]):
            continue

        has_question_shape = any(
            ("options" in item or "answer_choices" in item or "choices" in item or "parts" in item)
            and ("prompt" in item or "question" in item or "stem" in item or "title" in item)
            for item in value
        )

        if has_question_shape:
            question_lists.append((attribute_name, value))
            seen_ids.add(id(value))

    return question_lists


def build_staar_question_pool():
    pool = []
    seen_keys = set()

    for module_name in SOURCE_MODULES:
        try:
            module = import_module(module_name)
        except Exception:
            continue

        for list_name, question_list in _find_question_lists(module):
            for index, raw_question in enumerate(question_list, start=1):
                normalized = _normalize_question(raw_question, module_name, index)

                if not normalized:
                    continue

                key = (
                    normalized["title"],
                    normalized["prompt"],
                    normalized.get("stimulus_image", ""),
                )

                if key in seen_keys:
                    continue

                seen_keys.add(key)
                pool.append(normalized)

    pool.sort(key=lambda question: (str(question["teks"]), str(question["title"])))

    for index, question in enumerate(pool, start=1):
        question["pool_id"] = index
        question["pool_number"] = index

    return pool


STAAR_QUESTION_POOL = build_staar_question_pool()


def get_staar_pool_question(pool_id):
    for question in STAAR_QUESTION_POOL:
        if question["pool_id"] == pool_id:
            return question

    return None
