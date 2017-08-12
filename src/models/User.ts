import * as mongoose from 'mongoose'

import db from '../db'

class User {
  name: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: Date;

  get age () {
    return (new Date().getFullYear() - this.dateOfBirth.getFullYear())
  }
}

export interface UserDocument extends User, mongoose.Document {}

const UserSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  dateOfBirth: Date
})

UserSchema.loadClass(User)

export const UserModel = db.model<UserDocument>("User", UserSchema)