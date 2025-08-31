import { excute as execute } from '../database/dbService';
import { LabelQueries } from '../database/queries/labelQueries';

const createTable = async () => {
  await execute({ sql: LabelQueries.CREATE_TABLE });
};

const getLabels = async () => {
  const rows = await fetch<LabelSchema>({ sql: LabelQueries.SelectLabels });


const addLable = async (name: string, value: string) => {
  await execute({ sql: LabelQueries.INSERT, params: [name, value] });
};

export { createTable, addLable };
