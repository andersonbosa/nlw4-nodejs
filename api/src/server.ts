import express from 'express'

/* @see {@link -} to express documentation */
const app = express()

app.get('/', (_req, res) => {
  return res.json({
    msg: 'nlw4'
  })
})

app.post('/', (req, res) => {
  return res.json({
    payload: req.data
  })
})

app.listen(15000, () => console.log('# Server is running'))

