import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'


/* table name in migrations/...CreateUsers.ts */
@Entity('users')
class User {

  @PrimaryColumn()
  readonly id: string;

  @Column() /* define `name` implict */
  name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { User }

