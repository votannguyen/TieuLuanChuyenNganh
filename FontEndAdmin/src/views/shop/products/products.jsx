import React, { Component } from 'react';
import {
  Button,
  Modal,
  Form,
  Table
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
import usersData from '../../users/UsersData'
import './products.css';
import ProductService from "../../../services/ProductService";
import BrandService from "../../../services/BrandService";
import CategoryService from "../../../services/CategoryService";
const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['name', 'amount', 'brandId', 'categoryId', 'description', 'price']
class Products extends Component {
  state = {
    showModal: false,
    products: [],
    listProduct: [],
    brand: [],
    category: [],
  };
  componentDidMount() {
    this.loadData();
  }
  loadData = () => {
    ProductService.listProduct().then((res) => {
      this.setState({ products: res.data.products });
      this.setState({ listProduct: res.data.products });
    });
    console.log(this.state.products)
    BrandService.listBrand().then((res) => {
      this.setState({ brand: res.data.brands });
    });
    CategoryService.listCategory().then((res) => {
      this.setState({ category: res.data.categories })
    })

  }
  InputOnChange = (event) => {
    const { name, value } = event.target; // đặt biến để phân rã các thuộc tính trong iout ra

    const newProduct = { ...this.state.products, [name]: value } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
    this.setState({ products: newProduct });
    console.log(this.state.products)
  }
  save = () => {
    console.log(this.state.products)
    ProductService.createProduct(this.state.products).then(res => {
      alert("Cập nhật thông tin thành công")
      this.loadData();
      this.setCloseModal();

    }, function (error) {
      alert("Lỗi")

    });
  }
  setShowModal = () => {
    this.setState({ showModal: true });
  }
  setCloseModal = () => {
    this.setState({ showModal: false });
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

  render() {
    return (
      <div onLoad={this.loadData}>
        {/* <div className="row">
          <div className="col-sm-10"></div> */}
        <div className="container">
          <button type="button" class="btn btn-sm btnAddProduct" onClick={this.setShowModal}><p class="fas fa-plus-circle textInBtnAddProduct">   Thêm sản phẩm</p></button>
          {/* </div> */}
        </div>
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
                <Form.Group controlId="formBasicName">
                  <Form.Label>Tên sản phẩm</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Tên sản phẩm" onChange={this.InputOnChange} />
                </Form.Group>
                <Form.Group controlId="ControlSelect">
                  <Form.Label>Thương hiệu</Form.Label>
                  <Form.Control as="select" name="brandId" onChange={this.InputOnChangeBrand}>
                    <option>Choose....</option>
                    {this.state.brand.map((brand, idx) => {
                      return (
                        <option>{brand.name}</option>
                      )
                    })}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="ControlSelect">
                  <Form.Label>Danh mục</Form.Label>
                  <Form.Control as="select" name="categoryId" onChange={this.InputOnChangeCategory}>
                    <option>Choose....</option>
                    {this.state.category.map((category, idx) => {
                      return (
                        <option>{category.name}</option>
                      )
                    })}
                  </Form.Control>
                </Form.Group>
                {/* <Form.Group controlId="ControlSelect">
                  <Form.Label>Nhóm</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group> */}
                {/* <Form>
                <Form.Label>Kích thước</Form.Label>
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-2">
                      <Form.Check inline label="24" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-24`} />
                      <Form.Check inline label="25" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-25`} />
                      <Form.Check inline label="26" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-26`} />
                      <Form.Check inline label="27" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-27`} />
                      <Form.Check inline label="28" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-28`} />
                      <Form.Check inline label="29" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-29`} />
                      <Form.Check inline label="30" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-30`} />
                      <Form.Check inline label="31" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-31`} />
                      <Form.Check inline label="32" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-32`} />
                      <Form.Check inline label="33" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-33`} />
                      <Form.Check inline label="34" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-34`} />
                      <Form.Check inline label="35" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-35`} />
                      <Form.Check inline label="36" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-36`} />
                      <Form.Check inline label="37" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-37`} />
                      <Form.Check inline label="38" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-38`} />
                      <Form.Check inline label="39" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-39`} />
                      <Form.Check inline label="40" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-40`} />
                      <Form.Check inline label="41" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-41`} />
                      <Form.Check inline label="42" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-42`} />
                      <Form.Check inline label="43" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-43`} />
                      <Form.Check inline label="44" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-44`} />
                      <Form.Check inline label="45" className="sizeCheckBox paddingSize" type={type} id={`inline-${type}-45`} />
                    </div>
                  ))}
                </Form> */}
                <Form.Group controlId="formBasicQuantity">
                  <Form.Label>Số lượng</Form.Label>
                  <Form.Control type="number" name="amount" placeholder="Số lượng" onChange={this.InputOnChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Tiêu đề sản phẩm</Form.Label>
                  <Form.Control as="textarea" type="text" name="titleProduct" rows={2} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Mô tả sản phẩm</Form.Label>
                  <Form.Control as="textarea" type="text" name="description" rows={6} onChange={this.InputOnChange} />
                </Form.Group>
                {/* <Form>
                  <Form.Label>Màu sắc</Form.Label>
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check inline label="Đen" type={type} id={`inline-${type}-1`} />
                      <Form.Check inline label="Trắng" type={type} id={`inline-${type}-2`} />
                      <Form.Check inline label="Cam" type={type} id={`inline-${type}-3`} />
                      <Form.Check inline label="Xanh" type={type} id={`inline-${type}-4`} />
                      <Form.Check inline label="Lục" type={type} id={`inline-${type}-5`} />
                      <Form.Check inline label="Đỏ" type={type} id={`inline-${type}-6`} />
                      <Form.Check inline label="Nâu" type={type} id={`inline-${type}-7`} />
                    </div>
                  ))}
                </Form> */}
                <Form.Group controlId="formBasicQuantity">
                  <Form.Label>Giá tiền</Form.Label>
                  <Form.Control type="number" name="price" placeholder="Giá tiền" onChange={this.InputOnChange} />
                </Form.Group>
                <Button variant="primary" onClick={this.save}>
                  Thêm
                </Button>
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
                        <th>Name Product</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.listProduct.map((listProduct, idx) => {
                      return (
                        <tr>
                        <td>{listProduct.id}</td>
                        <td>{listProduct.name}</td>
                        <td>{listProduct.Brand.name}</td>
                        <td>{listProduct.Category.name}</td>
                        <td>{listProduct.amount}</td>
                        <td>{listProduct.description}</td>
                        <td>{listProduct.price}</td>
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
      </div>

    );
  }
}

export default Products;