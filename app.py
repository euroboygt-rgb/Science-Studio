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
from curriculum.day16 import day16
from curriculum.day17 import day17
from curriculum.day18 import day18
from curriculum.day19 import day19
from curriculum.day20 import day20
from curriculum.day21 import day21
from curriculum.day22 import day22
from curriculum.day23 import day23
from curriculum.day24 import day24
from curriculum.day25 import day25
from curriculum.day26 import day26

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
    16: day16,
    17: day17,
    18: day18,
    19: day19,
    20: day20,
    21: day21,
    22: day22,
    23: day23,
    24: day24,
    25: day25,
    26: day26,
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


@app.route("/labs/unit1-review")
def unit1_review_game():
    return render_template("unit1_review_game.html")


@app.route("/labs/mixtures")
def mixtures_lab():
    return render_template("mixtures_lab.html")


@app.route("/labs/particle-size")
def particle_size_lab():
    return render_template("particle_size_lab.html")


@app.route("/labs/magnet-separation")
def magnet_separation_lab():
    return render_template("magnet_separation_lab.html")


@app.route("/labs/relative-density-mixtures")
def relative_density_mixtures_lab():
    return render_template("relative_density_mixtures_lab.html")


@app.route("/labs/solutions")
def solutions_lab():
    return render_template("solutions_lab.html")


@app.route("/labs/evaporation")
def evaporation_lab():
    return render_template("evaporation_lab.html")


@app.route("/labs/conservation-matter")
def conservation_matter_lab():
    return render_template("conservation_matter_lab.html")


@app.route("/labs/unit2-review")
def unit2_review_game():
    return render_template("unit2_review_game.html")


@app.route("/labs/particles")
def particles_lab():
    return render_template("particles_lab.html")


@app.route("/labs/unit2-performance")
def unit2_performance_game():
    return render_template("unit2_performance_game.html")


@app.route("/labs/forces")
def forces_lab():
    return render_template("forces_lab.html")

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