import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly rolesService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto) {
    const createdUser = await this.userModel.create(dto);

    const userRole = await this.rolesService.getRoleByValue('USER');
    createdUser.$set('roles', [userRole._id]);

    createdUser.save();

    return createdUser.populate('roles');
  }

  async getAllUsers() {
    return this.userModel.find().populate('roles').exec();
  }

  async getUserByEmail(email: string) {
    return this.userModel.findOne({ email }).populate('roles').exec();
  }
}
