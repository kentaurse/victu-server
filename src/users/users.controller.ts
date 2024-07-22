import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './schemas/user.schema';
import { Roles } from 'src/shared/decorators/roles-auth.decorator';
import { RolesAuthGuard } from 'src/shared/guards/roles-auth.guard';
import { ROLES } from 'src/shared/types/roles.enum';

@ApiTags('Users')
@Controller('v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles(ROLES.USER)
  @UseGuards(RolesAuthGuard)
  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
