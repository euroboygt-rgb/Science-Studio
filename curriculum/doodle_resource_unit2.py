def get_unit2_doodle_resource(day):
    day = int(day)

    unit2 = {
        17: {
            "title": "Mixtures Doodle Notes",
            "word_bank": ["mixture", "materials", "physical properties", "sort", "recycle", "separate"],
            "label_pictures": [
                {"icon": "mixture", "answer": "mixture", "clue": "Two or more materials physically combined"},
                {"icon": "recycling center", "answer": "recycling center", "clue": "Sorts materials by properties"},
                {"icon": "sort materials", "answer": "sort", "clue": "Group materials by properties"},
                {"icon": "physical property", "answer": "physical property", "clue": "Trait used to identify or sort matter"},
            ],
            "fill_blanks": [
                {"sentence": "A mixture is made when two or more materials are physically ___.", "answer": "combined"},
                {"sentence": "The materials in a mixture can often be ___.", "answer": "separated"},
                {"sentence": "Scientists sort mixtures by physical ___.", "answer": "properties"},
                {"sentence": "A recycling center separates materials such as plastic, metal, paper, and ___.", "answer": "glass"},
            ],
            "model_prompt": "Draw a recycling center sorting line. Label at least three materials and the physical property used to sort them.",
        },

        18: {
            "title": "Separating Mixtures by Magnetism and Size Doodle Notes",
            "word_bank": ["mixture", "magnetism", "magnetic", "screen", "particle size", "separate"],
            "label_pictures": [
                {"icon": "magnet separation", "answer": "magnetism", "clue": "Separates magnetic materials"},
                {"icon": "screen separation", "answer": "screen", "clue": "Separates materials by size"},
                {"icon": "particle size", "answer": "particle size", "clue": "Small or large pieces"},
                {"icon": "magnetic", "answer": "magnetic material", "clue": "Attracted to a magnet"},
            ],
            "fill_blanks": [
                {"sentence": "A magnet can separate materials that are ___.", "answer": "magnetic"},
                {"sentence": "A screen can separate a mixture by particle ___.", "answer": "size"},
                {"sentence": "Sand and gravel can be separated if their pieces are different ___.", "answer": "sizes"},
                {"sentence": "Separating a mixture does not create a new ___.", "answer": "substance"},
            ],
            "model_prompt": "Draw a mixture of sand, gravel, and iron filings. Show how to separate it using a magnet and a screen.",
        },

        19: {
            "title": "Filtration and Evaporation Doodle Notes",
            "word_bank": ["filtration", "filter", "evaporation", "mixture", "solution", "separate"],
            "label_pictures": [
                {"icon": "filtration", "answer": "filtration", "clue": "Separates by particle size using a filter"},
                {"icon": "filter", "answer": "filter", "clue": "Lets liquid pass but traps larger particles"},
                {"icon": "evaporation", "answer": "evaporation", "clue": "Liquid changes to gas and leaves solids behind"},
                {"icon": "separation methods", "answer": "separation method", "clue": "A way to separate materials"},
            ],
            "fill_blanks": [
                {"sentence": "Filtration separates materials by particle ___.", "answer": "size"},
                {"sentence": "A filter can trap larger particles while liquid passes ___.", "answer": "through"},
                {"sentence": "Evaporation can separate dissolved solids from ___.", "answer": "water"},
                {"sentence": "Filtration and evaporation are ways to ___ mixtures.", "answer": "separate"},
            ],
            "model_prompt": "Draw filtration and evaporation. Label what stays in the filter, what passes through, and what is left after evaporation.",
        },

        20: {
            "title": "Solutions Doodle Notes",
            "word_bank": ["solution", "solute", "solvent", "dissolve", "particles", "water"],
            "label_pictures": [
                {"icon": "solution", "answer": "solution", "clue": "A mixture that looks the same throughout"},
                {"icon": "solute", "answer": "solute", "clue": "The material that dissolves"},
                {"icon": "solvent", "answer": "solvent", "clue": "The liquid that does the dissolving"},
                {"icon": "dissolve", "answer": "dissolve", "clue": "Particles spread throughout the liquid"},
            ],
            "fill_blanks": [
                {"sentence": "A solution is a mixture that looks the same ___.", "answer": "throughout"},
                {"sentence": "The solute is the material that ___.", "answer": "dissolves"},
                {"sentence": "The solvent is the liquid that does the ___.", "answer": "dissolving"},
                {"sentence": "In salt water, salt is the solute and water is the ___.", "answer": "solvent"},
            ],
            "model_prompt": "Draw salt dissolving in water. Label the solute, solvent, and solution.",
        },

        21: {
            "title": "Changes When Creating Solutions Doodle Notes",
            "word_bank": ["solution", "dissolve", "particle", "spread out", "not visible", "physical change"],
            "label_pictures": [
                {"icon": "before after solution", "answer": "before and after", "clue": "Compare the material before and after dissolving"},
                {"icon": "dissolve", "answer": "dissolve", "clue": "Particles spread out"},
                {"icon": "particles too small", "answer": "particles too small to see", "clue": "Particles are present but not visible"},
                {"icon": "physical change", "answer": "physical change", "clue": "The material changes form but is still present"},
            ],
            "fill_blanks": [
                {"sentence": "When a solid dissolves, its particles spread ___ in the liquid.", "answer": "out"},
                {"sentence": "The dissolved material may no longer be visible, but it is still ___.", "answer": "present"},
                {"sentence": "Dissolving is usually a physical ___ because no new substance is made.", "answer": "change"},
                {"sentence": "A solution may look clear even though it contains dissolved ___.", "answer": "particles"},
            ],
            "model_prompt": "Draw a before-and-after solution model. Show visible grains before dissolving and tiny spread-out particles after dissolving.",
        },

        22: {
            "title": "Comparing Substances Before and After a Solution Forms",
            "word_bank": ["before", "after", "solution", "dissolve", "compare", "properties"],
            "label_pictures": [
                {"icon": "before", "answer": "before", "clue": "Material is visible before dissolving"},
                {"icon": "after", "answer": "after", "clue": "Material is spread out after dissolving"},
                {"icon": "compare", "answer": "compare", "clue": "Notice similarities and differences"},
                {"icon": "solution", "answer": "solution", "clue": "A mixture with dissolved particles"},
            ],
            "fill_blanks": [
                {"sentence": "Before dissolving, the solid particles may be easy to ___.", "answer": "see"},
                {"sentence": "After dissolving, the particles are spread through the ___.", "answer": "solution"},
                {"sentence": "Scientists compare properties before and ___ an investigation.", "answer": "after"},
                {"sentence": "Even if particles are not visible, evidence can show they are still ___.", "answer": "present"},
            ],
            "model_prompt": "Make a before-and-after chart for sugar and water. Label what changes and what stays the same.",
        },

        23: {
            "title": "Conservation of Matter in Solutions Doodle Notes",
            "word_bank": ["conservation of matter", "matter", "mass", "solution", "closed system", "evidence"],
            "label_pictures": [
                {"icon": "conservation of matter", "answer": "conservation of matter", "clue": "Matter is not created or destroyed"},
                {"icon": "closed system", "answer": "closed system", "clue": "Matter cannot escape"},
                {"icon": "mass", "answer": "mass", "clue": "Can be measured before and after"},
                {"icon": "solution", "answer": "solution", "clue": "Dissolved matter is still present"},
            ],
            "fill_blanks": [
                {"sentence": "Conservation of matter means matter is not created or ___.", "answer": "destroyed"},
                {"sentence": "When a solid dissolves in water, the solid's particles are still ___.", "answer": "present"},
                {"sentence": "In a closed system, matter cannot ___.", "answer": "escape"},
                {"sentence": "Mass before and after making a solution should be the ___.", "answer": "same"},
            ],
            "model_prompt": "Draw a closed container before and after salt dissolves in water. Label how matter is conserved.",
        },

        24: {
            "title": "Measuring Conservation of Matter Doodle Notes",
            "word_bank": ["mass", "balance", "before", "after", "same", "conservation of matter"],
            "label_pictures": [
                {"icon": "balance", "answer": "balance", "clue": "Measures mass"},
                {"icon": "before mass", "answer": "mass before", "clue": "Measure before mixing"},
                {"icon": "after mass", "answer": "mass after", "clue": "Measure after mixing"},
                {"icon": "conservation of matter", "answer": "conservation of matter", "clue": "Total matter stays the same"},
            ],
            "fill_blanks": [
                {"sentence": "Scientists can measure mass before and after to test conservation of ___.", "answer": "matter"},
                {"sentence": "If no matter escapes, the total mass should stay the ___.", "answer": "same"},
                {"sentence": "A balance is used to measure ___.", "answer": "mass"},
                {"sentence": "Data from before and after can be used as ___.", "answer": "evidence"},
            ],
            "model_prompt": "Draw a balance showing mass before and mass after a solution forms. Label the evidence for conservation of matter.",
        },

        25: {
            "title": "Particles Too Small to See Doodle Notes",
            "word_bank": ["particles", "too small to see", "solution", "evidence", "model", "dissolve"],
            "label_pictures": [
                {"icon": "particles too small", "answer": "particles too small to see", "clue": "Dissolved particles may be invisible"},
                {"icon": "model particles", "answer": "particle model", "clue": "A model can show what we cannot see"},
                {"icon": "solution", "answer": "solution", "clue": "Contains particles spread throughout"},
                {"icon": "evidence", "answer": "evidence", "clue": "Data supports that particles are still present"},
            ],
            "fill_blanks": [
                {"sentence": "Dissolved particles can be too small to ___.", "answer": "see"},
                {"sentence": "A model helps show particles that are not ___.", "answer": "visible"},
                {"sentence": "If mass stays the same, that is evidence the particles are still ___.", "answer": "present"},
                {"sentence": "In a solution, particles are spread throughout the ___.", "answer": "liquid"},
            ],
            "model_prompt": "Draw a particle model of a solution. Use tiny dots to show dissolved particles spread throughout the water.",
        },

        26: {
            "title": "Unit 2 Performance Assessment Doodle Notes",
            "word_bank": ["mixture", "solution", "separate", "dissolve", "conservation of matter", "evidence", "particles"],
            "label_pictures": [
                {"icon": "mixture", "answer": "mixture", "clue": "Materials physically combined"},
                {"icon": "solution", "answer": "solution", "clue": "Dissolved particles spread throughout"},
                {"icon": "separation methods", "answer": "separation method", "clue": "Used to separate mixtures"},
                {"icon": "conservation of matter", "answer": "conservation of matter", "clue": "Matter stays present"},
            ],
            "fill_blanks": [
                {"sentence": "A mixture can often be separated using physical ___.", "answer": "properties"},
                {"sentence": "A solution forms when a solute ___ in a solvent.", "answer": "dissolves"},
                {"sentence": "Conservation of matter means matter is not created or ___.", "answer": "destroyed"},
                {"sentence": "A strong science explanation uses evidence, vocabulary, and ___.", "answer": "reasoning"},
            ],
            "model_prompt": "Create a Unit 2 review model. Show one mixture, one solution, one separation method, and one example of conservation of matter.",
        },
    }

    return unit2.get(day)
