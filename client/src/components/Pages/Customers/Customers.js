import React, { useEffect, useState } from 'react'
import { Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { showCustomerList } from './CustomerSlice'
import loading from '../../../image/LoadingIMG.gif'
import AddCustomer from './AddCustomer'
import EditCustomer from './EditCustomer'
import DeleteCustomer from './DeleteCustomer'

const Customers = () => {

    document.title = `Customers - Inventory`

    const dispatch = useDispatch()
    const { customerList } = useSelector((state) => state.Customers)

    const [searchName, setSearchName] = useState("")

    const searchCustomer = customerList.filter((cItem) => {
        return cItem.customerName.toLowerCase().includes(searchName)
    })

    const fetchCustomer = () => {
        fetch("http://localhost:2000/customers")
            .then((res) => res.json())
            .then(data => {
                dispatch(showCustomerList(data.detail))
            })
    }

    useEffect(() => {
        fetchCustomer()
    }, [])

    return (

        <div className="container-fluid">
            <Row>
                <AddCustomer />
            </Row>
            <Row>
                <div>
                    <input type="text" placeholder="Search..." className="shadow rounded mb-4"
                        style={{ position: "relative", right: ".8rem", height: "2.3rem", padding: "15px", width: "200px", border: "none" }}
                        onKeyUp={(e) => setSearchName(e.target.value)} />
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
                            {searchCustomer.length > 0 ? searchCustomer.map((item, idx) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.customerID}</td>
                                        <td>{item.customerName}</td>
                                        <td>{item.customerAddress}</td>
                                        <td>{item.customerContactNo}</td>
                                        <td>{item.customerEmail}</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-1 mx-1"><EditCustomer EditItem={item} /></div>
                                                <div className="col-1"><DeleteCustomer DelCustomerID={item.customerID} DelCustomerName={item.customerName} /></div>
                                            </div>
                                        </td>
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

export default Customers