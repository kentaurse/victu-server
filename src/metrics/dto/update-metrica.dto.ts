import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateMetricaDto {
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: Number })
  age?: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: String })
  gender?: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: Number })
  height?: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: Number })
  weight?: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: Number })
  goalWeight?: number;

  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: Date })
  startDate?: Date;

  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: Date })
  finishDate?: Date;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: String })
  activityId?: string;
}
