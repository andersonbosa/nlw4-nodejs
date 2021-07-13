import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';


/* SurveyTableName in migrations/...CreateSurveysUsers.ts */
@Entity('surveys_users')
class SurveyUser {

  @PrimaryColumn()
  readonly id: string

  @Column(/* define `name` implict */)
  user_id: string

  @Column()
  survey_id: string

  @Column()
  value: number

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { SurveyUser };

