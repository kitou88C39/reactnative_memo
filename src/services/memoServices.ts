import { excute as execute } from '../database/dbService';
import { MemoQueries } from '../database/queries/memoQueries';
import * as Crypto from 'expo-crypto';

const createTable = async () => {
  await execute({ sql: MemoQueries.CREATE_TABLE });
};

const addMemo = async (title: string, content: string) => {
  const memoId = Crypto.randomUUID();
  await execute({ sql: MemoQueries.INSERT, params: [memoId, title, content] });
};

export { createTable };
