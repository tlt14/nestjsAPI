import { AcademicYear } from 'src/academic_year/entities/academic_year.entity';
import { Grade } from 'src/grades/entities/grade.entity';

export class CreateClassDto {
  name: string;
  academic_year: AcademicYear;
  grade: Grade;
}
