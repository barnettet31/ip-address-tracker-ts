import axios from "axios"
const apiURL = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_OUqnSqbjINX6m377GwVCDV5SjNik2'
export const initData = async ()=>{
try{

    const response = await axios.get(apiURL);
    if(response.status === 200){
        return response.data;
    }
}catch(e){
    throw e;
}
};