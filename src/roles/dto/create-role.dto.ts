import { ApiProperty } from '@nestjs/swagger';

export class CreaterRoleDto {
  @ApiProperty({ type: String })
  value: string;
  @ApiProperty({ type: String })
  description: string;
}
