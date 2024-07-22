import { ApiProperty } from '@nestjs/swagger';

export class Token {
  @ApiProperty({ type: String })
  token: string;
}
