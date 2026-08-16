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


# Day 6 Steve the Penguin STAAR Mission
STEVE_PENGUIN_MISSIONS[6] = {
    "title": "Steve the Penguin’s Magnetism Mission",
    "subtitle": "Day 6 • Magnetic and Nonmagnetic Materials",
    "character": "Steve the Penguin",
    "scenario": "Steve the Penguin tests four classroom objects with a magnet. The paper clip is attracted to the magnet. The wooden craft stick, plastic spoon, and rubber eraser are not attracted to the magnet.",
    "question": "Which conclusion is best supported by Steve’s evidence?",
    "options": [
        {
            "letter": "A",
            "text": "The paper clip is magnetic because it was attracted to the magnet."
        },
        {
            "letter": "B",
            "text": "The wooden craft stick is magnetic because it is solid."
        },
        {
            "letter": "C",
            "text": "The plastic spoon is magnetic because it is smooth."
        },
        {
            "letter": "D",
            "text": "The rubber eraser is magnetic because it can move."
        }
    ],
    "correct_answer": "A",
    "explanation": "Steve should choose A. The paper clip was attracted to the magnet, so the evidence shows that it is magnetic. The other objects were not attracted, so they are nonmagnetic.",
    "staar_tip": "When a STAAR question asks about magnetism, use the test result. A material is magnetic if it is attracted to a magnet.",
    "vocabulary": ["magnet", "magnetism", "magnetic", "nonmagnetic", "attracted", "physical property", "SINC"]
}
# End Day 6 Steve the Penguin STAAR Mission


# Day 7 Steve the Penguin STAAR Mission
STEVE_PENGUIN_MISSIONS[7] = {
    "title": "Steve the Penguin’s Float or Sink Mission",
    "subtitle": "Day 7 • Relative Density",
    "character": "Steve the Penguin",
    "scenario": "Steve the Penguin places four objects in a tub of water. A cork and a plastic bottle cap float. A metal washer and a small rock sink.",
    "question": "Which statement best explains Steve’s results?",
    "options": [
        {
            "letter": "A",
            "text": "The cork and bottle cap are less dense than water, so they float."
        },
        {
            "letter": "B",
            "text": "The metal washer floats because it is shiny."
        },
        {
            "letter": "C",
            "text": "The rock sinks because it is smaller than the cork."
        },
        {
            "letter": "D",
            "text": "All solid objects sink in water."
        }
    ],
    "correct_answer": "A",
    "explanation": "Steve should choose A. Objects that are less dense than water usually float. Objects that are more dense than water usually sink. The cork and bottle cap floated, so they were less dense than water.",
    "staar_tip": "When a STAAR question asks about floating or sinking, do not choose based only on size, shape, or color. Compare the object's density to water.",
    "vocabulary": ["density", "relative density", "float", "sink", "less dense", "more dense", "water"]
}
# End Day 7 Steve the Penguin STAAR Mission


# Day 8 Steve the Penguin STAAR Mission
STEVE_PENGUIN_MISSIONS[8] = {
    "title": "Steve the Penguin’s Density Layers Mission",
    "subtitle": "Day 8 • Relative Density",
    "character": "Steve the Penguin",
    "scenario": "Steve the Penguin carefully pours three liquids into a clear cup. The oil forms the top layer, the water forms the middle layer, and the syrup forms the bottom layer.",
    "question": "Which conclusion is best supported by Steve’s observation?",
    "options": [
        {
            "letter": "A",
            "text": "Oil is the least dense liquid, and syrup is the most dense liquid."
        },
        {
            "letter": "B",
            "text": "Syrup is the least dense liquid because it is on the bottom."
        },
        {
            "letter": "C",
            "text": "Water is the most dense liquid because it is in the middle."
        },
        {
            "letter": "D",
            "text": "All three liquids have the same density because they are all liquids."
        }
    ],
    "correct_answer": "A",
    "explanation": "Steve should choose A. In a liquid layer model, the least dense liquid usually stays on top, and the most dense liquid usually settles on the bottom. Oil was on top, so it was least dense. Syrup was on the bottom, so it was most dense.",
    "staar_tip": "When a STAAR question shows density layers, use the order of the layers as evidence. Top usually means least dense. Bottom usually means most dense.",
    "vocabulary": ["density", "relative density", "least dense", "most dense", "layers", "float", "sink"]
}
# End Day 8 Steve the Penguin STAAR Mission

