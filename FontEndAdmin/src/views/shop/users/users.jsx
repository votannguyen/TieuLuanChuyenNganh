import React, { Component } from 'react';
import { Pagination } from 'antd';
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
  CRow,
  CPagination
} from '@coreui/react'
import '../products/products.css';
import './user.css';
import UserService from "../../../services/UserService";
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
    user : [],
    listUser : []
    
  };
  componentDidMount() {
    this.loadData();
  }
  loadData = () => {
    UserService.listUser().then((res) => {
      this.setState({ listUser: res.data.users.sort((a,b)=>a.id - b.id)});
    });
  }
  InputOnChange = (event) => {
    const { name, value } = event.target; // đặt biến để phân rã các thuộc tính trong iout ra

    const newUser = { ...this.state.user, [name]: value } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
    this.setState({ users: newUser });
    console.log(this.state.user)
  }
  // save = () => {
  //   console.log(this.state.products)
  //   ProductService.createProduct(this.state.products).then(res => {
  //     alert("Cập nhật thông tin thành công")
  //     this.loadData();
  //     this.setCloseModal();

  //   }, function (error) {
  //     alert("Lỗi")

  //   });
  // }
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
  processGender = (value)=>{
    if(value === '1'){
      return(
        <i class="fas fa-male male fa-2x"></i>
      )
    }
    else{
      return(
        <i class="fas fa-female female fa-2x"></i>
      )
    }
  }
  render() {

    return (
      <div>
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
                        <th>Họ Tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Giới tính</th>
                        <th>Ngày sinh</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>

                      </tr>
                    </thead>
                    <tbody>
                      {this.state.listUser.map((listUser, idx) => {
                        return (
                          <tr>
                            <td>{idx+1}</td>
                            <td className="tableFieldName">{listUser.fullName}</td>
                            <td>{listUser.email}</td>
                            <td>{listUser.phone}</td>
                            <td>{listUser.address}</td>
                            <td>{this.processGender(listUser.gender)}</td>
                            <td>{listUser.birthday}</td>
                            <td>
                              <CBadge color={getBadge('Active')}>
                                {'Active'}
                              </CBadge>
                            </td>
                            <td>
                              <div className="row">
                                <div className="col-3 info">
                                  <i class="fas fa-info-circle"></i>
                                </div>
                                <div className="col-3 delete">
                                  <i class="fas fa-user-minus"></i>
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
      </div>

    );
  }
}

export default Products;