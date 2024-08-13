import { MongooseModule } from '@nestjs/mongoose';

export interface IMongoDBConfig {
  username: string;
  password: string;
  database: string;
  cluster: string;
  key: string;
}

export const InitDatabaseConfig = (mongoDbConfig: IMongoDBConfig) => {
  const url =
    'mongodb+srv://victu-admin:123@victu-prod.i3lmgsp.mongodb.net/?retryWrites=true&w=majority';
  // const url = `mongodb+srv://${mongoDbConfig.username}:${mongoDbConfig.password}@${mongoDbConfig.cluster}.${mongoDbConfig.key}.mongodb.net/?retryWrites=true&w=majority`;

  return MongooseModule.forRoot(url, { dbName: mongoDbConfig.database });
};
