
from flask import Flask, render_template, url_for
import datetime

app = Flask(__name__)

@app.route('/')
def home():
    # Pass current year to template for footer copyright
    current_year = datetime.datetime.now().year
    return render_template('index.html', current_year=current_year)

if __name__ == '__main__':
    app.run(debug=True)
