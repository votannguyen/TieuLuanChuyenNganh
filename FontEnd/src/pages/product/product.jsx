import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../productList/productList.css';
import './product.css';
class Product extends Component {
  state = {}
  addToCart = (product) =>{
    this.props.addToCart(product);
    // this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS)
  } 
  selectProduct =(product, id)=>{
    var {loadProductIsSelect} = this.props
    loadProductIsSelect(product, id)
  }
  render() {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0
    })
    var { product} = this.props;
    return (
      <div className="col-12 col-sm-8 col-md-6 col-lg-3 cardPaddingBottom cardMarginTop ">
        <div className="nav-link-card-product aHeart link backgroundRow sizeCard">
          <div className="card showSizeBox  borderNoneCardProduct">
            <Link to={`/productdetail/${product.id}`}>
              <img
                className="card-img-top boderimg_Pro sizeIMG"
                src={product.image} />
            </Link>
            <div className="card-body padding_card_body">
              <div className="size-box">
                <span className="size_item pcolor">41</span>
                <span className="size_item pcolor">42</span>
                <span className="size_item pcolor">43</span>
                <span className="size_item pcolor">44</span>
                <span className="size_item pcolor">45</span>
                <span className="size_item pcolor">46</span>
              </div>
              <hr />
              <Link to={`/productdetail/${product.id}`}>
                <p className="card-title hoverTitleProduct nameProduct">{product.name}</p>
              </Link>
              <p className="card-text">{product.description}</p>
              <p className="mt-3 p pFontSize">{formatter.format(product.price)}</p>

              <div className="row">
                <div className="col-4">
                  <i className="far fa-heart fa-2x mt-2"></i>
                </div>
                <div className="col-8">
                  <div 
                  className="btn btn-success btn-block mt-2 button1"
                  onClick={()=>this.addToCart(product)}>
                    Add to cart
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;