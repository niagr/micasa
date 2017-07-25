import {Sequelize} from 'sequelize-typescript'
import Listing from './models/Listing'

export default async function init() {

  const sequelize =  new Sequelize({
    name: 'micasa',
    dialect: 'postgres',
    username: 'micasa',
    password: 'micasa'
  });

  sequelize.addModels([Listing])

  await sequelize.sync({force: true})

}
