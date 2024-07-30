import { ApiProperty } from '@nestjs/swagger';

export class CreateActivityDto {
  @ApiProperty({ type: String })
  value: string;

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: String })
  userId: string;
}
