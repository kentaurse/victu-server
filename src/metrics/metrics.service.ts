import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Metrica, MetricaDocument } from './schemas/metrica.schema';
import { Model } from 'mongoose';
import { CreaeteMetricaDto } from './dto/create-metrica.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class MetricsService {
  constructor(
    @InjectModel(Metrica.name) private metricaModel: Model<MetricaDocument>,
    private readonly usersService: UsersService,
  ) {}

  async createMetrica(dto: CreaeteMetricaDto) {
    const createdMetrica = await this.metricaModel.create(dto);
    return createdMetrica;
  }

  async getAllMetrics() {
    return await this.metricaModel.find().exec();
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
    
  }
}
