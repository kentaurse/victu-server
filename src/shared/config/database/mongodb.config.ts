import { MongooseModule } from '@nestjs/mongoose';

export interface IMongoDBConfig {
  username: string;
  password: string;
  database: string;
  cluster: string;
}

export const InitDatabaseConfig = (mongoDbConfig: IMongoDBConfig) => {
  const url = `mongodb+srv://${mongoDbConfig.username}:${mongoDbConfig.password}@${mongoDbConfig.cluster}.szihj6t.mongodb.net/?retryWrites=true&w=majority`;

  return MongooseModule.forRoot(url, { dbName: mongoDbConfig.database });
};
