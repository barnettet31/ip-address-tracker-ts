import { latLng } from "leaflet";
import { MapContainer, TileLayer,  } from "react-leaflet";
import { ILocation } from "../../interfaces";
import { MapMarkerComp } from "./marker.component";
export function Map({ location }: ILocation) {
  
  const latlng = latLng(Number(location.lat), Number(location.lng));
  
  return (
    <MapContainer
      zoomControl={false}
      center={latlng}
      zoom={10}
      scrollWheelZoom={false}
      
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapMarkerComp lat={location.lat} lng={location.lng} />
    </MapContainer>
  );
}
