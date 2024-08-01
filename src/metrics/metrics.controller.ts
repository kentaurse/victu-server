import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MetricsService } from './metrics.service';
import { Metrics } from './schemas/metrica.schema';
import { CreateMetricaDto } from './dto/create-metrica.dto';
import { UpdateMetricaDto } from './dto/update-metrica.dto';

@ApiTags('Metrics')
@Controller('v1/metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @ApiOperation({ summary: 'Create a new metrica' })
  @ApiResponse({ status: 200, type: Metrics })
  @Post()
  createMetrica(@Body() metricaDto: CreateMetricaDto) {
    return this.metricsService.createMetrica(metricaDto);
  }

  @ApiOperation({ summary: 'Get all metrics' })
  @ApiResponse({ status: 200, type: [Metrics] })
  @Get()
  getAllMetrics() {
    return this.metricsService.getAllMetrics();
  }

  @ApiOperation({ summary: 'Get metrica by id' })
  @ApiResponse({ status: 200, type: Metrics })
  @Get('/:id')
  getMetricaById(@Param('id') id: string) {
    return this.metricsService.getMetricaById(id);
  }

  @ApiOperation({ summary: 'Get metrica by user id' })
  @ApiResponse({ status: 200, type: Metrics })
  @Get('user/:userId')
  getMetricaByUserId(@Param('userId') userId: string) {
    return this.metricsService.getMetricaByUserId(userId);
  }

  @ApiOperation({ summary: 'Delete metrica by id' })
  @ApiResponse({ status: 200 })
  @Delete('/:id')
  deleteMetricaById(@Param('id') id: string) {
    return this.metricsService.deleteMetricaById(id);
  }

  @ApiOperation({ summary: 'Update metrica by id' })
  @ApiResponse({ status: 200 })
  @Patch('/:id')
  updateMetricaById(@Param('id') id: string, @Body() dto: UpdateMetricaDto) {
    return this.metricsService.updateMetricaById(id, dto);
  }
}
