import { excute as execute } from '../database/dbService';
import { MemolQueries } from '../database/queries/memoQueries';

const createTable = async () => {
  await execute({ sql: MemolQueries.CREATE_TABLE });
};

export { createTable };
