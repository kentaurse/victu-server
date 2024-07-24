import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import mongoose, { HydratedDocument } from 'mongoose';
import { Metrica } from 'src/metrics/schemas/metrica.schema';
import { Role } from 'src/roles/schemas/roles.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @ApiProperty({ type: String })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ type: String })
  @Prop({ required: true, unique: true })
  email: string;

  @ApiProperty({ type: String })
  @Prop({ required: true })
  @Exclude()
  password: string;

  @ApiProperty({ type: [Role] })
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: Role.name })
  roles: Role[];

  @ApiProperty({ type: Metrica })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Metrica.name })
  metrica: Metrica;
}

export const UserSchema = SchemaFactory.createForClass(User);

export const UserShemaModule = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
]);
