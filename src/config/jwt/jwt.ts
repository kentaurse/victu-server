import { JwtModule } from '@nestjs/jwt';

export interface JwtConfig {
  secret: string;
}

export const InitJwtModule = (config: JwtConfig) => {
  return JwtModule.register({
    secret: config.secret || 'SECRET',
    signOptions: {
      expiresIn: '24h',
    },
  });
};
