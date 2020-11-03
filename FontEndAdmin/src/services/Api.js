import axios from 'axios';
import Cookies from 'js-cookie';


const url={
    baseUrl: "http://localhost:5000",
    product: "api/product/",
    brand: "api/brand/",
    category: "api/category/",
    user: "api/user/",

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
        request.headers.Authorization = `Bearer ${loginInfos}`;
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