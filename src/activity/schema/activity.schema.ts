import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type ActivityDocument = HydratedDocument<Activity>;

@Schema()
export class Activity {
  @ApiProperty({ type: String })
  @Prop({ required: true })
  value: string;

  @ApiProperty({ type: String })
  @Prop({ required: true })
  description: string;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);

export const ActivitySсhemaModule = MongooseModule.forFeature([
  { name: Activity.name, schema: ActivitySchema },
]);
