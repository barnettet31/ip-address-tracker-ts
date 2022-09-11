export interface ILocation{
    location:{
        city:string;
        country:string
        lat:string;
        lng:string;
        region:string;
        postalCode:string;
        timezone:string;
    }


}

export interface ILocationWithIP extends ILocation{
    ip:string;
    isp:string;
}