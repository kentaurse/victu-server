import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type RoleDocument = HydratedDocument<Role>;

@Schema()
export class Role {
  @ApiProperty({ type: String })
  @Prop({ required: true, unique: true })
  value: string;

  @ApiProperty({ type: String })
  @Prop({ required: true })
  description: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);

export const RoleSchemaModule = MongooseModule.forFeature([
  { name: Role.name, schema: RoleSchema },
]);
