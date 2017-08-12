import * as mongoose from 'mongoose'

import db from '../db'
import {OwnerModel} from './Owner'
import {PropertyModel} from './Property'

PropertyModel && OwnerModel

class Listing {
  name: string;
  owner: mongoose.Schema.Types.ObjectId;
  property: mongoose.Schema.Types.ObjectId;
}

export interface ListingDocument extends Listing, mongoose.Document {}

const ListingSchema = new mongoose.Schema({
  name: String,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'Owner'},
  property: {type: mongoose.Schema.Types.ObjectId, ref: 'Property'}
})

ListingSchema.loadClass(Listing)

export const ListingModel = db.model<ListingDocument>("Listing", ListingSchema)