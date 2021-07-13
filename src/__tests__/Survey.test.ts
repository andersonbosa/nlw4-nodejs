import request from 'supertest'
import { getConnection } from 'typeorm'
import { App } from '../app'
import createConnection from '../database'

describe('Surveys', () => {
  beforeAll(async () => {
    const connection = await createConnection()
    await connection.runMigrations()
  })

  afterAll(async () => {
    const connection = getConnection()
    await connection.dropDatabase()
    await connection.close()
  })

  it('Should be able to create a new survey', async () => {
    const response = await request(App)
      .post('/surveys')
      .send({
        title: 'survey test',
        description: 'Cillum proident laboris ut anim.'
      })

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
  })

  it('Should be able to get all surveys', async () => {
    await request(App)
      .post('/surveys')
      .send({
        title: 'survey test',
        description: 'Cillum proident laboris ut anim.'
      })

    const response = await request(App)
      .get('/surveys')

    expect(response.body.length).toBe(2)
  })

})
