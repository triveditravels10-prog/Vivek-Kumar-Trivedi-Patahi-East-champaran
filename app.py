from flask import Flask, render_template_string

app = Flask(__name__)

@app.route("/")
def home():
    return "Website Running Successfully!"

if __name__ == "__main__":
    app.run(debug=True)
