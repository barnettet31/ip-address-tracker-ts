import { latLng  } from "leaflet";
import { useMapEvents, Marker } from "react-leaflet";
import { iconPoint } from "./icon.component";
interface IMarkerProps{
    lat:string;
    lng:string;
}
export function MapMarkerComp ({lat, lng}:IMarkerProps){    
    const map = useMapEvents({
    });
    map.flyTo(latLng(Number(lat),Number(lng)))
    return(

    <Marker icon={iconPoint} position={latLng(Number(lat), Number(lng))}>
    </Marker>
 
    )
  
}