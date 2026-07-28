PHENOMENON_IMAGE_SETS = {
    "mystery_matter": {
        "image": "phenomenon/mystery_matter.png",
        "title": "Mystery Matter",
        "tag": "Physical Properties",
        "focus_question": "How can we identify materials by their physical properties?",
        "notice": "Look closely at the objects, tools, and property clues in the image.",
        "wonder": "What properties could help a scientist identify each material?",
        "quick_explore": "Choose one object from the image and predict which physical properties could be tested.",
        "evidence": "Record one property you could observe or measure: mass, volume, texture, magnetism, density, solubility, or conductivity.",
        "cer": "I can identify a material by using evidence from its physical properties because..."
    },
    "beach_mixtures": {
        "image": "phenomenon/beach_mixtures.png",
        "title": "Beach Mixtures",
        "tag": "Mixtures and Solutions",
        "focus_question": "Which materials dissolve, and how can mixed materials be separated?",
        "notice": "Observe the cups, beach materials, filter, sieve, and evaporation dish.",
        "wonder": "Which materials will dissolve, stay separate, or be easier to separate?",
        "quick_explore": "Predict what will happen when sand, salt, and shells are mixed with water.",
        "evidence": "Record evidence showing whether a material dissolved, settled, filtered, sieved, or evaporated.",
        "cer": "A mixture or solution can be explained by using evidence from how the materials behave because..."
    },
    "energy_circuit": {
        "image": "phenomenon/energy_circuit.png",
        "title": "Energy Flow in a Circuit",
        "tag": "Conductors, Insulators, and Energy",
        "focus_question": "Why does the bulb light with some materials but not others?",
        "notice": "Look at the battery, switch, bulb, wires, and material test gap.",
        "wonder": "Which materials will complete the circuit and let energy flow?",
        "quick_explore": "Predict whether a metal paper clip, wood stick, plastic piece, or coin will make the bulb light.",
        "evidence": "Record whether the bulb lights and use the result as evidence for conductor or insulator.",
        "cer": "The bulb lights or does not light because the test material..."
    },
    "friction": {
        "image": "phenomenon/friction_investigation.png",
        "title": "Friction Investigation",
        "tag": "Force and Motion",
        "focus_question": "How does surface type affect motion?",
        "notice": "Observe how far the marble travels on smooth and rough surfaces.",
        "wonder": "Which surface creates more friction, and how does that affect distance traveled?",
        "quick_explore": "Predict which surface will let the marble travel farthest.",
        "evidence": "Record the distance traveled on each surface and compare the motion.",
        "cer": "Surface type affects motion because friction..."
    },
}


DAY_TO_PHENOMENON = {
    1: "mystery_matter",
    2: "mystery_matter",
    3: "mystery_matter",
    4: "mystery_matter",
    5: "mystery_matter",
    6: "mystery_matter",
    7: "mystery_matter",
    8: "mystery_matter",
    9: "beach_mixtures",
    10: "beach_mixtures",
    11: "energy_circuit",
    12: "energy_circuit",
    13: "energy_circuit",
    14: "mystery_matter",
    15: "mystery_matter",
    16: "mystery_matter",
    17: "beach_mixtures",
    18: "beach_mixtures",
    19: "beach_mixtures",
    20: "beach_mixtures",
    21: "beach_mixtures",
    22: "beach_mixtures",
    23: "beach_mixtures",
    24: "beach_mixtures",
    25: "beach_mixtures",
    26: "beach_mixtures",
    27: "friction",
    28: "friction",
    29: "friction",
    30: "friction",
    31: "friction",
    32: "friction",
    33: "friction",
    34: "friction",
    35: "friction",
    36: "friction",
    37: "energy_circuit",
    38: "energy_circuit",
    39: "energy_circuit",
    40: "energy_circuit",
    41: "energy_circuit",
    42: "energy_circuit",
    43: "energy_circuit",
    44: "mystery_matter",
    45: "mystery_matter",
}


DAY_FOCUS_OVERRIDES = {
    1: "How do scientists use routines, tools, and observations to begin an investigation?",
    2: "How do science tools help us collect accurate evidence?",
    3: "How can matter be described using observable and measurable properties?",
    4: "How can mass help us compare different materials?",
    5: "How can volume help us describe the amount of space matter takes up?",
    6: "How can magnetism help us identify materials?",
    7: "How can density help explain why objects float or sink?",
    8: "How can relative density help us compare liquids and solids?",
    9: "Why do some materials dissolve in water while others do not?",
    10: "How can we tell whether a material dissolved or stayed separate?",
    11: "How can a circuit show whether a material conducts electricity?",
    12: "Why do conductors let electricity flow while insulators do not?",
    13: "How do conductors and insulators affect the transfer of thermal energy?",
    14: "How can scientists use several properties to identify an unknown material?",
    15: "How can engineers choose the best materials for a design?",
    16: "How can evidence from physical properties help us review matter?",
    17: "What happens when materials are combined into a mixture?",
    18: "How can properties help us separate mixtures?",
    19: "How can filtering, sieving, and evaporation separate materials?",
    20: "What makes a solution different from other mixtures?",
    21: "Which properties stay the same when materials are mixed?",
    22: "Where does the material go when it dissolves?",
    23: "How can mass show that matter is conserved in a solution?",
    24: "How can measuring before and after mixing provide evidence?",
    25: "How can a particle model explain a solution?",
    26: "How can we use evidence to explain mixtures and solutions?",
    27: "What happens when forces are balanced?",
    28: "How can equal pushes affect motion?",
    29: "What happens when forces are unbalanced?",
    30: "How can unequal pushes change motion?",
    31: "How can mechanical energy transfer from one object to another?",
    32: "How do forces affect motion in a system?",
    33: "How does ramp height affect motion?",
    34: "How can a balloon rocket show forces and motion?",
    35: "How do variables and data help scientists explain motion?",
    36: "How can evidence explain balanced and unbalanced forces?",
    37: "How can we identify different forms of energy?",
    38: "How can energy change from one form to another?",
    39: "How does energy move through a battery-powered device?",
    40: "How does energy flow through a flashlight system?",
    41: "How can a flowchart show energy transformations?",
    42: "How do everyday devices transform energy?",
    43: "How can CMELTS help us explain energy evidence?",
    44: "How can we use stimuli and evidence to answer STAAR-style questions?",
    45: "How can reflection help us set a stronger science goal?",
}


def get_phenomenon_mission(day):
    day = int(day)
    key = DAY_TO_PHENOMENON.get(day, "mystery_matter")
    mission = dict(PHENOMENON_IMAGE_SETS[key])
    mission["day"] = day
    mission["key"] = key

    if day in DAY_FOCUS_OVERRIDES:
        mission["focus_question"] = DAY_FOCUS_OVERRIDES[day]

    return mission


# Matter Phenomenon Mission Text Polish Days 3-8
DAY_MATTER_PHENOMENON_POLISH = {
    3: {
        "title": "Mystery Matter: What Is Matter?",
        "tag": "Unit 1 • Matter, Physical States, and Particles",
        "focus_question": "How can matter be described using observable and measurable properties?",
        "notice": "Look at the objects in the image. Notice that each object takes up space and has mass.",
        "wonder": "How could we tell whether each object is a solid, liquid, or gas?",
        "quick_explore": "Choose one object in the image and describe it using state of matter, shape, texture, and size.",
        "evidence": "Record one observation that proves the object is matter, such as it has mass, takes up space, or has a physical state.",
        "cer": "The object is matter because..."
    },
    4: {
        "title": "Mystery Matter: Mass Check",
        "tag": "Unit 1 • Mass and Measuring Matter",
        "focus_question": "How can mass help us compare different materials?",
        "notice": "Look for the balance in the image. Notice that scientists use tools to compare how much matter objects have.",
        "wonder": "Which object in the image do you think has the greatest mass, and what evidence could you collect?",
        "quick_explore": "Pick two objects from the image. Predict which one would have more mass, then explain why.",
        "evidence": "Record the tool you would use to measure mass and the unit you would use.",
        "cer": "I can compare the mass of two objects by..."
    },
    5: {
        "title": "Mystery Matter: Volume Clues",
        "tag": "Unit 1 • Volume and Space Matter Takes Up",
        "focus_question": "How can volume help us describe the amount of space matter takes up?",
        "notice": "Look for the graduated cylinder and the objects that could be placed in water.",
        "wonder": "How could water displacement help us find the volume of an irregular solid?",
        "quick_explore": "Choose one solid object from the image. Predict whether it would make the water level rise a little or a lot.",
        "evidence": "Record what measurement would change in the graduated cylinder when the object is added.",
        "cer": "The object has volume because..."
    },
    6: {
        "title": "Mystery Matter: Magnetic or Not?",
        "tag": "Unit 1 • Magnetism as a Physical Property",
        "focus_question": "How can magnetism help us identify and classify materials?",
        "notice": "Look for the magnet and the different materials. Some materials may be attracted to the magnet, and some may not.",
        "wonder": "Which materials in the image might be magnetic? Which materials might be nonmagnetic?",
        "quick_explore": "Choose three objects from the image and predict whether each one would be attracted to a magnet.",
        "evidence": "Record whether the object is attracted or not attracted. Use the evidence to classify it as magnetic or nonmagnetic.",
        "cer": "This material is magnetic or nonmagnetic because..."
    },
    7: {
        "title": "Mystery Matter: Float or Sink?",
        "tag": "Unit 1 • Density and Relative Density",
        "focus_question": "How can density help explain why some objects float and some objects sink?",
        "notice": "Look at the objects and imagine placing them in water. Some objects may float, sink, or stay suspended.",
        "wonder": "Which object would be less dense than water? Which object would be more dense than water?",
        "quick_explore": "Pick two objects from the image. Predict which one would float and which one would sink.",
        "evidence": "Record the result you would look for: floats, sinks, or stays suspended in water.",
        "cer": "The object floated or sank because..."
    },
    8: {
        "title": "Mystery Matter: Compare the Layers",
        "tag": "Unit 1 • Relative Density of Solids and Liquids",
        "focus_question": "How can relative density help us compare liquids and solids?",
        "notice": "Think about what would happen if different liquids or objects were placed together in a clear container.",
        "wonder": "Why do some materials stay on top while others move to the bottom?",
        "quick_explore": "Predict how two liquids or two objects would arrange themselves based on relative density.",
        "evidence": "Record which material would be least dense, most dense, or about the same density.",
        "cer": "The materials formed layers or changed position because..."
    },
}


def get_phenomenon_mission(day):
    day = int(day)
    key = DAY_TO_PHENOMENON.get(day, "mystery_matter")
    mission = dict(PHENOMENON_IMAGE_SETS[key])
    mission["day"] = day
    mission["key"] = key

    if day in DAY_FOCUS_OVERRIDES:
        mission["focus_question"] = DAY_FOCUS_OVERRIDES[day]

    if day in DAY_MATTER_PHENOMENON_POLISH:
        mission.update(DAY_MATTER_PHENOMENON_POLISH[day])

    return mission
# End Matter Phenomenon Mission Text Polish Days 3-8


# Unit 1 Phenomenon Mission Text Polish Days 9-16
DAY_UNIT1_PHENOMENON_POLISH = {
    9: {
        "title": "Beach Mixtures: Dissolve or Stay Separate?",
        "tag": "Unit 1 • Solubility",
        "focus_question": "Why do some materials dissolve in water while others stay separate?",
        "notice": "Look at the cups with different materials. Some materials spread evenly in water, while others remain visible.",
        "wonder": "What makes sugar or salt dissolve, but sand or gravel stay separate?",
        "quick_explore": "Predict what will happen when sugar, salt, sand, and gravel are stirred into water.",
        "evidence": "Record whether each material dissolves, settles, floats, or stays visible after stirring.",
        "cer": "A material is soluble or insoluble because..."
    },
    10: {
        "title": "Beach Mixtures: Insoluble Evidence",
        "tag": "Unit 1 • Soluble and Insoluble Materials",
        "focus_question": "How can we tell whether a material dissolved or stayed separate?",
        "notice": "Look for evidence that a material is still visible after mixing with water.",
        "wonder": "If a material disappears from sight, did it dissolve, melt, or just spread out?",
        "quick_explore": "Compare one material that dissolves with one material that stays separate in water.",
        "evidence": "Record observations such as clear liquid, cloudy liquid, particles at the bottom, or particles floating.",
        "cer": "The evidence shows the material did or did not dissolve because..."
    },
    11: {
        "title": "Circuit Mystery: Will It Light?",
        "tag": "Unit 1 • Electrical Conductivity",
        "focus_question": "How can a circuit show whether a material conducts electricity?",
        "notice": "Look at the battery, bulb, wires, switch, and test material in the circuit.",
        "wonder": "Why does the bulb light with some materials but not with others?",
        "quick_explore": "Predict whether metal, wood, plastic, and paper will complete the circuit.",
        "evidence": "Record whether the bulb lights. A lit bulb is evidence that electric current can flow.",
        "cer": "The test material is a conductor or insulator because..."
    },
    12: {
        "title": "Circuit Mystery: Conductors and Insulators",
        "tag": "Unit 1 • Electrical Conductors and Insulators",
        "focus_question": "Why do conductors let electricity flow while insulators do not?",
        "notice": "Look at the circuit gap where different materials can be placed.",
        "wonder": "Which physical property helps determine whether the bulb will light?",
        "quick_explore": "Choose two materials. Predict which one is a conductor and which one is an insulator.",
        "evidence": "Use the bulb as evidence. If it lights, the material allowed electric current to flow.",
        "cer": "The bulb lit or did not light because..."
    },
    13: {
        "title": "Heat Transfer Mystery",
        "tag": "Unit 1 • Thermal Conductors and Insulators",
        "focus_question": "How do conductors and insulators affect the transfer of thermal energy?",
        "notice": "Think about materials that get hot quickly and materials that protect your hand from heat.",
        "wonder": "Why does a metal spoon get hot faster than a plastic spoon or wooden handle?",
        "quick_explore": "Compare metal, plastic, wood, and cloth. Predict which would transfer heat fastest.",
        "evidence": "Record which material would allow heat to move quickly and which would slow heat transfer.",
        "cer": "The material is a thermal conductor or thermal insulator because..."
    },
    14: {
        "title": "Mystery Matter: Property Detective",
        "tag": "Unit 1 • Identifying Unknown Materials",
        "focus_question": "How can scientists use several physical properties to identify an unknown material?",
        "notice": "Look at the objects and tools. Each test can give a different clue about the material.",
        "wonder": "Which clues would be most helpful: mass, texture, magnetism, density, solubility, or conductivity?",
        "quick_explore": "Choose one mystery object and decide which three physical properties you would test first.",
        "evidence": "Record evidence from more than one property test before making a claim.",
        "cer": "The mystery material is most likely ___ because..."
    },
    15: {
        "title": "Sand Boat Engineering Challenge",
        "tag": "Unit 1 • Engineering with Physical Properties",
        "focus_question": "How can engineers choose the best materials for a design?",
        "notice": "Think about a desert road that has turned to sand. A sand boat needs a body, sail, and rudder.",
        "wonder": "Which materials would be strong, light, smooth, flexible, or able to catch wind?",
        "quick_explore": "Choose materials for a boat body, sail, and rudder. Predict whether the design will glide across sand.",
        "evidence": "Record which properties helped the boat succeed or caused the boat to fail.",
        "cer": "The best material choices for the sand boat were ___ because..."
    },
    16: {
        "title": "Mystery Matter: Unit 1 Evidence Review",
        "tag": "Unit 1 • Physical Properties Review",
        "focus_question": "How can evidence from physical properties help us explain and classify matter?",
        "notice": "Look across the investigation tools and property clues from the unit.",
        "wonder": "Which physical properties are easiest to observe, and which need tools to measure?",
        "quick_explore": "Pick one object and describe it using at least four physical properties from the unit.",
        "evidence": "Record evidence using science vocabulary: mass, volume, density, magnetism, solubility, conductivity, texture, or physical state.",
        "cer": "I can classify and describe matter using physical properties because..."
    },
}


def get_phenomenon_mission(day):
    day = int(day)
    key = DAY_TO_PHENOMENON.get(day, "mystery_matter")
    mission = dict(PHENOMENON_IMAGE_SETS[key])
    mission["day"] = day
    mission["key"] = key

    if day in DAY_FOCUS_OVERRIDES:
        mission["focus_question"] = DAY_FOCUS_OVERRIDES[day]

    if "DAY_MATTER_PHENOMENON_POLISH" in globals() and day in DAY_MATTER_PHENOMENON_POLISH:
        mission.update(DAY_MATTER_PHENOMENON_POLISH[day])

    if day in DAY_UNIT1_PHENOMENON_POLISH:
        mission.update(DAY_UNIT1_PHENOMENON_POLISH[day])

    return mission
# End Unit 1 Phenomenon Mission Text Polish Days 9-16


# Unit 2 Phenomenon Mission Text Polish Days 17-26
DAY_UNIT2_PHENOMENON_POLISH = {
    17: {
        "title": "Beach Mixtures: What Happens When Materials Combine?",
        "tag": "Unit 2 • Mixtures",
        "focus_question": "What happens when two or more materials are combined into a mixture?",
        "notice": "Look at the different beach materials. Some materials can be mixed together but still keep their own properties.",
        "wonder": "How can we tell that sand, shells, salt, or water are still the same materials after they are combined?",
        "quick_explore": "Predict what will happen when two solid materials are combined. Will they change or keep their properties?",
        "evidence": "Record what you can still observe after the materials are mixed, such as color, size, shape, texture, or state of matter.",
        "cer": "The materials formed a mixture because..."
    },
    18: {
        "title": "Beach Mixtures: How Can We Separate Them?",
        "tag": "Unit 2 • Separating Mixtures",
        "focus_question": "How can physical properties help us separate mixtures?",
        "notice": "Look for materials that could be separated by size, magnetism, density, or filtering.",
        "wonder": "Which tool or property would work best to separate each mixture?",
        "quick_explore": "Choose a mixture and decide whether you would separate it with a magnet, sieve, filter, or by sorting.",
        "evidence": "Record the physical property that helped separate the materials.",
        "cer": "This mixture can be separated because..."
    },
    19: {
        "title": "Beach Mixtures: Filter, Sieve, or Evaporate?",
        "tag": "Unit 2 • Separation Methods",
        "focus_question": "How can filtering, sieving, and evaporation separate different mixtures?",
        "notice": "Look at the tools in the image. Filters, sieves, and evaporation dishes separate materials in different ways.",
        "wonder": "Why does one separation method work for some mixtures but not others?",
        "quick_explore": "Match each mixture to the best separation method: filter, sieve, evaporation, magnetism, or sorting.",
        "evidence": "Record which method separated the materials and what property made it work.",
        "cer": "The best way to separate this mixture is ___ because..."
    },
    20: {
        "title": "Beach Mixtures: What Is a Solution?",
        "tag": "Unit 2 • Solutions",
        "focus_question": "What makes a solution different from other mixtures?",
        "notice": "Look at materials mixed with water. Some materials dissolve and spread evenly through the liquid.",
        "wonder": "How can a material seem to disappear but still be part of the mixture?",
        "quick_explore": "Predict whether salt, sugar, sand, or gravel will form a solution when mixed with water.",
        "evidence": "Record whether the material dissolved evenly or stayed visible in the water.",
        "cer": "A solution forms when..."
    },
    21: {
        "title": "Beach Mixtures: Properties Before and After Mixing",
        "tag": "Unit 2 • Properties of Ingredients in Solutions",
        "focus_question": "Which properties stay the same when materials are mixed into a solution?",
        "notice": "Think about the ingredients before they are mixed and what you observe after mixing.",
        "wonder": "Does dissolving change what the ingredient is, or does it only spread the particles out?",
        "quick_explore": "Choose one solute and one solvent. Predict which properties can still be identified after mixing.",
        "evidence": "Record evidence that the ingredients are still present, even if they look different.",
        "cer": "The ingredients keep important properties because..."
    },
    22: {
        "title": "Beach Mixtures: Where Did the Solute Go?",
        "tag": "Unit 2 • Dissolving and Particle Models",
        "focus_question": "Where does a material go when it dissolves in water?",
        "notice": "Look at the cup after mixing. A dissolved material may no longer be easy to see.",
        "wonder": "If the solute is not visible, how can we know it is still there?",
        "quick_explore": "Draw or describe a particle model showing solute particles spreading through water.",
        "evidence": "Record evidence such as taste, mass, evaporation results, or particles spread evenly in the liquid.",
        "cer": "The dissolved material is still present because..."
    },
    23: {
        "title": "Beach Mixtures: Does Matter Disappear?",
        "tag": "Unit 2 • Conservation of Matter in Solutions",
        "focus_question": "How can mass show that matter is conserved when a solution forms?",
        "notice": "Think about measuring the mass before and after a solute dissolves in water.",
        "wonder": "If the solute is no longer visible, should the total mass change?",
        "quick_explore": "Predict the total mass after mixing water and a dissolving material.",
        "evidence": "Record the mass before mixing, the mass after mixing, and whether the total changed.",
        "cer": "Matter was conserved because..."
    },
    24: {
        "title": "Beach Mixtures: Measuring Before and After",
        "tag": "Unit 2 • Measurement Evidence",
        "focus_question": "How can measuring before and after mixing provide evidence about matter?",
        "notice": "Scientists use measurements, not just observations, to support claims about matter.",
        "wonder": "Which measurement gives stronger evidence: what you see, or the mass before and after?",
        "quick_explore": "Compare observations and mass data from a mixture or solution.",
        "evidence": "Record the measurement that supports whether matter was conserved.",
        "cer": "The measurement evidence shows..."
    },
    25: {
        "title": "Beach Mixtures: Tiny Particle Model",
        "tag": "Unit 2 • Particles in Solutions",
        "focus_question": "How can a particle model explain a solution?",
        "notice": "A solution looks even throughout because tiny particles are spread through the solvent.",
        "wonder": "How could we draw particles to show a solute dissolved in water?",
        "quick_explore": "Create a simple particle model showing solute particles evenly spread in a solvent.",
        "evidence": "Use your model to show that the solute particles are still present and spread evenly.",
        "cer": "The particle model explains the solution because..."
    },
    26: {
        "title": "Beach Mixtures: Unit 2 Evidence Challenge",
        "tag": "Unit 2 • Mixtures and Solutions Review",
        "focus_question": "How can evidence help us explain mixtures, solutions, separation, and conservation of matter?",
        "notice": "Look back at the tools and materials from the unit. Each investigation gives evidence about how matter behaves.",
        "wonder": "Which evidence would best support a STAAR-style answer about mixtures or solutions?",
        "quick_explore": "Choose one mixture or solution and explain it using vocabulary from the unit.",
        "evidence": "Record evidence using words such as mixture, solution, solute, solvent, dissolve, separate, filter, sieve, evaporate, and conserve.",
        "cer": "I can explain mixtures and solutions using evidence because..."
    },
}


def get_phenomenon_mission(day):
    day = int(day)
    key = DAY_TO_PHENOMENON.get(day, "mystery_matter")
    mission = dict(PHENOMENON_IMAGE_SETS[key])
    mission["day"] = day
    mission["key"] = key

    if day in DAY_FOCUS_OVERRIDES:
        mission["focus_question"] = DAY_FOCUS_OVERRIDES[day]

    if "DAY_MATTER_PHENOMENON_POLISH" in globals() and day in DAY_MATTER_PHENOMENON_POLISH:
        mission.update(DAY_MATTER_PHENOMENON_POLISH[day])

    if "DAY_UNIT1_PHENOMENON_POLISH" in globals() and day in DAY_UNIT1_PHENOMENON_POLISH:
        mission.update(DAY_UNIT1_PHENOMENON_POLISH[day])

    if day in DAY_UNIT2_PHENOMENON_POLISH:
        mission.update(DAY_UNIT2_PHENOMENON_POLISH[day])

    return mission
# End Unit 2 Phenomenon Mission Text Polish Days 17-26

