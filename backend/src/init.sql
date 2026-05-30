CREATE TABLE IF NOT EXISTS tasks(

 id SERIAL PRIMARY KEY,

 task TEXT NOT NULL
);

INSERT INTO tasks(task)
VALUES
('Atualizar arquivo README'),
('Estudar Kubernetes');