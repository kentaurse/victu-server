import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type ExerciseDocument = HydratedDocument<Exercise>;

@Schema()
export class Exercise {
  @ApiProperty({ type: String })
  @Prop({ required: true })
  bodyPart: string;

  @ApiProperty({ type: String })
  @Prop({ required: true })
  equipment: string;

  @ApiProperty({ type: String })
  @Prop({ required: true })
  gifUrl: string;

  @ApiProperty({ type: String })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ type: String })
  @Prop({ required: true })
  target: string;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);

export const ExerciseSсhemaModule = MongooseModule.forFeature([
  { name: Exercise.name, schema: ExerciseSchema },
]);
