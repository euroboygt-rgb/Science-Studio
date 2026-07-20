def get_resource_support(day):
    day = int(day)

    unit = "Classroom Launch"
    if 3 <= day <= 16:
        unit = "Unit 1: Physical Properties of Matter"
    elif 17 <= day <= 26:
        unit = "Unit 2: Mixtures and Solutions"
    elif 27 <= day <= 36:
        unit = "Unit 3: Force and Motion"
    elif 37 <= day <= 43:
        unit = "Unit 4: Energy Transformations"
    elif day >= 44:
        unit = "Review and Assessment"

    return {
        "title": "Student Science Notebook Form",
        "unit": unit,
        "student_use": "Use this form to organize your science notebook, lab notebook, and written evidence for today’s lesson.",
        "teacher_use": "Use this as the student-facing notebook structure. Students can copy it into their science notebook, use the printable packet, or complete the digital boxes on the lesson page.",
        "sections": [
            "Date and lesson title",
            "Learning target",
            "Vocabulary words",
            "Investigation question",
            "Prediction",
            "Materials",
            "Data table or labeled model",
            "Observations",
            "Claim",
            "Evidence",
            "Reasoning",
            "Conclusion"
        ],
        "notebook_prompts": [
            "What are we trying to figure out today?",
            "What evidence did I collect?",
            "What does the evidence show?",
            "How does this connect to today’s vocabulary?",
            "What is my final science explanation?"
        ],
        "teacher_look_fors": [
            "Students record evidence, not just answers.",
            "Students use at least one science vocabulary word correctly.",
            "Students connect the lab or model back to the learning target.",
            "Students write a claim supported by evidence and reasoning."
        ]
    }
