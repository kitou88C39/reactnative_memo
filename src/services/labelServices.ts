import { excute as execute, fetch } from '../database/dbService';
import { LabelQueries } from '../database/queries/labelQueries';
import {type Label} from "../types/label";
import { LabelSchema } from '../database/schemas/labelSchemas';

const createTable = async () => {
  await execute({ sql: LabelQueries.CREATE_TABLE });
};

const getLabels = async () => {
  const rows = await fetch<LabelSchema>({ sql: LabelQueries.SELECT_LABELS });


const addLable = async (name: string, value: string) => {
  await execute({ sql: LabelQueries.INSERT, params: [name, value] });
};

export { addLable, createTable };
