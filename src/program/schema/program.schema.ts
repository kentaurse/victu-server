import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Gender } from 'src/shared/types/gender.enum';

export type ProgramDocument = HydratedDocument<Program>;

export class Program {
  age: number;
  height: number;
  weight: number;
  gender: Gender;
  //   activity: IActivity;
  goalWeight;
}

export const ProgramSchema = SchemaFactory.createForClass(Program);

export const ProgramShemaModule = MongooseModule.forFeature([
  { name: Program.name, schema: ProgramSchema },
]);
