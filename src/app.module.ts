import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InitDatabaseConfig } from './config/database/mongodb.config';
import { OrdersModule } from './internal/orders/orders.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

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
    OrdersModule,
    AuthModule,
  ],
  providers: [AuthService],
})
export class AppModule {}
