import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InitDatabaseConfig } from './shared/config/database/mongodb.config';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { ProgramModule } from './program/program.module';
import { MetricsModule } from './metrics/metrics.module';
import { ActivityModule } from './activity/activity.module';
import { ExercisesModule } from './exercises/exercises.module';

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
    RolesModule,
    AuthModule,
    ProgramModule,
    MetricsModule,
    ActivityModule,
    ExercisesModule,
  ],
  providers: [],
})
export class AppModule {}
