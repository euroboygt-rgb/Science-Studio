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
