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

