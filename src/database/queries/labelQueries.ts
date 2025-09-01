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

const SelectLabels = `
  SELECT
    id,
    name,
    color,
    created_at,
    updated_at
  FROM
    labels
  ORDER BY
    updated_at ASC;
`;

const SelectLabelTargetId = `
  SELECT
    id,
    name,
    color,
    created_at,
    updated_at
  FROM
    labels
  WHERE
    id = ?
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
  SELECT_LABELS: SelectLabels,
  SELECT_LABEL_TARGET_ID: SelectLabelTargetId,
  INSERT: InsertLabel
});

export { LabelQueries };
