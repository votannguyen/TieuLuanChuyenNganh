import React, { Component } from 'react';
import './products.css';
import {
  Button,
  Modal,
  Form,
  Table,
  Carousel
} from "react-bootstrap";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'

import ProductService from "../../../services/ProductService";
import BrandService from "../../../services/BrandService";
import CategoryService from "../../../services/CategoryService";
import GroupService from "../../../services/GroupService";
import SizesService from '../../../services/SizesService';
import { message } from 'antd';
const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['name', 'amount', 'brandId', 'categoryId', 'groupID', 'quantity', 'price']
class Products extends Component {
  state = {
    showModal: false,
    products: {},
    listProduct: [],
    brand: [],
    category: [],
    listImage: [],
    group: [],
    editBrand: '',
    editCategory: '',
    editGroup: '',
    edit: false, // biến đánh dấu edit hay new
    updateDaily: '', /// biến dùng để cập nhật state realtime
    tempImage: '',
    realTime: '',
    typeSize: [
      {
        id: 1,
        name: "US"
      },
      {
        id: 1,
        name: "UK"
      },
      {
        id: 1,
        name: "VN"
      },
    ],
    stateID: '',
    listImageToApi: [], ///List ảnh để đưa xuống backend xử lý
    showModalViewImage: false,
    getSizeBySizeType: [],
    sizes: [],
    sizeID: {},        //lưu size id
    avatarProduct: '',
    avatarProductSaveAPI: [],
    message: false,
    listImageProductById: [],

  };
  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    ProductService.listProduct().then((res) => {
      this.setState({ listProduct: res.data.products.sort((a, b) => a.id - b.id) });
      this.realTime();
    });
    BrandService.listBrand().then((res) => {
      this.setState({ brand: res.data.brands });
      this.realTime();
    });
    CategoryService.listCategory().then((res) => {
      this.setState({ category: res.data.categories })
      this.realTime();
    });
    GroupService.listGroup().then((res) => {
      this.setState({ group: res.data.Groups })
      this.realTime();
    })
    SizesService.listSize().then((res) => {
      this.setState({ sizes: res.data.sizes });
    });
  }
  realTime = () => {
    this.setState({ updateDaily: '1' });
  }
  InputOnChange = (event) => {
    const { name, value } = event.target; // đặt biến để phân rã các thuộc tính trong iout ra
    var newProduct = { ...this.state.products, [name]: value } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
    this.realTime();
    this.setState({ products: newProduct });
    this.realTime();
    console.log(this.state.products)
  }
  firstSaveImage = (idProduct) => {
    this.realTime()
    console.log(idProduct)
    console.log(this.state.listImageToApi)
    for (var i = 0; i < this.state.listImageToApi.length; i++) {
      this.saveImage(i, idProduct);
    }
  }
  saveImage = (index, idProduct) => {
    var data = new FormData();
    console.log(idProduct)
    data.append("productId", idProduct);
    data.append("imagePath", this.state.listImageToApi[index]);
    this.realTime()
    console.log(this.state.stateID)
    ProductService.createImage(data)
  }
  saveProduct =()=> {
    var { products, avatarProductSaveAPI } = this.state
    var data = new FormData();
    data.append("name", products.name);
    data.append("productCode", products.productCode);
    data.append("price", products.price);
    data.append("description", products.description);
    data.append("color", products.color);
    data.append("imagePath", avatarProductSaveAPI[0]);
    data.append("brandId", products.brandId);
    data.append("categoryId", products.categoryId);
    ProductService.createProduct(data).then(res => {
      this.firstSaveImage(res.data.products.id);
      this.firstSaveSize(res.data.products.id)
    }, function (error) {
      alert("Lỗi")
    });
  }
  firstSaveSize = (idProduct) => {
    var newSize = { ...this.state.sizeID, ['productId']: idProduct } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
    this.setState({ sizeID: newSize });
    this.realTime()
    console.log(this.state.sizeID)
    this.saveSize(this.state.sizeID);
  }
  saveSize(data) {
    this.realTime()
    ProductService.createProductSize(data);
  }
  save = () => {
    // var data = new FormData();
    // data.append("amount", this.state.products.amount);
    // data.append("brandId", this.state.products.brandId);
    // data.append("categoryId", this.state.products.categoryId);
    // data.append("groupId", this.state.products.groupId);
    // data.append("imagePath", this.state.products.imagePath);
    // data.append("description", this.state.products.description);
    // data.append("name", this.state.products.name);
    // data.append("price", this.state.products.price);
    // console.log(this.state.products.amount);

    // ProductService.createProduct(this.state.products).then(res => {
    //   this.setState({stateID : res.data.products.id});
    //   this.realTime();
    // }, function (error) {
    //   alert("Lỗi")
    // });
    var { products } = this.state
    if (products.name === undefined || products.productCode === undefined || products.price === undefined || products.description === undefined
      || products.brandId === undefined || products.color === undefined || products.categoryId === undefined) {
      alert("Vui lòng nhập đủ các ô input")
   }
   else{
    this.saveProduct();
    this.loadData();
    this.setCloseModal();
   }
  }
  setShowModal = (id) => {
    this.setState({ products: {} });
    // this.setState({ ModalTitle: "New Instructor" });
    this.realTime();
    this.setState({ showModal: true });
  }
  setShowModalEdit = (id, brand, category) => {        ///edit sản phẩm
    // this.setState({ ModalTitle: "Edit Instructor" });
    ProductService.getProduct(id).then(res => {
      this.setState({ products: res.data.product });
    });
    this.setState({ editBrand: brand });  // cập nhật brand
    this.setState({ editCategory: category });  // cập nhật category
    this.setState({ showModal: true });
    this.setState({ edit: true })
    this.realTime();      //realtime cho các state
  }
  setCloseModal = () => {
    this.setState({ showModal: false });
    this.setState({ edit: false })
    this.setState({ intermediariesMoney: '' });
    this.setState({ listImage: [] })
    this.setState({ tempImage: 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg' })
  }
  getImgByIdPro = (id) => {
    ProductService.getImageByProductId(id).then(res => {
      this.setState({ listImageProductById: res.data.productImage })
    }, function (error) {
      alert("Lỗi")
    });
  }
  setShowModalViewImage = (id) => {
    this.setState({ showModalViewImage: true })
    this.getImgByIdPro(id);
  }
  setCloseModalViewImage = () => {
    this.setState({ showModalViewImage: false })
  }

  InputOnChangeCategory = (event) => {
    const { name, value } = event.target; // đặt biến để phân rã các thuộc tính trong iout ra
    // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
    {
      this.state.category.map((category) => {
        if (category.name === value) {
          const newProduct = { ...this.state.products, [name]: category.id }
          this.setState({ products: newProduct });
        }
      })
    }
    console.log(this.state.products)
  }
  InputOnChangeBrand = (event) => {
    const { name, value } = event.target; // đặt biến để phân rã các thuộc tính trong iout ra
    // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
    {
      this.state.brand.map((brand) => {
        if (brand.name === value) {
          const newProduct = { ...this.state.products, [name]: brand.id }
          this.setState({ products: newProduct });
        }
      })
    }
    console.log(this.state.products)
  }

  InputOnChangeGroup = (event) => {
    const { name, value } = event.target; // đặt biến để phân rã các thuộc tính trong iout ra
    // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
    {
      this.state.group.map((group) => {
        if (group.name === value) {
          const newProduct = { ...this.state.products, [name]: group.id }
          this.setState({ products: newProduct });
        }
      })
    }
    console.log(this.state.products)
  }
  InputOnChangeTypeSize = (event) => {
    this.setState({ getSizeBySizeType: [] })
    const { value } = event.target;

    SizesService.getSizeByTypeSize(value).then((res) => {
      this.setState({ getSizeBySizeType: res.data.listSize.sort((a, b) => a.sizeName - b.sizeName) })
    });
    console.log(this.state.getSizeBySizeType)
  }
  InputOnChangeSize = (event) => {
    const { name, value } = event.target;
    var newSize = { ...this.state.sizeID, [name]: value } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
    this.realTime();
    this.setState({ sizeID: newSize });
    this.realTime();
    console.log(this.state.sizeID)
  }
  render() {
    const { products, productEdit } = this.state
    const formatterNum = Intl.NumberFormat('en');
    var reader = new FileReader();
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0
    })
    return (
      <div>
        {/* <div className="row">
          <div className="col-sm-10"></div> */}
        <div className="container">
          <button type="button" className="btn btn-sm btnAddProduct" onClick={() => this.setShowModal(-1)}><p className="fas fa-plus-circle textInBtnAddProduct">   Thêm sản phẩm</p></button>
          {/* </div> */}
        </div>
        {/* Modal basic */}
        <>
          <Modal
            show={this.state.showModal}
            onHide={this.setCloseModal}
            keyboard={false}
            backdrop="static"
            dialogClassName="modalMaxWidth"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title " dialogClassName="textCenterModalTitle">
                Thêm thông tin sản phẩm
                {this.state.message === true ? <div>Vui lòng nhập đủ các ô input</div> : null}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <div className="row">
                  <div className="col-6">
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Mã sản phẩm</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="productCode"
                        placeholder="Mã sản phẩm"
                        onChange={this.InputOnChange}
                        value={products.productCode || ''} />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Tên sản phẩm</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="name"
                        placeholder="Tên sản phẩm"
                        onChange={this.InputOnChange}
                        value={products.name || ''} />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Màu sắc</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="color"
                        placeholder="Màu sắc của giày"
                        onChange={this.InputOnChange}
                        value={products.color || ''} />
                    </Form.Group>
                    <Form.Group controlId="ControlSelect">
                      <Form.Label>Thương hiệu</Form.Label>
                      <Form.Control
                        required
                        as="select"
                        name="brandId"
                        onChange={this.InputOnChangeBrand}
                      >
                        <option>{products.Brand === undefined ? 'Choose.....' : products.Brand.name}</option>
                        {this.state.brand.map((brand, idx) => {
                          return (
                            <option
                              key={idx}
                              value={brand.name}>
                              {brand.name}
                            </option>
                          )
                        })}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="ControlSelect">
                      <Form.Label>Danh mục</Form.Label>
                      <Form.Control
                        required
                        as="select"
                        name="categoryId"
                        onChange={this.InputOnChangeCategory}
                      // value={products.Category || ''}
                      >
                        <option>{products.Category === undefined ? 'Choose.....' : products.Category.name}</option>
                        {this.state.category.map((category, idx) => {
                          return (
                            <option
                              key={idx}
                              value={category.name}>
                              {category.name}
                            </option>
                          )
                        })}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="ControlSelect">
                      <Form.Label>Loại size</Form.Label>
                      <Form.Control
                        required
                        as="select"
                        name="typeSize"
                        onChange={this.InputOnChangeTypeSize}
                      >
                        <option>Choose....</option>
                        {this.state.typeSize.map((typeSize, idx) => {
                          return (
                            <option
                              key={idx}
                              value={typeSize.name}>
                              {typeSize.name}
                            </option>
                          )
                        })}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Size giày</Form.Label>
                      <Form.Control
                        required
                        as="select"
                        name="sizeId"
                        onChange={this.InputOnChangeSize}
                      >
                        <option>Choose....</option>
                        {this.state.getSizeBySizeType.map((size, idx) => {
                          return (
                            <option
                              key={size.id}
                              value={size.id}
                            >
                              {size.sizeName}
                            </option>
                          )
                        })}
                      </Form.Control>
                    </Form.Group>
                    <Form>
                      <div>Ảnh đại diện của sản phẩm</div>
                      <div className="borderImgSizeIcon">
                        <label for="upload-avatar-photo" className="iconOnImgBorder"><i className="fas fa-image fa-3x"></i></label>
                        <Form.Control
                          id="upload-avatar-photo"
                          type="file"
                          accept=".png, .jpg, .svg, .jfif"
                          onChange={this.imageAvatarProductHandler}
                          name="imagePath"
                          oninput="pic.src=window.URL.createObjectURL(this.files[0])"
                        />
                      </div>
                      {this.state.avatarProduct === '' ? null :
                        <img className="borderImgSize" src={this.state.avatarProduct} />
                      }
                    </Form>

                  </div>
                  <div className="col-6">
                    <Form>
                      <div>Hình ảnh Thumbnail</div>
                      <div className="borderImgSizeIcon">
                        <label for="upload-photo" className="iconOnImgBorder"><i className="fas fa-image fa-3x"></i></label>
                        <Form.Control
                          id="upload-photo"
                          type="file"
                          accept=".png, .jpg, .svg, .jfif"
                          onChange={this.imageHandler}
                          name="imagePath"
                          oninput="pic.src=window.URL.createObjectURL(this.files[0])"
                        />
                      </div>
                      {/* {this.state.edit ? <img className="borderImgSize" src={`http://localhost:5000/${products.imagePath}`} /> : null
                      } */}

                      {this.state.edit ? null : this.state.listImage.map((image, idx) => {
                        return (
                          <img key={idx} className="borderImgSize" src={image} />
                        );
                      })}
                    </Form>

                    <Form.Group controlId="formBasicQuantity">
                      <Form.Label>Số lượng</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        name="productCount"
                        placeholder="Số lượng"
                        onChange={this.InputOnChangeSize}

                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicQuantity">
                      <Form.Label>Giá tiền</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        name="price"
                        placeholder="Giá tiền"
                        onChange={this.InputOnChange}
                        value={products.price || ''}
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Mô tả sản phẩm</Form.Label>
                      <Form.Control
                        required
                        as="textarea"
                        type="text"
                        name="description"
                        rows={12}
                        onChange={this.InputOnChange}
                        value={products.description}
                      />
                    </Form.Group>
                  </div>
                </div>
                <Button variant="primary" onClick={this.save}>
                  Thêm
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </>
        {/* Modal Image */}
        <>
          <Modal
            show={this.state.showModalViewImage}
            onHide={this.setCloseModalViewImage}
            keyboard={false}
            backdrop="static"
            dialogClassName="modalImageMaxWidth"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title " dialogClassName="textCenterModalTitle">
                Thêm thông tin sản phẩm
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Carousel>
                  {this.state.listImageProductById.map((listImageProduct, idx) => {
                    return (
                      <Carousel.Item>
                        <img
                          key={idx}
                          className="d-block w-100"
                          src={`http://localhost:5000/${listImageProduct.imagePath}`}
                        />
                      </Carousel.Item>
                    )
                  })
                  }
                </Carousel>
              </Form>
            </Modal.Body>
          </Modal>
        </>

        <>
          <CRow>
            <CCol>
              <CCard>
                <CCardHeader>
                  <p className="fontSizeNameTable">Danh sách sản phẩm</p>
                </CCardHeader>
                <CCardBody>
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Product Code</th>
                        <th>Name Product</th>
                        <th>Color</th>
                        <th>Brand</th>
                        {/* <th>Category</th>
                        <th>Group</th> */}
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.listProduct.map((listProduct, idx) => {
                        return (
                          <tr key={listProduct.id}>
                            <td>{idx + 1}</td>
                            <td>

                              <img className="borderImgSize" src={`http://localhost:5000/${listProduct.imagePath}`} />

                              <div className="view" onClick={() => this.setShowModalViewImage(listProduct.id)}>View All</div>
                            </td>
                            <td>{listProduct.productCode}</td>
                            <td>{listProduct.name}</td>
                            <td>{listProduct.color}</td>
                            <td>{listProduct.Brand.name}</td>
                            {/* <td>{listProduct.Category.name}</td> */}
                            {/* <td>{listProduct.Group.name}</td> */}
                            <td>{listProduct.amount}</td>
                            <td>{formatter.format(listProduct.price)}</td>
                            <td>
                              <div className="row">
                                <div className="col-3 info">
                                  <i className="fas fa-info-circle" onClick={() => this.setShowModalEdit(listProduct.id, listProduct.Brand.name, listProduct.Category.name)}></i>
                                </div>
                                <div className="col-3 delete">
                                  <i className="fas fa-trash-alt"></i>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )
                      })}

                    </tbody>
                  </Table>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </>
      </div >

    );
  }
  imageHandler = (event) => {
    // const { name } = event.target;
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.state.listImage.push(reader.result);
        this.realTime();    //Cập nhật state ngay lập tức
      }
    }
    // const newProduct = {...this.state.products, [name]: event.target.files[0] } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
    // this.setState({products: newProduct });
    // console.log(this.state.products)
    this.state.listImageToApi.push(event.target.files[0])
    this.realTime();    //Cập nhật state ngay lập tức
    // this.setState({tempImage: true})s
    console.log(this.state.listImage)
    console.log(this.state.listImageToApi)
    // reader.readAsDataURL(e.target.files[0])
    reader.readAsDataURL(event.target.files[0])
  }
  ShowModalImage = (id) => {

  }
  imageAvatarProductHandler = (event) => {
    const reader1 = new FileReader()
    reader1.onload = () => {
      if (reader1.readyState === 2) {
        this.setState({ avatarProduct: reader1.result })
        this.realTime();    //Cập nhật state ngay lập tức
      }
    }
    this.state.avatarProductSaveAPI.push(event.target.files[0])
    this.realTime();    //Cập nhật state ngay lập tức
    console.log(this.state.avatarProductSaveAPI)
    reader1.readAsDataURL(event.target.files[0])
  }
}
export default Products;