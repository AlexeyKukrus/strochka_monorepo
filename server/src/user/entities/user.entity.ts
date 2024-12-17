import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ name: 'user_name' })
  userName: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ nullable: true })
  role: string;

  @Column({ name: 'phone_number', nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  address: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
