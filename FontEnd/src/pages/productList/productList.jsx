import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../productList/productList.css";
import ProductService from '../../services/ProductService'
class ProductList extends Component {
  state = {

  }
  componentDidMount = () => {
    window.scrollTo(0, 0)
    ProductService.listProduct().then(res => {
      this.props.onLoadProductFromApi(res.data.products)
    })
  }
  render() {
    return (
      <div className="backGroundProductList">
        <div className="slider-area ">
          <div className="single-slider slider-height2 d-flex align-items-center data-background-productlist">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>Product List</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container backgroundContainer radiusDelivery">
          <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
            <div className="carousel-inner ">
              <div className="carousel-item active ">
                <p className="textCenter color-text p1"><i className="fas fa-truck truck_s"></i><strong className="paddingLeftStrong">Giao hàng miễn phí</strong>: Miễn phí giao hàng cho đơn trên 1.000.000đ của Shoes Shop</p>
              </div>
              <div className="carousel-item textCenter">
                <p className=" color-text p1"><i className="fas fa-truck truck_s"></i><strong className="paddingLeftStrong">Giao hàng miễn phí</strong>: Miễn phí giao hàng cho đơn trên 1.000.000đ của Shoes Shop</p>
              </div>
              <div className="carousel-item">
                <p className="textCenter color-text p1"><i className="fas fa-truck truck_s"></i><strong className="paddingLeftStrong">Giao hàng miễn phí</strong>: Miễn phí giao hàng cho đơn trên 1.000.000đ của Shoes Shop</p>
              </div>
            </div>
            {/* <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a> */}
          </div>
        </div>
        {/* <div className="header-services">
        <div className="ps-services owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="7000" data-owl-gap="0" data-owl-nav="true" data-owl-dots="false" data-owl-item="1" data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="1" data-owl-item-lg="1" data-owl-duration="1000" data-owl-mousedrag="on">
          <p className="ps-service"><i className="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
          <p className="ps-service"><i className="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
          <p className="ps-service"><i className="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
        </div>
      </div> */}
        <div className="container containerMainMarginTop">
          <div className="row">
            <div className="col-2 backgroundLeftCategory">
              <div className="tagFilter">Danh mục</div>
              <div className="filterCategory">
                <Link to="product-listing.html">Giày chạy <i className="">(76)</i></Link>
              </div>
              <div className="filterCategory">
                <Link to="product-listing.html">Giày đá banh <i className="">(21)</i></Link>
              </div>
              <div className="filterCategory">
                <Link to="product-listing.html">Giày thời trang <i className="">(105)</i></Link>
              </div>
              <div className="filterCategory">
                <Link to="product-listing.html">Giày tây <i className="">(105)</i></Link>
              </div>

              <div className="tagFilter">Thương hiệu</div>
              <div className="filterBrand">
                <Link to="product-listing.html">
                  <img 
                    className="filterImgBrand" 
                    src="https://file.hstatic.net/1000230642/article/download1_4efe949eadcf407d8204d16fb2492540.png"/>
                </Link>
              </div>
              <div className="filterBrand">
                <Link to="product-listing.html">
                  <img 
                    className="filterImgBrand" 
                    src="https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg"/>
                </Link>
              </div>
              <div className="filterBrand">
                <Link to="product-listing.html">
                  <img className="filterImgBrand" 
                  src="https://i.pinimg.com/originals/83/dd/1a/83dd1aa03d73812fcbd5a3d18a181aeb.png"/>
                </Link>
              </div>
              <div className="filterBrand">
                <Link to="product-listing.html">
                  <img className="filterImgBrand" 
                    src="https://lh3.googleusercontent.com/proxy/7EF-PLxlCAg55k2edOr5gzKoeDfFrQrS2x3FleT0GOZjPrD2GQyCReEUp_F0tYSwXLKO1rZfFMcAOKfPXCKie37_WwTJcIJd3CVLWw"/>
                </Link>
              </div>
              <div className="filterBrand">
                <Link to="product-listing.html">
                  <img className="filterImgBrand" 
                    src="https://preview.thenewsmarket.com/Previews/RBOK/StillAssets/800x600/321447.jpg"/>
                </Link>
              </div>
              <div className="filterBrand">
                <Link to="product-listing.html">
                  <img className="filterImgBrand" 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Converse_logo.svg/1200px-Converse_logo.svg.png"/>
                </Link>
              </div>


              {/* <div className="ps-sidebar" data-mh="product-listing">
                <aside className="ps-widget--sidebar ps-widget--category">
                  <div className="ps-widget__header">
                    <div className="tagFilter">Danh mục</div>
                  </div>
                  <div className="ps-widget__content">
                    <ul className="ps-list--checked ">
                      <li className="current"><a href="product-listing.html">Life(521)</a></li>
                      <li><Link to="product-listing.html">Giày chạy(76)</Link></li>
                      <li><Link to="product-listing.html">Giày đá banh(21)</Link></li>
                      <li><Link to="product-listing.html">Giày thời trang(105)</Link></li>
                      <li><Link to="product-listing.html">More</Link></li>
                    </ul>
                  </div>
                </aside> */}
              {/* <aside className="ps-widget--sidebar ps-widget--filter">
                <div className="ps-widget__header">
                  <h3>Category</h3>
                </div>
                <div className="ps-widget__content">
                  <div className="ac-slider" data-default-min="300" data-default-max="2000" data-max="3450" data-step="50"
                    data-unit="$"></div>
                  <p className="ac-slider__meta">Price:<span className="ac-slider__value ac-slider__min"></span>-<span
                    className="ac-slider__value ac-slider__max"></span></p><a className="ac-slider__filter ps-btn"
                      href="#">Filter</a>
                </div>
              </aside> */}



              {/* <aside className="ps-widget--sidebar ps-widget--category">
                  <div className="ps-widget__header">
                    <div className="tagFilter">Thương hiệu</div>
                  </div>
                  <div className="ps-widget__content">
                    <ul className="ps-list--checked">
                      <li className="current"><a href="product-listing.html">Nike(521)</a></li>
                      <li><Link to="product-listing.html">Adidas(76)</Link></li>
                      <li><Link to="product-listing.html">Vans(36)</Link></li>
                      <li><Link to="product-listing.html">Converse(108)</Link></li>
                      <li><Link to="product-listing.html">Puma(108)</Link></li>
                      <li><Link to="product-listing.html">Bitis(47)</Link></li>
                      <li><Link to="product-listing.html">Reebok‎(47)</Link></li>
                    </ul>
                  </div>
                </aside> */}

              {/* </div> */}
            </div>
            <div className="col-10 rightList">
              <div className="container backgroundRow boderRaFilter">
                <div className="row">
                  <div className="col-2">
                    <div className="nameFilter">Sắp xếp theo</div>
                  </div>
                  <div className="col-2">
                    <div className="btn btnFilter">Khuyến mãi tốt nhất</div>
                  </div>
                  <div className="col-2">
                    <div className="btn btnFilter marginSelling">Bán chạy</div>
                  </div>
                  <div className="col-2">
                    <div className="btn btnFilter marginIncrease">Giá tăng dần</div>
                  </div>
                  <div className="col-2">
                    <div className="btn btnFilter marginDecrease">Giá giảm dần</div>
                  </div>
                  <div className="col-2">
                    <div className="displayInput">
                      <input type="text" className="form-control marginInputLeft" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Giá thấp nhất" />
                      <div className="marginInputAAA"> - </div>
                      <input type="text" className="form-control marginInputRight" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Giá cao nhất" />
                      <div className="btn btnSearchPrice">Tìm</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  {this.props.showProduct}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductList;
