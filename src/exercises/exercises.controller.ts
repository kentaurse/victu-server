import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ExercisesService } from './exercises.service';
import { Exercise } from './schema/exercise.schema';
import { CreateExerciseDto } from './dto/create-exercise.dto';

@Controller('/v1/exercises')
export class ExercisesController {
  constructor(private readonly exerciseService: ExercisesService) {}

  @ApiOperation({ summary: 'Create a new exercise' })
  @ApiResponse({ status: 200, type: Exercise })
  @Post()
  createExercise(@Body() exerciseDto: CreateExerciseDto) {
    return this.exerciseService.createExercise(exerciseDto);
  }

  @ApiOperation({ summary: 'Create multiple exercises' })
  @ApiResponse({ status: 200, type: [Exercise] })
  @Post()
  createMultipleExercises(@Body() exerciseDto: CreateExerciseDto[]) {
    return this.exerciseService.createMultipleExercises(exerciseDto);
  }

  @ApiOperation({ summary: 'Get all exercises' })
  @ApiResponse({ status: 200, type: [Exercise] })
  @Get()
  getAllExercises() {
    return this.exerciseService.getAllExercises();
  }

  @ApiOperation({ summary: 'Get exercise by id' })
  @ApiResponse({ status: 200, type: Exercise })
  @Get('/:id')
  getExerciseById(@Param('id') id: string) {
    return this.exerciseService.getExerciseById(id);
  }

  @ApiOperation({ summary: 'Get exercises by body part' })
  @ApiResponse({ status: 200, type: [Exercise] })
  @Get('/body-part/:bodyPart')
  getExercisesByBodyPart(@Param('bodyPart') bodyPart: string) {
    return this.exerciseService.getExercisesByBodyPart(bodyPart);
  }

  @ApiOperation({ summary: 'Get exercises by target part' })
  @ApiResponse({ status: 200, type: [Exercise] })
  @Get('/target/:target')
  getExercisesByTarget(@Param('target') target: string) {
    return this.exerciseService.getExercisesByTarget(target);
  }

  @ApiOperation({ summary: 'Get exercises by equipment' })
  @ApiResponse({ status: 200, type: [Exercise] })
  @Get('/equipment/:equipment')
  getExercisesByEquipment(@Param('equipment') equipment: string) {
    return this.exerciseService.getExercisesByEquipment(equipment);
  }

  @ApiOperation({ summary: 'Delete exercise by id' })
  @ApiResponse({ status: 200 })
  @Delete('/:id')
  deleteExerciseById(@Param('id') id: string) {
    this.exerciseService.deleteExerciseById(id);
  }
}
