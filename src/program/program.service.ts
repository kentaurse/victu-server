import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Program, ProgramDocument } from './schema/program.schema';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { Metrica } from 'src/metrics/schemas/metrica.schema';

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

    const program = await this.createProgramByMetrica(metrica);
    return program;
  }

  private async createProgramByMetrica(metrica: Metrica) {
    //TODO: FIll out how to calculate program based on metrica
    return null;
  }
}
