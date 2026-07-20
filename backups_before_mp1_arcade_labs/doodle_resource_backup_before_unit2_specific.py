from curriculum.doodle_resource_unit1 import get_unit1_doodle_resource

def get_doodle_resource(day):
    day = int(day)

    unit1_resource = get_unit1_doodle_resource(day)
    if unit1_resource:
        return unit1_resource

    if day <= 2:
        return {
            "title": "Science Tools and Safety Doodle Notes",
            "word_bank": ["safety", "observe", "measure", "data", "science notebook", "tool"],
            "label_pictures": [
                {"icon": "safety", "answer": "safety goggles", "clue": "Protects your eyes"},
                {"icon": "science notebook", "answer": "science notebook", "clue": "Records observations and data"},
                {"icon": "measure", "answer": "measuring tool", "clue": "Helps collect numbers"},
                {"icon": "observe", "answer": "observation", "clue": "Information from senses or tools"},
            ],
            "fill_blanks": [
                {"sentence": "Scientists use a ___ to record observations, data, and conclusions.", "answer": "science notebook"},
                {"sentence": "A science ___ helps collect evidence during an investigation.", "answer": "tool"},
                {"sentence": "Safe scientists follow procedures before they begin a ___ investigation.", "answer": "science"},
            ],
            "model_prompt": "Draw a safe science station. Label the tool, safety item, and notebook.",
        }

    if 3 <= day <= 16:
        if day == 3:
            words = ["matter", "solid", "liquid", "gas", "particles"]
            pictures = [
                {"icon": "solid", "answer": "solid", "clue": "Keeps its shape"},
                {"icon": "liquid", "answer": "liquid", "clue": "Takes the shape of the container"},
                {"icon": "gas", "answer": "gas", "clue": "Spreads out to fill space"},
                {"icon": "particles", "answer": "particles", "clue": "Tiny pieces too small to see"},
            ]
            blanks = [
                {"sentence": "Matter has ___ and takes up space.", "answer": "mass"},
                {"sentence": "A ___ keeps its shape.", "answer": "solid"},
                {"sentence": "A ___ takes the shape of its container.", "answer": "liquid"},
            ]
            prompt = "Draw particles in a solid, liquid, and gas. Label each state."

        elif day == 4:
            words = ["mass", "matter", "balance", "grams"]
            pictures = [
                {"icon": "mass", "answer": "mass", "clue": "Amount of matter"},
                {"icon": "tool", "answer": "balance", "clue": "Tool used to measure mass"},
                {"icon": "matter", "answer": "matter", "clue": "Anything with mass and volume"},
                {"icon": "data", "answer": "grams", "clue": "Unit for mass"},
            ]
            blanks = [
                {"sentence": "Mass is the amount of ___ in an object.", "answer": "matter"},
                {"sentence": "Mass is often measured in ___.", "answer": "grams"},
                {"sentence": "A ___ can be used to compare or measure mass.", "answer": "balance"},
            ]
            prompt = "Draw two objects with the same size but different mass. Label the heavier object."

        elif day == 5:
            words = ["volume", "water", "graduated cylinder", "milliliters", "displacement"]
            pictures = [
                {"icon": "volume", "answer": "volume", "clue": "Amount of space matter takes up"},
                {"icon": "water", "answer": "water level", "clue": "Read at the bottom of the curve"},
                {"icon": "measure", "answer": "graduated cylinder", "clue": "Measures liquid volume"},
                {"icon": "data", "answer": "milliliters", "clue": "Unit for liquid volume"},
            ]
            blanks = [
                {"sentence": "Volume is the amount of ___ matter takes up.", "answer": "space"},
                {"sentence": "Liquid volume is measured in ___.", "answer": "milliliters"},
                {"sentence": "Water ___ can show the volume of an irregular solid.", "answer": "displacement"},
            ]
            prompt = "Draw a graduated cylinder before and after an object is added. Label the change in water level."

        elif day == 6:
            words = ["magnet", "magnetism", "magnetic", "nonmagnetic", "physical property"]
            pictures = [
                {"icon": "magnet", "answer": "magnet", "clue": "Attracts some materials"},
                {"icon": "magnetic", "answer": "magnetic", "clue": "Attracted to a magnet"},
                {"icon": "nonmagnetic", "answer": "nonmagnetic", "clue": "Not attracted to a magnet"},
                {"icon": "physical property", "answer": "physical property", "clue": "Can be observed or tested"},
            ]
            blanks = [
                {"sentence": "Magnetism is a ___ property.", "answer": "physical"},
                {"sentence": "A ___ object is attracted to a magnet.", "answer": "magnetic"},
                {"sentence": "Not all metals are ___.", "answer": "magnetic"},
            ]
            prompt = "Draw a magnet test. Label one magnetic object and one nonmagnetic object."

        elif day in [7, 8]:
            words = ["density", "relative density", "water", "sink", "float"]
            pictures = [
                {"icon": "density", "answer": "density", "clue": "How much matter is packed in a space"},
                {"icon": "water", "answer": "water", "clue": "Used as a comparison liquid"},
                {"icon": "matter", "answer": "sink", "clue": "More dense than water"},
                {"icon": "liquid", "answer": "float/layer", "clue": "Less dense material stays above"},
            ]
            blanks = [
                {"sentence": "An object that sinks is more dense than ___.", "answer": "water"},
                {"sentence": "An object that floats is ___ dense than water.", "answer": "less"},
                {"sentence": "In liquid layers, the most dense liquid is at the ___.", "answer": "bottom"},
            ]
            prompt = "Draw a cup of water with one object floating and one object sinking. Label more dense and less dense."

        elif day in [9, 10]:
            words = ["solubility", "soluble", "insoluble", "dissolve", "solution"]
            pictures = [
                {"icon": "solubility", "answer": "solubility", "clue": "Ability to dissolve"},
                {"icon": "dissolve", "answer": "dissolve", "clue": "Spreads through water"},
                {"icon": "soluble", "answer": "soluble", "clue": "Dissolves in water"},
                {"icon": "insoluble", "answer": "insoluble", "clue": "Does not dissolve"},
            ]
            blanks = [
                {"sentence": "A soluble substance can ___ in water.", "answer": "dissolve"},
                {"sentence": "An insoluble substance does ___ dissolve in water.", "answer": "not"},
                {"sentence": "When salt dissolves, the particles are still ___ but too small to see.", "answer": "present"},
            ]
            prompt = "Draw a before-and-after model of salt dissolving in water. Label the particles."

        else:
            words = ["conductor", "insulator", "thermal energy", "electrical energy", "physical property"]
            pictures = [
                {"icon": "conductor", "answer": "conductor", "clue": "Allows energy transfer"},
                {"icon": "insulator", "answer": "insulator", "clue": "Slows energy transfer"},
                {"icon": "thermal energy", "answer": "thermal energy", "clue": "Heat energy"},
                {"icon": "electrical energy", "answer": "electrical energy", "clue": "Energy carried by current"},
            ]
            blanks = [
                {"sentence": "A conductor allows energy to ___ easily.", "answer": "transfer"},
                {"sentence": "An insulator ___ the transfer of energy.", "answer": "slows"},
                {"sentence": "Copper wire is useful because it conducts ___ energy.", "answer": "electrical"},
            ]
            prompt = "Draw a conductor and an insulator. Label how energy moves or is slowed."

        return {
            "title": "Matter Doodle Notes",
            "word_bank": words,
            "label_pictures": pictures,
            "fill_blanks": blanks,
            "model_prompt": prompt,
        }

    if 17 <= day <= 26:
        return {
            "title": "Mixtures and Solutions Doodle Notes",
            "word_bank": ["mixture", "solution", "dissolve", "separate", "filtration", "evaporation", "particles"],
            "label_pictures": [
                {"icon": "mixture", "answer": "mixture", "clue": "Physically combined materials"},
                {"icon": "solution", "answer": "solution", "clue": "A special mixture with dissolved particles"},
                {"icon": "filtration", "answer": "filtration", "clue": "Separates by particle size"},
                {"icon": "evaporation", "answer": "evaporation", "clue": "Separates water from dissolved solids"},
            ],
            "fill_blanks": [
                {"sentence": "A mixture is made of substances that are physically ___.", "answer": "combined"},
                {"sentence": "A solution has particles that are too small to ___.", "answer": "see"},
                {"sentence": "Filtration separates materials by particle ___.", "answer": "size"},
                {"sentence": "Evaporation can leave dissolved ___ behind.", "answer": "solids"},
            ],
            "model_prompt": "Draw a mixture and a solution. Label the particles and the separation method."
        }

    if 27 <= day <= 36:
        return {
            "title": "Force and Motion Doodle Notes",
            "word_bank": ["force", "push", "pull", "balanced forces", "unbalanced forces", "motion", "mechanical energy", "variable"],
            "label_pictures": [
                {"icon": "push", "answer": "push", "clue": "Force moving away"},
                {"icon": "pull", "answer": "pull", "clue": "Force moving toward"},
                {"icon": "balanced forces", "answer": "balanced forces", "clue": "Equal forces; no change in motion"},
                {"icon": "unbalanced forces", "answer": "unbalanced forces", "clue": "Unequal forces; motion changes"},
            ],
            "fill_blanks": [
                {"sentence": "A force is a push or a ___.", "answer": "pull"},
                {"sentence": "Balanced forces do ___ change motion.", "answer": "not"},
                {"sentence": "Unbalanced forces can change speed, direction, or ___.", "answer": "position"},
                {"sentence": "A fair test changes only one ___.", "answer": "variable"},
            ],
            "model_prompt": "Draw force arrows on an object. Label balanced or unbalanced forces."
        }

    if 37 <= day <= 43:
        return {
            "title": "Energy Transformation Doodle Notes",
            "word_bank": ["chemical energy", "mechanical energy", "electrical energy", "light energy", "thermal energy", "sound energy", "energy transformation"],
            "label_pictures": [
                {"icon": "chemical energy", "answer": "chemical energy", "clue": "Stored in batteries and food"},
                {"icon": "electrical energy", "answer": "electrical energy", "clue": "Moves through a circuit"},
                {"icon": "light energy", "answer": "light energy", "clue": "Energy we can see"},
                {"icon": "thermal energy", "answer": "thermal energy", "clue": "Heat energy"},
            ],
            "fill_blanks": [
                {"sentence": "A battery stores ___ energy.", "answer": "chemical"},
                {"sentence": "A flashlight changes chemical energy to ___ energy and then light energy.", "answer": "electrical"},
                {"sentence": "Energy transformation means energy changes ___.", "answer": "form"},
                {"sentence": "A device can produce more than one ___ of energy.", "answer": "form"},
            ],
            "model_prompt": "Draw an energy flowchart for a flashlight. Use arrows and label each energy form."
        }

    return {
        "title": "Science Review Doodle Notes",
        "word_bank": ["claim", "evidence", "reasoning", "data", "review", "reflection"],
        "label_pictures": [
            {"icon": "claim", "answer": "claim", "clue": "What you think is true"},
            {"icon": "evidence", "answer": "evidence", "clue": "Data or observations"},
            {"icon": "reasoning", "answer": "reasoning", "clue": "Why evidence supports the claim"},
            {"icon": "reflection", "answer": "reflection", "clue": "Thinking about learning"},
        ],
        "fill_blanks": [
            {"sentence": "A claim should be supported with ___.", "answer": "evidence"},
            {"sentence": "Reasoning explains why the evidence supports the ___.", "answer": "claim"},
            {"sentence": "A strong science answer uses vocabulary and ___.", "answer": "data"},
        ],
        "model_prompt": "Draw a CER triangle. Label claim, evidence, and reasoning."
    }
