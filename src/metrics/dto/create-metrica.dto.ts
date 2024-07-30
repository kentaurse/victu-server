import { ApiProperty } from '@nestjs/swagger';
import { Activity } from 'src/activity/schema/activity.schema';

export class CreaeteMetricaDto {
  @ApiProperty({ type: String })
  gender: string;

  @ApiProperty({ type: Number })
  height: number;

  @ApiProperty({ type: Number })
  weight: number;

  @ApiProperty({ type: Number })
  goalWeight: number;

  @ApiProperty({ type: Date })
  startDate: Date;

  @ApiProperty({ type: Date })
  finishDate: Date;

  @ApiProperty({ type: Activity })
  activity: Activity;

  @ApiProperty({ type: String })
  userId: string;
}
