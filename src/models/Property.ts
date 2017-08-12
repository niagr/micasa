import * as mongoose from 'mongoose'

import db from '../db'

export class Property {
  name: string
  address: string
}

export interface PropertyDocument extends Property, mongoose.Document {}

const PropertySchema = new mongoose.Schema({
  name: String,
  address: String
})

PropertySchema.loadClass(Property)

export const PropertyModel = db.model<PropertyDocument>("Property", PropertySchema)
