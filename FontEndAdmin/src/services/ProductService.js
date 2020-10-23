import Api from "./Api";

// const login = (email, password) => {
//     var data = {email, password}
//     return Api.post(Api.url.login, data);
// }
// const register = data => Api.post(Api.url.register, data);
// const getUser = () => Api.get(`${Api.url.userInfo}`);
// const get = (id) => Api.get(`${Api.url.majors}/${id}`);
const createProduct = data => Api.post(Api.url.product, data)
const list = () => Api.get(Api.url.product);
// const getProduct = () => Api.get(`${Api.url.product}/${id}`)
export default{
    createProduct : createProduct,
    list : list,
};