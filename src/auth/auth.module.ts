import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { InitJwtModule } from 'src/config/jwt/jwt';

@Module({
  imports: [UsersModule, InitJwtModule({ secret: process.env.JWT_SECRET })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
