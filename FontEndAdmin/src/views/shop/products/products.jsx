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
    this.setState({ updateDaily: '' });
  }
  InputOnChange = (event) => {
    const { name, value } = event.target; // đặt biến để phân rã các thuộc tính trong iout ra
    const newProduct = { ...this.state.products, [name]: value } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
    if(name === "price"){
      // this.setState({ intermediariesMoney: formatterNum.format(value)});
      this.realTime();
    }
    this.setState({ products: newProduct });
    this.realTime();
    console.log(this.state.intermediariesMoney)
    console.log(this.state.products)
  }
  save = () => {
    var data = new FormData();

    data.append("amount", this.state.products.amount);
    data.append("brandId", this.state.products.brandId);
    data.append("categoryId", this.state.products.categoryId);
    data.append("groupId", this.state.products.groupId);
    data.append("imagePath", this.state.products.imagePath);
    data.append("description", this.state.products.description);
    data.append("name", this.state.products.name);
    data.append("price", this.state.products.price);
    console.log(this.state.products.amount);

    ProductService.createProduct(data).then(res => {
      alert("Cập nhật thông tin thành công")
      this.loadData();
      this.setCloseModal();

    }, function (error) {
      alert("Lỗi")

    });
  }
  setShowModal = (id) => {
    this.setState({ products: {} });
    // this.setState({ ModalTitle: "New Instructor" });
    this.realTime();
    this.setState({ showModal: true });
  }

  setShowModalEdit(id, brand, category, group) {        ///edit sản phẩm
    // this.setState({ ModalTitle: "Edit Instructor" });
    const formatterNum = Intl.NumberFormat('en');  // hàm format number 100000 thành 100.000
    ProductService.getProduct(id).then(res => {
      this.setState({ products: res.data.product });

    });
    this.setState({ editBrand: brand });  // cập nhật brand
    this.setState({ editCategory: category });  // cập nhật category
    this.setState({ editGroup: group });  // cập nhật group
    this.setState({ showModal: true });
    this.setState({ edit: true })
    this.realTime();      //realtime cho các state
  }
  setCloseModal = () => {
    this.setState({ showModal: false });
    this.setState({ edit: false })
    this.setState({ intermediariesMoney: ''});
    this.setState({ listImage: [] })
    this.setState({ tempImage: 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg' })
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
  format_num = (number) => {

  }
  render() {
    const { products } = this.state
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
          <button type="button" class="btn btn-sm btnAddProduct" onClick={() => this.setShowModal(-1)}><p class="fas fa-plus-circle textInBtnAddProduct">   Thêm sản phẩm</p></button>
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
                <div className="row">
                  <div className="col-6">
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
                        value={this.state.editBrand}
                      >
                        <option>Choose....</option>
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
                        value={this.state.editCategory}
                      >
                        <option>Choose....</option>
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
                    </Form.Group>
                    <Form>
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
                    </Form>
                    <Form>
                      <div>Hình ảnh</div>
                      <div className="borderImgSizeIcon">
                        <label for="upload-photo" className="iconOnImgBorder"><i class="fas fa-image fa-3x"></i></label>
                        <Form.Control
                          id="upload-photo"
                          type="file"
                          accept=".png, .jpg, .svg, .webp, .jfif"
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
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Tiêu đề sản phẩm</Form.Label>
                      <Form.Control
                        as="textarea"
                        type="text"
                        name="titleProduct"
                        rows={2} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Mô tả sản phẩm</Form.Label>
                      <Form.Control
                        as="textarea"
                        type="text"
                        name="description"
                        rows={6}
                        onChange={this.InputOnChange}
                        value={products.description} />
                    </Form.Group>
                    <Form>
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
                    </Form>
                    <Form.Group controlId="formBasicQuantity">
                      <Form.Label>Giá tiền</Form.Label>
                      <Form.Control
                        type="number"
                        name="price"
                        placeholder="Giá tiền"
                        onChange={this.InputOnChange}
                        value={products.price || ''} />
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
                        <th>Name Product</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Group</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.listProduct.map((listProduct, idx) => {
                        return (
                          <tr>
                            <td>{idx + 1}</td>
                            <td>
                              {listProduct.imagePath ?
                                <img className="imageOnTable" src={`http://localhost:5000/${listProduct.imagePath}`} /> :
                                null
                              }
                            </td>
                            <td>{listProduct.name}</td>
                            <td>{listProduct.Brand.name}</td>
                            <td>{listProduct.Category.name}</td>
                            <td>{listProduct.Group.name}</td>
                            <td>{listProduct.amount}</td>
                            <td>{formatter.format(listProduct.price)}</td>
                            <td>
                              <div className="row">
                                <div className="col-3 info">
                                  <i class="fas fa-info-circle" onClick={() => this.setShowModalEdit(listProduct.id, listProduct.Brand.name, listProduct.Category.name, listProduct.Group.name)}></i>
                                </div>
                                <div className="col-3 delete">
                                  <i class="fas fa-trash-alt"></i>
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
    const newProduct = { ...this.state.products, [name]: event.target.files[0] } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
    this.setState({ products: newProduct });
    console.log(this.state.products)

    // this.setState({tempImage: true})s
    console.log(this.state.listImage)
    // reader.readAsDataURL(e.target.files[0])
    reader.readAsDataURL(event.target.files[0])
  }
}
export default Products;