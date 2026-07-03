from flask import Flask, render_template, request
from curriculum.first_nine_weeks import first_nine_weeks as first_nine_weeks_lessons
from curriculum.day1 import day1
from curriculum.day2 import day2
from curriculum.day3 import day3
from curriculum.day4 import day4

app = Flask(__name__)


lesson_details = {
    1: day1,
    2: day2,
    3: day3,
    4: day4,
}


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/labs")
def labs():
    return render_template("labs.html")


@app.route("/first-nine-weeks")
def first_nine_weeks_page():
    return render_template(
        "first_nine_weeks.html",
        lessons=first_nine_weeks_lessons
    )


@app.route("/first-nine-weeks/day/<int:day>")
def lesson_detail(day):
    view_mode = request.args.get("view", "teacher")

    if view_mode not in ["teacher", "student"]:
        view_mode = "teacher"

    if day in lesson_details:
        return render_template(
            "lesson_detail.html",
            lesson=lesson_details[day],
            view_mode=view_mode
        )

    selected_lesson = None

    for lesson in first_nine_weeks_lessons:
        if lesson["day"] == day:
            selected_lesson = lesson

    return render_template(
        "lesson_detail.html",
        lesson=selected_lesson,
        view_mode=view_mode
    )


if __name__ == "__main__":
    app.run(debug=True)