import React, {createContext, useEffect, useState} from 'react';
import { fetchNewLocalDomain, fetchNewLocalIP, initData } from '../api/geolocation';
import {ILocationWithIP} from '../interfaces';
import { checkIsDomain, checkIsIP } from '../utilities/utilities';
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
    },
    onSubmit:()=>null,
    setNewIp:()=>null


  }
  interface IValue extends ILocationWithIP {
    setNewIp?:(e:React.FormEvent<HTMLInputElement>)=>void;
    onSubmit?:()=>void;
  }
export const GeolocationContext = createContext<IValue>(initialState);
export const GeolocationContextProvider = ({children}:IProviderProps)=>{
    const [appData, setData] = useState<IValue>(initialState);
    const [searchIP, setSearchIp] = useState('');
    const [error, setError] = useState();
    async function initApp(){
        const {ip,isp, location} = await initData();
        setData({ip:ip, isp, location});
 
      }
      const setNewIp = (e:React.FormEvent<HTMLInputElement>)=>{
        console.log(e.currentTarget.value);
        setSearchIp(e.currentTarget.value);
        console.log('searchIP',searchIP);
      };
      const onSubmit = async ()=>{
          if(checkIsIP(searchIP)) {
            const response = await fetchNewLocalIP(searchIP);
            return setData(response);
          }
          else if(checkIsDomain(searchIP)){
            const response = await fetchNewLocalDomain(searchIP);
            return setData(response);
          }
          else{
            alert("You have entered an invalid param");
          }
          
       
       
      }
    useEffect( ()=>{
       
        initApp();
        return ()=>{
         setData(initialState);
        }
   }, [])
   const value: IValue = {...appData,  setNewIp, onSubmit}
    return(
        <GeolocationContext.Provider value={value}>{children}</GeolocationContext.Provider>
    )
}