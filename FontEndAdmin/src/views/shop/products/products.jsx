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
    listFilter: [],
    listImage: [],
    group: [],
    editBrand: '',
    editCategory: '',
    editGroup: '',
    edit: false, // biến đánh dấu edit hay new
    updateDaily: '', /// biến dùng để cập nhật state realtime
    tempImage: 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg',
    realTime: '',
    typeSize: [
      {
        id: 1,
        name: "Size US"
      },
      {
        id: 1,
        name: "Size UK"
      },
      {
        id: 1,
        name: "Size VN"
      },
    ],
    stateID: '',
    listImageToApi: [], ///List ảnh để đưa xuống backend xử lý
    showModalViewImage: false,

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
  firstSaveImage(idProduct) {
    console.log(idProduct)
    console.log(this.state.listImageToApi)
    for (var i = 0; i < this.state.listImageToApi.length; i++) {
      this.saveImage(i, idProduct);
    }
  }
  saveImage(index, idProduct) {
    var data = new FormData();
    console.log(idProduct)
    data.append("productId", idProduct);
    data.append("imagePath", this.state.listImageToApi[index]);
    console.log(this.state.stateID)
    ProductService.createImage(data).then(res => {

    }, function (error) {

    });
  }
  saveProduct() {
    ProductService.createProduct(this.state.products).then(res => {
      this.firstSaveImage(res.data.products.id);
      // this.realTime()
      // this.props.onGetIdProductAfterCreateProduct(res.data.products.id)    //Dùng redux để lưu id product sau khi tạo sản phẩm
    }, function (error) {
      alert("Lỗi")
    });

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
    this.saveProduct();
    this.loadData();
    this.setCloseModal();
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

  setShowModalViewImage = (id) => {
    this.setState({ showModalViewImage: true })


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
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <div className="row">
                  <div className="col-6">
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Mã sản phẩm</Form.Label>
                      <Form.Control
                        type="text"
                        name="productCode"
                        placeholder="Mã sản phẩm"
                        onChange={this.InputOnChange}
                        value={products.productCode || ''} />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Tên sản phẩm</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Tên sản phẩm"
                        onChange={this.InputOnChange}
                        value={products.name || ''} />
                    </Form.Group>
                    <Form.Group controlId="ControlSelect">
                      <Form.Label>Thương hiệu</Form.Label>
                      <Form.Control
                        as="select"
                        name="brandId"
                        onChange={this.InputOnChangeBrand}
                      >
                        <option>{products.Brand===undefined?'Choose.....':products.Brand.name}</option>
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
                        as="select"
                        name="categoryId"
                        onChange={this.InputOnChangeCategory}
                        value={products.Category || ''}
                      >
                        <option>{products.Category===undefined?'Choose.....':products.Category.name}</option>
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
                        as="select"
                        name="typeSize"
                        onChange={this.InputOnChangeCategory}
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
                        type="number"
                        name="sizeNumber"
                        placeholder="Size giày"
                        onChange={this.InputOnChange}
                        value={'' || ''} />
                    </Form.Group>

                    {/* Nhóm sản phẩm*/}
                    {/* <Form.Group controlId="ControlSelect">
                      <Form.Label>Nhóm</Form.Label>
                      <Form.Control
                        as="select"
                        name="groupId"
                        onChange={this.InputOnChangeGroup}
                        value={this.state.editGroup}
                      >
                        <option>Choose....</option>
                        {this.state.group.map((group, idx) => {
                          return (
                            <option key={idx}>{group.name}</option>
                          )
                        })}
                      </Form.Control>
                    </Form.Group> */}

                    <Form>
                      <div>Hình ảnh</div>
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
                      {this.state.edit ? <img className="borderImgSize" src={`http://localhost:5000/${products.imagePath}`} /> : null
                      }

                      {this.state.edit ? null : this.state.listImage.map((image, idx) => {
                        return (
                          <img key={idx} className="borderImgSize" src={image} />
                        );
                      })}
                    </Form>
                  </div>
                  <div className="col-6">

                    <Form.Group controlId="formBasicQuantity">
                      <Form.Label>Số lượng</Form.Label>
                      <Form.Control
                        type="number"
                        name="amount"
                        placeholder="Số lượng"
                        onChange={this.InputOnChange}
                        value={products.amount || ''} />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Màu sắc</Form.Label>
                      <Form.Control
                        type="text"
                        name="color"
                        placeholder="Màu sắc của giày"
                        onChange={this.InputOnChange} 
                        value={products.color || ''}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicQuantity">
                      <Form.Label>Giá tiền</Form.Label>
                      <Form.Control
                        type="number"
                        name="price"
                        placeholder="Giá tiền"
                        onChange={this.InputOnChange}
                        value={products.price || ''} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Mô tả sản phẩm</Form.Label>
                      <Form.Control
                        as="textarea"
                        type="text"
                        name="description"
                        rows={12}
                        onChange={this.InputOnChange}
                        value={products.description} />
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
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={(require('../img/vans.png'))}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={(require('../img/vans.png'))}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={(require('../img/vans.png'))}
                      alt="Third slide"
                    />
                  </Carousel.Item>
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
                              <div className="view" onClick={() => this.setShowModalViewImage(listProduct.id)}>View</div>
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
                  {/* <CDataTable
                    items={this.state.listProduct}
                    fields={fields}
                    hover
                    striped
                    bordered
                    size="lg"
                    itemsPerPage={15}
                    pagination
                    scopedSlots={{
                      'status':
                        (item) => (
                          <td>
                            <CBadge color={getBadge(item.status)}>
                              {item.status}
                            </CBadge>
                          </td>
                        )
                    }}
                  /> */}
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </>
      </div >

    );
  }
  imageHandler = (event) => {
    const { name } = event.target;
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.state.listImage.push(reader.result);
        this.realTime();    //Cập nhật state ngay lập tức
      }
    }
    // const newProduct = { ...this.state.products, [name]: event.target.files[0] } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
    // this.setState({ products: newProduct });
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
}
export default Products;