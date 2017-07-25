import * as express from 'express'

import initDb from './db'
import Listing from './models/Listing'


async function main() {

  await initDb()

  const l = new Listing({
    name: 'some name',
    owner: 'some owner',
    address: 'some address'
  })

  l.save()

  console.log(l.owner)
  
}

main()