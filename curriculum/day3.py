from models.lesson import Lesson

day3 = Lesson(
    day=3,
    week=1,
    unit="Beginning of Year",
    title="Introduction to Science Tools and Equipment",
    teks=["5.1A", "5.1B"],

    bell_ringer="Which science tools have you seen before? What do you think each one is used for?",

    learning_target="I can identify common science tools and explain how each tool helps scientists collect accurate data.",

    mini_lesson="Introduce common science tools: balance, graduated cylinder, beaker, thermometer, hand lens, metric ruler, and safety goggles. Explain what each tool measures and when scientists use it.",

    science_notebook="Create a science tools chart with four columns: Tool, What It Measures, Unit, and Picture.",

    guided_practice="Students match science tools to measurement tasks, such as measuring mass, volume, temperature, length, and observations.",

    lab="Science Tool Stations: students rotate through stations to practice measuring mass, volume, temperature, length, and making observations with a hand lens.",

    lab_notebook="Students record tool name, measurement, unit, and one observation from each station.",

    staar_practice=[
        {
            "question": "A student needs to measure 150 mL of water. Which tool should the student use?",
            "choices": ["Balance", "Metric ruler", "Thermometer", "Graduated cylinder"],
            "answer": "Graduated cylinder"
        },
        {
            "question": "A scientist wants to find the mass of a rock. Which tool should be used?",
            "choices": ["Hand lens", "Balance", "Beaker", "Thermometer"],
            "answer": "Balance"
        }
    ],

    exit_ticket="Choose one science tool. Explain what it measures and why a scientist would use it.",

    vocabulary=[
        "balance",
        "graduated cylinder",
        "beaker",
        "thermometer",
        "hand lens",
        "metric ruler",
        "data",
        "measurement"
    ],

    materials=[
        "Balances",
        "Graduated cylinders",
        "Beakers",
        "Thermometers",
        "Hand lenses",
        "Metric rulers",
        "Safety goggles",
        "Classroom objects",
        "Water"
    ],

    teacher_notes="Students often confuse beakers and graduated cylinders. Emphasize that graduated cylinders measure volume more accurately."
)