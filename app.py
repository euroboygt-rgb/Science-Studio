from flask import Flask, render_template, request
from curriculum.first_nine_weeks import first_nine_weeks as first_nine_weeks_lessons
from curriculum.day1 import day1
from curriculum.day2 import day2
from curriculum.day3 import day3
from curriculum.day4 import day4
from curriculum.day5 import day5
from curriculum.day6 import day6
from curriculum.day7 import day7
from curriculum.day8 import day8
from curriculum.day9 import day9
from curriculum.day10 import day10
from curriculum.day11 import day11
from curriculum.day12 import day12
from curriculum.day13 import day13
from curriculum.day14 import day14
from curriculum.day15 import day15

app = Flask(__name__)


lesson_details = {
    1: day1,
    2: day2,
    3: day3,
    4: day4,
    5: day5,
    6: day6,
    7: day7,
    8: day8,
    9: day9,
    10: day10,
    11: day11,
    12: day12,
    13: day13,
    14: day14,
    15: day15,
}


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/labs")
def labs():
    return render_template("labs.html")


@app.route("/labs/mass-volume")
def mass_volume_lab():
    return render_template("mass_volume_lab.html")


@app.route("/labs/sink-float")
def sink_float_lab():
    return render_template("sink_float_lab.html")

@app.route("/labs/liquid-density")
def liquid_density_lab():
    return render_template("liquid_density_lab.html")



@app.route("/labs/solubility")
def solubility_lab():
    return render_template("solubility_lab.html")


@app.route("/labs/conductivity")
def conductivity_lab():
    return render_template("conductivity_lab.html")

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