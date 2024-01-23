import { Module } from '@nestjs/common';
import { AttendanceSessionsService } from './attendance-sessions.service';
import { AttendanceSessionsController } from './attendance-sessions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendanceSession } from './entities/attendance-session.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AttendanceSession])],
  controllers: [AttendanceSessionsController],
  providers: [AttendanceSessionsService],
})
export class AttendanceSessionsModule {}
