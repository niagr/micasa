import {PropertyModel,Property} from '../models/Property'

export async function getPropertiesForNameOrAddress(name: string) {
  return await PropertyModel.find()
                            .or([
                              {'name': new RegExp(name, 'i')},
                              {'address': new RegExp(name, 'i')}
                            ])
                            .limit(20)
                            .exec()
}


export async function createProperty(newProperty: any) {
  const property = new PropertyModel({
    name: newProperty.name,
    address: newProperty.address
  })
  await property.save()
}