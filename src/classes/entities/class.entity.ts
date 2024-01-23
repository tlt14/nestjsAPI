import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Grade } from 'src/grades/entities/grade.entity';
import { AcademicYear } from 'src/academic_year/entities/academic_year.entity';
import { Student } from 'src/students/entities/student.entity';
@Entity()
export class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => Grade, grade => grade.classes)
  grade: Grade;
  @Column()
  name: string;
  @ManyToOne(() => AcademicYear, academic_year => academic_year.id)
  academic_year: AcademicYear;

  @OneToMany(() => Student, student => student.class)
  students: Student[];
}
