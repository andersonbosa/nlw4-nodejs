import { Connection, createConnection, getConnectionOptions } from 'typeorm'

export default async (): Promise < Connection > => {
  const defaultTypeOrmOptions = await getConnectionOptions()

  return createConnection(
    Object.assign(defaultTypeOrmOptions, {
      database: process.env.NODE_ENV === 'test' ? './src/database/database.test.sqlite' : defaultTypeOrmOptions.database
    })
  )
}

