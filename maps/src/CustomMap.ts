//if you need to use goole map again and need help docs html is next line
//https://developers.google.com/maps/documentation/javascript/tutorial  
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

//remember when you declare something in typescript it's not defined yet, you still need to give define the values

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  /* bad implementaion
  it's bad because you are just repating yourself, with interface mappable you can instead make addMarker function universal as long as the argument fits into the addMarker function
  
  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      }
    });
  }
  */

  //using this method as long as the arugument fits interface mappable you can use it
  //here is an example of using the interface to restrict argument going into the function

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {

    //spent much time figuring out why InfoWindow didn't work and found out that calling InfoWindow isn't the camel case from usual javascript convention, an easy remedy if I cmd and go to maps to check out it's api. 
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent();
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
