const CreateTableLabels = `
CREATE TABLE IF NOT EXISTS labels
  (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    color TEXT NOT NULL,
    created_at TEXT DEFAULT(DATETIME('now','localtime')),
    updated_at TEXT DEFAULT(DATETIME('now','localtime'))
  );
`;

const CreateTableLabels = `
CREATE TABLE IF NOT EXISTS labels
  (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    color TEXT NOT NULL,
    created_at TEXT DEFAULT(DATETIME('now','localtime')),
    updated_at TEXT DEFAULT(DATETIME('now','localtime'))
  );
`;

const InsertLabel = `
INSERT INTO labels(
  name,
  color,
  ) VALUES (
    ?,
    ?
  );
`;

const LabelQueries = Object.freeze({
  CREATE_TABLE: CreateTableLabels,
  INSERT: InsertLabel
});

export { LabelQueries };
