import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { CoursesModule } from './courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [StudentModule, CoursesModule,  
  MongooseModule.forRoot('mongodb://localhost:27017/nestStudent') ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
