import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Program, ProgramDocument } from './schema/program.schema';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProgramService {
  constructor(
    @InjectModel(Program.name) private programModel: Model<ProgramDocument>,
    private readonly usersService: UsersService,
  ) {}

  async getProgramByUserId(userId: string) {
    const user = await this.usersService.getUserById(userId);
    return null;
  }
}
