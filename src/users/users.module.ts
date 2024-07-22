import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserShemaModule } from './schemas/user.schema';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports: [UserShemaModule, RolesModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
