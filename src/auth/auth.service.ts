import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'bcrypt';
import { UserDocument } from 'src/users/schemas/user.schema';

@Injectable()
export class AuthService {
  private readonly PSW_SALT = 5;

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(userDto: LoginUserDto) {
    return null;
  }

  async signup(userDto: CreateUserDto) {
    const candidate = await this.usersService.getUserByEmail(userDto.email);

    if (candidate) {
      throw new HttpException(
        `User with email ${userDto.email} already exists`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = await hash(userDto.password, this.PSW_SALT);

    const user = await this.usersService.createUser({
      ...userDto,
      password: hashedPassword,
    });

    return this.generateToken(user);
  }

  async generateToken(user: UserDocument) {
    const payload = {
      id: user._id,
      email: user.email,
      roles: user.roles,
    };

    return { token: this.jwtService.sign(payload) };
  }
}
