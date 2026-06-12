import os
from flask import Flask, request, jsonify, render_template, send_from_directory, abort
from src.truth_table import compute_truth_table


app = Flask(__name__, template_folder="web")
EXPOSED_DIR = os.path.abspath("./web")


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/src/<path:filename>")
def src_files(filename):
    return send_from_directory(os.path.join("web", "src"), filename)


@app.route("/evaluate", methods=["POST"])
def evaluate_web():
    data = request.get_json()
    expression = data.get("expression", "").strip()
    if not expression:
        return jsonify({"error": "No expression provided"}), 400
    try:
        result = compute_truth_table(expression)
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 400


if __name__ == "__main__":
    app.run(debug=True, port=5000)
