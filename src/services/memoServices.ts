import * as Crypto from 'expo-crypto';
import { excute as execute, fetch } from '../database/dbService';
import { MemoQueries } from '../database/queries/memoQueries';
import { MemoSchema } from '../database/schemas/memoSchemas';
import { type Memo } from '../types/memo';
import { type SqlArg } from '../database/dbService';

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

const getMemo = async (memoId: string): Promise<Memo | undefined> => {
  const rows = await fetch<MemoSchema>({ sql: MemoQueries.SELECT_MEMO_TARGET_ID, params: [memoId] });

  if (rows.length === 0) {
    return undefined;
  }

  const row = rows[0];
  return {
    id: row.id,
    title: row.title,
    content: row.content || '',
    labelId: row.label_id || undefined
  };
};

const addMemo = async (labelId: number | undefined, title: string, content: string) => {
  const memoId = Crypto.randomUUID();
  let queries: SqlArg[] = [];

  queries.push({ sql: MemoQueries.INSERT, params: [memoId, title, content] });

  await execute();
};

const editMemo = async (memoId: string, title: string, content: string) => {
  await execute({ sql: MemoQueries.UPDATE, params: [title, content, memoId] });
};

const deleteMemo = async (memoId: string) => {
  await execute({ sql: MemoQueries.DELETE, params: [memoId] });
};

const setLabel = async (memoId: string, labelId: number | undefined) => {
  if (labelId === undefined) {
    await execute({ sql: MemoQueries.UPDATE_LABEL_ID_TO_NULL_BY_ID, params: [memoId] });
    return;
  }
  await execute({ sql: MemoQueries.UPDATE_LABEL_ID_BY_ID, params: [labelId, memoId] });
};

export { addMemo, createTable, editMemo, getMemos, getMemo, deleteMemo, setLabel };
