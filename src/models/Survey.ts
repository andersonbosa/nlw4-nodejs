import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'


/* SurveyTableName in migrations/...CreateSurveys.ts */
@Entity('surveys')
class Survey {

  @PrimaryColumn()
  readonly id: string

  @Column(/* define `name` implict */)
  title: string

  @Column()
  description: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Survey }

