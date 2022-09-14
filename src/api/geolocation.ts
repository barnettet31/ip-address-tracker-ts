import axios from "axios"
const apiURL = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_OUqnSqbjINX6m377GwVCDV5SjNik2'
export const initData = async ()=>{
try{

    const response = await axios.get(apiURL);
    if(response.status === 200){
        return response.data;
    }
}catch(e){
   console.warn(e);
}
};

export const fetchNewLocalIP = async (ip:string,)=>{
    try{
        const requestUrl =`${apiURL}&ipAddress=${ip}`;
        const response = await axios.get(requestUrl);
        if(response.status === 200){
            return response.data;
        }
    }catch(e){
       console.warn(e);
    }
}

export const fetchNewLocalDomain = async (domain:string)=>{
    try{
        const requestUrl = `${apiURL}&domain=${domain}`;
        const response = await axios.get(requestUrl);
        if(response.status === 200){
            return response.data;
        }
    }catch(e){
        console.warn(e);
        }
}