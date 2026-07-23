from copy import deepcopy


VISUAL_STIMULUS_BY_ITEM = {
    101: {
        "stimulus_type": "image",
        "stimulus_title": "Density Beaker Model",
        "stimulus_image": "/static/staar_stimuli/density_beaker_objects.svg",
        "stimulus_alt": "A beaker of water with five objects. Objects 1 and 4 float, Objects 2 and 3 sink, and Object 5 is suspended in the middle.",
    },
    102: {
        "stimulus_type": "image",
        "stimulus_title": "Sugar Dissolving Model",
        "stimulus_image": "/static/staar_stimuli/sugar_dissolves_clear.svg",
        "stimulus_alt": "Sugar is added to water and dissolves into a clear solution.",
    },
    103: {
        "stimulus_type": "image",
        "stimulus_title": "Materials Grouped Together",
        "stimulus_image": "/static/staar_stimuli/materials_group_solids.svg",
        "stimulus_alt": "Copper wire, brick, wood, and rubber are grouped together.",
    },
    104: {
        "stimulus_type": "image",
        "stimulus_title": "Salt Solution Mass Model",
        "stimulus_image": "/static/staar_stimuli/salt_solution_mass.svg",
        "stimulus_alt": "Twelve grams of salt are dissolved in one hundred grams of water to make a solution with a total mass of about one hundred twelve grams.",
    },
    105: {
        "stimulus_type": "image",
        "stimulus_title": "Lemonade Mixture Model",
        "stimulus_image": "/static/staar_stimuli/lemonade_mass_conserved.svg",
        "stimulus_alt": "Lemon juice and sugar are mixed into water to make lemonade. The mass of the materials is conserved.",
    },
    106: {
        "stimulus_type": "image",
        "stimulus_title": "Magnet Fair Test Table",
        "stimulus_image": "/static/staar_stimuli/magnet_fair_test.svg",
        "stimulus_alt": "A magnet investigation table shows three magnets placed 15 centimeters, 30 centimeters, and 45 centimeters from steel paper clips.",
    },
}


STAAR_VISUAL_ORIGINAL_QUESTIONS = [
    {
        "item": 201,
        "year": "lead4ward-inspired",
        "source_item": "2024-Q3 pattern",
        "day": 13,
        "topic": "Thermal insulation",
        "reporting_category": "1",
        "source_teks": "5.6A",
        "process_teks": "",
        "readiness": "Readiness",
        "stimulus_type": "image",
        "stimulus_title": "Thermal Energy Data Table",
        "stimulus_image": "/static/staar_stimuli/thermal_cup_table.svg",
        "stimulus_alt": "A temperature data table shows warm water cooling in foam, plastic, metal, and paper cups over time.",
        "prompt": "A student pours the same amount of warm water into cups made of different materials. Based on the data, which cup best insulates thermal energy?",
        "options": [
            {"label": "A", "text": "Foam cup"},
            {"label": "B", "text": "Metal cup"},
            {"label": "C", "text": "Plastic cup"},
            {"label": "D", "text": "Paper cup"},
        ],
        "answer": "A",
        "rationale": "The foam cup kept the water warmest over time, so it was the best thermal insulator.",
        "rationales": {
            "A": "Correct. The foam cup had the highest temperature after eight minutes.",
            "B": "The metal cup lost thermal energy fastest.",
            "C": "The plastic cup did not keep the water as warm as the foam cup.",
            "D": "The paper cup kept some heat in, but not as well as foam.",
        },
    },
    {
        "item": 202,
        "year": "lead4ward-inspired",
        "source_item": "2023-Q24 pattern",
        "day": 11,
        "topic": "Electrical conductors and insulators",
        "reporting_category": "1",
        "source_teks": "5.6A",
        "process_teks": "",
        "readiness": "Readiness",
        "stimulus_type": "image",
        "stimulus_title": "Circuit Test Setup",
        "stimulus_image": "/static/staar_stimuli/materials_group_solids.svg",
        "stimulus_alt": "Several materials are shown for testing in a circuit: copper wire, brick, wood, and rubber.",
        "prompt": "Students test several objects in a simple circuit. Which material would most likely make the bulb light?",
        "options": [
            {"label": "A", "text": "Copper wire"},
            {"label": "B", "text": "Wood block"},
            {"label": "C", "text": "Rubber eraser"},
            {"label": "D", "text": "Brick"},
        ],
        "answer": "A",
        "rationale": "Copper is a metal and is a good conductor of electrical energy.",
        "rationales": {
            "A": "Correct. Copper allows electric current to flow.",
            "B": "Wood is usually an electrical insulator.",
            "C": "Rubber is an electrical insulator.",
            "D": "A brick does not work as a good conductor in a simple classroom circuit.",
        },
    },
    {
        "item": 203,
        "year": "lead4ward-inspired",
        "source_item": "2024-Q17 pattern",
        "day": 18,
        "topic": "Separating mixtures",
        "reporting_category": "1",
        "source_teks": "5.6B",
        "process_teks": "",
        "readiness": "Supporting",
        "stimulus_type": "image",
        "stimulus_title": "Mixture Separation Tools",
        "stimulus_image": "/static/staar_stimuli/mixture_separation_tools.svg",
        "stimulus_alt": "Tools for separating a mixture are shown: magnet, screen, filter, and hot plate.",
        "prompt": "A mixture contains gravel, iron filings, and water. Which tool would best separate the iron filings from the mixture?",
        "options": [
            {"label": "A", "text": "Magnet"},
            {"label": "B", "text": "Screen"},
            {"label": "C", "text": "Paper filter"},
            {"label": "D", "text": "Hot plate"},
        ],
        "answer": "A",
        "rationale": "Iron filings keep their magnetic property in the mixture, so a magnet can separate them.",
        "rationales": {
            "A": "Correct. Iron filings are attracted to a magnet.",
            "B": "A screen is better for separating larger pieces such as gravel.",
            "C": "A paper filter separates some solids from liquids, but not dissolved materials or magnetic materials specifically.",
            "D": "A hot plate can evaporate water, but it is not the best tool for iron filings.",
        },
    },
    {
        "item": 204,
        "year": "lead4ward-inspired",
        "source_item": "2021-Q32 pattern",
        "day": 23,
        "topic": "Mass of a mixture",
        "reporting_category": "1",
        "source_teks": "5.6B",
        "process_teks": "",
        "readiness": "Supporting",
        "stimulus_type": "table",
        "stimulus_title": "Mass and Volume Before Mixing",
        "stimulus_table": {
            "headers": ["Material", "Mass", "Volume"],
            "rows": [
                ["Stones", "45 g", "25 mL"],
                ["Salt", "40 g", "35 mL"],
            ],
        },
        "prompt": "A student mixes stones and salt. The mass and volume of each material are shown before mixing. Which statement about the mixture is true?",
        "options": [
            {"label": "A", "text": "The mass of the mixture is 85 grams."},
            {"label": "B", "text": "The mass of the mixture is 60 grams."},
            {"label": "C", "text": "The volume of the mixture is 85 milliliters."},
            {"label": "D", "text": "The salt disappears, so only the stones have mass."},
        ],
        "answer": "A",
        "rationale": "The total mass is the mass of the stones plus the mass of the salt: 45 g + 40 g = 85 g.",
        "rationales": {
            "A": "Correct. The masses are added together.",
            "B": "Sixty is the total volume, not the total mass.",
            "C": "The volumes shown add to 60 mL, not 85 mL.",
            "D": "Matter does not lose its mass just because materials are mixed.",
        },
    },
    {
        "item": 205,
        "year": "lead4ward-inspired",
        "source_item": "2024-Q31 pattern",
        "day": 21,
        "topic": "Properties before and after dissolving",
        "reporting_category": "1",
        "source_teks": "5.6C",
        "process_teks": "",
        "readiness": "Supporting",
        "stimulus_type": "image",
        "stimulus_title": "Sugar Dissolving Model",
        "stimulus_image": "/static/staar_stimuli/sugar_dissolves_clear.svg",
        "stimulus_alt": "Sugar is added to water and dissolves into a clear solution.",
        "prompt": "A student stirs sugar into water until the sugar can no longer be seen. Which property of the sugar is still present in the solution?",
        "options": [
            {"label": "A", "text": "Its sweetness"},
            {"label": "B", "text": "Its original grainy texture"},
            {"label": "C", "text": "Its original shape"},
            {"label": "D", "text": "Its white color"},
        ],
        "answer": "A",
        "rationale": "When sugar dissolves, some properties change, but the sweetness remains in the solution.",
        "rationales": {
            "A": "Correct. The solution can still taste sweet because sugar is present.",
            "B": "The grainy texture is no longer visible after the sugar dissolves.",
            "C": "The sugar crystals do not keep their original shape in the solution.",
            "D": "The water can remain clear after sugar dissolves.",
        },
    },
    {
        "item": 206,
        "year": "lead4ward-inspired",
        "source_item": "2023-Q1 pattern",
        "day": 20,
        "topic": "Evidence of a solution",
        "reporting_category": "1",
        "source_teks": "5.6C",
        "process_teks": "",
        "readiness": "Supporting",
        "stimulus_type": "image",
        "stimulus_title": "Salt Solution Mass Model",
        "stimulus_image": "/static/staar_stimuli/salt_solution_mass.svg",
        "stimulus_alt": "Salt dissolves in water but is still part of the total mass of the solution.",
        "prompt": "A student adds salt to water and stirs until the salt can no longer be seen. Which observation would be evidence that the salt is still in the water?",
        "options": [
            {"label": "A", "text": "The solution still has mass from both the water and the salt."},
            {"label": "B", "text": "The salt floats to the top of the cup."},
            {"label": "C", "text": "The salt becomes magnetic."},
            {"label": "D", "text": "The water turns into a gas."},
        ],
        "answer": "A",
        "rationale": "Dissolved salt is still matter. The total mass of the solution includes the mass of the water and salt.",
        "rationales": {
            "A": "Correct. Mass gives evidence that dissolved matter is still present.",
            "B": "Dissolved salt does not float to the top as visible pieces.",
            "C": "Salt is not magnetic.",
            "D": "The water changing to a gas is not evidence that salt remains dissolved.",
        },
    },
    {
        "item": 207,
        "year": "lead4ward-inspired",
        "source_item": "2024-Q19 pattern",
        "day": 35,
        "topic": "Variables in an investigation",
        "reporting_category": "2",
        "source_teks": "5.7B",
        "process_teks": "",
        "readiness": "Supporting",
        "stimulus_type": "image",
        "stimulus_title": "Ramp Investigation Setup",
        "stimulus_image": "/static/staar_stimuli/ramp_force_setup.svg",
        "stimulus_alt": "A ramp investigation setup shows books, a ramp, a toy car, and a measuring tape.",
        "prompt": "Students want to test how ramp height affects the distance a toy car travels. Which variable should students change?",
        "options": [
            {"label": "A", "text": "The height of the ramp"},
            {"label": "B", "text": "The type of toy car in every trial"},
            {"label": "C", "text": "The unit used to measure distance"},
            {"label": "D", "text": "The surface at the bottom in every trial"},
        ],
        "answer": "A",
        "rationale": "The independent variable is the one factor being changed. To test ramp height, students should change the height of the ramp.",
        "rationales": {
            "A": "Correct. Ramp height is the variable being tested.",
            "B": "Changing the toy car would make the test unfair.",
            "C": "The measurement unit should stay consistent.",
            "D": "The surface should stay the same so only ramp height changes.",
        },
    },
    {
        "item": 208,
        "year": "lead4ward-inspired",
        "source_item": "2025-Q28 pattern",
        "day": 6,
        "topic": "Fair magnet investigation",
        "reporting_category": "2",
        "source_teks": "5.7B",
        "process_teks": "",
        "readiness": "Supporting",
        "stimulus_type": "image",
        "stimulus_title": "Magnet Fair Test Table",
        "stimulus_image": "/static/staar_stimuli/magnet_fair_test.svg",
        "stimulus_alt": "A magnet investigation table shows magnets placed at different distances from steel paper clips.",
        "prompt": "Students are comparing the strength of three magnets. What should they do to make the investigation fair?",
        "options": [
            {"label": "A", "text": "Use a different object with each magnet."},
            {"label": "B", "text": "Place every magnet the same distance from the paper clips."},
            {"label": "C", "text": "Use plastic paper clips instead of steel paper clips."},
            {"label": "D", "text": "Change the number of paper clips before each trial."},
        ],
        "answer": "B",
        "rationale": "To compare magnet strength fairly, the distance from the paper clips must stay the same.",
        "rationales": {
            "A": "Different objects would add another variable.",
            "B": "Correct. Keeping distance the same makes the comparison fair.",
            "C": "Plastic paper clips are not attracted to magnets.",
            "D": "Changing the number of paper clips would make the test unfair.",
        },
    },
]


def _add_visual_defaults(question):
    question = deepcopy(question)

    item = question.get("item")

    if item in VISUAL_STIMULUS_BY_ITEM:
        question.update(VISUAL_STIMULUS_BY_ITEM[item])

    question.setdefault("stimulus_type", "none")
    question.setdefault("stimulus_title", "")
    question.setdefault("stimulus_image", "")
    question.setdefault("stimulus_alt", "")
    question.setdefault("stimulus_table", None)
    question.setdefault("year", "2022")

    return question


def get_visual_staar_questions(existing_questions):
    combined = []
    seen_items = set()

    for question in existing_questions:
        item = question.get("item")
        if item not in seen_items:
            combined.append(_add_visual_defaults(question))
            seen_items.add(item)

    for question in STAAR_VISUAL_ORIGINAL_QUESTIONS:
        item = question.get("item")
        if item not in seen_items:
            combined.append(_add_visual_defaults(question))
            seen_items.add(item)

    return combined
