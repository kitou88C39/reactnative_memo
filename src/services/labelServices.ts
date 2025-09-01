import { excute as execute, fetch } from '../database/dbService';
import { LabelQueries } from '../database/queries/labelQueries';
import { type Label } from '../types/label';
import { LabelSchema } from '../database/schemas/labelSchemas';

const createTable = async () => {
  await execute({ sql: LabelQueries.CREATE_TABLE });
};

const getLabels = async () => {
  const rows = await fetch<LabelSchema>({ sql: LabelQueries.SELECT_LABELS });

  const labels = rows.map((row): Label => {
    return {
      id: row.id,
      name: row.name,
      color: row.color
    };
  });
  return labels;
};

const getLabel = async (labelId: number): Promise<Label | undefined> => {
  const rows = await fetch<LabelSchema>({ sql: LabelQueries.SELECT_LABEL_TARGET_ID, params: [labelId] });

  if (rows.length === 0) {
    return undefined;
  }

  const row = rows[0];
  return {
    id: row.id,
    name: row.name,
    color: row.color
  };
};

const addLable = async (name: string, value: string) => {
  await execute({ sql: LabelQueries.INSERT, params: [name, value] });
};

const editLabel = async (id: number, name: string, value: string) => {
  await execute({ sql: LabelQueries.UPDATE, params: [name, value, id] });
};

export { addLable, createTable, getLabels, getLabel };
