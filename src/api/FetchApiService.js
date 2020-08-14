import axios from 'axios'
import {API_URL} from '../constants'

class FetchApiService {
    retrieveAllCountries(){
        console.log("Inside retrieveAllCountries")
        // return axios.get(API_URL).then();
        return new Promise((resolve,reject)=>{
            axios.get(API_URL).then((response)=>{
                if(response["data"])
                {
                    resolve(response.data)
                }
                else
                    throw (new Error("No data received from Api"));
            })
            .catch((err) => {console.log(err)});
        });
    }
}

export default new FetchApiService()