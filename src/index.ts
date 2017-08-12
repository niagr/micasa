require('source-map-support').install()
import * as express from 'express'
import * as request from 'request'

import apiRoute from './api'
import {REACT_APP_URL} from './constants'

async function main () {

  const app = express()

  app.use('/api', apiRoute)

  // Route requests for static files to the static url of webpack dev server
  app.get('/static/*', (req, res) => request(REACT_APP_URL + req.url).pipe(res))

  // Route all unknown URL's to root of react application
  // These URL's are handled by react-router
  app.get('*', (req, res) => request(REACT_APP_URL + '/').pipe(res))

  app.listen(5000)

}

main()
