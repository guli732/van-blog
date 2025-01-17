import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VisitDocument = Visit & Document;

@Schema()
export class Visit extends Document {
  @Prop()
  visited: number;

  @Prop()
  viewer: number;

  @Prop()
  date: string;

  @Prop()
  pathname: string;

  @Prop()
  lastVisitedTime: Date;

  @Prop({
    default: () => {
      return new Date();
    },
  })
  createdAt: Date;
}

export const VisitSchema = SchemaFactory.createForClass(Visit);
