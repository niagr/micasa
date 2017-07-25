import { Table, Column, Model } from 'sequelize-typescript'

@Table
export default class Listing extends Model<Listing> {
  
  @Column({allowNull: false})
  name: string;

  @Column({allowNull: false})
  address: string;

  @Column({allowNull: false})
  owner: string;

}