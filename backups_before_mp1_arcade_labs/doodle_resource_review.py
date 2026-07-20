def get_review_doodle_resource(day):
    day = int(day)

    review = {
        44: {
            "title": "Science Stations Review Doodle Notes",
            "word_bank": [
                "review",
                "station",
                "vocabulary",
                "model",
                "evidence",
                "STAAR strategy",
                "reflection"
            ],
            "label_pictures": [
                {"icon": "review station", "answer": "review station", "clue": "A place to practice one science skill"},
                {"icon": "vocabulary review", "answer": "vocabulary review", "clue": "Use science words correctly"},
                {"icon": "model review", "answer": "model", "clue": "A picture or diagram that explains a science idea"},
                {"icon": "staar strategy", "answer": "STAAR strategy", "clue": "Read, underline, use evidence, and eliminate choices"},
            ],
            "fill_blanks": [
                {"sentence": "A review station helps me practice one science ___ at a time.", "answer": "skill"},
                {"sentence": "A science model should include labels and ___.", "answer": "evidence"},
                {"sentence": "On STAAR questions, I should read carefully and eliminate choices that do not match the ___.", "answer": "evidence"},
                {"sentence": "A strong science answer uses vocabulary, data, and ___.", "answer": "reasoning"},
            ],
            "model_prompt": "Create a review map for the first 9 weeks. Include one box for matter, mixtures and solutions, force and motion, and energy transformations.",
        },

        45: {
            "title": "1st 9 Weeks Test Reflection Doodle Notes",
            "word_bank": [
                "test reflection",
                "strength",
                "growth",
                "goal",
                "evidence",
                "strategy",
                "next step"
            ],
            "label_pictures": [
                {"icon": "test reflection", "answer": "test reflection", "clue": "Think about what you learned and how you tested"},
                {"icon": "strength", "answer": "strength", "clue": "Something you did well"},
                {"icon": "growth", "answer": "growth", "clue": "Something you can improve"},
                {"icon": "goal", "answer": "goal", "clue": "A next step for learning"},
            ],
            "fill_blanks": [
                {"sentence": "A strength is something I did ___.", "answer": "well"},
                {"sentence": "Growth means something I can continue to ___.", "answer": "improve"},
                {"sentence": "My next goal should be specific and ___.", "answer": "realistic"},
                {"sentence": "When I correct a missed question, I should explain the correct answer with ___.", "answer": "evidence"},
            ],
            "model_prompt": "Create a reflection shield. Label one science strength, one area for growth, one STAAR strategy, and one goal for the next 9 weeks.",
        },
    }

    return review.get(day)
