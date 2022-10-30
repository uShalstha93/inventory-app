import React, { useEffect, useState } from 'react'
import { Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { showOrderList } from './OrderSlice'
import loading from '../../../image/LoadingIMG.gif'

const Order = () => {

    document.title = `Orders - Inventory`
    
    const dispatch = useDispatch()
    const { orderList } = useSelector((state) => state.Order)

    const [searchOrderName, setSearchOrderName] = useState("")

    const searchOrder = orderList.filter((OItem) => {
       return null
    })

    return (

        <div className="container-fluid">
            <Row>
                Add Orders
            </Row>
            <Row>
                <div>
                    <input type="text" placeholder="Search..." className="shadow rounded mb-4"
                        style={{ position: "relative", right: ".8rem", height: "2.3rem", padding: "15px", width: "200px", border: "none" }}
                        onKeyUp={null} />
                    <i className="bi bi-search" style={{ position: "relative", right: "3rem" }} />
                </div>
                <div className="col bg-white rounded shadow">
                    <Table responsive hover size="sm">
                        <thead>
                            <tr>
                                <th>ORDER ID</th>
                                <th>CUSTOMER NAME</th>
                                <th>PRODUCT NAME</th>
                                <th>CONTACT NO.</th>
                                <th>ORDER DATE</th>
                                <th>TOTAL PRICE</th>
                                <th>STATUS</th>
                                <th>OPTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderList.length > 0 ? orderList.map((item, idx) => {
                                return (
                                    <tr key={item.orderID}>
                                        <td>{item.orderID}</td>
                                        <td>{item.customerName}</td>
                                        <td>{item.productName}</td>
                                        <td>{item.contactNo}</td>
                                        <td>{item.orderDate}</td>
                                        <td>{item.totalprice}</td>
                                        <td>{item.orderStatus}</td>
                                        <td>Edit/Delete</td>
                                    </tr>
                                )
                            }) : <div><img src={loading} className="d-flex" alt="loading" width="50px" /></div>}
                        </tbody>
                    </Table>
                </div>
            </Row>
        </div>

    )
}

export default Order