from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(_name_)
CORS(app)

# 📦 Database Setup
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",           # Update if needed
    database="resume_db"       # Ensure this DB exists
)
cursor = db.cursor()

# 📄 Create Tables (Users and Jobs)
cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255)
)
""")

cursor.execute("""
CREATE TABLE IF NOT EXISTS jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL
)
""")

db.commit()

# ✅ Signup API
@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    full_name = data.get("fullName")
    email = data.get("email")
    password = data.get("password")

    try:
        cursor.execute("INSERT INTO users (full_name, email, password) VALUES (%s, %s, %s)",
                       (full_name, email, password))
        db.commit()
        return jsonify({"success": True, "message": "Signup successful!"})
    except mysql.connector.errors.IntegrityError:
        return jsonify({"success": False, "error": "Email already exists!"}), 400

# ✅ Login API
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    cursor.execute("SELECT * FROM users WHERE email = %s AND password = %s", (email, password))
    user = cursor.fetchone()

    if user:
        return jsonify({"success": True, "message": "Login successful!"})
    else:
        return jsonify({"success": False, "error": "Invalid email or password!"}), 401

# ✅ Create Job API
@app.route("/jobs", methods=["POST"])
def create_job():
    data = request.json
    title = data.get("title")

    if not title:
        return jsonify({"success": False, "error": "Title is required"}), 400

    cursor.execute("INSERT INTO jobs (title) VALUES (%s)", (title,))
    db.commit()
    return jsonify({"success": True, "message": "Job created"})

# ✅ Fetch All Jobs API
@app.route("/jobs", methods=["GET"])
def get_jobs():
    cursor.execute("SELECT * FROM jobs")
    jobs = [{"id": row[0], "title": row[1]} for row in cursor.fetchall()]
    return jsonify(jobs)

# ▶️ Run Server
if _name_ == "_main_":
    app.run(port=5001)