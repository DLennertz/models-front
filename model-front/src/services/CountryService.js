import api from './api'

export default class CountryService{
    getCountry(){
        return api.get('/country',{auth:{username:'usuario',password:'123456'}}).then(res => res.data);
    }
}