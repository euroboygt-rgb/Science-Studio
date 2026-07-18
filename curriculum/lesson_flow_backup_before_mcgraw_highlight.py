LAB_LINKS = {
    1: None,
    2: None,
    3: "/labs/particles",
    4: "/labs/balance-scale-mass",
    5: "/labs/graduated-cylinder-volume",
    6: "/labs/magnetic-or-not",
    7: "/labs/sink-float",
    8: "/labs/liquid-density",
    9: "/labs/solubility",
    10: "/labs/solubility",
    11: "/labs/conductivity",
    12: "/labs/conductivity",
    13: "/labs/conductivity",
    14: "/labs/unit1-review",
    15: "/labs/unit1-review",
    16: "/labs/unit1-review",
    17: "/labs/mixtures",
    18: "/labs/magnet-separation",
    19: "/labs/evaporation",
    20: "/labs/solutions",
    21: "/labs/solutions",
    22: "/labs/solutions",
    23: "/labs/conservation-matter",
    24: "/labs/conservation-matter",
    25: "/labs/particles",
    26: "/labs/unit2-performance",
    27: "/labs/balanced-forces",
    28: "/labs/balanced-forces",
    29: "/labs/unequal-forces",
    30: "/labs/unequal-forces",
    31: "/labs/mechanical-energy-transfer",
    32: "/labs/mechanical-energy-transfer",
    33: "/labs/ramp-investigation",
    34: "/labs/balloon-rocket",
    35: "/labs/variables-planner",
    36: "/labs/data-graphing",
    37: "/resources/cmelts-energy-anchor-chart",
    38: "/first-nine-weeks/day/38?view=student",
    39: "/first-nine-weeks/day/39?view=student",
    40: "/resources/cmelts-energy-anchor-chart",
    41: "/first-nine-weeks/day/41?view=student",
    42: "/first-nine-weeks/day/42?view=student",
    43: "/resources/cmelts-energy-anchor-chart",
    44: "/labs/science-stations-board",
    45: "/labs/reflection-tracker",
}


DAY_TOPICS = {
    1: "classroom routines, safety, and science notebooks",
    2: "science tools, measurement tools, and engineering design",
    3: "matter, physical states, and particles",
    4: "mass",
    5: "volume",
    6: "magnetism",
    7: "relative density of solids in water",
    8: "relative density of liquids",
    9: "solubility",
    10: "insolubility",
    11: "conductivity of thermal and electrical energy",
    12: "electrical conductors and insulators",
    13: "thermal conductors and insulators",
    14: "comparing physical properties of matter",
    15: "material engineering challenge",
    16: "Unit 1 review and vocabulary",
    17: "mixtures",
    18: "separating mixtures by magnetism and size",
    19: "separating mixtures by filtration and evaporation",
    20: "solutions",
    21: "changes when solutions form",
    22: "comparing substances before and after solutions form",
    23: "conservation of matter in solutions",
    24: "measuring matter before and after mixing",
    25: "particles too small to be seen",
    26: "Unit 2 mixtures and solutions performance task",
    27: "equal forces using pulls",
    28: "equal forces using pushes",
    29: "unequal forces using pulls",
    30: "unequal forces using pushes",
    31: "transfer of mechanical energy",
    32: "mechanical energy in motion systems",
    33: "car on a ramp investigation",
    34: "balloon rocket investigation",
    35: "variables and data",
    36: "force and motion investigation",
    37: "forms of energy and CMELTS",
    38: "energy transformations in everyday systems",
    39: "chemical energy in batteries",
    40: "flashlight energy flow",
    41: "energy transformation flowcharts",
    42: "energy transformations in multiple devices",
    43: "Unit 4 energy transformations review",
    44: "1st 9 weeks review stations",
    45: "1st 9 weeks test reflection",
}


UNIT_VOCAB = {
    "launch": ["safety", "observation", "data", "tool"],
    "unit1": ["matter", "mass", "volume", "magnetism", "density", "solubility", "conductor", "insulator"],
    "unit2": ["mixture", "solution", "dissolve", "separate", "filtration", "evaporation", "conservation of matter", "particles"],
    "unit3": ["force", "push", "pull", "balanced force", "unbalanced force", "motion", "mechanical energy", "variable"],
    "unit4": ["chemical energy", "mechanical energy", "electrical energy", "light energy", "thermal energy", "sound energy", "energy transformation"],
    "review": ["evidence", "claim", "reasoning", "data"],
}


def get_unit_key(day):
    day = int(day)
    if day <= 2:
        return "launch"
    if day <= 16:
        return "unit1"
    if day <= 26:
        return "unit2"
    if day <= 36:
        return "unit3"
    if day <= 43:
        return "unit4"
    return "review"


def get_unit_name(day):
    key = get_unit_key(day)

    return {
        "launch": "Classroom Launch",
        "unit1": "Unit 1: Physical Properties of Matter",
        "unit2": "Unit 2: Mixtures and Solutions",
        "unit3": "Unit 3: Force and Motion",
        "unit4": "Unit 4: Energy Transformations",
        "review": "Review and Assessment",
    }[key]


def get_lab_materials(day):
    key = get_unit_key(day)
    topic = DAY_TOPICS.get(int(day), "science concept")

    if key == "launch":
        return ["safety goggles", "science notebook", "pencil", "sample tools", "teacher demo materials"]

    if key == "unit1":
        if int(day) in [11, 12, 13]:
            return ["safety goggles", "metal spoon", "plastic spoon", "warm water cup", "battery", "bulb", "wires", "sample conductors and insulators"]
        return ["safety goggles", "balance", "graduated cylinder", "magnet", "water cup", "sample objects", "hand lens", "paper towels"]

    if key == "unit2":
        return ["safety goggles", "cups", "water", "sand", "salt", "iron filings or magnetic objects", "magnet", "filter paper or coffee filter", "spoon"]

    if key == "unit3":
        return ["toy car or ball", "ramp", "meter stick", "masking tape", "stopwatch", "data table", "books for ramp height"]

    if key == "unit4":
        return ["flashlight", "battery", "bulb or small lamp", "wires", "small fan or speaker if available", "energy cards", "CMELTS anchor chart"]

    return ["science notebook", "review station cards", "vocabulary cards", "data tables"]


def get_lab_button_text(day):
    topic = DAY_TOPICS.get(int(day), "Lab")

    if int(day) in [37, 40, 43]:
        return "Open CMELTS Energy Chart"

    return "Open Lab / Investigation"


def get_daily_assessment_safe(day):
    try:
        from curriculum.daily_assessments import get_daily_assessment
        return get_daily_assessment(day)
    except Exception:
        topic = DAY_TOPICS.get(int(day), "today's science idea")
        return {
            "topic": topic,
            "exit_question": f"What is one important idea you learned about {topic} today?",
            "exit_answer": f"Students should explain one accurate science idea about {topic} using vocabulary from the lesson.",
            "cer_question": f"Write a CER explaining how evidence from today supports a claim about {topic}.",
            "cer_example": f"Claim: {topic.title()} can be explained using evidence. Evidence: Students should use an observation, model, data, or lab result from today. Reasoning: The evidence supports the claim because it connects to the science concept taught in the lesson.",
        }


def get_previous_day_review(day):
    day = int(day)

    if day == 1:
        return None

    previous_day = day - 1

    try:
        from curriculum.staar_practice import get_staar_question
        mcq = get_staar_question(previous_day)
    except Exception:
        mcq = {
            "question": f"Which statement best reviews yesterday's lesson about {DAY_TOPICS.get(previous_day, 'science')}?",
            "choices": {
                "A": "Use evidence from observations or data.",
                "B": "Guess without testing.",
                "C": "Ignore the investigation.",
                "D": "Use only color for every property.",
            },
            "answer": "A",
            "explanation": "Science explanations should use evidence."
        }

    try:
        from curriculum.daily_assessments import get_daily_assessment
        previous_assessment = get_daily_assessment(previous_day)
        short_question = previous_assessment["exit_question"]
        short_answer = previous_assessment["exit_answer"]
    except Exception:
        short_question = f"What was one important idea from yesterday about {DAY_TOPICS.get(previous_day, 'science')}?"
        short_answer = "Students should answer using correct vocabulary and evidence from the previous lesson."

    return {
        "previous_day": previous_day,
        "topic": DAY_TOPICS.get(previous_day, "yesterday's science concept"),
        "mcq": mcq,
        "short_question": short_question,
        "short_answer": short_answer,
    }


def get_lesson_flow(day, title=""):
    day = int(day)
    topic = DAY_TOPICS.get(day, "today's science topic")
    unit_key = get_unit_key(day)
    unit_name = get_unit_name(day)

    daily = get_daily_assessment_safe(day)
    bell = get_previous_day_review(day)

    try:
        from curriculum.teacher_support import get_teacher_support
        teacher_support = get_teacher_support(day)
    except Exception:
        teacher_support = {
            "teacher_focus": f"Teach the key science idea for {topic}.",
            "teach": [f"Teach the main vocabulary and concept for {topic}.", "Connect the idea to observations, models, or data."],
            "how": ["Start with a short phenomenon.", "Model thinking aloud.", "Let students practice with a partner."],
            "misconceptions": ["Students may give one-word answers without evidence."],
            "answers": ["Look for vocabulary plus evidence."],
            "reteach": ["Use a small group model and sentence stems."],
        }

    if unit_key == "unit1":
        phenomenon = f"Students observe or test materials and notice differences in {topic}."
        mini_student = [
            f"{topic.title()} is a property or idea scientists can use to describe matter.",
            "Scientists compare matter by observing, measuring, and testing physical properties.",
            "Good science answers use evidence from tools, tests, models, or data."
        ]
        notebook = [
            f"Key idea: {topic.title()} helps scientists compare matter.",
            "Evidence can come from observations, measurements, or tests.",
            "Use correct units when measuring: grams for mass and milliliters for liquid volume."
        ]
        guided = [
            "Read the investigation situation.",
            "Identify the property being tested.",
            "Choose the best evidence that supports the claim.",
            "Explain the answer using science vocabulary."
        ]

    elif unit_key == "unit2":
        phenomenon = f"Students observe a mixture or solution and decide how the parts can be identified or separated."
        mini_student = [
            "Mixtures are physical combinations of substances.",
            "Mixture parts can often be separated by physical properties.",
            "Dissolved particles may be too small to see, but the matter is still present."
        ]
        notebook = [
            f"Key idea: {topic.title()} connects to how matter can be combined or separated.",
            "Separation methods must match the physical properties of the materials.",
            "Matter is conserved when substances mix or dissolve if nothing is lost."
        ]
        guided = [
            "Identify the substances in the mixture or solution.",
            "Choose the physical property that can help separate or explain the materials.",
            "Use before-and-after evidence to explain whether matter was conserved.",
            "Write a claim supported by observations or measurements."
        ]

    elif unit_key == "unit3":
        phenomenon = f"Students observe an object changing motion and identify the forces or energy involved."
        mini_student = [
            "A force is a push or pull.",
            "Balanced forces do not change motion; unbalanced forces can change motion.",
            "Mechanical energy can transfer when objects interact or moving parts cause other parts to move."
        ]
        notebook = [
            f"Key idea: {topic.title()} explains how forces and motion are connected.",
            "Use arrows to show the size and direction of forces.",
            "Fair tests change one variable and measure the result."
        ]
        guided = [
            "Look at the force or motion model.",
            "Decide whether forces are balanced or unbalanced.",
            "Use data or observations to explain the change in motion.",
            "Identify variables when an investigation is described."
        ]

    elif unit_key == "unit4":
        phenomenon = f"Students observe a device and trace how energy changes form in the system."
        mini_student = [
            "CMELTS stands for chemical, mechanical, electrical, light, thermal, and sound energy.",
            "Energy transformations happen when energy changes from one form to another.",
            "A system can have more than one energy output."
        ]
        notebook = [
            f"Key idea: {topic.title()} helps explain how energy moves through a system.",
            "Use arrows to show energy flow and transformations.",
            "Batteries store chemical energy that can change to electrical energy."
        ]
        guided = [
            "Name the device or system.",
            "Identify where the energy starts.",
            "Trace the energy transformations with arrows.",
            "Name all useful and extra energy outputs."
        ]

    elif unit_key == "launch":
        phenomenon = "Students practice the routines and tools real scientists use to work safely and collect evidence."
        mini_student = [
            "Scientists follow safety routines before, during, and after investigations.",
            "Science notebooks are used to record observations, data, models, and conclusions.",
            "Tools help scientists observe, measure, test, and protect themselves."
        ]
        notebook = [
            "Always record the date, title, observations, data, and conclusion.",
            "Choose the tool that matches the property you need to observe or measure.",
            "Safety is part of doing accurate science."
        ]
        guided = [
            "Match the tool to the job.",
            "Practice a safe lab routine.",
            "Explain why the routine or tool matters.",
            "Record the answer in the science notebook."
        ]

    else:
        phenomenon = "Students review evidence from the 1st 9 weeks and explain their science thinking."
        mini_student = [
            "Strong science answers use vocabulary and evidence.",
            "STAAR questions often ask for the best evidence or best explanation.",
            "Review means correcting misconceptions, not just rereading notes."
        ]
        notebook = [
            "Write the concept you are reviewing.",
            "Write one example or model.",
            "Write one misconception and the corrected science idea."
        ]
        guided = [
            "Read the question carefully.",
            "Identify the science concept being tested.",
            "Eliminate choices that do not match the evidence.",
            "Explain why the correct answer is best."
        ]

    lab_url = LAB_LINKS.get(day)

    return {
        "day": day,
        "topic": topic,
        "unit_key": unit_key,
        "unit_name": unit_name,
        "phenomenon": phenomenon,
        "student_important_notes": mini_student,
        "mini_lesson_student": mini_student,
        "mini_lesson_teacher": teacher_support.get("how", []),
        "teacher_focus": teacher_support.get("teacher_focus", ""),
        "teacher_teach": teacher_support.get("teach", []),
        "teacher_misconceptions": teacher_support.get("misconceptions", []),
        "teacher_answers": teacher_support.get("answers", []),
        "teacher_reteach": teacher_support.get("reteach", []),
        "science_notebook": notebook,
        "guided_practice_student": guided,
        "guided_practice_teacher": [
            "Model the first item out loud.",
            "Have students try the next item with a partner.",
            "Ask students to justify answers using vocabulary and evidence.",
            "Pull a small group for students who confuse the key idea or tool."
        ],
        "lab": {
            "title": f"{topic.title()} Investigation",
            "purpose": f"Students investigate {topic} using observations, models, tools, or data.",
            "materials": get_lab_materials(day),
            "setup": [
                "Prepare materials before students arrive.",
                "Create table groups or stations.",
                "Post the investigation question.",
                "Review safety expectations and the data table before students begin."
            ],
            "student_steps": [
                "Read the investigation question.",
                "Make a prediction.",
                "Collect observations or data.",
                "Record evidence in the lab notebook.",
                "Write a conclusion using science vocabulary."
            ],
            "teacher_moves": [
                "Circulate and ask: What evidence supports your thinking?",
                "Check that students are recording data, not just answers.",
                "Stop for a quick share-out if a misconception appears.",
                "Connect the lab back to the learning target before STAAR practice."
            ],
            "url": lab_url,
            "button": get_lab_button_text(day),
        },
        "lab_notebook": [
            "Investigation question",
            "Prediction",
            "Materials",
            "Data table or labeled model",
            "Observations",
            "Claim supported by evidence",
            "Conclusion using science vocabulary"
        ],
        "bell_ringer": bell,
        "daily": daily,
        "vocabulary": UNIT_VOCAB.get(unit_key, []),
        "mcgraw": f"Use the district-approved McGraw Hill resource connected to {unit_name} as a reading, image, or model connection. Keep the public site original and use McGraw Hill through the approved district platform.",
    }
