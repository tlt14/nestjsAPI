import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentsService {
  constructor(@InjectRepository(Student) private studentRepository: Repository<Student>) {}
  create(createStudentDto: CreateStudentDto) {
    return this.studentRepository.save(createStudentDto);
  }

  findAll() {
    return this.studentRepository.find({
      relations: ['class', 'class.grade', 'scores'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
