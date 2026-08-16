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


# Day 9 Steve the Penguin STAAR Mission
STEVE_PENGUIN_MISSIONS[9] = {
    "title": "Steve the Penguin’s Solubility Mission",
    "subtitle": "Day 9 • Soluble and Insoluble Materials",
    "character": "Steve the Penguin",
    "scenario": "Steve the Penguin tests four materials in cups of water. After stirring, the salt and sugar are no longer visible. The sand and gravel are still visible and settle at the bottom of the cups.",
    "question": "Which conclusion is best supported by Steve’s evidence?",
    "options": [
        {
            "letter": "A",
            "text": "All solid materials dissolve in water."
        },
        {
            "letter": "B",
            "text": "Sand is soluble because it settled at the bottom of the cup."
        },
        {
            "letter": "C",
            "text": "Salt and sugar are soluble because they dissolved in the water."
        },
        {
            "letter": "D",
            "text": "Gravel dissolved because it was placed in water."
        }
    ],
    "correct_answer": "C",
    "explanation": "Steve should choose C. Salt and sugar were no longer visible after stirring, so the evidence shows they dissolved in the water. Sand and gravel stayed visible, so they are insoluble in this test.",
    "staar_tip": "When a STAAR question asks about solubility, use the observation after stirring. If the material dissolves evenly, it is soluble. If it stays visible, floats, or settles, it is insoluble.",
    "vocabulary": ["solubility", "soluble", "insoluble", "dissolve", "solution", "water", "evidence"]
}
# End Day 9 Steve the Penguin STAAR Mission


# Day 10 Steve the Penguin STAAR Mission
STEVE_PENGUIN_MISSIONS[10] = {
    "title": "Steve the Penguin’s Insoluble Evidence Mission",
    "subtitle": "Day 10 • Evidence of Solubility",
    "character": "Steve the Penguin",
    "scenario": "Steve the Penguin stirs four materials into separate cups of water. The sugar is no longer visible. The salt is no longer visible. The sand is still visible at the bottom. The gravel is still visible at the bottom.",
    "question": "Which statement is best supported by Steve’s evidence?",
    "options": [
        {
            "letter": "A",
            "text": "Sand dissolved because it moved to the bottom of the cup."
        },
        {
            "letter": "B",
            "text": "Gravel is soluble because it was mixed with water."
        },
        {
            "letter": "C",
            "text": "Salt and sugar are insoluble because they are no longer visible."
        },
        {
            "letter": "D",
            "text": "Sand and gravel are insoluble because they stayed visible after stirring."
        }
    ],
    "correct_answer": "D",
    "explanation": "Steve should choose D. Sand and gravel stayed visible after stirring, so the evidence shows they did not dissolve in water. Salt and sugar were no longer visible, so they dissolved.",
    "staar_tip": "When a STAAR question asks whether a material dissolved, focus on what happened after stirring. If the material stays visible, floats, or settles, it is insoluble in that test.",
    "vocabulary": ["soluble", "insoluble", "dissolve", "visible", "settle", "stir", "evidence"]
}
# End Day 10 Steve the Penguin STAAR Mission


# Day 11 Steve the Penguin STAAR Mission
STEVE_PENGUIN_MISSIONS[11] = {
    "title": "Steve the Penguin’s Circuit Mission",
    "subtitle": "Day 11 • Electrical Conductivity",
    "character": "Steve the Penguin",
    "scenario": "Steve the Penguin tests four materials in a simple circuit with a battery, wires, and a bulb. The bulb lights when Steve tests copper wire and aluminum foil. The bulb does not light when Steve tests a plastic straw or a wooden craft stick.",
    "question": "Which conclusion is best supported by Steve’s evidence?",
    "options": [
        {
            "letter": "A",
            "text": "All solid materials are electrical conductors."
        },
        {
            "letter": "B",
            "text": "Copper wire and aluminum foil are electrical conductors because they allowed the bulb to light."
        },
        {
            "letter": "C",
            "text": "Plastic is an electrical conductor because it is used around wires."
        },
        {
            "letter": "D",
            "text": "Wood is an electrical conductor because it came from a tree."
        }
    ],
    "correct_answer": "B",
    "explanation": "Steve should choose B. The bulb lit when copper wire and aluminum foil were placed in the circuit, so the evidence shows those materials allowed electrical energy to flow. The plastic straw and wooden craft stick did not allow the bulb to light, so they acted as insulators.",
    "staar_tip": "When a STAAR question asks about electrical conductors and insulators, use the circuit evidence. If the bulb lights, the material is a conductor. If the bulb does not light, the material is an insulator.",
    "vocabulary": ["electrical conductivity", "conductor", "insulator", "circuit", "bulb", "battery", "electrical energy"]
}
# End Day 11 Steve the Penguin STAAR Mission


# Day 12 Steve the Penguin STAAR Mission
STEVE_PENGUIN_MISSIONS[12] = {
    "title": "Steve the Penguin’s Conductor or Insulator Mission",
    "subtitle": "Day 12 • Electrical Conductors and Insulators",
    "character": "Steve the Penguin",
    "scenario": "Steve the Penguin tests four materials in a simple circuit. The bulb lights when he tests a metal paper clip. The bulb does not light when he tests a plastic straw, a rubber band, or a wooden craft stick.",
    "question": "Which conclusion is best supported by Steve’s circuit evidence?",
    "options": [
        {
            "letter": "A",
            "text": "The plastic straw is a conductor because it is smooth."
        },
        {
            "letter": "B",
            "text": "The wooden craft stick is a conductor because it is solid."
        },
        {
            "letter": "C",
            "text": "The metal paper clip is a conductor because it allowed the bulb to light."
        },
        {
            "letter": "D",
            "text": "The rubber band is a conductor because it can stretch."
        }
    ],
    "correct_answer": "C",
    "explanation": "Steve should choose C. The bulb lit only when the metal paper clip was tested, so the paper clip allowed electrical energy to flow. The plastic straw, rubber band, and wooden craft stick did not make the bulb light, so they acted as insulators.",
    "staar_tip": "For electrical conductivity questions, match the answer to the circuit evidence. A material that makes the bulb light is a conductor. A material that does not make the bulb light is an insulator.",
    "vocabulary": ["conductor", "insulator", "electrical energy", "circuit", "bulb", "metal", "plastic", "rubber", "wood"]
}
# End Day 12 Steve the Penguin STAAR Mission


# Day 13 Steve the Penguin STAAR Mission
STEVE_PENGUIN_MISSIONS[13] = {
    "title": "Steve the Penguin’s Heat Transfer Mission",
    "subtitle": "Day 13 • Thermal Conductors and Insulators",
    "character": "Steve the Penguin",
    "scenario": "Steve the Penguin places four spoons into a cup of warm water. After a few minutes, the metal spoon feels the warmest. The wooden spoon, plastic spoon, and rubber-coated spoon do not feel as warm.",
    "question": "Which conclusion is best supported by Steve’s evidence?",
    "options": [
        {
            "letter": "A",
            "text": "The wooden spoon is the best thermal conductor because it came from a tree."
        },
        {
            "letter": "B",
            "text": "The plastic spoon is the best thermal conductor because it is smooth."
        },
        {
            "letter": "C",
            "text": "The rubber-coated spoon is the best thermal conductor because it bends."
        },
        {
            "letter": "D",
            "text": "The metal spoon is the best thermal conductor because it transferred heat fastest."
        }
    ],
    "correct_answer": "D",
    "explanation": "Steve should choose D. The metal spoon felt the warmest after sitting in warm water, so the evidence shows that heat moved through the metal fastest. The wooden, plastic, and rubber-coated spoons slowed heat transfer, so they acted more like thermal insulators.",
    "staar_tip": "When a STAAR question asks about thermal conductors and insulators, use temperature or heat-transfer evidence. A material that gets hot quickly is usually a thermal conductor. A material that slows heat transfer is an insulator.",
    "vocabulary": ["thermal energy", "heat transfer", "thermal conductor", "thermal insulator", "metal", "wood", "plastic", "rubber"]
}
# End Day 13 Steve the Penguin STAAR Mission


# Day 14 Steve the Penguin STAAR Mission
STEVE_PENGUIN_MISSIONS[14] = {
    "title": "Steve the Penguin’s Mystery Material Mission",
    "subtitle": "Day 14 • Property Detective",
    "character": "Steve the Penguin",
    "scenario": "Steve the Penguin finds an unknown material on the Science Studio lab table. He observes that it is shiny, solid, attracted to a magnet, sinks in water, and allows a bulb to light in a circuit test.",
    "question": "Which conclusion is best supported by Steve’s evidence?",
    "options": [
        {
            "letter": "A",
            "text": "The material is probably plastic because plastic is shiny and sinks in water."
        },
        {
            "letter": "B",
            "text": "The material is probably a metal because it is magnetic and conducts electricity."
        },
        {
            "letter": "C",
            "text": "The material is probably wood because wood is solid and can sink in water."
        },
        {
            "letter": "D",
            "text": "The material is probably paper because paper can be tested with a magnet."
        }
    ],
    "correct_answer": "B",
    "explanation": "Steve should choose B. The unknown material was attracted to a magnet and allowed the bulb to light. Those clues support that the material is probably a metal. Steve used more than one physical property to identify the mystery material.",
    "staar_tip": "When a STAAR question asks you to identify an unknown material, use all the evidence given. Look for clues such as magnetism, density, solubility, and conductivity before choosing an answer.",
    "vocabulary": ["physical property", "evidence", "magnetism", "density", "conductivity", "conductor", "metal", "unknown material"]
}
# End Day 14 Steve the Penguin STAAR Mission


# Day 15 Steve the Penguin STAAR Mission
STEVE_PENGUIN_MISSIONS[15] = {
    "title": "Steve the Penguin’s Sand Boat Mission",
    "subtitle": "Day 15 • Engineering with Physical Properties",
    "character": "Steve the Penguin",
    "scenario": "Steve the Penguin is building a sand boat for a Science Studio engineering challenge. The boat needs to move across a sandy surface when air pushes against the sail. Steve can choose different materials for the boat body and sail.",
    "question": "Which material choice would most likely help Steve’s sand boat move across the sand?",
    "options": [
        {
            "letter": "A",
            "text": "A heavy metal block for the body and a small wooden cube for the sail."
        },
        {
            "letter": "B",
            "text": "A rough rock for the body and a wet paper towel for the sail."
        },
        {
            "letter": "C",
            "text": "A lightweight smooth plastic tray for the body and a wide paper sail to catch the air."
        },
        {
            "letter": "D",
            "text": "A glass jar for the body and a rubber eraser for the sail."
        }
    ],
    "correct_answer": "C",
    "explanation": "Steve should choose C. A lightweight smooth plastic tray would be easier to move across sand than a heavy or rough object. A wide paper sail could catch moving air and help push the boat forward. Steve’s design uses physical properties to solve the engineering problem.",
    "staar_tip": "When a STAAR question asks about engineering materials, look for the material properties needed for the job. For this sand boat, useful properties include low mass, smooth texture, and a sail that can catch moving air.",
    "vocabulary": ["engineering", "physical properties", "mass", "texture", "friction", "force", "motion", "material choice", "evidence"]
}
# End Day 15 Steve the Penguin STAAR Mission


# Day 16 Steve the Penguin STAAR Mission
STEVE_PENGUIN_MISSIONS[16] = {
    "title": "Steve the Penguin’s Unit 1 Evidence Mission",
    "subtitle": "Day 16 • Physical Properties Review",
    "character": "Steve the Penguin",
    "scenario": "Steve the Penguin is reviewing evidence from a mystery material investigation. The material is solid, attracted to a magnet, sinks in water, does not dissolve in water, and allows a bulb to light in a circuit.",
    "question": "Which claim is best supported by Steve’s evidence?",
    "options": [
        {
            "letter": "A",
            "text": "The material is probably a metal because it is magnetic, more dense than water, insoluble, and conducts electricity."
        },
        {
            "letter": "B",
            "text": "The material is probably sugar because it does not dissolve in water."
        },
        {
            "letter": "C",
            "text": "The material is probably plastic because all plastics are magnetic and conduct electricity."
        },
        {
            "letter": "D",
            "text": "The material is probably air because it is solid and sinks in water."
        }
    ],
    "correct_answer": "A",
    "explanation": "Steve should choose A. The evidence shows that the material is solid, magnetic, more dense than water, insoluble, and an electrical conductor. Those properties best support that the material is probably a metal.",
    "staar_tip": "On a STAAR-style review question, use every piece of evidence. Cross out answer choices that do not match the data from the investigation.",
    "vocabulary": ["physical properties", "evidence", "matter", "magnetic", "density", "solubility", "conductivity", "conductor", "metal"]
}
# End Day 16 Steve the Penguin STAAR Mission


# Day 17 Steve the Penguin STAAR Mission
STEVE_PENGUIN_MISSIONS[17] = {
    "title": "Steve the Penguin’s Mixture Mission",
    "subtitle": "Day 17 • Mixtures Keep Their Properties",
    "character": "Steve the Penguin",
    "scenario": "Steve the Penguin makes a classroom mixture using paper clips, buttons, small cubes, and rubber bands. After mixing them together, Steve can still see each material and sort the materials back into separate groups.",
    "question": "Which statement is best supported by Steve’s evidence?",
    "options": [
        {
            "letter": "A",
            "text": "The materials formed a new substance because they were placed in the same container."
        },
        {
            "letter": "B",
            "text": "The materials dissolved because Steve could sort them into groups."
        },
        {
            "letter": "C",
            "text": "The materials changed state because they were mixed together."
        },
        {
            "letter": "D",
            "text": "The materials formed a mixture because they were combined but still kept their own properties."
        }
    ],
    "correct_answer": "D",
    "explanation": "Steve should choose D. The paper clips, buttons, cubes, and rubber bands were combined, but Steve could still identify and separate each material. That evidence shows the materials formed a mixture and kept their own physical properties.",
    "staar_tip": "When a STAAR question asks about mixtures, look for evidence that the parts are combined but still keep their properties. If the parts can still be identified or separated, the materials formed a mixture.",
    "vocabulary": ["mixture", "physical properties", "combine", "separate", "sort", "materials", "evidence"]
}
# End Day 17 Steve the Penguin STAAR Mission

