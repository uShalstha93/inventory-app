import React from 'react'
import { Row, Table } from 'react-bootstrap'

const Order = () => {

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
                        <tbody></tbody>
                    </Table>
                </div>
            </Row>
        </div>

    )
}

export default Order