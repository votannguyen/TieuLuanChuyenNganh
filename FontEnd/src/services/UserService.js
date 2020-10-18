import Api from "./Api";

const login = (email, password) => {
    var data = {email, password}
    return Api.post(Api.url.login, data);
}
const register = data => Api.post(Api.url.users,data);

export default{
    login : login,
    register: register
};
