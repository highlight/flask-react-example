import logging
import random

from flask import Flask, jsonify
from flask_cors import CORS

import highlight_io
from highlight_io.integrations.flask import FlaskIntegration

app = Flask(__name__)
CORS(app)

# `instrument_logging=True` sets up logging instrumentation.
# if you do not want to send logs or are using `loguru`, pass `instrument_logging=False`
H = highlight_io.H(
	"lgxy4pdm",
	integrations=[FlaskIntegration()],
	instrument_logging=True,
	service_name="my-flask-app",
	service_version="git-sha",
)

@app.route("/")
def hello_world():
    logging.info('hello, world!')
    return "<p>Hello, World!</p>"

@app.route("/json")
def json():
    value = 7. / random.randint(0, 10)
    logging.info('returning json!', {'random': value})
    return jsonify({'hello': 'world!', 'value': value})

@app.route("/error")
def error():
    return f"<p>Hello, { 5 / 0 } World!</p>"
