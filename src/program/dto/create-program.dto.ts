import { ApiProperty } from '@nestjs/swagger';

export class CreateProgramDto {
  @ApiProperty({ type: Number })
  calories: number;

  @ApiProperty({ type: Date })
  date: Date;
}
