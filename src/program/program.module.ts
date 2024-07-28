import { Module } from '@nestjs/common';
import { ProgramService } from './program.service';
import { ProgramController } from './program.controller';
import { UsersModule } from 'src/users/users.module';
import { ProgramSchemaModule } from './schema/program.schema';

@Module({
  imports: [UsersModule, ProgramSchemaModule],
  providers: [ProgramService],
  controllers: [ProgramController],
})
export class ProgramModule {}
