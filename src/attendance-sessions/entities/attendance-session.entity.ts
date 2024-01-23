import { Class } from 'src/classes/entities/class.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AttendanceSession {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => Class)
  @JoinTable()
  class: Class;
  @Column()
  session_date: Date;
  @Column({ nullable: true })
  description: string;
}
