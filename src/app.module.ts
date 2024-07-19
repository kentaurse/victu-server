import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InitDatabaseConfig } from './config/database/mongodb.config';
import { UsersModule } from './internal/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    InitDatabaseConfig({
      username: process.env.MONGO_USERNAME,
      password: process.env.MONGO_PASSWORD,
      database: process.env.MONGO_DATABASE,
      cluster: process.env.MONGO_CLUSTER,
    }),
    UsersModule,
  ],
})
export class AppModule {}
