from curriculum.first_nine_weeks import first_nine_weeks
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")
@app.route("/labs")
def labs():
    return render_template("labs.html")

@app.route("/first-nine-weeks")
def first_nine_weeks():
    return render_template("first_nine_weeks.html", lessons=first_nine_weeks)

@app.route("/first-nine-weeks/day/<int:day>")
def lesson_detail(day):
    selected_lesson = None

    for lesson in first_nine_weeks:
        if lesson["day"] == day:
            selected_lesson = lesson

    return render_template("lesson_detail.html", lesson=selected_lesson)
if __name__ == "__main__":
    app.run(debug=True)
