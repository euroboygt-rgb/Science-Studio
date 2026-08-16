STEVE_PENGUIN_MISSIONS = {
    3: {
        "title": "Steve the Penguin’s STAAR Mission",
        "subtitle": "Day 3 • Matter Is Everywhere",
        "character": "Steve the Penguin",
        "scenario": "Steve the Penguin is helping set up the Science Studio lab. He finds a pencil, a cup of water, and a balloon filled with air. Steve wonders which of these objects are matter.",
        "question": "Which statement best explains what Steve should conclude?",
        "options": [
            {
                "letter": "A",
                "text": "Only the pencil is matter because it is a solid."
            },
            {
                "letter": "B",
                "text": "Only the water is matter because it can be poured."
            },
            {
                "letter": "C",
                "text": "Only the air is matter because it is inside the balloon."
            },
            {
                "letter": "D",
                "text": "The pencil, water, and air are all matter because they have mass and take up space."
            }
        ],
        "correct_answer": "D",
        "explanation": "Steve should choose D. A pencil is a solid, water is a liquid, and air is a gas. They are all matter because each one has mass and takes up space.",
        "staar_tip": "When a STAAR question asks whether something is matter, look for evidence of mass and volume. Matter can be solid, liquid, or gas.",
        "vocabulary": ["matter", "mass", "volume", "solid", "liquid", "gas"]
    }
}


def get_steve_penguin_mission(day):
    day = int(day)
    return STEVE_PENGUIN_MISSIONS.get(day)


# Day 4 Steve the Penguin STAAR Mission
STEVE_PENGUIN_MISSIONS[4] = {
    "title": "Steve the Penguin’s Mass Mission",
    "subtitle": "Day 4 • Measuring Mass",
    "character": "Steve the Penguin",
    "scenario": "Steve the Penguin is helping in the Science Studio lab. He has a pencil, a rock, and a science notebook. Steve wants to know which object has the greatest mass.",
    "question": "Which tool should Steve use to compare the mass of the objects?",
    "options": [
        {
            "letter": "A",
            "text": "A thermometer, because it measures temperature."
        },
        {
            "letter": "B",
            "text": "A balance, because it measures or compares mass."
        },
        {
            "letter": "C",
            "text": "A hand lens, because it makes objects look larger."
        },
        {
            "letter": "D",
            "text": "A ruler, because it measures length."
        }
    ],
    "correct_answer": "B",
    "explanation": "Steve should choose B. A balance is the best tool for comparing or measuring mass. A thermometer measures temperature, a hand lens helps observe details, and a ruler measures length.",
    "staar_tip": "When a STAAR question asks which tool to use, match the tool to the property being measured. Mass goes with a balance or scale.",
    "vocabulary": ["mass", "matter", "balance", "scale", "grams", "kilograms", "measure"]
}
# End Day 4 Steve the Penguin STAAR Mission


# Day 5 Steve the Penguin STAAR Mission
STEVE_PENGUIN_MISSIONS[5] = {
    "title": "Steve the Penguin’s Volume Mission",
    "subtitle": "Day 5 • Measuring Volume",
    "character": "Steve the Penguin",
    "scenario": "Steve the Penguin places a small rock into a graduated cylinder. The water level starts at 40 mL. After Steve adds the rock, the water level rises to 55 mL.",
    "question": "What is the volume of the rock?",
    "options": [
        {
            "letter": "A",
            "text": "15 mL, because 55 mL - 40 mL = 15 mL."
        },
        {
            "letter": "B",
            "text": "40 mL, because that was the starting water level."
        },
        {
            "letter": "C",
            "text": "55 mL, because that was the ending water level."
        },
        {
            "letter": "D",
            "text": "95 mL, because 40 mL + 55 mL = 95 mL."
        }
    ],
    "correct_answer": "A",
    "explanation": "Steve should choose A. The rock caused the water level to rise from 40 mL to 55 mL. The difference is 15 mL, so the volume of the rock is 15 mL.",
    "staar_tip": "When a STAAR question shows displacement, subtract the starting water level from the ending water level.",
    "vocabulary": ["volume", "graduated cylinder", "milliliters", "mL", "displacement", "matter"]
}
# End Day 5 Steve the Penguin STAAR Mission

