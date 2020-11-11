import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Page404 from "../pages/page404/page404";
import Register from "../pages/register/register";
import ProductList from "../pages/productList/productList";
import WishList from "../pages/wishList/wishList";
import Profile from "../pages/profile/profile";
import InvoiceDetail from "../pages/invoiceDetail/invoiceDetail";
import ProductContainer from "../redux/containers/ProductContainer";
import CartContainer from "../redux/containers/CartContainer.js";
import CheckoutContainer from '../redux/containers/CheckoutContainer';
import ProductDetailContainer from '../redux/containers/ProductDetailContainer';
import ProductDetail from '../pages/productDetail/productDetail';

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/home", exact: true, name: "Home", component: Home },
  { path: "/login", exact: true, name: "Login", component: Login },
  { path: "/register", exact: true, name: "Register", component: Register },
  { path: "/productList", exact: true, name: "Product List", component: ProductContainer},
  { path: "/men", exact: true, name: "Men", component: ProductList },
  { path: "/women", exact: true, name: "Women", component: ProductList },
  { path: "/boy", exact: true, name: "Boy", component: ProductList },
  { path: "/girl", exact: true, name: "Girl", component: ProductList },
  { path: "/cart", exact: true, name: "Cart", component: CartContainer },
  { path: "/wishlist", exact: true, name: "Whish List", component: WishList },
  { path: "/profile", exact: true, name: "Profile", component: Profile },
  { path: "/checkout", exact: true, name: "Checkout", component: CheckoutContainer },
  { path: "/productDetail/:id", exact: true, name: "Product Detail", component: ProductDetailContainer },
  { path: "/invoiceDetail", exact: true, name: "Invoice Detail", component: InvoiceDetail },
  { name: "404", component: Page404 }
];

export default routes;
