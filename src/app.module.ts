import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

// https://github.com/arielweinberger/nestjs-course-task-management/
@Module({
  imports: [TasksModule],
})
export class AppModule {}
