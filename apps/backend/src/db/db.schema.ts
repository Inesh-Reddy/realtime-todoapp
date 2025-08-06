import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { StatusEnum, StatusValues } from '@repo/shared';

@Schema({ timestamps: true, toJSON: { virtuals: true } })
export class Todo extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  priority: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  @Prop({ enum: StatusValues, required: true })
  status: StatusEnum;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);

@Schema({ timestamps: true, toJSON: { virtuals: true } })
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Todo' }])
  todos: Todo[];
}

export const UserSchema = SchemaFactory.createForClass(User);
