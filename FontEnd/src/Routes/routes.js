import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Page404 from "../pages/page404/page404";
import Register from "../pages/register/register";
import ProductList from "../pages/productList/productList";
import Cart from "../pages/cart/cart";
import WishList from "../pages/wishList/wishList";
import Profile from "../pages/profile/profile";
import Checkout from "../pages/checkout/checkout";
import ProductDetail from "../pages/productDetail/productDetail";
const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/home", exact: true, name: "Home", component: Home },
  { path: "/login", exact: true, name: "Login", component: Login },
  { path: "/register", exact: true, name: "Register", component: Register },
  { path: "/productList", exact: true, name: "Product List", component: ProductList },
  { path: "/men", exact: true, name: "Men", component: ProductList },
  { path: "/women", exact: true, name: "Women", component: ProductList },
  { path: "/boy", exact: true, name: "Boy", component: ProductList },
  { path: "/girl", exact: true, name: "Girl", component: ProductList },
  { path: "/cart", exact: true, name: "Cart", component: Cart },
  { path: "/wishlist", exact: true, name: "Whish List", component: WishList },
  { path: "/profile", exact: true, name: "Profile", component: Profile },
  { path: "/checkout", exact: true, name: "Checkout", component: Checkout },
  { path: "/productDetail", exact: true, name: "Product Detail", component: ProductDetail },
  { name: "404", component: Page404 }
];

export default routes;
