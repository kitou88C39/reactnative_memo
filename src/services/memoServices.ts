import { excute as execute } from '../database/dbService';
import { MemolQueries } from '../database/queries/memoQueries';
import * as Crypto from 'expo-crypto';

const createTable = async () => {
  await execute({ sql: MemolQueries.CREATE_TABLE });
};

const addMemo = async (title: string, content: string) => {
  const memoId = Crypto.randomUUID();
  await execute({ sql: MemolQueries.INSERT, params: [memoId, title, content] });
};

export { createTable };
