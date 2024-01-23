import { AttendanceSessionsService } from './../attendance-sessions/attendance-sessions.service';
import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { CreateAttendanceRecordDto } from './dto/create-attendance-record.dto';
import { UpdateAttendanceRecordDto } from './dto/update-attendance-record.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AttendanceRecord } from './entities/attendance-record.entity';
import { Repository } from 'typeorm';
import { Student } from 'src/students/entities/student.entity';

@Injectable()
export class AttendanceRecordsService {
  constructor(
    @InjectRepository(AttendanceRecord)
    private readonly attendanceRecordsRepository: Repository<AttendanceRecord>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    private readonly attendanceSessionsService: AttendanceSessionsService
  ) {}
  async create(attendanceRecordData: CreateAttendanceRecordDto): Promise<AttendanceRecord> {
    // Lưu vào cơ sở dữ liệu
    const savedAttendanceRecord = await this.attendanceRecordsRepository.save(attendanceRecordData);

    // Trả về AttendanceRecord đã được lưu
    return savedAttendanceRecord;
  }

  findAll() {
    return this.attendanceRecordsRepository.find({
      relations: ['attendanceSession', 'student'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} attendanceRecord`;
  }

  update(id: number, updateAttendanceRecordDto: UpdateAttendanceRecordDto) {
    return `This action updates a #${id} attendanceRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendanceRecord`;
  }

  async getAttendanceRecordsBySessionId(sessionId: string) {
    const attendanceSessions = await this.attendanceSessionsService.findOne(sessionId);
    if (!attendanceSessions) {
      throw new BadRequestException(404, 'Session not found');
    }
    const attendanceRecords = await this.attendanceRecordsRepository.find({
      where: {
        attendanceSession: {
          id: sessionId,
        },
      },
      relations: ['student'],
      select: {
        student: {
          id: true,
          full_name: true,
        },
      },
      cache: true,
    });
    return {
      ...attendanceSessions,
      students: attendanceRecords,
    };
  }
}
