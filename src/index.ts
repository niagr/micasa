import * as express from 'express'

import initDb from './db'
import Listing from './models/Listing'
import Owner from './models/Owner'


async function main() {

  await initDb()

  const o = new Owner({
    name: 'Nishant George Agrwal',
    phoneNumber: '9902438036'
  })

  await o.save()

  const l = new Listing({
      name: 'Liberty Heights',
      ownerId: o.id,
      address: 'Green Paradise, Bangalore'
  })

  await l.save()

  const listings = await Listing.findAll()
  console.log(listings)
  
}

main()