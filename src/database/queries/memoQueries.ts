const CreateTableMemos = `
CREATE TABLE IF NOT EXISTS memos
  (
    id TEXT,
    label_id  INTEGER,
    title TEXT NOT NULL,
    content TEXT,
    created_at TEXT DEFAULT(DATETIME('now','localtime')),
    updated_at TEXT DEFAULT(DATETIME('now','localtime'))
    PRIMARY KEY(id),
    FOREIGN KEY(label_id) REFERENCES labels(id),
  );
`;

const SelectMemos = `
SELECT
  m.id,
  m.title,
  m.content,
  m.label_id,
  m.created_at,
  m.updated_at,
  l.name,
  l.color
FROM
  memos m
LEFT JOIN
  labels l ON m.label_id = l.id;
FROM
  memos m
LEFT JOIN
  labels l ON m.label_id = l.id;
ORDER BY
  m.updated_at DESC;
`;

const InsertMemo = `
INSERT INTO memos(
  id,
  title,
  content,
  ) VALUES (
    ?,
    ?,
    ?
  );
`;

const MemoQueries = Object.freeze({
  CREATE_TABLE: CreateTableMemos,
  SELECT: SelectMemos,
  INSERT: InsertMemo
});

export { MemoQueries };
