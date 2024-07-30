import { Module } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { ActivitySсhemaModule } from './schema/activity.schema';

@Module({
  imports: [ActivitySсhemaModule],
  controllers: [ActivityController],
  providers: [ActivityService],
})
export class ActivityModule {}
