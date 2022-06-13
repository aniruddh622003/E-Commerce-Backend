import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userScema } from '../models/user.schema';
import { UserService } from './user.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: userScema }])],
  providers: [UserService],
  exports: [UserService],
})
export class SharedModule {}
