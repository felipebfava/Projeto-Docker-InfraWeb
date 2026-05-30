const express = require("express");
const cors = require("cors");

const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/tasks", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM tasks ORDER BY id"
  );

  res.json(result.rows);
});

app.post("/tasks", async (req, res) => {

  const { task } = req.body;

  const result = await pool.query(
    "INSERT INTO tasks(task) VALUES($1) RETURNING *",
    [task]
  );

  res.status(201).json(result.rows[0]);
});

app.delete("/tasks/:id", async (req, res) => {

  await pool.query(
    "DELETE FROM tasks WHERE id=$1",
    [req.params.id]
  );

  res.sendStatus(204);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});