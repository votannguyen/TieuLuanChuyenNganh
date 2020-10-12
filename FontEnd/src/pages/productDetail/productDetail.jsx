import React, { Component } from 'react';
import '../productDetail/productDetail.css';

class ProductDetail extends Component {
    state = {}
    render() {

        return (
            <div className="backGroundLayoutProDetail">
                <div class="slider-area ">
                    <div class="single-slider slider-height2 d-flex align-items-center data-background-profile">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="hero-cap text-center">
                                        <h2>Thông tin sản phẩm</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container paddingTopAndBottomContainerMain">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="backGroundContainerMain">
                                <div className="row">
                                    <div className="col-lg-2 colmaginProDe backGroundContainerMain">
                                        <div className="thumbnailImgProductDetail">
                                            <img class="card-img-top boderimg_Pro" src={(require('../../img/Shoe/vans.png'))} />
                                        </div>
                                        <div className="thumbnailImgProductDetail">
                                            <img class="card-img-top boderimg_Pro" src={(require('../../img/Shoe/vans.png'))} />
                                        </div>
                                        <div className="thumbnailImgProductDetail">
                                            <img class="card-img-top boderimg_Pro" src={(require('../../img/Shoe/vans.png'))} />
                                        </div>
                                        <div className="thumbnailImgProductDetail">
                                            <img class="card-img-top boderimg_Pro" src={(require('../../img/Shoe/vans.png'))} />
                                        </div>
                                        <div className="thumbnailImgProductDetail">
                                            <img class="card-img-top boderimg_Pro" src={(require('../../img/Shoe/vans.png'))} />
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="container containerRectangleVertical img-zoom-container">
                                            <img class="card-img-top boderimg_Pro" id="myimage" src={(require('../../img/Shoe/vans.png'))} />
                                            {/* <InnerImageZoom src={(require('../img/Shoe/vans.png'))} zoomSrc={(require('../img/Shoe/vans.png'))} /> */}
                                            {/* <div id="myresult" class="img-zoom-result"></div> */}
                                        </div>
                                        <p className="textCenter"><i class="fas fa-search-plus zoomDefine"></i>Rê chuột để phóng to</p>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div class="vertical-line"></div>
                        <div className="col-lg-6 backGroundContainerMain">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;