def get_unit4_doodle_resource(day):
    day = int(day)

    unit4 = {
        37: {
            "title": "Forms of Energy Doodle Notes",
            "word_bank": ["energy", "chemical energy", "mechanical energy", "electrical energy", "light energy", "thermal energy", "sound energy"],
            "label_pictures": [
                {"icon": "chemical energy", "answer": "chemical energy", "clue": "Stored energy in batteries, food, and fuel"},
                {"icon": "electrical energy", "answer": "electrical energy", "clue": "Energy that moves through wires or circuits"},
                {"icon": "light energy", "answer": "light energy", "clue": "Energy we can see"},
                {"icon": "thermal energy", "answer": "thermal energy", "clue": "Heat energy"},
            ],
            "fill_blanks": [
                {"sentence": "Energy is the ability to cause ___ or change.", "answer": "motion"},
                {"sentence": "Chemical energy is stored in batteries, food, and ___.", "answer": "fuel"},
                {"sentence": "Electrical energy can move through wires in a ___.", "answer": "circuit"},
                {"sentence": "Light, sound, thermal, mechanical, chemical, and electrical are forms of ___.", "answer": "energy"},
            ],
            "model_prompt": "Draw six boxes for CMELTS: Chemical, Mechanical, Electrical, Light, Thermal, and Sound. Add one real-world example for each.",
        },

        38: {
            "title": "Energy Transformations in Everyday Systems Doodle Notes",
            "word_bank": ["energy transformation", "input energy", "output energy", "system", "device", "energy flow"],
            "label_pictures": [
                {"icon": "energy transformation", "answer": "energy transformation", "clue": "Energy changes from one form to another"},
                {"icon": "input energy", "answer": "input energy", "clue": "Energy that enters a system"},
                {"icon": "output energy", "answer": "output energy", "clue": "Energy that comes out of a system"},
                {"icon": "system", "answer": "system", "clue": "Parts that work together"},
            ],
            "fill_blanks": [
                {"sentence": "An energy transformation happens when energy changes ___.", "answer": "form"},
                {"sentence": "Input energy is the energy that goes ___ a system.", "answer": "into"},
                {"sentence": "Output energy is the energy that comes ___ of a system.", "answer": "out"},
                {"sentence": "A device can change one form of energy into ___ forms.", "answer": "other"},
            ],
            "model_prompt": "Choose one everyday device. Draw an input arrow, the device, and output arrows. Label each energy form.",
        },

        39: {
            "title": "Chemical Energy in Batteries Doodle Notes",
            "word_bank": ["battery", "chemical energy", "stored energy", "electrical energy", "circuit", "device"],
            "label_pictures": [
                {"icon": "battery", "answer": "battery", "clue": "Stores chemical energy"},
                {"icon": "chemical energy", "answer": "chemical energy", "clue": "Stored energy inside the battery"},
                {"icon": "electrical energy", "answer": "electrical energy", "clue": "Energy that moves from the battery through a circuit"},
                {"icon": "circuit", "answer": "circuit", "clue": "A path for electrical energy"},
            ],
            "fill_blanks": [
                {"sentence": "A battery stores ___ energy.", "answer": "chemical"},
                {"sentence": "When a battery is connected in a circuit, chemical energy can change to ___ energy.", "answer": "electrical"},
                {"sentence": "Electrical energy moves through a complete ___.", "answer": "circuit"},
                {"sentence": "A battery-powered device uses stored energy to make something ___.", "answer": "happen"},
            ],
            "model_prompt": "Draw a battery connected to a simple device. Label chemical energy stored in the battery and electrical energy moving through the wire.",
        },

        40: {
            "title": "Flashlight Energy Flow Doodle Notes",
            "word_bank": ["flashlight", "battery", "chemical energy", "electrical energy", "light energy", "thermal energy"],
            "label_pictures": [
                {"icon": "flashlight", "answer": "flashlight", "clue": "Device that changes energy forms"},
                {"icon": "battery", "answer": "battery", "clue": "Source of stored chemical energy"},
                {"icon": "energy flow flashlight", "answer": "chemical → electrical → light", "clue": "Main energy pathway in a flashlight"},
                {"icon": "thermal energy", "answer": "thermal energy", "clue": "Some energy may be released as heat"},
            ],
            "fill_blanks": [
                {"sentence": "In a flashlight, the battery begins with stored ___ energy.", "answer": "chemical"},
                {"sentence": "The circuit carries ___ energy.", "answer": "electrical"},
                {"sentence": "The bulb or LED produces ___ energy.", "answer": "light"},
                {"sentence": "Some energy may also be transformed into ___ energy.", "answer": "thermal"},
            ],
            "model_prompt": "Draw a flashlight energy flowchart: chemical energy in the battery → electrical energy in the circuit → light energy from the bulb.",
        },

        41: {
            "title": "Energy Transformation Flowchart Doodle Notes",
            "word_bank": ["flowchart", "arrow", "energy transformation", "input", "output", "evidence"],
            "label_pictures": [
                {"icon": "flowchart", "answer": "flowchart", "clue": "Shows the order of energy changes"},
                {"icon": "arrow", "answer": "arrow", "clue": "Shows the direction energy flows"},
                {"icon": "input energy", "answer": "input", "clue": "Starting energy form"},
                {"icon": "output energy", "answer": "output", "clue": "Ending energy form"},
            ],
            "fill_blanks": [
                {"sentence": "A flowchart uses arrows to show the order of energy ___.", "answer": "changes"},
                {"sentence": "The starting energy is called the ___.", "answer": "input"},
                {"sentence": "The energy produced by the system is called the ___.", "answer": "output"},
                {"sentence": "Arrows show the direction that energy ___.", "answer": "flows"},
            ],
            "model_prompt": "Build a three-step energy flowchart for a device. Label the input energy, device, and output energy.",
        },

        42: {
            "title": "Energy Transformations in Multiple Devices Doodle Notes",
            "word_bank": ["device", "energy transformation", "chemical", "electrical", "light", "sound", "thermal", "mechanical"],
            "label_pictures": [
                {"icon": "fan", "answer": "fan", "clue": "Electrical energy changes to mechanical energy"},
                {"icon": "lamp", "answer": "lamp", "clue": "Electrical energy changes to light and thermal energy"},
                {"icon": "speaker", "answer": "speaker", "clue": "Electrical energy changes to sound energy"},
                {"icon": "toy car", "answer": "toy car", "clue": "Chemical energy changes to electrical and mechanical energy"},
            ],
            "fill_blanks": [
                {"sentence": "Different devices can have different energy ___.", "answer": "transformations"},
                {"sentence": "A fan changes electrical energy into ___ energy.", "answer": "mechanical"},
                {"sentence": "A speaker changes electrical energy into ___ energy.", "answer": "sound"},
                {"sentence": "A lamp changes electrical energy into light energy and some ___ energy.", "answer": "thermal"},
            ],
            "model_prompt": "Choose two devices. Draw and label the energy transformation for each device using arrows.",
        },

        43: {
            "title": "Unit 4 Energy Transformation Review Doodle Notes",
            "word_bank": ["chemical energy", "mechanical energy", "electrical energy", "light energy", "thermal energy", "sound energy", "energy transformation"],
            "label_pictures": [
                {"icon": "cmelts", "answer": "CMELTS", "clue": "Chemical, Mechanical, Electrical, Light, Thermal, Sound"},
                {"icon": "energy transformation", "answer": "energy transformation", "clue": "Energy changes from one form to another"},
                {"icon": "flashlight", "answer": "flashlight energy flow", "clue": "Chemical → electrical → light"},
                {"icon": "multiple devices", "answer": "multiple devices", "clue": "Different devices transform energy in different ways"},
            ],
            "fill_blanks": [
                {"sentence": "CMELTS helps us remember six forms of ___.", "answer": "energy"},
                {"sentence": "Energy transformation means energy changes ___.", "answer": "form"},
                {"sentence": "A flashlight changes chemical energy to electrical energy and then ___ energy.", "answer": "light"},
                {"sentence": "A strong energy explanation names the device, input energy, output energy, and ___.", "answer": "evidence"},
            ],
            "model_prompt": "Create a Unit 4 review poster. Include CMELTS, one flashlight flowchart, and one other device energy transformation.",
        },
    }

    return unit4.get(day)
