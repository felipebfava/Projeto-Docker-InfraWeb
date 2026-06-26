const express = require("express");
const cors = require("cors");

const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/health", (req, res) => {

    res.status(200).json({
        status: "ok"
    });

});


app.get("/tasks", async (req, res) => {
    try {

        const result = await pool.query(
            "SELECT * FROM tasks ORDER BY id"
        );

        return res.json(result.rows);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            error: "Erro ao buscar tarefas"
        });
    }
});

app.get("/tasks/:id", async (req, res) => {

    try {

        const result = await pool.query(

            "SELECT * FROM tasks WHERE id = $1",

            [req.params.id]
        );

        // Caso não exista uma tarefa com esse ID
        if (result.rows.length === 0) {

            return res.status(404).json({
                error: "Tarefa não encontrada"
            });
        }

        // Retorna apenas a tarefa encontrada
        return res.json(result.rows[0]);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            error: "Erro ao buscar tarefa"
        });
    }
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
