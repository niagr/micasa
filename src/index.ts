require('source-map-support').install()
import * as mongoose from 'mongoose'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as request from 'request'

import {UserDocument, UserModel as User} from './models/User'
import {OwnerDocument, OwnerModel as Owner} from './models/Owner'
import {ListingDocument, ListingModel as Listing} from './models/Listing'
import {PropertyDocument, PropertyModel as Property} from './models/Property'
import {getPropertiesForNameOrAddress, createProperty} from './api/property'
import {REACT_APP_URL} from './constants'

async function main () {

  const app = express()

  app.use(bodyParser.urlencoded({ extended: true }))

  app.get('/api/property', async (req, resp) => {
    const query = req.query.name
    resp.send(JSON.stringify(await getPropertiesForNameOrAddress(query)))
  })

  app.post('/api/property/create', async (req, res) => {
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

  app.get('/static/*', (req, res) => {
    request(REACT_APP_URL + req.url).pipe(res)
  })

  app.get('*', (req, res) => {
    request(REACT_APP_URL + '/').pipe(res)
  })

  app.listen(5000)

}

main()

const add = 4 