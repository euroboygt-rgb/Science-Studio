def make_resource(day, slug, title, unit, resource_type, student_task, vocabulary, panels, staar_practice):
  return {
    "day": day,
    "slug": slug,
    "title": title,
    "unit": unit,
    "resource_type": resource_type,
    "student_task": student_task,
    "vocabulary": vocabulary,
    "panels": panels,
    "staar_practice": staar_practice,
    "lesson_link": f"/first-nine-weeks/day/{day}?view=student",
    "teacher_link": f"/first-nine-weeks/day/{day}?view=teacher",
  }


resource_folders = [
  {
    "id": "setup",
    "title": "Classroom Setup Resources",
    "icon": "🧰",
    "description": "Routines, notebooks, science tools, and lab safety.",
    "resources": [
      make_resource(
        1,
        "day-1-classroom-routines",
        "Classroom Rituals and Routines Checklist",
        "Classroom Setup",
        "Student Checklist",
        "Create a checklist for how scientists enter class, start work, collaborate, clean up, and exit.",
        ["ritual", "routine", "collaboration", "evidence"],
        ["Enter Like a Scientist", "Work With a Team", "Use Evidence", "Exit Reflection"],
        "Why do classroom routines help scientists collect better data?"
      ),
      make_resource(
        2,
        "day-2-notebook-setup",
        "Science Notebook and Lab Notebook Setup Insert",
        "Classroom Setup",
        "Notebook Insert",
        "Set up your science notebook and lab notebook so your work is organized and easy to find.",
        ["science notebook", "lab notebook", "data", "reflection"],
        ["Table of Contents", "Vocabulary Pages", "Lab Pages", "Reflection Pages"],
        "Which notebook section would be best for recording observations from an investigation?"
      ),
      make_resource(
        3,
        "day-3-science-tools",
        "Science Tools Foldable",
        "Classroom Setup",
        "Foldable",
        "Match each science tool to what it measures and the unit used.",
        ["balance", "graduated cylinder", "thermometer", "hand lens", "metric ruler", "spring scale"],
        ["Tool Name", "What It Measures", "Unit of Measurement", "Draw the Tool"],
        "A student needs to measure the volume of a liquid. Which tool should the student use?"
      ),
      make_resource(
        4,
        "day-4-lab-safety",
        "Lab Safety Foldable",
        "Classroom Setup",
        "Foldable",
        "Identify safe and unsafe lab behaviors and explain why safety matters.",
        ["safety goggles", "procedure", "materials", "observe"],
        ["Before the Lab", "During the Lab", "After the Lab", "Unsafe vs. Safe"],
        "Which action should a student take before beginning a lab investigation?"
      ),
    ],
  },
  {
    "id": "unit1",
    "title": "Unit 1: Matter and Physical Properties",
    "icon": "🧱",
    "description": "Matter, physical properties, states of matter, mass, volume, density, solubility, conductors, and insulators.",
    "resources": [
      make_resource(5, "day-5-physical-properties", "Physical Properties Foldable", "Unit 1", "Foldable", "Sort objects by physical properties and explain how each property can be observed or measured.", ["matter", "physical property", "mass", "volume", "magnetism", "solubility", "relative density"], ["Property", "How to Test It", "Example Object", "Evidence"], "Which physical property is tested when an object is placed near a magnet?"),
      make_resource(6, "day-6-states-of-matter", "States of Matter Foldable", "Unit 1", "Foldable", "Compare solids, liquids, and gases using shape, volume, and particle movement.", ["solid", "liquid", "gas", "physical state", "volume"], ["Solid", "Liquid", "Gas", "Particle Model"], "A liquid keeps the same volume but changes shape. Which evidence supports that statement?"),
      make_resource(7, "day-7-magnetism", "Magnetism Foldable", "Unit 1", "Foldable", "Predict and explain which objects are magnetic and which are not.", ["magnetism", "attract", "repel", "magnetic material"], ["What Magnets Do", "Magnetic Objects", "Not Magnetic Objects", "Evidence"], "A magnet attracts a steel paper clip but not a plastic spoon. What conclusion is supported?"),
      make_resource(8, "day-8-mass", "Mass Measurement Foldable", "Unit 1", "Foldable", "Explain how a balance scale measures mass in grams.", ["mass", "matter", "balance", "grams"], ["What Is Mass?", "Tool Used", "Unit Used", "Example Measurement"], "A scale balances with 50 g + 20 g + 10 g. What is the mass of the object?"),
      make_resource(9, "day-9-volume", "Volume and Displacement Foldable", "Unit 1", "Foldable", "Use a graduated cylinder to measure liquid volume and object volume by displacement.", ["volume", "milliliter", "graduated cylinder", "displacement"], ["Liquid Volume", "Starting Volume", "Final Volume", "Object Volume"], "Water rises from 40 mL to 58 mL when a rock is added. What is the rock's volume?"),
      make_resource(10, "day-10-mass-volume", "Mass and Volume Lab Sheet", "Unit 1", "Lab Sheet", "Record mass and volume data for objects and explain how the properties are different.", ["mass", "volume", "data", "evidence"], ["Question", "Data Table", "Observation", "CER"], "Why should mass and volume be measured with different tools?"),
      make_resource(11, "day-11-sink-float", "Sink or Float Relative Density Foldable", "Unit 1", "Foldable", "Use sink and float observations to describe relative density.", ["relative density", "sink", "float", "water"], ["Floats", "Sinks", "Evidence", "Conclusion"], "An object floats in water. What can you infer about its relative density?"),
      make_resource(12, "day-12-liquid-density", "Liquids in Liquids Density Foldable", "Unit 1", "Foldable", "Model how liquids layer based on relative density.", ["relative density", "liquid", "layer", "sink", "float"], ["Top Layer", "Middle Layer", "Bottom Layer", "Density Evidence"], "If oil stays above water, what does this show about oil's relative density?"),
      make_resource(13, "day-13-solubility", "Solubility Foldable", "Unit 1", "Foldable", "Sort materials as soluble or insoluble and explain the evidence.", ["solubility", "soluble", "insoluble", "dissolve"], ["Soluble", "Insoluble", "Test Method", "Evidence"], "Sugar disappears after stirring in water. Which property is being tested?"),
      make_resource(14, "day-14-conductors-insulators", "Conductors and Insulators Foldable", "Unit 1", "Foldable", "Compare materials that allow or block energy flow.", ["conductor", "insulator", "energy", "electricity"], ["Conductors", "Insulators", "Circuit Evidence", "Real-World Example"], "A bulb lights when copper wire is used. What property does copper have?"),
      make_resource(15, "day-15-unit-1-review", "Unit 1 Matter Review Foldable", "Unit 1", "Review Foldable", "Review the major physical properties of matter from Unit 1.", ["matter", "mass", "volume", "magnetism", "solubility", "relative density"], ["Vocabulary", "Tools", "Examples", "STAAR Evidence"], "Which data would best support a claim about an object's physical properties?"),
    ],
  },
  {
    "id": "unit2",
    "title": "Unit 2: Mixtures and Solutions",
    "icon": "🧪",
    "description": "Mixtures, separation methods, solutions, evaporation, conservation of matter, and particles too small to see.",
    "resources": [
      make_resource(16, "day-16-mixtures", "Mixture Foldable", "Unit 2", "Foldable", "Describe mixtures and explain how their parts can be separated.", ["mixture", "physical property", "separate"], ["What Is a Mixture?", "Examples", "Properties", "How to Separate"], "Which example is a mixture that can be separated physically?"),
      make_resource(17, "day-17-particle-size", "Particle Size Separation Foldable", "Unit 2", "Foldable", "Explain how screens and filters separate materials by particle size.", ["particle", "particle size", "screen", "filter"], ["Large Particles", "Small Particles", "Tool Used", "Evidence"], "Which tool would best separate gravel from sand?"),
      make_resource(18, "day-18-magnetism-separation", "Magnetism Separation Foldable", "Unit 2", "Foldable", "Use magnetism to separate magnetic materials from a mixture.", ["magnetism", "mixture", "magnetic", "separate"], ["Mixture", "Magnetic Part", "Nonmagnetic Part", "Separation Tool"], "How could a student separate iron filings from sand?"),
      make_resource(19, "day-19-relative-density-separation", "Relative Density Separation Foldable", "Unit 2", "Foldable", "Separate materials using floating and sinking evidence.", ["relative density", "sink", "float", "mixture"], ["Floats", "Sinks", "Water Test", "Conclusion"], "A material floats while another sinks. Which property helps separate them?"),
      make_resource(20, "day-20-solutions", "Solutions Foldable", "Unit 2", "Foldable", "Identify solute, solvent, and solution in common examples.", ["solute", "solvent", "solution", "dissolve"], ["Solute", "Solvent", "Solution", "Example"], "In salt water, which substance is the solute?"),
      make_resource(21, "day-21-evaporation", "Evaporation Separation Foldable", "Unit 2", "Foldable", "Explain how evaporation can separate a dissolved solid from water.", ["evaporation", "solution", "solute", "solvent"], ["Before Evaporation", "During Evaporation", "After Evaporation", "Evidence"], "How can salt be separated from salt water?"),
      make_resource(22, "day-22-conservation-matter", "Conservation of Matter Foldable", "Unit 2", "Foldable", "Explain why matter is conserved when substances are mixed or dissolved.", ["conservation of matter", "mass", "solution", "matter"], ["Before Mass", "After Mass", "What Changed?", "What Stayed the Same?"], "Why should the total mass stay the same when sugar dissolves in water?"),
      make_resource(23, "day-23-unit-2-review", "Unit 2 Review Foldable", "Unit 2", "Review Foldable", "Review mixtures, solutions, separation methods, and conservation of matter.", ["mixture", "solution", "solute", "solvent", "particle", "conservation of matter"], ["Vocabulary", "Separation Methods", "Examples", "STAAR Evidence"], "Which separation method should be chosen based on the properties of the materials?"),
      make_resource(24, "day-24-particles-too-small", "Particles Too Small to See Foldable", "Unit 2", "Foldable", "Use models to explain that matter is made of particles too small to see.", ["particle", "solution", "model", "matter"], ["What We See", "What Particles Do", "Model Drawing", "Evidence"], "Why is a model helpful for explaining dissolved sugar particles?"),
      make_resource(25, "day-25-unit-2-performance", "Unit 2 Performance Assessment Planner", "Unit 2", "Planner", "Plan an explanation for separating a mixture using physical properties.", ["mixture", "solution", "separate", "evidence"], ["Problem", "Plan", "Data/Evidence", "Explanation"], "Which evidence best supports the chosen separation method?"),
    ],
  },
  {
    "id": "unit3",
    "title": "Unit 3: Force and Motion",
    "icon": "🚗",
    "description": "Forces, motion, gravity, friction, variables, data, graphing, investigations, and engineering design.",
    "resources": [
      make_resource(26, "day-26-force", "Force Foldable", "Unit 3", "Foldable", "Explain force as a push or pull that can change motion.", ["force", "push", "pull", "motion"], ["Push", "Pull", "Change in Motion", "Example"], "Which action is an example of a force?"),
      make_resource(27, "day-27-equal-forces", "Equal Forces Foldable", "Unit 3", "Foldable", "Explain why equal forces do not change an object's motion.", ["equal forces", "balanced forces", "motion"], ["Force 1", "Force 2", "Same Strength", "No Change"], "A box does not move when pushed equally from both sides. Why?"),
      make_resource(28, "day-28-unequal-forces", "Unequal Forces Foldable", "Unit 3", "Foldable", "Explain how unequal forces cause changes in motion.", ["unequal forces", "motion", "direction", "speed"], ["Stronger Force", "Weaker Force", "Direction of Motion", "Evidence"], "What happens when one force is stronger than the opposite force?"),
      make_resource(29, "day-29-strength-direction", "Strength and Direction Foldable", "Unit 3", "Foldable", "Compare how force strength and direction affect motion.", ["force", "strength", "direction", "motion"], ["Small Force", "Large Force", "Direction", "Motion Change"], "How can changing the direction of a force change an object's motion?"),
      make_resource(30, "day-30-gravity", "Gravity Foldable", "Unit 3", "Foldable", "Explain gravity as a force that pulls objects toward Earth.", ["gravity", "force", "pull", "Earth"], ["What Gravity Does", "Falling Object", "Orbit/Space", "Evidence"], "Why does a dropped object fall toward the ground?"),
      make_resource(31, "day-31-friction", "Friction Foldable", "Unit 3", "Foldable", "Explain how friction acts opposite motion and can slow objects down.", ["friction", "surface", "motion", "opposes"], ["Rough Surface", "Smooth Surface", "More Friction", "Less Friction"], "Why does a toy car travel farther on a smooth surface?"),
      make_resource(32, "day-32-magnetism-force", "Magnetism as a Force Foldable", "Unit 3", "Foldable", "Explain how magnets can cause motion without touching an object.", ["magnetism", "attract", "repel", "force"], ["Attract", "Repel", "Motion", "Evidence"], "How can a magnet move a paper clip without touching it?"),
      make_resource(33, "day-33-mechanical-energy", "Mechanical Energy Foldable", "Unit 3", "Foldable", "Describe mechanical energy as energy related to motion or position.", ["mechanical energy", "motion", "energy transfer"], ["Moving Object", "Energy Transfer", "Collision", "Example"], "Which object has mechanical energy?"),
      make_resource(34, "day-34-variables", "Variables Foldable", "Unit 3", "Foldable", "Identify independent, dependent, and controlled variables in a fair test.", ["independent variable", "dependent variable", "controlled variable", "fair test"], ["What I Change", "What I Measure", "What I Keep the Same", "Fair Test"], "In a ramp test, which variable is changed on purpose?"),
      make_resource(35, "day-35-graphing-data", "Graphing Data Foldable", "Unit 3", "Foldable", "Use data tables and graphs to identify patterns and support claims.", ["data", "graph", "pattern", "evidence"], ["Data Table", "Graph Title", "Axis Labels", "Pattern/Claim"], "Which graph feature helps show what is being measured?"),
      make_resource(36, "day-36-ramp-investigation", "Car on a Ramp Lab Sheet", "Unit 3", "Lab Sheet", "Plan and record a car-on-a-ramp investigation using variables and data.", ["force", "motion", "variable", "distance", "data"], ["Question", "Variables", "Data Table", "CER"], "How does ramp height affect the distance a car travels?"),
      make_resource(37, "day-37-balloon-rocket", "Balloon Rocket Lab Sheet", "Unit 3", "Lab Sheet", "Collect and explain balloon rocket data using force and motion vocabulary.", ["force", "motion", "air", "distance", "data"], ["Question", "Test Plan", "Data", "Explanation"], "What force causes the balloon rocket to move forward?"),
      make_resource(38, "day-38-ball-bounce-planner", "Ball Bounce Lab Planner", "Unit 3", "Planner", "Design a fair test to compare how high different balls bounce.", ["variable", "fair test", "bounce height", "data"], ["Question", "Variables", "Controls", "Prediction"], "Why must the drop height stay the same in a ball bounce test?"),
      make_resource(39, "day-39-data-analysis", "Data Analysis Foldable", "Unit 3", "Foldable", "Analyze ball bounce data and use evidence to support a claim.", ["data", "graph", "claim", "evidence", "reasoning"], ["Claim", "Evidence", "Reasoning", "Graph Pattern"], "Which evidence best supports a claim about bounce height?"),
      make_resource(40, "day-40-playground-engineering", "Playground Engineering Planner", "Unit 3", "Planner", "Use force, motion, and data to improve a playground safety design.", ["engineering", "force", "friction", "safety", "data"], ["Problem", "Design", "Test Data", "Improve"], "How can data help improve a playground design?"),
      make_resource(41, "day-41-unit-3-presentation", "Unit 3 Presentation Planner", "Unit 3", "Planner", "Plan a presentation using a model, data, vocabulary, and evidence.", ["model", "data", "force", "motion", "evidence"], ["My Model", "My Data", "My Explanation", "My Safety Claim"], "Which part of a presentation should include evidence from data?"),
    ],
  },
  {
    "id": "review",
    "title": "Review, Assessment, and Reflection Resources",
    "icon": "🎯",
    "description": "STAAR review, stations, assessment reflection, notebook check, and goal setting.",
    "resources": [
      make_resource(42, "day-42-staar-review", "STAAR Spiral Review Foldable", "Review", "Review Foldable", "Review major vocabulary and STAAR-style thinking from the 1st 9 weeks.", ["matter", "mixture", "force", "data", "evidence"], ["Unit 1 Review", "Unit 2 Review", "Unit 3 Review", "STAAR Strategy"], "What should you do first when a STAAR question includes a data table?"),
      make_resource(43, "day-43-stations-recording-sheet", "Science Stations Recording Sheet", "Review", "Recording Sheet", "Record evidence from each science review station.", ["station", "evidence", "model", "data"], ["Station Number", "What I Did", "Evidence", "Question I Still Have"], "Why is it important to record evidence at each station?"),
      make_resource(44, "day-44-assessment-reflection", "Assessment Reflection Sheet", "Review", "Reflection Sheet", "Use assessment results to identify strengths and growth areas.", ["assessment data", "strength", "growth area", "evidence"], ["My Score", "Strong Topic", "Growth Topic", "Next Step"], "How can assessment data help a student choose what to review?"),
      make_resource(45, "day-45-goal-setting", "Goal-Setting Reflection Sheet", "Review", "Reflection Sheet", "Set a science learning goal using data, notebook evidence, and reflection.", ["reflection", "goal", "action step", "evidence"], ["My Evidence", "My Goal", "My Action Step", "My Next Unit Question"], "Which goal is best supported by a student's assessment data?"),
    ],
  },
]

printable_resources = []
for folder in resource_folders:
  for resource in folder["resources"]:
    printable_resources.append(resource)

printable_resources_by_slug = {resource["slug"]: resource for resource in printable_resources}


printable_resources_by_day = {resource["day"]: resource for resource in printable_resources}
