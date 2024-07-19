import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UpdatesUserDto } from './dto/updatesUserDto.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('/api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Get(':userId')
  async getUserById(@Param('userId') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    return this.usersService.createUser(createUser);
  }

  @Patch(':userId')
  async updateUser(
    @Body() updateUser: UpdatesUserDto,
    @Param('userId') userId: string,
  ) {
    return this.usersService.updateUser(userId, updateUser);
  }
}
