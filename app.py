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
    return render_template("first_nine_weeks.html")
if __name__ == "__main__":
    app.run(debug=True)
