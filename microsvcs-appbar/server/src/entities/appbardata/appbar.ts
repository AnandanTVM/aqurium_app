//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('appbar')
export class appbar {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'name', nullable: false, type: 'text', primary: false })
  name: string;
  @Column({ name: 'link', nullable: false, type: 'text', primary: false })
  link: string;
  @Column({ name: 'iconname', nullable: false, type: 'text', primary: false })
  iconname: string;
  @Column({ name: 'seqid', nullable: false, type: 'bigint', primary: false })
  seqid: number;
}
