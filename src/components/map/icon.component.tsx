import L from 'leaflet';
import icon from './icon-location.svg'
const iconPoint = new L.Icon({
    iconUrl: icon,
    iconSize: new L.Point(46, 56),
    className: '',
    
})

export {iconPoint}