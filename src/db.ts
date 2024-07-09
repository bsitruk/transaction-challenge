type DbClient = {
  query(sqlString: string): Promise<any>;
  runTransaction(
    handler: (trxClient: Pick<DbClient, "query">) => Promise<void>
  ): Promise<void>;
};

export declare const db: DbClient;
