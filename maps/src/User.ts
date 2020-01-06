import faker from 'faker';
//faker is the fake data we are feeding in to our app, you'll need to install type definition files for maximum benefit from typescript search @types
import { Mappable } from './CustomMap';

//implements will show error on what exactly is missing when you have an error
export class User implements Mappable {
  name: string;

  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  //markContent is a function that will return a string
  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
