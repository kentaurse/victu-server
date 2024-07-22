import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MetricsService } from './metrics.service';
import { Metrica } from './schemas/metrica.schema';
import { CreaeteMetricaDto } from './dto/create-metrica.dto';

@ApiTags('Metrics')
@Controller('v1/metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 200, type: Metrica })
  @Post()
  createMetrica(@Body() metricaDto: CreaeteMetricaDto) {
    return this.metricsService.createMetrica(metricaDto);
  }

  @ApiOperation({ summary: 'Get all metrics' })
  @ApiResponse({ status: 200, type: [Metrica] })
  @Get()
  getAllMetrics() {
    return this.metricsService.getAllMetrics();
  }

  @ApiOperation({ summary: 'Get metrica by id' })
  @ApiResponse({ status: 200, type: Metrica })
  @Get('/:id')
  getMetricaById(@Param('id') id: string) {
    return this.metricsService.getMetricaById(id);
  }

  @ApiOperation({ summary: 'Get metrica by user id' })
  @ApiResponse({ status: 200, type: Metrica })
  @Get('/:userId')
  getMetricaByUserId(@Param('userId') userId: string) {
    return this.metricsService.getMetricaByUserId(userId);
  }
}
