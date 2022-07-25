import * as axios from "axios";

/* const instance = axios.create({
    withCredentials: true
    
}) */
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://timeapi.io/api/Time/current/zone?timeZone=Europe/Kiev'

})


export const timeApi = {
    getTime() {
        return instance.get();
            
    }
}
