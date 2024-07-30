import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Activity, ActivityDocument } from './schema/activity.schema';
import { Model } from 'mongoose';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ActivityService {
    constructor(
        @InjectModel(Activity.name) private activityModel: Model<ActivityDocument>,
        private readonly usersService: UsersService,
    ) {}

    async createActivity(dto: CreateActivityDto) {
        const createdActivity = await this.activityModel.create(dto);
        const candidate = await this.usersService.getUserById(dto.userId);

        if (!candidate) {
            throw new HttpException('No such user', HttpStatus.BAD_REQUEST);
        }

        candidate.activity = createdActivity;
        candidate.save();

        return createdActivity;
    }

    async getAllActivities() {
        return await this.activityModel.find().exec();
    }

    async getActivityById(id: string) {
        const isActivityExist = await this.activityModel.exists({ _id: id });
        if (!isActivityExist) {
            throw new HttpException(
                { message: 'No such activity' },
                HttpStatus.FORBIDDEN,
            );
        }

        return await this.activityModel.findOne({ _id: id }).exec();
    }
}
