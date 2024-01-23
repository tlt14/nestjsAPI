import { Student } from 'src/students/entities/student.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Score {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => Student, student => student.scores)
  student: Student;
  @Column()
  score: number;
  @Column()
  type: number;
}
