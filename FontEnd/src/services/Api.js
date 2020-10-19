import axios from 'axios';
import Cookies from 'js-cookie';

const url={
    baseUrl: "https://shop-shoe-backend.herokuapp.com/",
    login: "api/user/login",
    register: "api/user/signup",
    userInfo: "api/user/myaccount",

};
const instance = axios.create({
    baseURL: url.baseUrl,
    headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"},
});

instance.interceptors.request.use((request)=>{
    const loginInfoStr = Cookies.get('loginInfo');
    if(loginInfoStr){
        const loginInfos = JSON.parse(loginInfoStr);
        request.headers.Authorization = `Bearer ${loginInfos.token}`;
        return request;
    }
    return request;
})
export default{
    url: url,
    axios: instance,
    get: instance.get,
    post: instance.post,
    put: instance.put,
    delete: instance.delete
};