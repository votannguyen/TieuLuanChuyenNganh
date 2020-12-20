import React, { Component } from 'react';

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Modal,
    Form,
    Table,
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
import usersData from '../../users/UsersData';
import "../products/products.css";
import "../brands/brand.css";
import BrandService from "../../../services/BrandService";

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}
const fields = ['id', 'name', 'summary', 'imagePath']
class Products extends Component {
    state = {
        showModal: false,
        brands: {},
        brand: [],
        listShowBrands: [],
    };
    componentDidMount() {
        this.loadData();

    }
    loadData = () => {
        BrandService.listBrand().then((res) => {
            this.setState({ brand: res.data.brands });
            this.setState({ listShowBrands: res.data.brands });
            console.log(this.state.brand)
        });
    }
    InputOnChange = (event) => {
        const { name, value } = event.target; // đặt biến để phân rã các thuộc tính trong iout ra

        const newBrand = { ...this.state.brand, [name]: value } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
        this.setState({ brand: newBrand });
    }
    save = () => {
        BrandService.createBrand(this.state.brand).then(res => {
            alert("Cập nhật thông tin thành công")
            this.loadData();

        }, function (error) {

        });
    }
    setShowModal = () => {
        this.setState({ showModal: true });
    }
    setCloseModal = () => {
        this.setState({ showModal: false });
    }

    render() {
        const { loading, imageUrl } = this.state;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            <div onLoad={this.loadData}>
                {/* <div className="row">
          <div className="col-sm-10"></div> */}
                <div className="container">
                    <button type="button" class="btn btn-sm btnAddProduct" onClick={this.setShowModal}><p class="fas fa-plus-circle textInBtnAddProduct">   Thêm thương hiệu</p></button>
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
                                Thêm thông tin thương hiệu
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Tên thương hiệu</Form.Label>
                                    <Form.Control type="text" name="nameProduct" placeholder="Tên sản phẩm" name="name" onChange={this.InputOnChange} />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Mô tả</Form.Label>
                                    <Form.Control as="textarea" type="text" name="summary" rows={2} onChange={this.InputOnChange} />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={this.save}>
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
                                    <p className="fontSizeNameTable">Danh sách thương hiệu</p>
                                </CCardHeader>
                                <CCardBody>
                                    <>
                                        <CRow>
                                            <CCol>
                                                <CCard>
                                                    <CCardBody>
                                                        <Table striped hover>
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>Name</th>
                                                                    <th>Summary</th>
                                                                    <th>Image</th>
                                                                    
                                                                </tr>
                                                            </thead>

                                                            {/* Show danh sách các sản phẩm */}
                                                            <tbody>
                                                                {this.state.listShowBrands.map((brand, idx) => {
                                                                    return (
                                                                        <tr key={brand.id}>
                                                                            <td>{idx + 1}</td>
                                                                            <td>{brand.name}</td>
                                                                            <td>{brand.summary}</td>

                                                                            {brand.imagePath !== null ?
                                                                                <td>
                                                                                    <img
                                                                                        className="borderImgSizeAvatar"
                                                                                        src={`http://localhost:5000/${brand.imagePath}`}
                                                                                        
                                                                                    />
                                                                                    {/* <div className="view" onClick={() => this.setShowModalViewImage(listProduct.id)}>View all</div> */}
                                                                                </td> :
                                                                                <td>
                                                                                    Null
                                                                                </td>
                                                                            }
                                                                            
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
                                    {/* <CDataTable
                                        items={this.state.listShowBrands}
                                        fields={fields}
                                        hover
                                        striped
                                        bordered
                                        size="lg"
                                        itemsPerPage={10}
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