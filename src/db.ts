import {Sequelize} from 'sequelize-typescript'
import Listing from './models/Listing'
import Owner from './models/Owner'

export default async function init() {

  const sequelize =  new Sequelize({
    name: 'micasa',
    dialect: 'postgres',
    username: 'micasa',
    password: 'micasa',
    // logging: false
  });

  sequelize.addModels([
    Listing,
    Owner
  ])

  await sequelize.sync({force: true})

}
