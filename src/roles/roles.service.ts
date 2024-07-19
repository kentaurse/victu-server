import { Injectable } from '@nestjs/common';
import { CreaterRoleDto } from './dto/create-role.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from './schemas/roles.schema';
import { Model } from 'mongoose';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) {}

  async createRole(dto: CreaterRoleDto) {
    const role = await this.roleModel.create(dto);
    return role;
  }

  async getRoleByValue(value: string) {
    const role = await this.roleModel.findOne({ value }).exec();
    return role;
  }

  async getAllRoles() {
    return await this.roleModel.find().exec();
  }
}
