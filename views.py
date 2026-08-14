from main import app
from flask import render_template
lightmode = False

@app.route("/")
def homepage():
    text = "shit"
    return render_template("index.html",text=text)
