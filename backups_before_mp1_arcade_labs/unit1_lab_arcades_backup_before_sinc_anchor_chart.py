UNIT1_LAB_ARCADES = {
    "particle-states": {
        "day": 3,
        "title": "Particle State Sort",
        "subtitle": "Sort matter as solid, liquid, or gas using particle clues.",
        "mission": "Test each object and classify its state of matter.",
        "mode": "sort",
        "targets": ["solid", "liquid", "gas"],
        "items": [
            {"name": "Ice Cube", "icon": "🧊", "answer": "solid", "observation": "It keeps its own shape."},
            {"name": "Water", "icon": "💧", "answer": "liquid", "observation": "It takes the shape of its container."},
            {"name": "Air", "icon": "💨", "answer": "gas", "observation": "It spreads out to fill the container."},
            {"name": "Rock", "icon": "🪨", "answer": "solid", "observation": "It has a definite shape."},
            {"name": "Juice", "icon": "🧃", "answer": "liquid", "observation": "It flows and can be poured."},
            {"name": "Steam", "icon": "♨️", "answer": "gas", "observation": "Its particles spread apart."},
        ],
    },
    "mass-balance": {
        "day": 4,
        "title": "Mass Balance Challenge",
        "subtitle": "Use a balance to compare which object has more mass.",
        "mission": "Choose the object with greater mass, then check the balance.",
        "mode": "compare",
        "targets": ["left", "right"],
        "items": [
            {"left": "Metal Cube", "left_icon": "🔩", "left_value": 90, "right": "Foam Cube", "right_icon": "🧽", "right_value": 12, "answer": "left"},
            {"left": "Ping Pong Ball", "left_icon": "🏓", "left_value": 3, "right": "Golf Ball", "right_icon": "⛳", "right_value": 46, "answer": "right"},
            {"left": "Wood Block", "left_icon": "🪵", "left_value": 35, "right": "Plastic Cap", "right_icon": "🔵", "right_value": 6, "answer": "left"},
        ],
    },
    "volume-pour": {
        "day": 5,
        "title": "Volume Pour Lab",
        "subtitle": "Read a graduated cylinder and measure liquid volume.",
        "mission": "Pour liquid to the target volume without going over.",
        "mode": "volume",
        "targets": ["30 mL", "45 mL", "60 mL"],
        "items": [
            {"target": 30},
            {"target": 45},
            {"target": 60},
        ],
    },
    "magnetism-sorter": {
        "day": 6,
        "title": "Magnetism Sorter",
        "subtitle": "Test objects with a magnet and classify them.",
        "mission": "Predict whether each object is magnetic or nonmagnetic.",
        "mode": "sort",
        "targets": ["magnetic", "nonmagnetic"],
        "items": [
            {"name": "Iron Nail", "icon": "🔩", "answer": "magnetic", "observation": "The magnet pulls it."},
            {"name": "Paper Clip", "icon": "📎", "answer": "magnetic", "observation": "It moves toward the magnet."},
            {"name": "Wood Stick", "icon": "🪵", "answer": "nonmagnetic", "observation": "The magnet does not pull it."},
            {"name": "Plastic Spoon", "icon": "🥄", "answer": "nonmagnetic", "observation": "It stays in place."},
            {"name": "Steel Screw", "icon": "🔧", "answer": "magnetic", "observation": "It is attracted to the magnet."},
            {"name": "Rubber Eraser", "icon": "🧼", "answer": "nonmagnetic", "observation": "It is not attracted to the magnet."},
        ],
    },
    "density-tank": {
        "day": 7,
        "title": "Density Tank",
        "subtitle": "Drop objects into water and compare relative density.",
        "mission": "Predict whether each object will sink or float.",
        "mode": "sinkfloat",
        "targets": ["floats", "sinks"],
        "items": [
            {"name": "Cork", "icon": "🟫", "answer": "floats", "observation": "It stays near the top of the water."},
            {"name": "Rock", "icon": "🪨", "answer": "sinks", "observation": "It falls to the bottom."},
            {"name": "Wood Block", "icon": "🪵", "answer": "floats", "observation": "It is less dense than water."},
            {"name": "Metal Washer", "icon": "⚙️", "answer": "sinks", "observation": "It is more dense than water."},
            {"name": "Plastic Cube", "icon": "🟦", "answer": "floats", "observation": "It stays above the water line."},
            {"name": "Glass Marble", "icon": "🔮", "answer": "sinks", "observation": "It drops below the water line."},
        ],
    },
    "liquid-layers": {
        "day": 8,
        "title": "Liquid Layer Lab",
        "subtitle": "Stack liquids from least dense to most dense.",
        "mission": "Choose the correct order for the liquid density column.",
        "mode": "layers",
        "targets": ["least dense", "middle", "most dense"],
        "items": [
            {"name": "Oil", "icon": "🟡", "density": 1, "color": "#ffd166"},
            {"name": "Water", "icon": "🔵", "density": 2, "color": "#4cc9f0"},
            {"name": "Corn Syrup", "icon": "🟤", "density": 3, "color": "#b5651d"},
        ],
    },
    "solubility-mixer": {
        "day": 9,
        "title": "Solubility Mixer",
        "subtitle": "Mix materials with water and observe whether they dissolve.",
        "mission": "Predict whether the material is soluble or insoluble.",
        "mode": "sort",
        "targets": ["soluble", "insoluble"],
        "items": [
            {"name": "Salt", "icon": "🧂", "answer": "soluble", "observation": "It dissolves and seems to disappear."},
            {"name": "Sugar", "icon": "🍬", "answer": "soluble", "observation": "It dissolves in the water."},
            {"name": "Sand", "icon": "🏖️", "answer": "insoluble", "observation": "The grains remain visible."},
            {"name": "Gravel", "icon": "🪨", "answer": "insoluble", "observation": "It settles at the bottom."},
            {"name": "Powdered Drink Mix", "icon": "🥤", "answer": "soluble", "observation": "It spreads through the water."},
            {"name": "Pepper", "icon": "⚫", "answer": "insoluble", "observation": "It does not dissolve."},
        ],
    },
    "insoluble-lab": {
        "day": 10,
        "title": "Insoluble Material Lab",
        "subtitle": "Find materials that do not dissolve in water.",
        "mission": "Predict which materials stay visible after mixing.",
        "mode": "sort",
        "targets": ["soluble", "insoluble"],
        "items": [
            {"name": "Sand", "icon": "🏖️", "answer": "insoluble", "observation": "It stays visible and settles."},
            {"name": "Gravel", "icon": "🪨", "answer": "insoluble", "observation": "It remains separate from the water."},
            {"name": "Salt", "icon": "🧂", "answer": "soluble", "observation": "It dissolves in the water."},
            {"name": "Sugar", "icon": "🍬", "answer": "soluble", "observation": "It dissolves and spreads out."},
        ],
    },
    "conductivity-lab": {
        "day": 11,
        "title": "Conductor or Insulator Lab",
        "subtitle": "Test how materials allow energy to move.",
        "mission": "Classify materials as conductors or insulators.",
        "mode": "sort",
        "targets": ["conductor", "insulator"],
        "items": [
            {"name": "Metal Spoon", "icon": "🥄", "answer": "conductor", "observation": "Energy moves through metal easily."},
            {"name": "Copper Wire", "icon": "🔌", "answer": "conductor", "observation": "Electrical energy flows through it."},
            {"name": "Wood Stick", "icon": "🪵", "answer": "insulator", "observation": "It slows energy transfer."},
            {"name": "Rubber Band", "icon": "⭕", "answer": "insulator", "observation": "It does not let electricity flow easily."},
            {"name": "Plastic Straw", "icon": "🥤", "answer": "insulator", "observation": "It resists energy transfer."},
            {"name": "Aluminum Foil", "icon": "◻️", "answer": "conductor", "observation": "It allows energy to pass through."},
        ],
    },
    "electrical-conductivity": {
        "day": 12,
        "title": "Electrical Circuit Tester",
        "subtitle": "Test whether a material lets electricity flow.",
        "mission": "Predict whether the bulb will light.",
        "mode": "circuit",
        "targets": ["bulb lights", "bulb does not light"],
        "items": [
            {"name": "Copper Wire", "icon": "🔌", "answer": "bulb lights", "observation": "Copper is an electrical conductor."},
            {"name": "Plastic Straw", "icon": "🥤", "answer": "bulb does not light", "observation": "Plastic is an electrical insulator."},
            {"name": "Steel Paper Clip", "icon": "📎", "answer": "bulb lights", "observation": "Metal allows electricity to flow."},
            {"name": "Rubber Eraser", "icon": "🧼", "answer": "bulb does not light", "observation": "Rubber blocks the flow of electricity."},
        ],
    },
    "thermal-conductivity": {
        "day": 13,
        "title": "Thermal Energy Race",
        "subtitle": "Compare how quickly heat moves through materials.",
        "mission": "Predict whether the material is a thermal conductor or insulator.",
        "mode": "heat",
        "targets": ["thermal conductor", "thermal insulator"],
        "items": [
            {"name": "Metal Spoon", "icon": "🥄", "answer": "thermal conductor", "observation": "Heat moves through metal quickly."},
            {"name": "Wooden Spoon", "icon": "🪵", "answer": "thermal insulator", "observation": "Wood slows heat transfer."},
            {"name": "Plastic Handle", "icon": "🟦", "answer": "thermal insulator", "observation": "Plastic does not let heat move easily."},
            {"name": "Aluminum Foil", "icon": "◻️", "answer": "thermal conductor", "observation": "Heat spreads through it quickly."},
        ],
    },
    "property-detective": {
        "day": 14,
        "title": "Property Detective",
        "subtitle": "Use clues to identify physical properties of matter.",
        "mission": "Match the evidence to the correct physical property.",
        "mode": "sort",
        "targets": ["magnetism", "solubility", "density", "conductivity"],
        "items": [
            {"name": "It is pulled by a magnet.", "icon": "🧲", "answer": "magnetism", "observation": "Attraction to a magnet is magnetism."},
            {"name": "It dissolves in water.", "icon": "💧", "answer": "solubility", "observation": "Dissolving is evidence of solubility."},
            {"name": "It sinks in water.", "icon": "🪨", "answer": "density", "observation": "Sinking shows relative density."},
            {"name": "It lets electricity flow.", "icon": "💡", "answer": "conductivity", "observation": "Allowing energy flow is conductivity."},
        ],
    },
    "toy-engineering": {
        "day": 15,
        "title": "Toy Material Engineering Challenge",
        "subtitle": "Choose the best material for a toy using physical properties.",
        "mission": "Use evidence to select the best material.",
        "mode": "engineering",
        "targets": ["best material"],
        "items": [
            {"name": "Wood", "icon": "🪵", "score": 7, "observation": "Strong, light, and a good insulator."},
            {"name": "Metal", "icon": "🔩", "score": 5, "observation": "Strong but heavy and conductive."},
            {"name": "Plastic", "icon": "🟦", "score": 9, "observation": "Light, moldable, and a good insulator."},
            {"name": "Glass", "icon": "🔮", "score": 2, "observation": "Hard but breakable."},
        ],
    },
    "unit-review": {
        "day": 16,
        "title": "Unit 1 Matter Review Arcade",
        "subtitle": "Review physical properties before the unit check.",
        "mission": "Answer quick challenges about matter properties.",
        "mode": "review",
        "targets": ["review"],
        "items": [
            {"question": "Which property tells whether an object is pulled by a magnet?", "answer": "magnetism"},
            {"question": "Which property tells whether a material dissolves in water?", "answer": "solubility"},
            {"question": "Which property explains sinking or floating?", "answer": "relative density"},
            {"question": "Which property tells whether energy moves through a material easily?", "answer": "conductivity"},
        ],
    },
}

DAY_TO_SLUG = {
    3: "particle-states",
    4: "mass-balance",
    5: "volume-pour",
    6: "magnetism-sorter",
    7: "density-tank",
    8: "liquid-layers",
    9: "solubility-mixer",
    10: "insoluble-lab",
    11: "conductivity-lab",
    12: "electrical-conductivity",
    13: "thermal-conductivity",
    14: "property-detective",
    15: "toy-engineering",
    16: "unit-review",
}


def get_unit1_arcade_by_slug(slug):
    return UNIT1_LAB_ARCADES.get(slug)


def get_unit1_arcade_for_day(day):
    try:
        day = int(day)
    except Exception:
        return None

    slug = DAY_TO_SLUG.get(day)

    if not slug:
        return None

    lab = UNIT1_LAB_ARCADES.get(slug)

    if not lab:
        return None

    lab = dict(lab)
    lab["slug"] = slug
    lab["url"] = f"/labs/unit1/arcade/{slug}"
    return lab
