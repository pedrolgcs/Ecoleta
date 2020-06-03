import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import Item from '@modules/items/infra/typeorm/entities/Item';

interface IPoint {
  [key: string]: number;
}

@Entity('points')
class Point {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  whatsapp: string;

  @Column('float8')
  latitude: number;

  @Column('float8')
  longitude: number;

  @Column('point')
  location: object;

  @Column()
  city: string;

  @Column()
  uf: string;

  @ManyToMany(() => Item)
  @JoinTable()
  items: Item[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Point;
