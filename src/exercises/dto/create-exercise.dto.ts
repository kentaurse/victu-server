import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class CreateExerciseDto {
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
