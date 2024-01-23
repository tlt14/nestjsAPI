import Roles from 'src/constants/role.enum';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  username: string;
  @Column()
  password: string;

  @Column({
    nullable: true,
  })
  refreshToken: string;

  // @Column({
  //   type: 'enum',
  //   enum: Roles,
  //   array: true,
  //   default: [Roles.Guest],
  // })
  // public roles: Roles[];
}
