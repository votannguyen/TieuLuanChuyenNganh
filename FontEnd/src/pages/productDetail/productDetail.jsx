import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../productDetail/productDetail.css';
import ReactImageMagnify from 'react-image-magnify';
import { queryAllByTestId } from '@testing-library/react';
import queryString from 'query-string';

class ProductDetail extends Component {
    state = {
        quantity: 1,
        resultID: "resultID",
        imgID: "imgID",
        hideContainer: true
    };
    plusQuantity = () => {
        if (this.state.quantity < 10) {
            this.setState({ quantity: this.state.quantity + 1 });
        }
        else {
            this.setState({ quantity: this.state.quantity });
        }
    }
    minusQuantity = () => {
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 });
        }
        else {
            this.setState({ quantity: 1 });
        }

    }
    hideContainer = () => {
        if (this.hideContainer === true) {
            this.setState({ hideContainer: false })
        }
        else {
            this.setState({ hideContainer: true })
        }

    }
    componentDidMount() {

    }
    render() {
        var { product } = this.props
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0
        })
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
                <div className="container paddingTopAndBottomContainerMain backGroundContainerMain">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="">
                                <div className="row">
                                    <div className="col-lg-2 colmaginProDe backGroundContainerMain marginContainerLeft ">
                                        <div className="thumbnailImgProductDetail colmaginThumbail">
                                            <img id="" class="card-img-top boderimg_Pro cursorThumbnailImage" src={(require('../../img/Shoe/vans.png'))} />
                                        </div>
                                        <div className="thumbnailImgProductDetail colmaginThumbail">
                                            <img id="" class="card-img-top boderimg_Pro cursorThumbnailImage" src={(require('../../img/Shoe/vans.png'))} />
                                        </div>
                                        <div className="thumbnailImgProductDetail colmaginThumbail">
                                            <img class="card-img-top boderimg_Pro cursorThumbnailImage" src={(require('../../img/Shoe/vans.png'))} />
                                        </div>
                                        <div className="thumbnailImgProductDetail colmaginThumbail">
                                            <img class="card-img-top boderimg_Pro cursorThumbnailImage" src={(require('../../img/Shoe/vans.png'))} />
                                        </div>
                                        <div className="thumbnailImgProductDetail colmaginThumbail">
                                            <p className="cursorThumbnailImageMore cursorThumbnailImage" data-toggle="modal" data-target=".bd-example-modal-lg" data-backdrop="static" data-keyboard="false">Xem thêm hình ảnh</p>
                                        </div>
                                        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-lg">
                                                <div class="modal-content">
                                                    <div class="modal-header">

                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                                        <div class="carousel-inner">
                                                            <div class="carousel-item active">
                                                                <img class="d-block w-100" src={(require('../../img/Shoe/vans.png'))} alt="First slide" />
                                                            </div>
                                                            <div class="carousel-item">
                                                                <img class="d-block w-100" src={(require('../../img/Shoe/vans.png'))} alt="Second slide" />
                                                            </div>
                                                            <div class="carousel-item">
                                                                <img class="d-block w-100" src={(require('../../img/Shoe/vans.png'))} alt="Third slide" />
                                                            </div>
                                                        </div>
                                                        <a class="carousel-control-prev " href="#carouselExampleControls" role="button" data-slide="prev">
                                                            <span class="carousel-control-prev-icon prev-color" aria-hidden="true"></span>
                                                            <span class="sr-only ">Previous</span>
                                                        </a>
                                                        <a class="carousel-control-next " href="#carouselExampleControls" role="button" data-slide="next">
                                                            <span class="carousel-control-next-icon prev-color" aria-hidden="true"></span>
                                                            <span class="sr-only ">Next</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-10">
                                        <div className="container containerRectangleVertical img-zoom-container marginContainerLeft" onMouseMove={this.hideContainer}>
                                            <ReactImageMagnify {...{
                                                smallImage: {
                                                    // alt: 'Wristwatch by Ted Baker London',
                                                    isFluidWidth: true,
                                                    src: product.image,
                                                },
                                                largeImage: {
                                                    src: product.image,
                                                    width: 1000,
                                                    height: 1000,
                                                    enlargedImageClassName: 'backGroundZoomImg'

                                                }
                                            }} />
                                            {/* <img class="card-img-top boderimg_Pro" id={this.state.imgID} src={(require('../../img/Shoe/vans.png'))} /> */}
                                            {/* <InnerImageZoom src={(require('../img/Shoe/vans.png'))} zoomSrc={(require('../img/Shoe/vans.png'))} /> */}
                                            {/* <div id="myresult" class="img-zoom-result"></div> */}
                                            {/* <div id={this.state.resultID} class="img-zoom-result"></div> */}
                                        </div>
                                        <p className="textCenter" data-toggle="modal"><i class="fas fa-search-plus zoomDefine"></i>Rê chuột để phóng to</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="vertical-lineHR" />
                        <div className="col-lg-6 paddingLeftContainerRight">
                            <h3>{product.name}</h3>
                            <p>5<i class="fas fa-star yellowStar"></i> <Link className="LinkHoverReview">(Xem x nhận xét)</Link></p>
                            {/* <p><i class="fas fa-trophy yellowAward"></i> Đứng thứ X trong <Link className="LinkHoverReview">Top 30 đôi giày bán chạy nhất shop</Link></p> */}
                            <div className="row">
                                <div className="col-lg-4 positionR">
                                        <p className="">Thương hiệu: <Link className="LinkHoverReview ">{product.brand}</Link></p>
                                </div>
                                <div className="col-lg-4 positionR">
                                        <p className="pColorMaSP">Mã SP: {product.code}</p>
                                </div>
                            </div>
                            <hr className="paddingDivHR" />
                            <div className="container colorBackContainerShip">
                                <p className="pColorShip"><i class="fas fa-truck iconShip"></i>Miễn phí ship tối đa 50k cho đơn hàng trên 1.000.000 vnđ</p>
                            </div>
                            <p className="pPriceProduct">{formatter.format(product.price)}</p>
                            <p className="pSave">Tiết kiệm: 10% ({formatter.format(product.price*0.9)})</p>
                            <p className="pSave">Giá thị trường: {formatter.format(product.price - (product.price*0.9))} </p>
                            <hr className="paddingDivHR" />
                            <p>Màu sắc:
                                <div className="containerChildColor pInline">Màu xanh rêu</div>
                            </p>
                            <p>kích thước:
                                <div className="sizeShoe pInline">39</div>
                                <div className="sizeShoe pInline">40</div>
                                <div className="sizeShoe pInline">41</div>
                                <div className="sizeShoe pInline">42</div>
                                <div className="sizeShoe pInline">43</div>
                                <div className="sizeShoe pInline">44</div>
                            </p>
                                        <p>Còn hàng: <span className="spanQuantity">{product.inventory}</span> sản phẩm</p>
                            <hr className="paddingDivHR" />
                            <div className="container containerBuyWish">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <p>
                                            <p className="textQuantity">Số lượng:</p>
                                            <div className="minusButton pInline minusText" onClick={this.minusQuantity}><i class="fas fa-minus"></i></div>
                                            <input type="text" className="form-control pInline textBoxSize" id="quantityProduct" value={this.state.quantity} disabled />
                                            <div className="plusButton pInline plusText" onClick={this.plusQuantity}><i class="fas fa-plus"></i></div>
                                        </p>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="btn btn-danger buyButton">
                                            <i class="fas fa-cart-plus paddingRightCart"></i>
                                        Chọn mua
                                    </div>
                                        <div className="btn btn-primary buyButton">
                                            <i class="fas fa-heart paddingRightCart"></i>
                                        Thêm vào yêu thích
                                    </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container ">
                    <p className="pDicription">Mô tả sản phẩm</p>
                </div>
                <div className="container paddingTopAndBottomContainerMain backGroundContainerMain">


                </div>
            </div>
        );
    }
}

export default ProductDetail;