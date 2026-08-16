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
