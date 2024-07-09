type DbClient = {
  query(sqlString: string): Promise<any>;
  runTransaction(
    handler: (trx: Pick<DbClient, "query">) => Promise<void>
  ): Promise<void>;
};

export declare const db: DbClient;
