import React, { useEffect, useState } from 'react'
import { Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import loading from '../../../image/LoadingIMG.gif'

const Customers = () => {

    document.title = `Customers - Inventory`

    const dispatch = useDispatch()

    return (

        <div className="container-fluid">
            <Row>
                Add Customers
            </Row>
            <Row>
                <div>
                    <input type="text" placeholder="Search..." className="shadow rounded mb-4"
                        style={{ position: "relative", right: ".8rem", height: "2.3rem", padding: "15px", width: "200px", border: "none" }}
                        onKeyUp={null} />
                    <i className="bi bi-search" style={{ position: "relative", right: "3rem" }} />
                </div>
                <div className="col-9 bg-white rounded shadow">
                    <Table responsive hover size='sm'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>ADDRESS</th>
                                <th>CONTACT NO.</th>
                                <th>EMAIL ADDRESS</th>
                                <th>OPTION</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </Table>
                </div>
            </Row>
        </div>

    )
}

export default Customers