import React, { Component, use, useState } from 'react';
import { Link } from 'react-router-dom';
import "../productList/productList.css";
const ProductList = () => {
  const [fla, setFla] = useState("far fa-heart fa-2x mt-2")
  const toggle = () => {
    fla === "far fa-heart fa-2x mt-2" ? setFla("fas fa-heart fa-2x mt-2") : setFla("far fa-heart fa-2x mt-2")
  }
  const [ShowSize, setFlat] = useState(
    <div className="size-box">
      <span className="size_item pcolor">41</span>
      <span className="size_item pcolor">42</span>
      <span className="size_item pcolor">43</span>
      <span className="size_item pcolor">44</span>
      <span className="size_item pcolor">45</span>
      <span className="size_item pcolor">46</span>
    </div>
  )
  return (
    <div className="backGroundProductList">
      <div class="slider-area ">
        <div class="single-slider slider-height2 d-flex align-items-center data-background-productlist">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap text-center">
                  <h2>Product List</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container backgroundContainer">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <p class="textCenter color-text p1"><i class="fas fa-truck"></i><strong className="paddingLeftStrong">Giao hàng miễn phí</strong>: Miễn phí giao hàng tiêu chuẩn cho tất cả đơn hàng của Shoes Shop</p>
          </div>
          <div class="carousel-item textCenter">
            <p class=" color-text p1"><i class="fas fa-truck"></i><strong className="paddingLeftStrong">Giao hàng miễn phí</strong>: Miễn phí giao hàng tiêu chuẩn cho tất cả đơn hàng của Shoes Shop</p>
          </div>
          <div class="carousel-item">
            <p class="textCenter color-text p1"><i class="fas fa-truck"></i><strong className="paddingLeftStrong">Giao hàng miễn phí</strong>: Miễn phí giao hàng tiêu chuẩn cho tất cả đơn hàng của Shoes Shop</p>
          </div>
          {/* <div class="carousel-item">
            <p class="textCenter color-text p1"><i class="fas fa-truck"></i><strong>     Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
          </div> */}
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      </div>
      {/* <div class="header-services">
        <div class="ps-services owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="7000" data-owl-gap="0" data-owl-nav="true" data-owl-dots="false" data-owl-item="1" data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="1" data-owl-item-lg="1" data-owl-duration="1000" data-owl-mousedrag="on">
          <p class="ps-service"><i class="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
          <p class="ps-service"><i class="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
          <p class="ps-service"><i class="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
        </div>
      </div> */}
      <div class="container containerMainMarginTop">
        <div class="row">
          <div class="col-2 backgroundLeftCategory">
            <div class="ps-sidebar" data-mh="product-listing">
              <aside class="ps-widget--sidebar ps-widget--category">
                <div class="ps-widget__header">
                  <h3>Danh mục</h3>
                </div>
                <div class="ps-widget__content">
                  <ul class="ps-list--checked">
                    <li class="current"><a href="product-listing.html">Life(521)</a></li>
                    <li><a href="product-listing.html">Giày chạy(76)</a></li>
                    <li><a href="product-listing.html">Giày đá banh(21)</a></li>
                    <li><a href="product-listing.html">Giày thời trang(105)</a></li>
                    <li><a href="product-listing.html">More</a></li>
                  </ul>
                </div>
              </aside>
              {/* <aside class="ps-widget--sidebar ps-widget--filter">
                <div class="ps-widget__header">
                  <h3>Category</h3>
                </div>
                <div class="ps-widget__content">
                  <div class="ac-slider" data-default-min="300" data-default-max="2000" data-max="3450" data-step="50"
                    data-unit="$"></div>
                  <p class="ac-slider__meta">Price:<span class="ac-slider__value ac-slider__min"></span>-<span
                    class="ac-slider__value ac-slider__max"></span></p><a class="ac-slider__filter ps-btn"
                      href="#">Filter</a>
                </div>
              </aside> */}
              <aside class="ps-widget--sidebar ps-widget--category">
                <div class="ps-widget__header">
                  <h3>Thương hiệu</h3>
                </div>
                <div class="ps-widget__content">
                  <ul class="ps-list--checked">
                    <li class="current"><a href="product-listing.html">Nike(521)</a></li>
                    <li><a href="product-listing.html">Adidas(76)</a></li>
                    <li><a href="product-listing.html">Vans(36)</a></li>
                    <li><a href="product-listing.html">Converse(108)</a></li>
                    <li><a href="product-listing.html">Puma(108)</a></li>
                    <li><a href="product-listing.html">Bitis(47)</a></li>
                    <li><a href="product-listing.html">Reebok‎(47)</a></li>
                  </ul>
                </div>
              </aside>
              <aside class="ps-widget--sidebar ps-widget--category">
                <div class="ps-widget__header">
                  <h3>Width</h3>
                </div>
                <div class="ps-widget__content">
                  <ul class="ps-list--checked">
                    <li class="current"><a href="product-listing.html">Narrow</a></li>
                    <li><a href="product-listing.html">Regular</a></li>
                    <li><a href="product-listing.html">Wide</a></li>
                    <li><a href="product-listing.html">Extra Wide</a></li>
                  </ul>
                </div>
              </aside>
              <div class="ps-sticky desktop">
                <aside class="ps-widget--sidebar">
                  <div class="ps-widget__header">
                    <h3>Size</h3>
                  </div>
                  <div class="ps-widget__content">
                    <table class="table ps-table--size">
                      <tbody>
                        <tr>
                          <td class="active">3</td>
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
                <aside class="ps-widget--sidebar">
                  <div class="ps-widget__header">
                    <h3>Color</h3>
                  </div>
                  <div class="ps-widget__content">
                    <ul class="ps-list--color">
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
          <div class="col-10 ">
            <div className="container ">
              <div class="row">
                <div class="col-12 col-sm-8 col-md-6 col-lg-3 cardPaddingBottom cardMarginTop">
                  <Link className="nav-link-card-product aHeart link backgroundRow">
                    <div class="card showSizeBox  borderNoneCardProduct">
                      <img class="card-img-top boderimg_Pro" src={(require('../../img/Shoe/vans.png'))} />
                      <div class="card-body padding_card_body">
                        <div className="size-box">
                          <span className="size_item pcolor">41</span>
                          <span className="size_item pcolor">42</span>
                          <span className="size_item pcolor">43</span>
                          <span className="size_item pcolor">44</span>
                          <span className="size_item pcolor">45</span>
                          <span className="size_item pcolor">46</span>
                        </div>
                        <hr />
                        <h4 class="card-title"><a href="product.html" title="View Product">Product title</a></h4>

                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p class="mt-3 p pFontSize">10.000.000đ</p>
                        <div class="row">
                          <div class="col-4">
                            <i class={fla} onClick={toggle}></i>
                          </div>
                          <div class="col-8">
                            <a href="#" class="btn btn-success btn-block mt-2 button1">Add to cart</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="col-12 col-sm-8 col-md-6 col-lg-3 cardPaddingBottom cardMarginTop">
                  <Link className="nav-link-card-product aHeart link backgroundRow">
                    <div class="card showSizeBox borderNoneCardProduct">
                      <img class="card-img-top boderimg_Pro" src={(require('../../img/Shoe/vans.png'))} />
                      <div class="card-body padding_card_body">
                        <div className="size-box">
                          <span className="size_item pcolor">41</span>
                          <span className="size_item pcolor">42</span>
                          <span className="size_item pcolor">43</span>
                          <span className="size_item pcolor">44</span>
                          <span className="size_item pcolor">45</span>
                          <span className="size_item pcolor">46</span>
                        </div>
                        <hr />
                        <h4 class="card-title"><a href="product.html" title="View Product">Product title</a></h4>

                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p class="mt-3 p pFontSize">10.000.000đ</p>
                        <div class="row">
                          <div class="col-4">
                            <i class={fla} onClick={toggle}></i>
                          </div>
                          <div class="col-8">
                            <a href="#" class="btn btn-success btn-block mt-2 button1">Add to cart</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="col-12 col-sm-8 col-md-6 col-lg-3 cardPaddingBottom cardMarginTop">
                  <Link className="nav-link-card-product aHeart link backgroundRow">
                    <div class="card showSizeBox borderNoneCardProduct">
                      <img class="card-img-top boderimg_Pro" src={(require('../../img/Shoe/vans.png'))} />
                      <div class="card-body padding_card_body">
                        <div className="size-box">
                          <span className="size_item pcolor">41</span>
                          <span className="size_item pcolor">42</span>
                          <span className="size_item pcolor">43</span>
                          <span className="size_item pcolor">44</span>
                          <span className="size_item pcolor">45</span>
                          <span className="size_item pcolor">46</span>
                        </div>
                        <hr />
                        <h4 class="card-title"><a href="product.html" title="View Product">Product title</a></h4>

                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p class="mt-3 p pFontSize">10.000.000đ</p>
                        <div class="row">
                          <div class="col-4">
                            <i class={fla} onClick={toggle}></i>
                          </div>
                          <div class="col-8">
                            <a href="#" class="btn btn-success btn-block mt-2 button1">Add to cart</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="col-12 col-sm-8 col-md-6 col-lg-3 cardPaddingBottom cardMarginTop">
                  <Link className="nav-link-card-product aHeart link backgroundRow">
                    <div class="card showSizeBox borderNoneCardProduct">
                      <img class="card-img-top boderimg_Pro" src={(require('../../img/Shoe/vans.png'))} />
                      <div class="card-body padding_card_body">
                        <div className="size-box">
                          <span className="size_item pcolor">41</span>
                          <span className="size_item pcolor">42</span>
                          <span className="size_item pcolor">43</span>
                          <span className="size_item pcolor">44</span>
                          <span className="size_item pcolor">45</span>
                          <span className="size_item pcolor">46</span>
                        </div>
                        <hr />
                        <h4 class="card-title"><a href="product.html" title="View Product">Product title</a></h4>

                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p class="mt-3 p pFontSize">10.000.000đ</p>
                        <div class="row">
                          <div class="col-4">
                            <i class={fla} onClick={toggle}></i>
                          </div>
                          <div class="col-8">
                            <a href="#" class="btn btn-success btn-block mt-2 button1">Add to cart</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="col-12 col-sm-8 col-md-6 col-lg-3 cardPaddingBottom cardMarginTop">
                  <Link className="nav-link-card-product aHeart link backgroundRow">
                    <div class="card showSizeBox borderNoneCardProduct">
                      <img class="card-img-top boderimg_Pro" src={(require('../../img/Shoe/vans.png'))} />
                      <div class="card-body padding_card_body">
                        <div className="size-box">
                          <span className="size_item pcolor">41</span>
                          <span className="size_item pcolor">42</span>
                          <span className="size_item pcolor">43</span>
                          <span className="size_item pcolor">44</span>
                          <span className="size_item pcolor">45</span>
                          <span className="size_item pcolor">46</span>
                        </div>
                        <hr />
                        <h4 class="card-title"><a href="product.html" title="View Product">Product title</a></h4>

                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p class="mt-3 p pFontSize">10.000.000đ</p>
                        <div class="row">
                          <div class="col-4">
                            <i class={fla} onClick={toggle}></i>
                          </div>
                          <div class="col-8">
                            <a href="#" class="btn btn-success btn-block mt-2 button1">Add to cart</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default ProductList;