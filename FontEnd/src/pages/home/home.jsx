import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../home/home.css";
class Home extends Component {
    state = {}
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render() {
        
        return (
            <main>
                <div className="slider-area ">
                    {/* <!-- Mobile Menu --> */}
                    <div className="slider-active">
                        <div className="single-slider slider-height data-background-home">
                            <div className="container">
                                <div className="row d-flex align-items-center justify-content-between">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-none d-md-block">
                                        <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
                                            <img src={require('../../img/hero/hero_man.png')} />
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8">
                                        <div className="hero__caption">
                                            <span data-animation="fadeInRight" data-delay=".4s">60% Discount</span>
                                            <h1 data-animation="fadeInRight" data-delay=".6s">Winter <br /> Collection</h1>
                                            <p data-animation="fadeInRight" data-delay=".8s">Best Cloth Collection By 2020!</p>
                                            {/* <!-- Hero-btn --> */}
                                            <div className="hero__btn" data-animation="fadeInRight" data-delay="1s">
                                                <a href="industries.html" className="btn btn1 hero-btn">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="single-slider slider-height data-background">
                            <div className="container">
                                <div className="row d-flex align-items-center justify-content-between">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-none d-md-block">
                                        <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
                                            <img src={require('../../img/hero/hero_man.png')} />
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8">
                                        <div className="hero__caption">
                                            <span data-animation="fadeInRight" data-delay=".4s">60% Discount</span>
                                            <h1 data-animation="fadeInRight" data-delay=".6s">Winter <br /> Collection</h1>
                                            <p data-animation="fadeInRight" data-delay=".8s">Best Cloth Collection By 2020!</p>

                                            <div className="hero__btn" data-animation="fadeInRight" data-delay="1s">
                                                <Link href="industries.html" className="btn btn1 hero-btn">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <!-- slider Area End-->
                    <!-- Category Area Start--> */}
                <section className="category-area section-padding30">
                    <div className="container-fluid">
                        {/* <!-- Section Tittle --> */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-tittle text-center mb-85">
                                    <h2>Shop by Category</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6">
                                <div className="single-category mb-30">
                                    <div className="category-img">
                                        <img src={require('../../img/categori/cat1.jpg')} />
                                        <div className="category-caption">
                                            <h2>Owmen`s</h2>
                                            <span className="best"><a href="#">Best New Deals</a></span>
                                            <span className="collection">New Collection</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="single-category mb-30">
                                    <div className="category-img text-center">
                                        <img src={require('../../img/categori/cat2.jpg')} />
                                        <div className="category-caption">
                                            <span className="collection">Discount!</span>
                                            <h2>Winter Cloth</h2>
                                            <p>New Collection</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="single-category mb-30">
                                    <div className="category-img">
                                        <img src={require('../../img/categori/cat3.jpg')} />
                                        <div className="category-caption">
                                            <h2>Man`s Cloth</h2>
                                            <span className="best"><a href="#">Best New Deals</a></span>
                                            <span className="collection">New Collection</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Category Area End-->
                <!-- Latest Products Start --> */}
                <section className="latest-product-area padding-bottom">
                    <div className="container">
                        <div className="row product-btn d-flex justify-content-end align-items-end">
                            {/* <!-- Section Tittle --> */}
                            <div className="col-xl-6 col-lg-5 col-md-5">
                                <div className="section-tittle mb-30">
                                    <h2>Latest Products</h2>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7 col-md-7">
                                <div className="properties__button f-right">
                                    {/* <!--Nav Button  --> */}
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">All</a>
                                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">New</a>
                                            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Featured</a>
                                            <a className="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last" role="tab" aria-controls="nav-contact" aria-selected="false">Offer</a>
                                        </div>
                                    </nav>
                                    {/* <!--End Nav Button  --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- Nav Card --> */}
                        <div className="tab-content" id="nav-tabContent">
                            {/* <!-- card one --> */}
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product1.png')} />
                                                <div className="new-product">
                                                    <span>New</span>
                                                </div>
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product2.png')} />
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product3.png')} />
                                                <div className="new-product">
                                                    <span>New</span>
                                                </div>
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product4.png')} />
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product5.png')} />
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product6.png')} />
                                                <div className="new-product">
                                                    <span>New</span>
                                                </div>
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card two --> */}
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product4.png')} />
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product5.png')} />
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product6.png')} />
                                                <div className="new-product">
                                                    <span>New</span>
                                                </div>
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product2.png')} />
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product3.png')} />
                                                <div className="new-product">
                                                    <span>New</span>
                                                </div>
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product1.png')} />
                                                <div className="new-product">
                                                    <span>New</span>
                                                </div>
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card three --> */}
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product2.png')} />
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product3.png')} />
                                                <div className="new-product">
                                                    <span>New</span>
                                                </div>
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product1.png')} />
                                                <div className="new-product">
                                                    <span>New</span>
                                                </div>
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product4.png')} />
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product5.png')} />
                                                <div className="new-product">
                                                    <span>New</span>
                                                </div>
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product5.png')} />
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- card foure --> */}
                            <div className="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product1.png')} />
                                                <div className="new-product">
                                                    <span>New</span>
                                                </div>
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product2.png')} />
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product3.png')} />
                                                <div className="new-product">
                                                    <span>New</span>
                                                </div>
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product4.png')} />
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product5.png')} />
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-product mb-60">
                                            <div className="product-img">
                                                <img src={require('../../img/categori/product6.png')} />
                                                <div className="new-product">
                                                    <span>New</span>
                                                </div>
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                    <i className="far fa-star low-star"></i>
                                                </div>
                                                <h4><a href="#">Green Dress with details</a></h4>
                                                <div className="price">
                                                    <ul>
                                                        <li>$40.00</li>
                                                        <li className="discount">$60.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Nav Card --> */}
                    </div>
                </section>
                {/* <!-- Latest Products End -->
<!-- Best Product Start --> */}
                <div className="best-product-area lf-padding" >
                    <div className="product-wrapper bg-height" style={{ backgroundimage: "url('assets/img/categori/card.png')" }}>
                        <div className="container position-relative">
                            <div className="row justify-content-between align-items-end">
                                <div className="product-man position-absolute  d-none d-lg-block">
                                    <img src={require('../../img/categori/card-man.png')} />
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-2 d-none d-lg-block">
                                    <div className="vertical-text">
                                        <span>Manz</span>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8">
                                    <div className="best-product-caption">
                                        <h2>Find The Best Product<br /> from Our Shop</h2>
                                        <p>Designers who are interesten creating state ofthe.</p>
                                        <a href="#" className="black-btn">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Shape --> */}
                    <div className="shape bounce-animate d-none d-md-block">
                        <img src={require('../../img/categori/card-shape.png')} />
                    </div>
                </div>
                {/* <!-- Best Product End-->
<!-- Best Collection Start --> */}
                <div className="best-collection-area section-padding2">
                    <div className="container">
                        <div className="row d-flex justify-content-between align-items-end">
                            {/* <!-- Left content --> */}
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="best-left-cap">
                                    <h2>Best Collection of This Month</h2>
                                    <p>Designers who are interesten crea.</p>
                                    <a href="#" className="btn shop1-btn">Shop Now</a>
                                </div>
                                <div className="best-left-img mb-30 d-none d-sm-block">
                                    <img src={require('../../img/collection/collection1.png')} />
                                </div>
                            </div>
                            {/* <!-- Mid Img --> */}
                            <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                                <div className="best-mid-img mb-30 ">
                                    <img src={require('../../img/collection/collection2.png')} />
                                </div>
                            </div>
                            {/* <!-- Riht Caption --> */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="best-right-cap ">
                                    <div className="best-single mb-30">
                                        <div className="single-cap">
                                            <h4>Menz Winter<br /> Jacket</h4>
                                        </div>
                                        <div className="single-img">
                                            <img src={require('../../img/collection/collection3.png')} />
                                        </div>
                                    </div>
                                </div>
                                <div className="best-right-cap">
                                    <div className="best-single mb-30">
                                        <div className="single-cap active">
                                            <h4>Menz Winter<br />Jacket</h4>
                                        </div>
                                        <div className="single-img">
                                            <img src={require('../../img/collection/collection4.png')} />
                                        </div>
                                    </div>
                                </div>
                                <div className="best-right-cap">
                                    <div className="best-single mb-30">
                                        <div className="single-cap">
                                            <h4>Menz Winter<br /> Jacket</h4>
                                        </div>
                                        <div className="single-img">
                                            <img src={require('../../img/collection/collection5.png')} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Best Collection End -->
<!-- Latest Offers Start --> */}
                <div className="latest-wrapper lf-padding">
                    <div className="latest-area latest-height d-flex align-items-center" data-background={require("../../img/collection/latest-offer.png")}>
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-xl-5 col-lg-5 col-md-6 offset-xl-1 offset-lg-1">
                                    <div className="latest-caption">
                                        <h2>Get Our<br />Latest Offers News</h2>
                                        <p>Subscribe news latter</p>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-6 ">
                                    <div className="latest-subscribe">
                                        <form action="#">
                                            <input type="email" placeholder="Your email here" />
                                            <button>Shop Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- man Shape --> */}
                        <div className="man-shape">
                            <img src={require('../../img/collection/latest-man.png')} />
                        </div>
                    </div>
                </div>
                {/* <!-- Latest Offers End -->
<!-- Shop Method Start--> */}
                <div className="shop-method-area section-padding30">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="single-method mb-40">
                                    <i className="ti-package"></i>
                                    <h6>Free Shipping Method</h6>
                                    <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="single-method mb-40">
                                    <i className="ti-unlock"></i>
                                    <h6>Secure Payment System</h6>
                                    <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="single-method mb-40">
                                    <i className="ti-reload"></i>
                                    <h6>Secure Payment System</h6>
                                    <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gallery-wrapper lf-padding">
                    <div className="gallery-area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="gallery-items">
                                    <img src={require('../../img/gallery/gallery1.jpg')} />
                                </div>
                                <div className="gallery-items">
                                    <img src={require('../../img/gallery/gallery2.jpg')} />
                                </div>
                                <div className="gallery-items">
                                    <img src={require('../../img/gallery/gallery3.jpg')} />
                                </div>
                                <div className="gallery-items">
                                    <img src={require('../../img/gallery/gallery4.jpg')} />
                                </div>
                                <div className="gallery-items">
                                    <img src={require('../../img/gallery/gallery5.jpg')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main>
        );
    }
}

export default Home;