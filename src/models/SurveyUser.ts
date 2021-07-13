import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Survey } from './Survey';
import { User } from './User'


/* SurveyTableName in migrations/...CreateSurveysUsers.ts */
@Entity('surveys_users')
class SurveyUser {

  @PrimaryColumn()
  readonly id: string

  @Column(/* implict define `name` */)
  user_id: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column()
  survey_id: string

  @ManyToOne(() => Survey)
  @JoinColumn({ name: 'survey_id' })
  survey: Survey

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

