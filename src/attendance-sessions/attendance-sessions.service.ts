import { Injectable } from '@nestjs/common';
import { CreateAttendanceSessionDto } from './dto/create-attendance-session.dto';
import { UpdateAttendanceSessionDto } from './dto/update-attendance-session.dto';
import { AttendanceSession } from './entities/attendance-session.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AttendanceSessionsService {
  constructor(
    @InjectRepository(AttendanceSession)
    private readonly attendanceSessionsRepository: Repository<AttendanceSession>
  ) {}
  create(createAttendanceSessionDto: CreateAttendanceSessionDto) {
    // console.log(createAttendanceSessionDto);
    return this.attendanceSessionsRepository.save(createAttendanceSessionDto);
  }

  findAll() {
    return this.attendanceSessionsRepository.find({
      relations: ['class'],
    });
  }

  findOne(id: string) {
    return this.attendanceSessionsRepository.findOne({
      where: { id },
      relations: ['class'],
    });
  }

  update(id: number, updateAttendanceSessionDto: UpdateAttendanceSessionDto) {
    return `This action updates a #${id} attendanceSession`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendanceSession`;
  }
}
