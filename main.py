from flask import Flask
app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True
from views import *

if __name__ == "__main__":
    app.run(debug=True)