// app.js
import express from "express"
import mysql from "mysql2/promise"


const pool = mysql.createPool({
  host:"localhost",
  user:"sbsst",
  password:"sbs123414",
  database:"a1",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  });

const app = express()
const port = 3000





app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/todos", async (req, res) => {

  const [rows] = await pool.query("SELECT * FROM article ORDER BY id DESC");

  res.json(rows);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});