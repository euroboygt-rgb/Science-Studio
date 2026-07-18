def get_teacher_support(day):
    day = int(day)

    day_topics = {
        1: "Classroom routines, science safety, and notebook setup",
        2: "Science tools, measurement tools, and scientific/engineering design",
        3: "Matter, physical states, and particles too small to be seen",
        4: "Mass and measuring in grams",
        5: "Volume and measuring in milliliters",
        6: "Magnetism: magnetic and nonmagnetic matter",
        7: "Relative density: solids sink or float in water",
        8: "Relative density: liquids layer by density",
        9: "Solubility: soluble materials",
        10: "Solubility: insoluble materials",
        11: "Thermal and electrical conductivity",
        12: "Electrical conductors and insulators",
        13: "Thermal conductors and insulators",
        14: "Compare matter and find physical property patterns",
        15: "Unit 1 performance assessment: material engineering challenge",
        16: "Unit 1 reteach, extension, and vocabulary review",
        17: "Mixtures and physical properties",
        18: "Separating mixtures by magnetism and size",
        19: "Separating mixtures by filtration and evaporation",
        20: "Solutions and dissolved particles",
        21: "Changes when solutions form",
        22: "Before and after properties in solutions",
        23: "Conservation of matter in solutions",
        24: "Measuring before and after combining substances",
        25: "Evidence of particles too small to be seen",
        26: "Unit 2 performance assessment",
        27: "Equal forces: pull examples",
        28: "Equal forces: push examples",
        29: "Unequal forces: pull examples",
        30: "Unequal forces: push examples",
        31: "Transfer of mechanical energy",
        32: "Mechanical energy in motion systems",
        33: "Car on a ramp investigation",
        34: "Balloon rocket investigation",
        35: "Variables and data",
        36: "Unit 3 force and motion investigation",
        37: "Forms of energy and CMELTS",
        38: "Energy transformations in everyday systems",
        39: "Chemical energy in batteries",
        40: "Flashlight energy flow",
        41: "Energy transformation flowchart builder",
        42: "Energy transformations in multiple devices",
        43: "Unit 4 energy transformation review",
        44: "Flex day: reteach, review, and science stations",
        45: "1st 9 weeks test and reflection",
    }

    topic = day_topics.get(day, "Science lesson")

    if day <= 2:
        return {
            "unit": "Classroom Launch",
            "topic": topic,
            "teacher_focus": "Build classroom systems before heavy content. Students need routines for safety, notebook use, collaboration, tools, and how science investigations work.",
            "teach": [
                "Teach safety expectations as behaviors students can actually show.",
                "Teach how to use notebooks for claims, evidence, drawings, vocabulary, and data tables.",
                "Teach that every science tool has a purpose: observe, measure, test, or protect.",
                "Connect scientific design and engineering design to solving problems and collecting evidence."
            ],
            "how": [
                "Model one routine, then let students practice it immediately.",
                "Use quick stations: goggles, hand lens, balance, ruler, thermometer, graduated cylinder.",
                "Have students explain which tool they would choose and why.",
                "Use sentence stems: I would use ___ because it measures/observes/tests ___."
            ],
            "misconceptions": [
                "Students may think safety is just rules, not part of doing real science.",
                "Students may think any tool can measure anything.",
                "Students may think drawings in science notebooks should be art instead of evidence."
            ],
            "answers": [
                "Good student answer: I choose the tool that matches the property I need to observe or measure.",
                "Look for: students naming the tool, the property, and the unit when there is one.",
                "Notebook check: title, date, data table, labeled drawing, and written conclusion."
            ],
            "reteach": [
                "If students choose wrong tools, give object cards and tool cards and have them match them.",
                "If notebooks are weak, show a strong example and a weak example, then revise together."
            ]
        }

    if 3 <= day <= 16:
        return {
            "unit": "Unit 1: Physical Properties of Matter",
            "topic": topic,
            "teacher_focus": "Students compare and contrast matter using measurable, testable, and observable physical properties: mass, volume, magnetism, relative density, physical state, solubility, and conductivity.",
            "teach": [
                "Teach that a physical property helps identify or compare matter without creating a new substance.",
                "Keep using the same set of objects/liquids across lessons so students build one growing comparison table.",
                "Connect every property to the tool or test used to observe it.",
                "Require students to explain evidence, not just give one-word answers."
            ],
            "how": [
                "Start with a real object and ask: What can we observe? What can we measure? What can we test?",
                "Use group stations and have students add data to the same chart over several days.",
                "Ask students to sort objects, then defend the sorting rule using evidence.",
                "Use STAAR-style stems: Which property best supports the student’s claim?"
            ],
            "misconceptions": [
                "Students may think bigger objects always have more mass.",
                "Students may think all metals are magnetic.",
                "Students may think floating means an object has no mass.",
                "Students may confuse volume with mass.",
                "Students may think dissolving means the substance disappeared.",
                "Students may think conductors create energy instead of allowing energy to transfer."
            ],
            "answers": [
                "Mass answer: Mass is measured in grams using a balance or scale.",
                "Volume answer: Liquid volume is measured in milliliters using a graduated cylinder.",
                "Magnetism answer: Magnetic objects are attracted to a magnet; not all metals are magnetic.",
                "Relative density answer: Compared to water, less dense objects float and more dense objects sink.",
                "Solubility answer: A soluble substance dissolves in water; an insoluble substance does not.",
                "Conductivity answer: Conductors allow thermal or electrical energy to transfer; insulators slow or block transfer."
            ],
            "reteach": [
                "For mass vs. volume confusion, compare a small heavy object and a large light object.",
                "For magnetism, test several metals and nonmetals so students see patterns.",
                "For density, use water as the reference point and have students write: It sinks/floats because ___."
            ]
        }

    if 17 <= day <= 26:
        return {
            "unit": "Unit 2: Mixtures and Solutions",
            "topic": topic,
            "teacher_focus": "Students explain that mixtures keep the physical properties of their parts, separate mixtures using properties, and use evidence to show matter is conserved in solutions.",
            "teach": [
                "Teach mixture as two or more substances physically combined.",
                "Teach that mixture parts usually keep their physical properties.",
                "Teach separation methods: magnetism, size, filtration, evaporation, relative density, and extraction.",
                "Teach that in a solution, dissolved particles may be too small to see, but matter is still present."
            ],
            "how": [
                "Use messy, real mixtures: sand and gravel, iron filings and sand, saltwater, marbles and woodchips.",
                "Ask students to choose a separation method and justify it using a property.",
                "Measure before and after to build conservation of matter evidence.",
                "Use particle drawings to show why dissolved matter can be present even when it cannot be seen."
            ],
            "misconceptions": [
                "Students may think dissolved material disappears.",
                "Students may think a solution is not a mixture.",
                "Students may think matter is lost when substances are combined.",
                "Students may choose separation methods randomly instead of matching the method to a physical property."
            ],
            "answers": [
                "Mixture answer: The substances are physically combined and can often be separated.",
                "Separation answer: Choose the method based on the property, such as magnetism, size, solubility, or density.",
                "Solution answer: A dissolved substance spreads out into particles too small to see.",
                "Conservation answer: The total matter stays the same even when the appearance changes."
            ],
            "reteach": [
                "If students say dissolved means gone, evaporate saltwater as a teacher demo to recover salt.",
                "If students struggle with separation methods, use a matching chart: property → tool/method.",
                "If students struggle with conservation, repeat with simple mass-before/mass-after data."
            ]
        }

    if 27 <= day <= 36:
        return {
            "unit": "Unit 3: Force and Motion",
            "topic": topic,
            "teacher_focus": "Students investigate equal and unequal forces, patterns of motion, transfer of mechanical energy, and how to design simple investigations using variables and data.",
            "teach": [
                "Teach force as a push or pull.",
                "Teach equal forces as balanced forces that do not change motion.",
                "Teach unequal forces as unbalanced forces that can change speed, direction, or position.",
                "Teach that mechanical energy can transfer when objects interact.",
                "Teach variables: what changes, what is measured, and what stays the same."
            ],
            "how": [
                "Use arrows to show force direction and size.",
                "Use toy cars, ramps, balls, or balloon rockets for visible motion changes.",
                "Have students predict, test, measure, and revise claims using data.",
                "Require students to identify independent variable, dependent variable, and constants."
            ],
            "misconceptions": [
                "Students may think an object at rest has no forces acting on it.",
                "Students may think heavier objects always move faster.",
                "Students may confuse speed with force.",
                "Students may change too many variables at once in an investigation."
            ],
            "answers": [
                "Equal forces answer: The forces are balanced, so the motion does not change.",
                "Unequal forces answer: The stronger force causes a change in motion.",
                "Mechanical energy answer: Energy transfers when motion or contact causes another object to move.",
                "Investigation answer: A fair test changes one variable and keeps the others the same."
            ],
            "reteach": [
                "If students confuse force and motion, have them draw arrows before explaining.",
                "If variables are weak, use a three-column chart: change, measure, keep the same.",
                "If students make claims without evidence, require data numbers in their CER."
            ]
        }

    if 37 <= day <= 43:
        return {
            "unit": "Unit 4: Energy Transformations",
            "topic": topic,
            "teacher_focus": "Students identify forms of energy and describe how energy changes form in systems. Chemical energy is introduced here, especially through batteries and flashlight systems.",
            "teach": [
                "Teach CMELTS: chemical, mechanical, electrical, light, thermal, and sound energy.",
                "Teach energy transformation as energy changing from one form to another.",
                "Teach systems by identifying parts and explaining how the parts work together.",
                "Use flashlights and everyday devices to trace energy flow.",
                "Emphasize chemical energy in the battery changing to electrical energy, then to light and thermal energy."
            ],
            "how": [
                "Begin with everyday devices: flashlight, lamp, toy car, speaker, fan, buzzer.",
                "Ask: Where does the energy start? Where does it go? What evidence shows energy is present?",
                "Use flowcharts with arrows instead of isolated vocabulary definitions.",
                "Have students label energy transformations on a diagram."
            ],
            "misconceptions": [
                "Students may think there is only one energy form in a device.",
                "Students may miss thermal energy because it is not always the useful output.",
                "Students may think a battery stores electricity instead of chemical energy.",
                "Students may think energy disappears when a device stops working."
            ],
            "answers": [
                "Flashlight answer: chemical energy in the battery changes to electrical energy in the circuit, then light energy and some thermal energy at the bulb.",
                "Energy evidence answer: light, sound, motion, heat, or electrical current can show energy is present.",
                "System answer: The parts must work together; if one part fails, the system may not function.",
                "Transformation answer: Energy is not created by the device; it changes form."
            ],
            "reteach": [
                "If students only name the final energy, make them trace the full path with arrows.",
                "If students miss chemical energy, point back to the battery as the energy source.",
                "If students confuse transfer and transformation, use this frame: transfer is where it moves; transformation is how the form changes."
            ]
        }

    return {
        "unit": "Review and Assessment",
        "topic": topic,
        "teacher_focus": "Use this time to diagnose gaps, reteach high-need concepts, and help students explain their thinking in writing.",
        "teach": [
            "Review the most tested ideas from Units 1–4.",
            "Prioritize evidence-based explanations, vocabulary accuracy, and CER writing.",
            "Use student work to decide reteach groups."
        ],
        "how": [
            "Use stations by unit: matter, mixtures, force and motion, energy.",
            "Have students correct missed questions and explain the mistake.",
            "Use quick conferences for students who miss the same type of question."
        ],
        "misconceptions": [
            "Students may memorize terms but not explain evidence.",
            "Students may choose answers based on keywords instead of the investigation context."
        ],
        "answers": [
            "Strong answer: includes the claim, evidence from data/observations, and science reasoning.",
            "Look for: correct vocabulary, correct units, and explanation tied to the investigation."
        ],
        "reteach": [
            "Group students by standard and rotate them through mini-lessons.",
            "Use anchor charts and simple labs before giving another practice question."
        ]
    }
