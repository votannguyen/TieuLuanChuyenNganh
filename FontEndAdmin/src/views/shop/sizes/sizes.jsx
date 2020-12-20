import React, { Component } from 'react';
import {
    Button,
    Modal,
    Form,
    InputGroup,
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
import "../products/products.css";
import "../brands/brand.css";
import "../promotion/promotion.css";
import "./sizes.css"
import SizesService from '../../../services/SizesService';
const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}
const fields = ['sizeName', 'sizeType']
class Sizes extends Component {
    state = {
        showModal: false,
        sizes: [],
        size: {},
        SizeType: [
            {
                id: 1,
                name: "VN"
            },
            {
                id: 2,
                name: "US"
            },
            {
                id: 3,
                name: "UK"
            },
        ],
        sizeVN: [],
        sizeUS: [],
        sizeUK: [],
    }
    componentDidMount() {
        this.loadData();
    }
    loadData = () => {
        SizesService.listSize().then((res) => {
            this.setState({ sizes: res.data.sizes });
        });
        SizesService.getSizeByTypeSize('VN').then((res) => {
            this.setState({ sizeVN: res.data.listSize.sort((a, b) => a.sizeName - b.sizeName) })
        });
        SizesService.getSizeByTypeSize('US').then((res) => {
            this.setState({ sizeUS: res.data.listSize.sort((a, b) => a.sizeName - b.sizeName) })
        });
        SizesService.getSizeByTypeSize('UK').then((res) => {
            this.setState({ sizeUK: res.data.listSize.sort((a, b) => a.sizeName - b.sizeName) })
        });
    }
    InputOnChange = (event) => {
        const { name, value } = event.target; // đặt biến để phân rã các thuộc tính trong iout ra
        const newSize = { ...this.state.size, [name]: value } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
        this.setState({ size: newSize });
        console.log(this.state.size);
    }
    save = () => {
        for (var i = 0; i < this.state.sizes.length; i++) {         //kiểm tra xem có trong cơ sở dữ liệu chưa
            if (this.state.size.sizeName === this.state.sizes[i].sizeName && this.state.size.sizeType === this.state.sizes[i].sizeType) {
                alert("Size vừa nhập đã tồn tại vui lòng nhập Size và Size Type khác");
                return
            }
        }
        SizesService.createSize(this.state.size).then(res => {
            // alert("Cập nhật thông tin thành công")
            // this.loadData();
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
    render() {
        return (
            <div onLoad={this.loadData}>
                {/* <div className="row">
          <div className="col-sm-10"></div> */}
                <div className="container">
                    <button type="button"
                        class="btn btn-sm btnAddProduct"
                        onClick={this.setShowModal}>
                        <p class="fas fa-plus-circle textInBtnAddProduct">
                            Thêm kích thước
                            </p>
                    </button>
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
                                Thêm kích thước
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Số Size<div className="notice">(Vui lòng nhập số)</div></Form.Label>
                                    <Form.Control type="text" name="sizeName" placeholder="Số kích thước" onChange={this.InputOnChange} />
                                </Form.Group>
                                <Form.Group controlId="ControlSelect">
                                    <Form.Label>Loại size</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="sizeType"
                                        onChange={this.InputOnChange}
                                    >
                                        <option>Choose....</option>
                                        {this.state.SizeType.map((sizeType, idx) => {
                                            return (
                                                <option
                                                    key={idx}
                                                    value={sizeType.name}>
                                                    {sizeType.name}
                                                </option>
                                            )
                                        })}
                                    </Form.Control>
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
                                    <p className="fontSizeNameTable">Danh sách các kích thước</p>
                                </CCardHeader>
                                <CCardBody>
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="titleTableSize">Size chuẩn việt nam (VN)</div>
                                            <div className="tbl-header">
                                                <Table striped hover>
                                                    <thead>
                                                        <tr>
                                                            <th className="th_Sticky">#</th>
                                                            <th className="th_Sticky">Size Type Name</th>
                                                            <th className="th_Sticky">Size</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.sizeVN.map((sizeVN, idx) => {
                                                            return (
                                                                <tr key={idx}>
                                                                    <td>{idx + 1}</td>
                                                                    <td>{sizeVN.sizeType}</td>
                                                                    <td>{sizeVN.sizeName}</td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="titleTableSize">Size chuẩn châu âu (UK)</div>
                                            <div className="tbl-header">
                                            <Table striped hover>
                                                <thead>
                                                    <tr>
                                                        <th className="th_Sticky">#</th>
                                                        <th className="th_Sticky">Size Type Name</th>
                                                        <th className="th_Sticky">Size</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.sizeUK.map((sizeUK, idx) => {
                                                        return (
                                                            <tr key={idx}>
                                                                <td>{idx + 1}</td>
                                                                <td>{sizeUK.sizeType}</td>
                                                                <td>{sizeUK.sizeName}</td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </Table>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="titleTableSize">Size chuẩn mỹ (US)</div>
                                            <div className="tbl-header">
                                            <Table striped hover>
                                                <thead>
                                                    <tr>
                                                        <th className="th_Sticky">#</th>
                                                        <th className="th_Sticky">Size Type Name</th>
                                                        <th className="th_Sticky">Size</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.sizeUS.map((sizeUS, idx) => {
                                                        return (
                                                            <tr key={idx}>
                                                                <td>{idx + 1}</td>
                                                                <td>{sizeUS.sizeType}</td>
                                                                <td>{sizeUS.sizeName}</td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </Table>
                                            </div>
                                        </div>
                                    </div>

                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                </>
            </div>
        );
    }
}

export default Sizes;