import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';

type SqlArg = {
  sql: string;
  params?: (string | number)[];
};

const DB_NAME = 'MemoApp.db';

const fetch = async <T>(sqlArg): Promise<T> => {};
