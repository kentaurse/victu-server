import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({ type: String })
  token: string;

  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: String })
  id: string;
}
