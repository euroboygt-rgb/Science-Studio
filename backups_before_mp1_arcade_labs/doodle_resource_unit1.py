def get_unit1_doodle_resource(day):
    day = int(day)

    unit1 = {
        3: {
            "title": "Matter, States, and Particles Doodle Notes",
            "word_bank": ["matter", "mass", "volume", "solid", "liquid", "gas", "particles"],
            "label_pictures": [
                {"icon": "solid", "answer": "solid", "clue": "Has a definite shape and volume"},
                {"icon": "liquid", "answer": "liquid", "clue": "Takes the shape of its container"},
                {"icon": "gas", "answer": "gas", "clue": "Spreads out to fill the space"},
                {"icon": "particles", "answer": "particles", "clue": "Tiny pieces of matter too small to see"},
            ],
            "fill_blanks": [
                {"sentence": "Matter has ___ and takes up space.", "answer": "mass"},
                {"sentence": "A solid keeps its ___ and volume.", "answer": "shape"},
                {"sentence": "A liquid has volume but takes the shape of its ___.", "answer": "container"},
                {"sentence": "Gas particles spread out and fill the available ___.", "answer": "space"},
            ],
            "model_prompt": "Draw particles in a solid, liquid, and gas. Label the state with the closest particles and the state with the most spread-out particles.",
        },

        4: {
            "title": "Mass Doodle Notes",
            "word_bank": ["mass", "matter", "balance", "grams", "heavier", "lighter"],
            "label_pictures": [
                {"icon": "mass", "answer": "mass", "clue": "The amount of matter in an object"},
                {"icon": "balance", "answer": "balance", "clue": "Tool used to measure or compare mass"},
                {"icon": "matter", "answer": "matter", "clue": "Anything that has mass and volume"},
                {"icon": "measure", "answer": "grams", "clue": "A common metric unit for mass"},
            ],
            "fill_blanks": [
                {"sentence": "Mass tells how much ___ is in an object.", "answer": "matter"},
                {"sentence": "A balance can compare which object is ___ or lighter.", "answer": "heavier"},
                {"sentence": "Mass is usually measured in ___.", "answer": "grams"},
                {"sentence": "Two objects can be the same size but have different ___.", "answer": "mass"},
            ],
            "model_prompt": "Draw a balance scale with two objects. Label the object with greater mass and the object with less mass.",
        },

        5: {
            "title": "Volume Doodle Notes",
            "word_bank": ["volume", "space", "graduated cylinder", "milliliters", "water displacement"],
            "label_pictures": [
                {"icon": "volume", "answer": "volume", "clue": "The amount of space matter takes up"},
                {"icon": "graduated cylinder", "answer": "graduated cylinder", "clue": "Tool used to measure liquid volume"},
                {"icon": "water", "answer": "water level", "clue": "Read the volume at the bottom of the curve"},
                {"icon": "displacement", "answer": "water displacement", "clue": "Water rises when an object is added"},
            ],
            "fill_blanks": [
                {"sentence": "Volume is the amount of ___ an object or substance takes up.", "answer": "space"},
                {"sentence": "Liquid volume is often measured in ___.", "answer": "milliliters"},
                {"sentence": "A graduated cylinder is used to measure liquid ___.", "answer": "volume"},
                {"sentence": "Water displacement can help measure the volume of an irregular ___.", "answer": "solid"},
            ],
            "model_prompt": "Draw a graduated cylinder before and after a solid object is dropped in. Label the starting volume, ending volume, and amount displaced.",
        },

        6: {
            "title": "Magnetism Doodle Notes",
            "word_bank": ["magnet", "magnetism", "magnetic", "nonmagnetic", "physical property"],
            "label_pictures": [
                {"icon": "magnet", "answer": "magnet", "clue": "Object that attracts some materials"},
                {"icon": "magnetic", "answer": "magnetic", "clue": "Attracted to a magnet"},
                {"icon": "nonmagnetic", "answer": "nonmagnetic", "clue": "Not attracted to a magnet"},
                {"icon": "physical property", "answer": "physical property", "clue": "A trait that can be observed or tested"},
            ],
            "fill_blanks": [
                {"sentence": "Magnetism is a ___ property of matter.", "answer": "physical"},
                {"sentence": "A magnetic object is ___ to a magnet.", "answer": "attracted"},
                {"sentence": "A nonmagnetic object is ___ attracted to a magnet.", "answer": "not"},
                {"sentence": "Scientists can test magnetism without changing what the material is ___ of.", "answer": "made"},
            ],
            "model_prompt": "Draw a magnet test with three objects. Label one magnetic object, one nonmagnetic object, and the evidence that proves your answer.",
        },

        7: {
            "title": "Relative Density: Solids in Liquids Doodle Notes",
            "word_bank": ["relative density", "sink", "float", "more dense", "less dense", "water"],
            "label_pictures": [
                {"icon": "density", "answer": "relative density", "clue": "Compares whether something sinks or floats"},
                {"icon": "sink", "answer": "sink", "clue": "More dense than the liquid"},
                {"icon": "float", "answer": "float", "clue": "Less dense than the liquid"},
                {"icon": "water", "answer": "water", "clue": "The comparison liquid in many tests"},
            ],
            "fill_blanks": [
                {"sentence": "If an object sinks in water, it is ___ dense than water.", "answer": "more"},
                {"sentence": "If an object floats in water, it is ___ dense than water.", "answer": "less"},
                {"sentence": "Relative density compares one material to another ___.", "answer": "material"},
                {"sentence": "Sink and float are evidence used to compare ___.", "answer": "density"},
            ],
            "model_prompt": "Draw a cup of water with one object floating and one object sinking. Label more dense than water and less dense than water.",
        },

        8: {
            "title": "Relative Density: Liquid Layers Doodle Notes",
            "word_bank": ["liquid layers", "relative density", "most dense", "least dense", "top", "bottom"],
            "label_pictures": [
                {"icon": "liquid layers", "answer": "liquid layers", "clue": "Liquids stack based on relative density"},
                {"icon": "top", "answer": "least dense", "clue": "Usually found at the top layer"},
                {"icon": "bottom", "answer": "most dense", "clue": "Usually found at the bottom layer"},
                {"icon": "density", "answer": "relative density", "clue": "Used to compare liquid layers"},
            ],
            "fill_blanks": [
                {"sentence": "The most dense liquid usually settles at the ___.", "answer": "bottom"},
                {"sentence": "The least dense liquid usually stays at the ___.", "answer": "top"},
                {"sentence": "Liquids form layers when they have different relative ___.", "answer": "densities"},
                {"sentence": "A liquid layer model helps scientists compare materials without changing the materials' ___.", "answer": "identity"},
            ],
            "model_prompt": "Draw a three-layer liquid column. Label least dense, middle density, and most dense.",
        },

        9: {
            "title": "Solubility: Soluble Materials Doodle Notes",
            "word_bank": ["solubility", "soluble", "dissolve", "solution", "particles", "water"],
            "label_pictures": [
                {"icon": "solubility", "answer": "solubility", "clue": "Ability to dissolve in a liquid"},
                {"icon": "soluble", "answer": "soluble", "clue": "Can dissolve in water"},
                {"icon": "dissolve", "answer": "dissolve", "clue": "Particles spread out in the liquid"},
                {"icon": "solution", "answer": "solution", "clue": "A mixture that looks the same throughout"},
            ],
            "fill_blanks": [
                {"sentence": "A soluble material can ___ in water.", "answer": "dissolve"},
                {"sentence": "When a material dissolves, its particles spread through the ___.", "answer": "water"},
                {"sentence": "A solution may look clear even though particles are still ___.", "answer": "present"},
                {"sentence": "Solubility is a ___ property of matter.", "answer": "physical"},
            ],
            "model_prompt": "Draw salt before and after it dissolves in water. Label visible grains before and tiny particles after.",
        },

        10: {
            "title": "Solubility: Insoluble Materials Doodle Notes",
            "word_bank": ["insoluble", "does not dissolve", "mixture", "particles", "settle", "water"],
            "label_pictures": [
                {"icon": "insoluble", "answer": "insoluble", "clue": "Does not dissolve in water"},
                {"icon": "water", "answer": "water", "clue": "Liquid used to test solubility"},
                {"icon": "mixture", "answer": "mixture", "clue": "Materials are together but not dissolved"},
                {"icon": "particles", "answer": "particles settle", "clue": "Some particles may stay visible or sink"},
            ],
            "fill_blanks": [
                {"sentence": "An insoluble material does ___ dissolve in water.", "answer": "not"},
                {"sentence": "Sand in water is a mixture because the sand particles are still ___.", "answer": "visible"},
                {"sentence": "Insoluble materials may settle at the ___ of the cup.", "answer": "bottom"},
                {"sentence": "Testing solubility helps identify a material by its physical ___.", "answer": "property"},
            ],
            "model_prompt": "Draw sand and water before and after mixing. Label the insoluble material and where the particles settle.",
        },

        11: {
            "title": "Conductivity Doodle Notes",
            "word_bank": ["conductivity", "conductor", "insulator", "thermal energy", "electrical energy", "transfer"],
            "label_pictures": [
                {"icon": "conductor", "answer": "conductor", "clue": "Allows energy to transfer easily"},
                {"icon": "insulator", "answer": "insulator", "clue": "Slows or reduces energy transfer"},
                {"icon": "thermal energy", "answer": "thermal energy", "clue": "Heat energy"},
                {"icon": "electrical energy", "answer": "electrical energy", "clue": "Energy moving through a circuit"},
            ],
            "fill_blanks": [
                {"sentence": "Conductivity describes how well a material allows energy to ___.", "answer": "transfer"},
                {"sentence": "A conductor allows energy to move through it ___.", "answer": "easily"},
                {"sentence": "An insulator slows the transfer of ___.", "answer": "energy"},
                {"sentence": "Thermal conductivity involves the transfer of ___ energy.", "answer": "thermal"},
            ],
            "model_prompt": "Draw two materials: one conductor and one insulator. Use arrows to show energy moving quickly or slowly.",
        },

        12: {
            "title": "Electrical Conductors and Insulators Doodle Notes",
            "word_bank": ["electrical energy", "conductor", "insulator", "circuit", "wire", "electricity"],
            "label_pictures": [
                {"icon": "electrical energy", "answer": "electrical energy", "clue": "Energy that can move through a circuit"},
                {"icon": "electrical conductor", "answer": "electrical conductor", "clue": "Allows electric current to move"},
                {"icon": "electrical insulator", "answer": "electrical insulator", "clue": "Slows or blocks electric current"},
                {"icon": "conductor", "answer": "closed path", "clue": "Electricity needs a complete path"},
            ],
            "fill_blanks": [
                {"sentence": "Electrical conductors allow electrical energy to ___ through them.", "answer": "move"},
                {"sentence": "Metal wire is often used because it is a good electrical ___.", "answer": "conductor"},
                {"sentence": "Plastic coating on a wire acts as an electrical ___.", "answer": "insulator"},
                {"sentence": "A circuit needs a complete path for electricity to ___.", "answer": "flow"},
            ],
            "model_prompt": "Draw a simple circuit with a battery, wire, and bulb. Label the conductor and insulator.",
        },

        13: {
            "title": "Thermal Conductors and Insulators Doodle Notes",
            "word_bank": ["thermal energy", "heat", "thermal conductor", "thermal insulator", "transfer", "temperature"],
            "label_pictures": [
                {"icon": "thermal energy", "answer": "thermal energy", "clue": "Heat energy"},
                {"icon": "thermal conductor", "answer": "thermal conductor", "clue": "Allows heat to transfer easily"},
                {"icon": "thermal insulator", "answer": "thermal insulator", "clue": "Slows heat transfer"},
                {"icon": "measure", "answer": "temperature", "clue": "Can be measured with a thermometer"},
            ],
            "fill_blanks": [
                {"sentence": "Thermal energy is often described as ___ energy.", "answer": "heat"},
                {"sentence": "A thermal conductor allows heat to transfer ___.", "answer": "easily"},
                {"sentence": "A thermal insulator ___ heat transfer.", "answer": "slows"},
                {"sentence": "Oven mitts are useful because they act as thermal ___.", "answer": "insulators"},
            ],
            "model_prompt": "Draw a hot cup with a metal spoon and an insulated handle or mitt. Label where heat transfers quickly and slowly.",
        },

        14: {
            "title": "Comparing Physical Properties Doodle Notes",
            "word_bank": ["physical property", "mass", "volume", "magnetism", "density", "solubility", "conductivity"],
            "label_pictures": [
                {"icon": "physical property", "answer": "physical property", "clue": "Trait that can be observed or measured"},
                {"icon": "mass", "answer": "mass", "clue": "Amount of matter"},
                {"icon": "volume", "answer": "volume", "clue": "Amount of space"},
                {"icon": "density", "answer": "density", "clue": "Helps explain sink, float, or layers"},
            ],
            "fill_blanks": [
                {"sentence": "A physical property can be observed or measured without changing the material into a new ___.", "answer": "substance"},
                {"sentence": "Mass, volume, magnetism, solubility, density, and conductivity are all physical ___.", "answer": "properties"},
                {"sentence": "Scientists compare properties to help identify and choose ___.", "answer": "materials"},
                {"sentence": "A material can have more than one useful physical ___.", "answer": "property"},
            ],
            "model_prompt": "Create a property web for one material. Label at least four physical properties.",
        },

        15: {
            "title": "Toy Material Engineering Challenge Doodle Notes",
            "word_bank": ["material", "physical property", "criteria", "constraint", "evidence", "engineering design"],
            "label_pictures": [
                {"icon": "toy material", "answer": "material", "clue": "What an object is made of"},
                {"icon": "physical property", "answer": "physical property", "clue": "Trait used to choose a material"},
                {"icon": "engineering design", "answer": "engineering design", "clue": "Plan, test, improve"},
                {"icon": "evidence", "answer": "evidence", "clue": "Test results that support a choice"},
            ],
            "fill_blanks": [
                {"sentence": "Engineers choose materials based on their physical ___.", "answer": "properties"},
                {"sentence": "Criteria describe what the design must ___.", "answer": "do"},
                {"sentence": "Constraints are limits such as time, materials, or ___.", "answer": "cost"},
                {"sentence": "A strong material choice is supported by test ___ or observations.", "answer": "data"},
            ],
            "model_prompt": "Design a toy part. Label the material you chose and the physical properties that make it a good choice.",
        },

        16: {
            "title": "Unit 1 Review Doodle Notes",
            "word_bank": ["matter", "mass", "volume", "magnetism", "density", "solubility", "conductivity"],
            "label_pictures": [
                {"icon": "matter", "answer": "matter", "clue": "Has mass and takes up space"},
                {"icon": "magnet", "answer": "magnetism", "clue": "Attraction to a magnet"},
                {"icon": "density", "answer": "relative density", "clue": "Sink, float, or liquid layers"},
                {"icon": "conductivity", "answer": "conductivity", "clue": "How well energy transfers"},
            ],
            "fill_blanks": [
                {"sentence": "Matter has mass and takes up ___.", "answer": "space"},
                {"sentence": "Mass and volume are measured using science ___.", "answer": "tools"},
                {"sentence": "Solubility describes whether a material can ___ in water.", "answer": "dissolve"},
                {"sentence": "Conductors and insulators describe how energy ___ through materials.", "answer": "transfers"},
            ],
            "model_prompt": "Create a Unit 1 review sketch. Show one example for mass, volume, magnetism, density, solubility, and conductivity.",
        },
    }

    return unit1.get(day)
