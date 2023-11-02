import api from './api'

export default class HairColorService{
    getHairColor(){
        return api.get('/haircolor',{auth:{username:'usuario',password:'123456'}}).then(res => res.data);
    }
}