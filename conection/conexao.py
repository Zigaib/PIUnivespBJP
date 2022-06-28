<<<<<<< HEAD
from flask_sqlalchemy import SQLAlchemy as sa
from flask import Flask
import os

app = Flask(__name__, template_folder=os.path.abspath('templates'), static_folder=os.path.abspath('static'), static_url_path='/static')

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///db_clientes.db'
app.config['SECRET_KEY'] = '@ALKSjsjhfdh%$fdbdh'

db=sa(app)

db.Model.metadata.reflect(db.engine)
=======
from flask_sqlalchemy import SQLAlchemy as sa
from flask import Flask
import os

app = Flask(__name__, template_folder=os.path.abspath('templates'), static_folder=os.path.abspath('static'), static_url_path='/static')

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///db_clientes.db'
app.config['SECRET_KEY'] = '@ALKSjsjhfdh%$fdbdh'

db=sa(app)

db.Model.metadata.reflect(db.engine)
>>>>>>> 12e076efd21c6c10890e0566ea21362fccda2684
