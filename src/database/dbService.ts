import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';

export type SqlArg = {
  sql: string;
  params?: (string | number)[];
};

const DB_NAME = 'MemoApp.db';
const getDbFilePath = () => {
  const path = FileSystem.documentDirectory + 'SQLite' + '/' + DB_NAME;
  return path;
};

const excute = async (...sqlArg: SqlArg[]): Promise<void> => {
  const db = await SQLite.openDatabaseAsync(DB_NAME);

  await db.withExclusiveTransactionAsync(async () => {
    for (const arg of sqlArg) {
      const { sql, params } = arg;

      try {
        await db.runAsync(sql, ...(params || []));
      } catch (error) {
        console.error('SQLの実行に失敗しました', error);
        throw error;
      }
    }
  });
};

const fetch = async <T>(sqlArg: SqlArg): Promise<T[]> => {
  const db = await SQLite.openDatabaseAsync(DB_NAME);
  const { sql, params } = sqlArg;

  try {
    const allRows = await db.getAllAsync<T>(sql, ...(params || []));
    return allRows;
  } catch (error) {
    console.error('SQLの実行に失敗しました', error);
    throw error;
  }
};

export { excute, fetch, getDbFilePath };
