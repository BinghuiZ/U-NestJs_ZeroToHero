import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { Student } from './studnet.entity';
import { StudentResolver } from './studnet.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentService, StudentResolver],
  exports: [StudentService],
})
export class StudentModule {}
