import Api from "./Api";

const login = (email, password) => {
    var data = {email, password}
    return Api.post(Api.url.login, data);
}
const register = data => Api.post(Api.url.register, data);
const getUser = () => Api.get(`${Api.url.userInfo}`);
export default{
    login : login,
    register: register,
    getUser: getUser
};
