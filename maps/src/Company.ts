//IMPORTANT! once you install the @type file for the faker or google map then you can use cmd button to click on the method you can call from faker or google map VERY USEFUL

import faker from 'faker';

export class Company {
  //here you declare the type requirement for the class property, but you still need to declare it in the constructor !!
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
      `;
  }
}
