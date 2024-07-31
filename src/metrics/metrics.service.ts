import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Metrics, MetricaDocument } from './schemas/metrica.schema';
import { Model } from 'mongoose';
import { CreateMetricaDto } from './dto/create-metrica.dto';
import { UsersService } from 'src/users/users.service';
import { ActivityService } from 'src/activity/activity.service';

@Injectable()
export class MetricsService {
  constructor(
    @InjectModel(Metrics.name) private metricaModel: Model<MetricaDocument>,
    private readonly usersService: UsersService,
    private readonly activityService: ActivityService,
  ) {}

  async createMetrica(dto: CreateMetricaDto) {
    const activity = await this.activityService.getActivityById(dto.activityId);

    const newMetrica = {
      age: dto.age,
      gender: dto.gender,
      height: dto.height,
      weight: dto.weight,
      goalWeight: dto.goalWeight,
      startDate: dto.startDate,
      finishDate: dto.finishDate,
      activity: activity,
    };

    const createdMetrica = await this.metricaModel.create(newMetrica);
    const candidate = await this.usersService.getUserById(dto.userId);

    if (!candidate) {
      throw new HttpException('No such user', HttpStatus.BAD_REQUEST);
    }

    candidate.metrics = createdMetrica;
    candidate.save();

    return createdMetrica;
  }

  async getAllMetrics() {
    return await this.metricaModel.find().populate('activity').exec();
  }

  async getMetricaById(id: string) {
    const isMetricaExist = await this.metricaModel.exists({ _id: id });
    if (!isMetricaExist) {
      throw new HttpException(
        { message: 'No such metrica' },
        HttpStatus.FORBIDDEN,
      );
    }

    return await this.metricaModel.findOne({ _id: id }).exec();
  }

  async getMetricaByUserId(userId: string) {
    const candidate = await this.usersService.getUserById(userId);

    if (!candidate) {
      throw new HttpException('No such user', HttpStatus.BAD_REQUEST);
    }

    if (!candidate.metrics) {
      throw new HttpException(
        'User does not have a metrica',
        HttpStatus.BAD_REQUEST,
      );
    }

    return candidate.metrics;
  }

  async deleteMetricaById(id: string) {
    return this.metricaModel.deleteOne({ _id: id }).exec();
  }
}
