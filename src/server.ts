import { App } from './app'

const PORT = 3333
App.listen(PORT, () => {
  return console.log(`
  \r 🏃 Server is running!
  \r Endpoint: http://localhost:${PORT}
  \r `)
})
