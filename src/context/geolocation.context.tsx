import React, {createContext, useEffect, useState} from 'react';
import { initData } from '../api/geolocation';


interface IProviderProps {
    children?:React.ReactNode;
}
const initialState = {
    ip:'192.212.174.101',
    isp:'SpaceX Starlink',

    location:{
      city:"Brooklyn",
      country:"US",
      region:"NY",
      postalCode:"10001",
      lat:"40.678",
      lng:"73.944",
      timezone:'-05:00'
    }

  }
export const GeolocationContext = createContext(initialState);
export const GeolocationContextProvider = ({children}:IProviderProps)=>{
    const [appData, setData] = useState(initialState);
    async function initApp(){
        const {ip,isp, location} = await initData();
        setData({ip:ip, isp, location});
 
      }
    useEffect( ()=>{
       
        initApp();
        return ()=>{
         setData(initialState);
        }
   }, [])
    return(
        <GeolocationContext.Provider value={appData}>{children}</GeolocationContext.Provider>
    )
}