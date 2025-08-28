import { excute as execute } from '../database/dbService';
import { LabelQueries } from '../database/queries/labelQueries';

const createTable = async () => {
  await execute({ sql: LabelQueries.CREATE_TABLE });
};

export { createTable };
