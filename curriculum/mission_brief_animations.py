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

