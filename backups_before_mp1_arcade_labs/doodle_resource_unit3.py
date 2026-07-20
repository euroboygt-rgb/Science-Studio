def get_unit3_doodle_resource(day):
    day = int(day)

    unit3 = {
        27: {
            "title": "Equal Pull Forces Doodle Notes",
            "word_bank": ["force", "pull", "equal forces", "balanced forces", "direction", "motion"],
            "label_pictures": [
                {"icon": "equal pull forces", "answer": "equal pull forces", "clue": "Pulls with the same strength in opposite directions"},
                {"icon": "balanced forces", "answer": "balanced forces", "clue": "Forces are equal, so motion does not change"},
                {"icon": "pull", "answer": "pull", "clue": "A force that moves something closer"},
                {"icon": "force arrows", "answer": "force arrows", "clue": "Show strength and direction of a force"},
            ],
            "fill_blanks": [
                {"sentence": "A force is a push or a ___.", "answer": "pull"},
                {"sentence": "Equal forces in opposite directions are called ___ forces.", "answer": "balanced"},
                {"sentence": "Balanced forces do not change an object's ___.", "answer": "motion"},
                {"sentence": "Force arrows show both strength and ___.", "answer": "direction"},
            ],
            "model_prompt": "Draw two students pulling a rope with equal force. Label the force arrows and explain why the rope does not move.",
        },

        28: {
            "title": "Equal Push Forces Doodle Notes",
            "word_bank": ["force", "push", "equal forces", "balanced forces", "opposite directions", "motion"],
            "label_pictures": [
                {"icon": "equal push forces", "answer": "equal push forces", "clue": "Pushes with equal strength from opposite sides"},
                {"icon": "balanced forces", "answer": "balanced forces", "clue": "Equal forces acting in opposite directions"},
                {"icon": "push", "answer": "push", "clue": "A force that moves something away"},
                {"icon": "motion", "answer": "no change in motion", "clue": "Balanced forces do not start, stop, or change motion"},
            ],
            "fill_blanks": [
                {"sentence": "A push is a type of ___.", "answer": "force"},
                {"sentence": "When equal pushes act in opposite directions, the forces are ___.", "answer": "balanced"},
                {"sentence": "Balanced forces do ___ change an object's motion.", "answer": "not"},
                {"sentence": "A stronger push would make the forces ___.", "answer": "unbalanced"},
            ],
            "model_prompt": "Draw a box being pushed from both sides with equal force. Label the arrows and write 'balanced forces.'",
        },

        29: {
            "title": "Unequal Pull Forces Doodle Notes",
            "word_bank": ["pull", "unequal forces", "unbalanced forces", "stronger force", "direction", "motion changes"],
            "label_pictures": [
                {"icon": "unequal pull forces", "answer": "unequal pull forces", "clue": "One pull is stronger than the other"},
                {"icon": "unbalanced forces", "answer": "unbalanced forces", "clue": "Unequal forces can change motion"},
                {"icon": "stronger force", "answer": "stronger force", "clue": "The larger arrow shows the stronger force"},
                {"icon": "motion changes", "answer": "motion changes", "clue": "Object moves toward the stronger force"},
            ],
            "fill_blanks": [
                {"sentence": "Unequal forces are also called ___ forces.", "answer": "unbalanced"},
                {"sentence": "Unbalanced forces can change an object's ___.", "answer": "motion"},
                {"sentence": "An object moves in the direction of the ___ force.", "answer": "stronger"},
                {"sentence": "A larger force arrow means a ___ force.", "answer": "stronger"},
            ],
            "model_prompt": "Draw a tug-of-war where one side pulls harder. Label the stronger force and the direction of motion.",
        },

        30: {
            "title": "Unequal Push Forces Doodle Notes",
            "word_bank": ["push", "unequal forces", "unbalanced forces", "stronger push", "speed", "direction"],
            "label_pictures": [
                {"icon": "unequal push forces", "answer": "unequal push forces", "clue": "Pushes with different strengths"},
                {"icon": "unbalanced forces", "answer": "unbalanced forces", "clue": "Forces that cause motion to change"},
                {"icon": "stronger push", "answer": "stronger push", "clue": "The bigger push changes motion"},
                {"icon": "direction", "answer": "direction of motion", "clue": "The object moves toward the stronger push"},
            ],
            "fill_blanks": [
                {"sentence": "A push is a force that moves an object ___.", "answer": "away"},
                {"sentence": "Unequal pushes create ___ forces.", "answer": "unbalanced"},
                {"sentence": "Unbalanced forces can change speed or ___.", "answer": "direction"},
                {"sentence": "The object moves in the direction of the ___ push.", "answer": "stronger"},
            ],
            "model_prompt": "Draw a box with one small push and one large push. Label the force arrows and the direction the box moves.",
        },

        31: {
            "title": "Transfer of Mechanical Energy Doodle Notes",
            "word_bank": ["mechanical energy", "transfer", "motion", "collision", "push", "force"],
            "label_pictures": [
                {"icon": "mechanical energy transfer", "answer": "mechanical energy transfer", "clue": "Energy moves from one object to another"},
                {"icon": "collision", "answer": "collision", "clue": "Objects touch and energy transfers"},
                {"icon": "motion", "answer": "motion", "clue": "Moving objects have mechanical energy"},
                {"icon": "force arrows", "answer": "force", "clue": "Forces can transfer energy"},
            ],
            "fill_blanks": [
                {"sentence": "Mechanical energy is the energy of position and ___.", "answer": "motion"},
                {"sentence": "Energy can transfer when objects ___.", "answer": "collide"},
                {"sentence": "A moving ball can transfer energy to another ___.", "answer": "object"},
                {"sentence": "A force can cause energy to ___ from one object to another.", "answer": "transfer"},
            ],
            "model_prompt": "Draw one ball hitting another ball. Use arrows to show mechanical energy transferring from one ball to the other.",
        },

        32: {
            "title": "Mechanical Energy in Motion Systems Doodle Notes",
            "word_bank": ["system", "mechanical energy", "motion", "energy transfer", "parts", "interaction"],
            "label_pictures": [
                {"icon": "motion system", "answer": "motion system", "clue": "Objects working together and interacting"},
                {"icon": "mechanical energy", "answer": "mechanical energy", "clue": "Energy related to motion and position"},
                {"icon": "energy transfer", "answer": "energy transfer", "clue": "Energy moves between parts of a system"},
                {"icon": "interaction", "answer": "interaction", "clue": "Objects affect one another"},
            ],
            "fill_blanks": [
                {"sentence": "A system is made of parts that ___ with each other.", "answer": "interact"},
                {"sentence": "Mechanical energy can transfer between parts of a ___.", "answer": "system"},
                {"sentence": "A moving object can transfer energy through a push, pull, or ___.", "answer": "collision"},
                {"sentence": "A diagram can show how energy ___ through a system.", "answer": "moves"},
            ],
            "model_prompt": "Draw a motion system, such as dominoes, marbles, or a playground swing. Label the parts and show where energy transfers.",
        },

        33: {
            "title": "Car on a Ramp Investigation Doodle Notes",
            "word_bank": ["ramp", "force", "motion", "distance", "variable", "data"],
            "label_pictures": [
                {"icon": "ramp", "answer": "ramp", "clue": "Sloped surface used to test motion"},
                {"icon": "car motion", "answer": "motion", "clue": "Change in position"},
                {"icon": "distance", "answer": "distance", "clue": "How far the car travels"},
                {"icon": "variable", "answer": "variable", "clue": "One thing changed in an investigation"},
            ],
            "fill_blanks": [
                {"sentence": "A ramp can help test how force affects ___.", "answer": "motion"},
                {"sentence": "Distance tells how far an object ___.", "answer": "travels"},
                {"sentence": "In a fair test, scientists change only one ___.", "answer": "variable"},
                {"sentence": "Scientists use data to support a ___.", "answer": "claim"},
            ],
            "model_prompt": "Draw a car on a ramp. Label the ramp, force, direction of motion, distance traveled, and the variable being tested.",
        },

        34: {
            "title": "Balloon Rocket Investigation Doodle Notes",
            "word_bank": ["force", "air", "push", "motion", "balloon rocket", "distance"],
            "label_pictures": [
                {"icon": "balloon rocket", "answer": "balloon rocket", "clue": "Air pushes one way; balloon moves the other way"},
                {"icon": "air push", "answer": "air push", "clue": "Air leaving the balloon creates a force"},
                {"icon": "motion", "answer": "motion", "clue": "The balloon changes position"},
                {"icon": "distance", "answer": "distance", "clue": "How far the rocket travels"},
            ],
            "fill_blanks": [
                {"sentence": "Air leaving the balloon creates a ___.", "answer": "force"},
                {"sentence": "The balloon moves in the opposite ___ of the air.", "answer": "direction"},
                {"sentence": "The balloon rocket changes position, so it is in ___.", "answer": "motion"},
                {"sentence": "Scientists can measure how far the balloon travels using ___.", "answer": "distance"},
            ],
            "model_prompt": "Draw a balloon rocket on a string. Label the air pushing out, the direction of motion, and the distance traveled.",
        },

        35: {
            "title": "Variables and Data Doodle Notes",
            "word_bank": ["variable", "test", "data", "graph", "evidence", "conclusion"],
            "label_pictures": [
                {"icon": "variable", "answer": "variable", "clue": "One thing that can change in an investigation"},
                {"icon": "data table", "answer": "data table", "clue": "Organizes measurements"},
                {"icon": "graph", "answer": "graph", "clue": "Shows patterns in data"},
                {"icon": "evidence", "answer": "evidence", "clue": "Data used to support a claim"},
            ],
            "fill_blanks": [
                {"sentence": "A variable is something that can ___.", "answer": "change"},
                {"sentence": "A fair test changes only ___ variable at a time.", "answer": "one"},
                {"sentence": "Data can be organized in a table or ___.", "answer": "graph"},
                {"sentence": "A conclusion should be supported by ___.", "answer": "evidence"},
            ],
            "model_prompt": "Create a mini data table and graph for a ramp or balloon rocket test. Label the variable and the evidence.",
        },

        36: {
            "title": "Unit 3 Force and Motion Performance Task Doodle Notes",
            "word_bank": ["force", "motion", "balanced forces", "unbalanced forces", "mechanical energy", "variable", "data"],
            "label_pictures": [
                {"icon": "force arrows", "answer": "force arrows", "clue": "Show strength and direction"},
                {"icon": "balanced forces", "answer": "balanced forces", "clue": "Equal forces; no change in motion"},
                {"icon": "unbalanced forces", "answer": "unbalanced forces", "clue": "Unequal forces; motion changes"},
                {"icon": "mechanical energy transfer", "answer": "mechanical energy transfer", "clue": "Energy moves between objects"},
            ],
            "fill_blanks": [
                {"sentence": "A force is a push or a ___.", "answer": "pull"},
                {"sentence": "Balanced forces do not change ___.", "answer": "motion"},
                {"sentence": "Unbalanced forces can change speed, direction, or ___.", "answer": "position"},
                {"sentence": "A strong investigation conclusion uses data as ___.", "answer": "evidence"},
            ],
            "model_prompt": "Create a Unit 3 review model. Show balanced forces, unbalanced forces, mechanical energy transfer, and data from an investigation.",
        },
    }

    return unit3.get(day)
