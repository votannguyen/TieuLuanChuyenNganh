import React, { Component } from 'react';
import './order.css'
import {
    Tab,
    Tabs,
    Table
} from "react-bootstrap";
class Order extends Component {
    state = {}
    render() {
        return (
            <div className="backGroundMain">
                <div className="containerMain">
                    <Tabs justify defaultActiveKey="orderNotConfirm" transition={false} id="noanim-tab-example">
                        <Tab
                            eventKey="orderNotConfirm"
                            title="Đơn hàng chưa được xác nhận"
                            tabClassName="titleTab">
                            <div className="titleTable">Bảng đơn hàng chưa được xác nhận</div>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab
                            eventKey="orderConfirm"
                            title="Đơn hàng đã xác nhận"
                            tabClassName="titleTab">
                            <div className="titleTable">Bảng đơn hàng đã được xác nhận</div>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab
                            eventKey="orderHaveBeenDelivery"
                            title="Đơn hàng đã vận chuyển xong"
                            tabClassName="titleTab">
                            <div className="titleTable">Bảng đơn hàng đã vận chuyển xong</div>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>

                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Order;