const CreateTableMemos = `
CREATE TABLE IF NOT EXISTS memos
(
    id TEXT,
    labelId  INTEGER,
    title TEXT NOT NULL,
    content TEXT,
    created_at TEXT DEFAULT(DATETIME('now','localtime')),
    updated_at TEXT DEFAULT(DATETIME('now','localtime'))
    PRIMARY KEY(id),
    FOREIGN KEY(labelId) REFERENCES labels(id),
)
`;

const MemolQueries = Object.freeze({
  CREATE_TABLE: CreateTableMemos
});

export { MemolQueries };
