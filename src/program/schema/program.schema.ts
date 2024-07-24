import { MongooseModule,Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type ProgramDocument = HydratedDocument<Program>;

export class Program {
  @ApiProperty({ type: Number })
  @Prop({ required: true })
  calories: number;

  @ApiProperty({ type: Date })
  @Prop({ required: true })
  date: Date;
}

export const ProgramSchema = SchemaFactory.createForClass(Program);

export const ProgramSchemaModule = MongooseModule.forFeature([
  { name: Program.name, schema: ProgramSchema },
]);
