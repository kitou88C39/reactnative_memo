import { excute as execute, fetch } from '../database/dbService';
import { MemoQueries } from '../database/queries/memoQueries';
import * as Crypto from 'expo-crypto';
import { type Memo } from '../types/memo';

const createTable = async () => {
  await execute({ sql: MemoQueries.CREATE_TABLE });
};

const getMemos = async (): Promise<Memo[]> => {
  const rows = await fetch({ sql: MemoQueries.SELECT });
};

const addMemo = async (title: string, content: string) => {
  const memoId = Crypto.randomUUID();
  await execute({ sql: MemoQueries.INSERT, params: [memoId, title, content] });
};

export { createTable, addMemo };
