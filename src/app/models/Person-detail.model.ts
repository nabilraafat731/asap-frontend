

export class PersonDetail {
  id: number = 0;
  fullName: string = '';
  userID: string= '';
  email: string = '';
  password: string = '';
  postalCode: string = '';
  streetName: string = '';
  appartmentNumber: number = 0;
  floorNumber: number = 0;
  buildingNumber: number = 0;
  countryID: number = 0;
  cityID: number = 0;
  customerID : number=0;
}

export class Response {

  success: boolean = false;
  message: string = '';
  statusCode: number = 0;
  data: [];

}
