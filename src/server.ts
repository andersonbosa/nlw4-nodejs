import { App } from './app'

const PORT = 7070
App.listen(PORT, () => {
  return console.log(`
  \r> Server is running!
  \rPort: http://localhost:${PORT}
  \r`)
})
