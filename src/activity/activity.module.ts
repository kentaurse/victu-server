import { Module } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { ActivityShemaModule } from './schema/activity.schema';

@Module({
  imports: [ActivityShemaModule],
  controllers: [ActivityController],
  providers: [ActivityService],
})
export class ActivityModule {}
