import { Table, Column, Model, BelongsTo, HasMany, ForeignKey, DataType } from 'sequelize-typescript'
import Listing from './Listing'

@Table
export default class Owner extends Model<Owner> {
  
  @Column({allowNull: false})
  name: string;

  @Column({allowNull: false})
  phoneNumber: string;

  @HasMany(() => Listing)
  listings: Listing[]

}