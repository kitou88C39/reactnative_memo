import { excute as execute, fetch } from '../database/dbService';
import { MemoQueries } from '../database/queries/memoQueries';
import * as Crypto from 'expo-crypto';
import { type Memo } from '../types/memo';
import { MemoSchema } from '../database/schemas/memoSchemas';

const createTable = async () => {
  await execute({ sql: MemoQueries.CREATE_TABLE });
};

const getMemos = async (): Promise<Memo[]> => {
  const rows = await fetch<MemoSchema>({ sql: MemoQueries.SELECT });
  const memos = rows.map((row): Memo => {
    return {
      id: row.id,
      title: row.title,
      content: row.content || '',
      labelId: row.label_id || undefined
    };
  });
  return memos;
};

const getMemos = async (): Promise<Memo[]> => {
  const rows = await fetch<MemoSchema>({ sql: MemoQueries.SELECT });
  const memos = rows.map((row): Memo => {
    return {
      id: row.id,
      title: row.title,
      content: row.content || '',
      labelId: row.label_id || undefined
    };
  });
  return memos;
};

const addMemo = async (title: string, content: string) => {
  const memoId = Crypto.randomUUID();
  await execute({ sql: MemoQueries.INSERT, params: [memoId, title, content] });
};

export { createTable, addMemo, getMemos };
