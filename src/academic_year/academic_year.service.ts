import { Injectable } from '@nestjs/common';
import { CreateAcademicYearDto } from './dto/create-academic_year.dto';
import { UpdateAcademicYearDto } from './dto/update-academic_year.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AcademicYear } from './entities/academic_year.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AcademicYearService {
  constructor(
    @InjectRepository(AcademicYear)
    private academicYearRepository: Repository<AcademicYear>
  ) {}
  create(createAcademicYearDto: CreateAcademicYearDto) {
    return this.academicYearRepository.save(createAcademicYearDto);
  }

  findAll() {
    return this.academicYearRepository.find();
  }

  findOne(id: string) {
    return this.academicYearRepository.findOne({ where: { id } });
  }

  update(id: number, updateAcademicYearDto: UpdateAcademicYearDto) {
    return this.academicYearRepository.update(id, updateAcademicYearDto);
  }

  remove(id: string) {
    return this.academicYearRepository.delete(id);
  }
}
