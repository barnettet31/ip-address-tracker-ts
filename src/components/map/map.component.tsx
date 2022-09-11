import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { iconPoint } from "./icon.component";
export function Map(){
    return(
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker icon={iconPoint} position={[51.505, -0.09]}>
  
  </Marker>
</MapContainer>
    )
}