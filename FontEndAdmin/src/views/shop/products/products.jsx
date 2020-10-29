import React, { Component } from 'react';
import {
  Button,
  Modal,
  Form,
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

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['Tên','Tiêu đề','Mô tả', 'Thương hiệu', 'Danh mục', 'Nhóm', 'Kích thước', 'Số lượng', 'Màu', 'Giá']
class Products extends Component {
  state = {
    showModal: false,
    products : [],
    product : {},
  };
  componentDidMount() {
    this.loadData();
  }
  loadData = () => {
    ProductService.list().then((res) => {
        this.setState({ products: res.data.product });
    });
  }
  setShowModal = () => {
    this.setState({ showModal: true });
  }
  setCloseModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
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
                  <Form.Control type="text" name="nameProduct" placeholder="Tên sản phẩm" />
                </Form.Group>
                <Form.Group controlId="ControlSelect">
                  <Form.Label>Thương hiệu</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="ControlSelect">
                  <Form.Label>Danh mục</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="ControlSelect">
                  <Form.Label>Nhóm</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
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
                <Form.Group controlId="formBasicQuantity">
                  <Form.Label>Số lượng</Form.Label>
                  <Form.Control type="number" name="quantityProduct" placeholder="Số lượng" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Tiêu đề sản phẩm</Form.Label>
                  <Form.Control as="textarea" type="text" name="titleProduct" rows={2} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Mô tả sản phẩm</Form.Label>
                  <Form.Control as="textarea" type="text" name="titleProduct" rows={6} />
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
                  <Form.Control type="number" name="priceProduct" placeholder="Giá tiền" />
                </Form.Group>
                <Button variant="primary" type="submit">
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
                  <CDataTable
                    items={usersData}
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
                  />
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