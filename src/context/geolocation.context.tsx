import React, {createContext, useEffect, useState} from 'react';
import { initData } from '../api/geolocation';
import {ILocationWithIP} from '../interfaces';
import *  as yup from 'yup';
interface IProviderProps {
    children?:React.ReactNode;
}
function ipv4(message = 'Invalid IP address') {
    return this.matches(/(^(\d{1,3}\.){3}(\d{1,3})$)/, {
      message,
      excludeEmptyString: true
    }).test('ip', message, value => {
      return value === undefined || value.trim() === ''
        ? true
        : value.split('.').find((i:string) => parseInt(i, 10) > 255) === undefined;
    });
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
    async function initApp(){
        const {ip,isp, location} = await initData();
        setData({ip:ip, isp, location});
 
      }
      const setNewIp = (e:React.FormEvent<HTMLInputElement>)=>{setSearchIp(e.currentTarget.value)};
      const onSubmit = ()=>{
        const isIP = yup.string().
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