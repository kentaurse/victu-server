import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { UserDocument } from 'src/users/schemas/user.schema';

@Injectable()
export class AuthService {
  private readonly PSW_SALT = 5;

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(userDto: LoginUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
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

  private async generateToken(user: UserDocument) {
    const payload = {
      id: user._id,
      email: user.email,
      roles: user.roles,
    };

    return { token: this.jwtService.sign(payload) };
  }

  private async validateUser(userDto: LoginUserDto) {
    const user = await this.usersService.getUserByEmail(userDto.email);

    if (!user) {
      throw new HttpException(
        `User with email ${userDto.email} doesn't exist`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const isPasswordEquals = await compare(userDto.password, user.password);

    if (!isPasswordEquals) {
      throw new UnauthorizedException({ message: 'Password unvalid' });
    }

    return user;
  }
}
