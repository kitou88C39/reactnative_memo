const CreateTableLabels = `
CREATE TABLE IF NOT EXISTS labels(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    color TEXT NOT NULL,
)
`;
