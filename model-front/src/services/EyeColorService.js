import api from './api'

export default class EyeColorService{
    getEyeColor(){
        return api.get('/eyecolor',{auth:{username:'usuario',password:'123456'}}).then(res => res.data);
    }
}