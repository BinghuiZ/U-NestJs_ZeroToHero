import { Task } from 'src/tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  // one user can have many tasks
  // eager: true => query the tasks when the user is loaded
  @OneToMany((_type) => Task, (task) => task.user, { eager: true })
  task: Task[];
}
