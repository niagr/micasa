import { Table, Column, Model, BelongsTo, HasMany, ForeignKey, DataType } from 'sequelize-typescript'
import Owner from './Owner'

@Table
export default class Listing extends Model<Listing> {
  
  @Column({allowNull: false})
  name: string;

  @Column({allowNull: false})
  address: string;

  @ForeignKey(() => Owner)
  @Column({allowNull: false})
  ownerId: number;

  @BelongsTo(() => Owner)
  owner: Owner
}