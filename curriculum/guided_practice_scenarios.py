def _lesson_text(lesson):
    if lesson is None:
        return ""

    try:
        if isinstance(lesson, dict):
            return " ".join(str(value) for value in lesson.values())
    except Exception:
        pass

    return str(lesson)


def _lesson_title(lesson):
    if lesson is None:
        return "Today's Science Skill"

    if isinstance(lesson, dict):
        return lesson.get("title") or lesson.get("lesson_title") or "Today's Science Skill"

    return getattr(lesson, "title", "Today's Science Skill")


GUIDED_PRACTICE_OVERRIDES = {
    3: {
        "title": "Science Tool Selection Scenario",
        "scenario": "A student needs to measure the mass, volume, temperature, and length of several objects at a lab station. The student has a balance, graduated cylinder, thermometer, ruler, hand lens, and safety goggles.",
        "teacher_talk": "Before students touch the tools, model how scientists choose a tool based on the type of data they need. Emphasize that the tool must match the measurement.",
        "examples": [
            "If the data needed is mass, use a balance and record grams.",
            "If the data needed is liquid volume, use a graduated cylinder and record milliliters.",
            "If the data needed is temperature, use a thermometer and record degrees Celsius.",
        ],
        "before_lab_task": "Students choose the correct tool for each measurement situation and explain why that tool is the best choice.",
    },
    6: {
        "title": "Magnet Investigation Scenario",
        "scenario": "A student has a magnet and a tray of objects. Some objects are steel, iron, nickel, cobalt, plastic, wood, rubber, and paper. The student must decide which objects are magnetic before testing them.",
        "teacher_talk": "Discuss how scientists make predictions based on properties. Remind students that not all metals are strongly magnetic.",
        "examples": [
            "Iron and steel are attracted to magnets.",
            "Plastic, wood, rubber, and paper are not attracted to magnets.",
            "Copper and aluminum are metals, but they are not strongly attracted to classroom magnets.",
        ],
        "before_lab_task": "Students sort object cards into magnetic and nonmagnetic predictions, then explain what evidence they will look for during the lab.",
    },
    7: {
        "title": "Sink, Float, and Density Scenario",
        "scenario": "A student drops objects into a cup of water. Some float, some sink, and one stays suspended in the middle of the water.",
        "teacher_talk": "Connect the position of each object in water to relative density. Students should explain what the water test shows, not just memorize float and sink.",
        "examples": [
            "Floating means the object is less dense than water.",
            "Sinking means the object is more dense than water.",
            "Suspended in the middle means the object has about the same density as water.",
        ],
        "before_lab_task": "Students look at a diagram of objects in water and classify each object as less dense, more dense, or about the same density as water.",
    },
    8: {
        "title": "Liquid Layers Scenario",
        "scenario": "A student pours equal amounts of water and cooking oil into a jar, shakes it, and waits. After several minutes, two layers form.",
        "teacher_talk": "Use the investigation to show how liquids can be compared by density. The liquid on top is less dense.",
        "examples": [
            "Oil floats on water because oil is less dense than water.",
            "Water stays under oil because water is more dense than oil.",
            "If two liquids separate into layers, they did not dissolve into each other.",
        ],
        "before_lab_task": "Students predict the order of liquid layers and explain which liquid is most dense and least dense.",
    },
    9: {
        "title": "Dissolving Scenario",
        "scenario": "A student stirs sugar into water until the sugar can no longer be seen. The water still looks clear.",
        "teacher_talk": "Clarify the difference between melting and dissolving. Sugar dissolves in water; it does not melt in room-temperature water.",
        "examples": [
            "Dissolving means particles spread evenly through another substance.",
            "Melting requires a solid to change into a liquid because of temperature.",
            "A clear solution can still contain dissolved material.",
        ],
        "before_lab_task": "Students decide whether examples show melting, dissolving, or not dissolving, and explain their evidence.",
    },
    11: {
        "title": "Electrical Conductivity Circuit Scenario",
        "scenario": "A flashlight stops working. A student thinks one part of the circuit was replaced with a material that does not let electric current pass through.",
        "teacher_talk": "Show students that a conductor completes the path for electric current, while an insulator blocks the path.",
        "examples": [
            "A metal paper clip can complete the circuit and light the bulb.",
            "A piece of plastic does not complete the circuit, so the bulb stays off.",
            "The switch must be closed and the path must be complete for the bulb to light.",
        ],
        "before_lab_task": "Students predict which materials will make the bulb light before testing each one in a circuit.",
    },
    12: {
        "title": "Conductors and Insulators Scenario",
        "scenario": "A student builds a simple circuit with a battery, wires, a bulb, and a test material. The student replaces the test material each trial.",
        "teacher_talk": "Guide students to focus on one variable: the test material. Everything else in the circuit should stay the same.",
        "examples": [
            "If the bulb lights, the material is an electrical conductor.",
            "If the bulb does not light, the material is an electrical insulator.",
            "A fair test changes only the material being tested.",
        ],
        "before_lab_task": "Students complete a prediction chart: material, prediction, evidence they expect to see, and classification.",
    },
    20: {
        "title": "Solution-Making Scenario",
        "scenario": "A student adds sugar to water and stirs until the sugar disappears. The student wants to know if the sugar is still there.",
        "teacher_talk": "Explain that dissolved matter is still present even when it cannot be seen. A solution is a mixture.",
        "examples": [
            "Sugar can dissolve and still be part of the solution.",
            "Dissolved salt can pass through a paper filter.",
            "The mass of the solution includes the dissolved substance.",
        ],
        "before_lab_task": "Students identify evidence that dissolved material is still present in a solution.",
    },
    23: {
        "title": "Conservation of Matter Scenario",
        "scenario": "A student dissolves salt in water and claims the salt disappeared. Another student says the salt is still there because the total mass did not disappear.",
        "teacher_talk": "Connect this to conservation of matter. Matter can change form or spread out, but the mass is still counted.",
        "examples": [
            "12 grams of salt added to 100 grams of water gives a total mass of about 112 grams.",
            "The salt may not be visible, but it is still in the solution.",
            "Filtering does not remove dissolved salt from water.",
        ],
        "before_lab_task": "Students use mass data to support or reject a claim about dissolved salt.",
    },
    34: {
        "title": "Balloon Rocket Force Scenario",
        "scenario": "A student releases air from a balloon attached to a small car. The air moves backward from the balloon.",
        "teacher_talk": "Use the scenario to show that forces can change motion. The car moves because the escaping air pushes on it.",
        "examples": [
            "The escaping air pushes backward.",
            "The car moves in the opposite direction of the escaping air.",
            "A force can change an object's speed or direction.",
        ],
        "before_lab_task": "Students draw arrows showing the direction of the escaping air and the direction the car will move.",
    },
    35: {
        "title": "Fair Friction Test Scenario",
        "scenario": "Students want to test how surface type affects how far a marble rolls. They have carpet, tile, and sandpaper.",
        "teacher_talk": "Review fair testing. Students should change only the surface and keep the marble, starting point, and push the same.",
        "examples": [
            "Surface type is the variable being changed.",
            "The distance the marble rolls is the data being measured.",
            "Using the same marble and same push makes the investigation fair.",
        ],
        "before_lab_task": "Students identify the changed variable, measured variable, and constants before the lab begins.",
    },
    40: {
        "title": "Flashlight Circuit Scenario",
        "scenario": "A flashlight uses a battery, switch, wires, and bulb. A student replaces one part of the path with a mystery material.",
        "teacher_talk": "Connect circuits to energy transfer. Chemical energy in the battery becomes electrical energy moving through the circuit, then light and thermal energy at the bulb.",
        "examples": [
            "A closed circuit lets electric current flow.",
            "A conductor allows the bulb to light.",
            "An insulator blocks the current, so the bulb does not light.",
        ],
        "before_lab_task": "Students predict which test materials will complete the circuit and explain what the bulb will do.",
    },
}


def get_guided_practice_scenario(day, lesson=None):
    try:
        day = int(day)
    except Exception:
        day = 0

    if day in GUIDED_PRACTICE_OVERRIDES:
        return GUIDED_PRACTICE_OVERRIDES[day]

    title = _lesson_title(lesson)

    if 3 <= day <= 16:
        return {
            "title": "Matter Investigation Scenario",
            "scenario": f"A student is investigating {title.lower()}. The student must decide which physical property gives the best evidence before starting the lab.",
            "teacher_talk": "Talk through the lesson concept first, then model how scientists use observations and data to support an answer.",
            "examples": [
                "Use observations to describe what you see.",
                "Use measurements when numbers give stronger evidence.",
                "Use the physical property that best matches the investigation question.",
            ],
            "before_lab_task": "Students read the scenario, make a prediction, and identify what evidence they will collect in the lab.",
        }

    if 17 <= day <= 26:
        return {
            "title": "Mixtures and Solutions Investigation Scenario",
            "scenario": f"A student is investigating {title.lower()}. The student needs to decide what changes, what stays the same, and what evidence supports the claim.",
            "teacher_talk": "Discuss how mixtures and solutions can look different after mixing while the materials may still be present.",
            "examples": [
                "Some materials dissolve in water.",
                "Some mixtures can be separated by their properties.",
                "Mass can provide evidence that matter is still present.",
            ],
            "before_lab_task": "Students explain what they expect to observe before mixing or separating materials.",
        }

    if 27 <= day <= 36:
        return {
            "title": "Force and Motion Investigation Scenario",
            "scenario": f"A student is investigating {title.lower()}. The student needs to decide how a push, pull, surface, or force will affect motion.",
            "teacher_talk": "Show examples with arrows before the lab. Have students explain the direction and strength of forces.",
            "examples": [
                "Balanced forces do not change motion.",
                "Unbalanced forces can make an object start, stop, speed up, slow down, or change direction.",
                "A fair investigation changes one variable at a time.",
            ],
            "before_lab_task": "Students draw force arrows and predict how the object will move before testing.",
        }

    if 37 <= day <= 43:
        return {
            "title": "Energy Investigation Scenario",
            "scenario": f"A student is investigating {title.lower()}. The student needs to trace where the energy starts, how it moves, and what form it changes into.",
            "teacher_talk": "Talk through the energy pathway before the lab. Students should name the forms of energy and explain the evidence.",
            "examples": [
                "A battery stores chemical energy.",
                "A closed circuit allows electrical energy to move.",
                "A bulb can change electrical energy into light and thermal energy.",
            ],
            "before_lab_task": "Students draw an energy-flow diagram before starting the lab.",
        }

    return {
        "title": "Science Investigation Scenario",
        "scenario": f"A student is preparing to investigate {title.lower()}. Before beginning, the student needs to make a prediction and decide what evidence will be collected.",
        "teacher_talk": "Discuss the lesson idea, model one example, and have students explain their thinking before moving into the lab.",
        "examples": [
            "Good scientists make predictions before testing.",
            "Good scientists collect evidence during the test.",
            "Good scientists use evidence to explain their answers.",
        ],
        "before_lab_task": "Students write a prediction and identify the evidence they will need during the lab.",
    }


def is_circuit_lesson(day, lesson=None):
    try:
        day = int(day)
    except Exception:
        day = 0

    text = _lesson_text(lesson).lower()

    circuit_days = {11, 12, 40, 41, 42}

    circuit_words = [
        "circuit",
        "battery",
        "bulb",
        "switch",
        "flashlight",
        "electrical conductivity",
        "electric current",
    ]

    return day in circuit_days or any(word in text for word in circuit_words)
