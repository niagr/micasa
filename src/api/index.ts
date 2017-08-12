import {Router} from 'express'
import * as bodyParser from 'body-parser'

import {getPropertiesForNameOrAddress, createProperty} from '../services/data'

const router = Router()

router.use(bodyParser.urlencoded({ extended: true }))

router.get('/property', async (req, resp) => {
  const query = req.query.name
  resp.send(JSON.stringify(await getPropertiesForNameOrAddress(query)))
})

router.post('/property/create', async (req, res) => {
  const name = req.body.name
  const address = req.body.address
  if (!(name && address)) {
    res.status(400)
    res.send("'name' or 'address' params undefined or emtpy")
    return
  }
  await createProperty({name, address})
  res.status(200)
  res.send('ok')
})

export default router