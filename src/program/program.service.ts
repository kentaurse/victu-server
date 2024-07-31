import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Program, ProgramDocument } from './schema/program.schema';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { Metrica } from 'src/metrics/schemas/metrica.schema';
import { Gender } from 'src/shared/types/gender.enum';
import { CreateProgramDto } from './dto/create-program.dto';

@Injectable()
export class ProgramService {
  constructor(
    @InjectModel(Program.name) private programModel: Model<ProgramDocument>,
    private readonly usersService: UsersService,
  ) {}

  async getProgramByUserId(userId: string) {
    const user = await this.usersService.getUserById(userId);
    if (!user) {
      throw new HttpException('No such user', HttpStatus.BAD_REQUEST);
    }

    const metrica = user.metrica;
    if (!metrica) {
      throw new HttpException(
        'User does not have a metrica',
        HttpStatus.BAD_REQUEST,
      );
    }

    const userProgram = user.program;
    const currentDate = new Date();

    if (currentDate.toDateString() === userProgram.date.toDateString()) {
      return userProgram;
    }

    const program = await this.createProgramByMetrica(metrica);

    user.program = program;
    user.save();

    return program;
  }

  private async createProgramByMetrica(metrica: Metrica) {
    const calories = this.calcualteDailyCalories(metrica);
    const date = new Date();

    const dto: CreateProgramDto = {
      calories,
      date,
    };

    return await this.creatProgram(dto);
  }

  async creatProgram(dto: CreateProgramDto) {
    return await this.programModel.create(dto);
  }

  async deleteProgramById(id: string) {
    return this.programModel.deleteOne({ _id: id });
  }

  private calcualteDailyCalories(metrica: Metrica) {
    const normalCalories = 2200;
    const { weight, height, age, activity, gender } = metrica;

    if (gender === Gender.MALE) {
      const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      const resultCalories = bmr * activity.scale;
      return resultCalories;
    }

    if (gender === Gender.FEMALE) {
      const bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      const resultCalories = bmr * activity.scale;
      return resultCalories;
    }

    return normalCalories;
  }
}
