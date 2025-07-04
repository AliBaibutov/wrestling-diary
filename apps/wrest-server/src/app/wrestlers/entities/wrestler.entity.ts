import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Wrestler {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column('decimal', { precision: 5, scale: 2 })
  weight!: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;
}
