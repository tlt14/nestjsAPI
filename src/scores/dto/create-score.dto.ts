import { Student } from 'src/students/entities/student.entity';

export class CreateScoreDto {
  student: Student;
  score: number;
  type: number;
}
