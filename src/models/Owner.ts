import * as mongoose from 'mongoose'

import db from '../db'

class Owner {
  name: string;
  phoneNumber: string
}

export interface OwnerDocument extends Owner, mongoose.Document {}

const OwnerSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String
})

OwnerSchema.loadClass(Owner)

export const OwnerModel = db.model<OwnerDocument>("Owner", OwnerSchema)
