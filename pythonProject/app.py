from flask import Flask, redirect, render_template
from flask import request
import os, datetime
import sqlite3
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import false
from werkzeug.exceptions import abort

project_dir = os.path.dirname(os.path.abspath(__file__))
database_file = "sqlite:///{}".format(os.path.join(project_dir, "database.db"))

app = Flask('__name__')
app.config['SECRET_KEY'] = 'your secret key'
app.config["SQLALCHEMY_DATABASE_URI"] = database_file
db = SQLAlchemy(app)


class POSTS(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    proprietarionome = db.Column(db.String(120), nullable=False)
    razaosocial = db.Column(db.String(120), nullable=False)
    cnpj_cpf = db.Column(db.Numeric(15))
    cidade = db.Column(db.String(80), nullable=False)
    UF = db.Column(db.String(80), nullable=False)
    cidade = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    telefone = db.Column(db.Numeric(15), nullable=False)
    datacadastro = db.Column(db.DateTime, default=datetime.datetime.utcnow)


@app.route('/')
def home():
    posts: Posts.query.all()
    return render_template('index.html', posts=posts)


if __name__ == "__main__":
    app.run(debug=True)