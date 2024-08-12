import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ActivityService } from './activity.service';
import { Activity } from './schema/activity.schema';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity-dto';

@ApiTags('Activity')
@Controller('v1/activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @ApiOperation({ summary: 'Create a new activity' })
  @ApiResponse({ status: 200, type: Activity })
  @Post()
  createActivity(@Body() activityDto: CreateActivityDto) {
    return this.activityService.createActivity(activityDto);
  }

  @ApiOperation({ summary: 'Get all activities' })
  @ApiResponse({ status: 200, type: [Activity] })
  @Get()
  getAllActivities() {
    return this.activityService.getAllActivities();
  }

  @ApiOperation({ summary: 'Get activity by id' })
  @ApiResponse({ status: 200, type: Activity })
  @Get('/:id')
  getActivityById(@Param('id') id: string) {
    return this.activityService.getActivityById(id);
  }

  @ApiOperation({ summary: 'Delete activity by id' })
  @ApiResponse({ status: 200 })
  @Delete('/:id')
  deleteActivityById(@Param('id') id: string) {
    this.activityService.deleteActivtityById(id);
  }

  @ApiOperation({ summary: 'Update activity by id' })
  @ApiResponse({ status: 200 })
  @Put('/:id')
  updateActivityById(
    @Param('id') id: string,
    @Body() updateActivityDto: UpdateActivityDto,
  ) {
    return this.activityService.updateActivityById(id, updateActivityDto);
  }
}
