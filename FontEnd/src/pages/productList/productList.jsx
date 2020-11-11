import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../productList/productList.css";
class ProductList extends Component {
  state = {

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
                <p className="textCenter color-text p1"><i className="fas fa-truck"></i><strong className="paddingLeftStrong">Giao hàng miễn phí</strong>: Miễn phí giao hàng tiêu chuẩn cho tất cả đơn hàng của Shoes Shop</p>
              </div>
              <div className="carousel-item textCenter">
                <p className=" color-text p1"><i className="fas fa-truck"></i><strong className="paddingLeftStrong">Giao hàng miễn phí</strong>: Miễn phí giao hàng tiêu chuẩn cho tất cả đơn hàng của Shoes Shop</p>
              </div>
              <div className="carousel-item">
                <p className="textCenter color-text p1"><i className="fas fa-truck"></i><strong className="paddingLeftStrong">Giao hàng miễn phí</strong>: Miễn phí giao hàng tiêu chuẩn cho tất cả đơn hàng của Shoes Shop</p>
              </div>
          </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
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
              <div className="ps-sidebar" data-mh="product-listing">
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
                </aside>
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
                <aside className="ps-widget--sidebar ps-widget--category">
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
                </aside>
                <aside className="ps-widget--sidebar ps-widget--category">
                  <div className="ps-widget__header">
                    <h3>Width</h3>
                  </div>
                  <div className="ps-widget__content">
                    <ul className="ps-list--checked">
                      <li className="current"><Link to="product-listing.html">Narrow</Link></li>
                      <li><Link to="product-listing.html">Regular</Link></li>
                      <li><Link to="product-listing.html">Wide</Link></li>
                      <li><Link to="product-listing.html">Extra Wide</Link></li>
                    </ul>
                  </div>
                </aside>
                <div className="ps-sticky desktop">
                  <aside className="ps-widget--sidebar">
                    <div className="ps-widget__header">
                      <div className="tagFilter">Kích thước</div>
                    </div>
                    <div className="ps-widget__content">
                      <table className="table ps-table--size">
                        <tbody>
                          <tr>
                            <td className="active">3</td>
                            <td>5.5</td>
                            <td>8</td>
                            <td>10.5</td>
                          </tr>
                          <tr>
                            <td>3.5</td>
                            <td>6</td>
                            <td>8.5</td>
                            <td>11</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>6.5</td>
                            <td>9</td>
                            <td>11.5</td>
                          </tr>
                          <tr>
                            <td>4.5</td>
                            <td>7</td>
                            <td>9.5</td>
                            <td>12</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>7.5</td>
                            <td>10</td>
                            <td>12.5</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </aside>
                  <aside className="ps-widget--sidebar">
                    <div className="ps-widget__header">
                      <div className="tagFilter">Color</div>
                    </div>
                    <div className="ps-widget__content">
                      <ul className="ps-list--color">
                        <li><Link to="#"></Link></li>
                        <li><Link to="#"></Link></li>
                        <li><Link to="#"></Link></li>
                        <li><Link to="#"></Link></li>
                        <li><Link to="#"></Link></li>
                        <li><Link to="#"></Link></li>
                        <li><Link to="#"></Link></li>
                        <li><Link to="#"></Link></li>
                        <li><Link to="#"></Link></li>
                        <li><Link to="#"></Link></li>
                        <li><Link to="#"></Link></li>
                        <li><Link to="#"></Link></li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
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
                    {this.props.children}
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
