import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UpdatesUserDto } from './dto/updatesUserDto.dto';
import { User } from './schemas/user.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.usersRepository.findOne({ userId });
  }

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async createUser(user: CreateUserDto): Promise<User> {
    const candidate: User = {
      email: user.email,
      password: user.password,
      name: user.name,
    };

    return this.usersRepository.create(candidate);
  }

  async updateUser(
    userId: string,
    updatesUserDto: UpdatesUserDto,
  ): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ userId }, updatesUserDto);
  }
}
