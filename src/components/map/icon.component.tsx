import L from 'leaflet';
import icon from './icon-location.svg'
const iconPoint = new L.Icon({
    iconUrl: icon,
    iconSize: new L.Point(60, 75),
    className: ''
})

export {iconPoint}