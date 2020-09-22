import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./wishList.css";
class WishList extends Component {
    state = {}
    render() {
        return (
            <div>
                <div class="slider-area ">
                    <div class="single-slider slider-height2 d-flex align-items-center data-background-productlist">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="hero-cap text-center">
                                        <h2>Wish List</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container containerMarginTop containerMarginBottom">
                    <div className="row">
                        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                            <Link className="nav-link-card-product aHeart link backgroundRow">
                                <div class="card showSizeBox borderNoneCardProduct">
                                    <img class="card-img-top boderimg" src={(require('../img/Shoe/vans.png'))} />
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
                                            <div class="col-5">
                                                <a href="#" class="btn btn-primary"><i class="fas fa-cart-plus iPaddingRight"></i>Add to cart</a>
                                            </div>
                                            <div class="col-4">
                                                <a href="#" class="btn btn-secondary"><i class="fas fa-info-circle iPaddingRight"></i>Detail</a>
                                            </div>
                                            <div class="col-3">
                                                <a href="#" class="btn btn-danger"><i class="fas fa-trash-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default WishList;