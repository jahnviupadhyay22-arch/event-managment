
from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)
def create_table():

    con = sqlite3.connect("database.db")

    con.execute("""
        CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            event TEXT
        )
    """)

    con.commit()
    con.close()
@app.route("/")
def home():

    return render_template("index.html")
@app.route("/book", methods=["POST"])
def book():

    name = request.form["name"]
    email = request.form["email"]
    event = request.form["event"]

    con = sqlite3.connect("database.db")

    con.execute(
        "INSERT INTO bookings (name, email, event) VALUES (?, ?, ?)",
        (name, email, event)
    )

    con.commit()
    con.close()

    return render_template(
        "index.html",
        message="Your booking is successful!"
    )


if __name__ == "__main__":

    create_table()

    app.run(debug=True)
