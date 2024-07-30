import { Module } from '@nestjs/common';
import { MetricsController } from './metrics.controller';
import { MetricsService } from './metrics.service';
import { MetricaShemaModule } from './schemas/metrica.schema';
import { UsersModule } from 'src/users/users.module';
import { ActivityModule } from 'src/activity/activity.module';

@Module({
  imports: [MetricaShemaModule, UsersModule, ActivityModule],
  controllers: [MetricsController],
  providers: [MetricsService],
})
export class MetricsModule {}
