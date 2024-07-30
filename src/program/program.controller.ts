import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Program } from './schema/program.schema';
import { ProgramService } from './program.service';

@Controller('v1/program')
export class ProgramController {
  constructor(private readonly programService: ProgramService) {}

  @ApiOperation({ summary: 'Get a program by user id' })
  @ApiResponse({ status: 200, type: Program })
  @Get('/user/:userId')
  getProgramByUserId(@Param('userId') userId: string) {
    return this.programService.getProgramByUserId(userId);
  }

  @ApiOperation({ summary: 'Delete a program by id' })
  @ApiResponse({ status: 200, type: Program })
  @Get('/:id')
  deleteProgramById(@Param('id') id: string) {
    return this.programService.deleteProgramById(id);
  }
}
