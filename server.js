require("dotenv").config();

const express = require("express");
const mysql = require("mysql2/promise");
const path = require("path");

const app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const db = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "annapurna_db",
    waitForConnections: true,
    connectionLimit: 10
});

// Save a donation pledge in MySQL
app.post("/api/donations", async (req, res) => {
    try {
        const name = String(req.body.name || "").trim();
        const email = String(req.body.email || "").trim();
        const amount = Number(req.body.amount);
        const message = String(req.body.message || "").trim();

        if (!name || name.length > 100) {
            return res.status(400).json({ message: "Please enter a valid name (maximum 100 characters)." });
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 150) {
            return res.status(400).json({ message: "Please enter a valid email address." });
        }

        if (![100, 250, 500, 1000].includes(amount)) {
            return res.status(400).json({ message: "Please select one of the available donation amounts." });
        }

        if (message.length > 500) {
            return res.status(400).json({ message: "Message must be 500 characters or fewer." });
        }

        const sql = `
            INSERT INTO donations (donor_name, email, amount, message)
            VALUES (?, ?, ?, ?)
        `;

        const [result] = await db.execute(sql, [name, email, amount, message]);

        return res.status(201).json({
            message: "Thank you! Your donation pledge has been saved.",
            donationId: result.insertId
        });
    } catch (error) {
        console.error("Donation save error:", error.message);
        return res.status(500).json({
            message: "Unable to save your pledge right now. Please try again."
        });
    }
});

app.get("/api/health", (req, res) => {
    res.json({ message: "Annapurna backend is running." });
});

app.listen(PORT, () => {
    console.log("Server running at http://localhost:5000" + PORT);
});
