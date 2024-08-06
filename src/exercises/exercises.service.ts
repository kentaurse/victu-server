import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Exercise, ExerciseDocument } from './schema/exercise.schema';
import { Model } from 'mongoose';
import { CreateExerciseDto } from './dto/create-exercise.dto';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectModel(Exercise.name) private exerciseModel: Model<ExerciseDocument>,
  ) {}

  async createExercise(dto: CreateExerciseDto) {
    const createdExercise = await this.exerciseModel.create(dto);
    return createdExercise;
  }

  async createMultipleExercises(dto: CreateExerciseDto[]) {
    const createdExercises = await this.exerciseModel.insertMany(dto);
    return createdExercises;
  }

  async getAllExercises() {
    return await this.exerciseModel.find().exec();
  }

  async getExercisesByBodyPart(bodyPart: string) {
    const splittedBodyPart = bodyPart.split('+').join(' ');
    return await this.exerciseModel
      .find({ bodyPart: new RegExp(splittedBodyPart, 'i') })
      .exec();
  }

  async getExercisesByEquipment(equipment: string) {
    const splittedEquipment = equipment.split('+').join(' ');

    return await this.exerciseModel
      .find({ equipment: new RegExp(splittedEquipment, 'i') })
      .exec();
  }

  async getExercisesByTarget(target: string) {
    const splittedTarget = target.split('+').join(' ');

    return await this.exerciseModel
      .find({ target: new RegExp(splittedTarget, 'i') })
      .exec();
  }

  async getExerciseById(id: string) {
    const isExerciseExist = await this.exerciseModel.exists({ _id: id });

    if (!isExerciseExist) {
      throw new HttpException(
        { message: 'No such exercise' },
        HttpStatus.FORBIDDEN,
      );
    }

    return await this.exerciseModel.findOne({ _id: id }).exec();
  }

  async deleteExerciseById(id: string) {
    await this.exerciseModel.deleteOne({ id: id });
  }
}
