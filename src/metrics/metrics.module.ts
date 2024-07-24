import { Module } from '@nestjs/common';
import { MetricsController } from './metrics.controller';
import { MetricsService } from './metrics.service';
import { MetricaShemaModule } from './schemas/metrica.schema';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [MetricaShemaModule, UsersModule],
  controllers: [MetricsController],
  providers: [MetricsService],
})
export class MetricsModule {}
