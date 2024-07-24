import { Module } from '@nestjs/common';
import { ProgramService } from './program.service';
import { ProgramController } from './program.controller';

@Module({
  providers: [ProgramService],
  controllers: [ProgramController],
})
export class ProgramModule {}
