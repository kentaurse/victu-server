import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { HydratedDocument } from 'mongoose';
import { Activity } from 'src/activity/schema/activity.schema';

export type MetricaDocument = HydratedDocument<Metrics>;

@Schema()
export class Metrics {
  @ApiProperty({ type: Number })
  @Prop({ required: true })
  age: number;

  @ApiProperty({ type: String })
  @Prop({ required: true })
  gender: string;

  @ApiProperty({ type: Number })
  @Prop({ required: true })
  height: number;

  @ApiProperty({ type: Number })
  @Prop({ required: true })
  weight: number;

  @ApiProperty({ type: Number })
  @Prop({ required: true })
  goalWeight: number;

  @ApiProperty({ type: Date })
  @Prop({ required: true })
  startDate: Date;

  @ApiProperty({ type: Date })
  @Prop({ required: true })
  finishDate: Date;

  @ApiProperty({ type: Activity })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Activity.name })
  activity: Activity;
}

export const MetricaSchema = SchemaFactory.createForClass(Metrics);

export const MetricaShemaModule = MongooseModule.forFeature([
  { name: Metrics.name, schema: MetricaSchema },
]);
