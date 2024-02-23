import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { GradesModule } from './grades/grades.module';
import { ClassesModule } from './classes/classes.module';
import { StudentsModule } from './students/students.module';
import { AttendanceSessionsModule } from './attendance-sessions/attendance-sessions.module';
import { AttendanceRecordsModule } from './attendance-records/attendance-records.module';
import { ScoresModule } from './scores/scores.module';
import { NotificationsModule } from './notifications/notifications.module';
import { RolesGuard } from './auth/guards/role.guard';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'qlgl',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // AcademicYearModule,
    GradesModule,
    ClassesModule,
    StudentsModule,
    AttendanceSessionsModule,
    AttendanceRecordsModule,
    ScoresModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService, RolesGuard],
})
export class AppModule {}
