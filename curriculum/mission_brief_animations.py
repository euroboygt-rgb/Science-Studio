MISSION_BRIEF_ANIMATIONS = {
    3: {
        "title": "Mission Brief: Matter Is Everywhere",
        "subtitle": "Day 3 • Introduction to Matter",
        "theme": "matter",
        "slides": [
            {
                "icon": "🚀",
                "heading": "Welcome, Scientists",
                "text": "Today’s mission is to investigate matter.",
                "caption": "Matter is all around us."
            },
            {
                "icon": "⚖️",
                "heading": "What Is Matter?",
                "text": "Matter is anything that has mass and takes up space.",
                "caption": "Mass tells how much matter something has. Volume tells how much space it takes up."
            },
            {
                "icon": "🧊",
                "heading": "Matter Has States",
                "text": "Solids, liquids, and gases are all matter.",
                "caption": "Matter can have different forms, but it still has mass and takes up space."
            },
            {
                "icon": "✏️",
                "heading": "Matter Examples",
                "text": "A pencil is matter. Water is matter. Air is matter too.",
                "caption": "Even when we cannot see air, it still takes up space."
            },
            {
                "icon": "🤔",
                "heading": "Pause and Think",
                "text": "How could you prove that air is matter?",
                "caption": "Hint: Think about a balloon, a bag of air, or bubbles in water."
            },
            {
                "icon": "⭐",
                "heading": "STAAR Tip",
                "text": "Look for evidence like mass, volume, shape, or state of matter.",
                "caption": "Good scientists use evidence, not guesses."
            }
        ]
    }
}


def get_mission_brief(day):
    day = int(day)
    return MISSION_BRIEF_ANIMATIONS.get(day)


# Day 4 Mission Brief Animation
MISSION_BRIEF_ANIMATIONS[4] = {
    "title": "Mission Brief: Measuring Mass",
    "subtitle": "Day 4 • Mass and Science Tools",
    "theme": "matter",
    "slides": [
        {
            "icon": "⚖️",
            "heading": "Today’s Mission",
            "text": "Today we will measure and compare the mass of different objects.",
            "caption": "Mass tells how much matter something has."
        },
        {
            "icon": "🧱",
            "heading": "What Is Mass?",
            "text": "Mass is the amount of matter in an object.",
            "caption": "An object with more matter usually has greater mass."
        },
        {
            "icon": "🔬",
            "heading": "Science Tool",
            "text": "Scientists use a balance or scale to measure mass.",
            "caption": "A balance helps compare how much matter objects have."
        },
        {
            "icon": "📏",
            "heading": "Measurement Units",
            "text": "Mass is often measured in grams or kilograms.",
            "caption": "Small classroom objects are usually measured in grams."
        },
        {
            "icon": "🤔",
            "heading": "Pause and Think",
            "text": "Which has more mass: a pencil or a science textbook?",
            "caption": "Explain your answer using evidence, not just a guess."
        },
        {
            "icon": "⭐",
            "heading": "STAAR Tip",
            "text": "When a question asks about mass, look for the tool, the unit, and the data.",
            "caption": "The best answer should match the measurement evidence."
        }
    ]
}
# End Day 4 Mission Brief Animation


# Day 5 Mission Brief Animation
MISSION_BRIEF_ANIMATIONS[5] = {
    "title": "Mission Brief: Measuring Volume",
    "subtitle": "Day 5 • Volume and Space Matter Takes Up",
    "theme": "matter",
    "slides": [
        {
            "icon": "🧪",
            "heading": "Today’s Mission",
            "text": "Today we will measure and compare the volume of matter.",
            "caption": "Volume tells how much space matter takes up."
        },
        {
            "icon": "📦",
            "heading": "What Is Volume?",
            "text": "Volume is the amount of space an object or substance takes up.",
            "caption": "Solids, liquids, and gases all have volume."
        },
        {
            "icon": "🌊",
            "heading": "Liquid Volume",
            "text": "Scientists use a graduated cylinder to measure the volume of liquids.",
            "caption": "Liquid volume is often measured in milliliters, or mL."
        },
        {
            "icon": "🪨",
            "heading": "Irregular Solids",
            "text": "Water displacement can help measure the volume of an irregular solid.",
            "caption": "When an object is placed in water, the water level rises."
        },
        {
            "icon": "🤔",
            "heading": "Pause and Think",
            "text": "If a rock makes the water level rise, what does that tell us about the rock?",
            "caption": "Hint: The rock takes up space."
        },
        {
            "icon": "⭐",
            "heading": "STAAR Tip",
            "text": "When a question shows water levels before and after, subtract to find the object’s volume.",
            "caption": "Final water level minus starting water level equals the object’s volume."
        }
    ]
}
# End Day 5 Mission Brief Animation

