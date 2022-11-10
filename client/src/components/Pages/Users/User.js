import React, { useEffect, useState } from 'react'
import { Row, Table } from 'react-bootstrap'
import loading from '../../../image/LoadingIMG.gif'

const Users = () => {

    document.title = `Users - Inventory`

    const [searchName, setSearchName] = useState("")
    const [userDetail, setUserDetail] = useState([])

    const searchUser = userDetail.filter((uItem) => {
        return uItem.fullName.toLowerCase().includes(searchName)
    })
    // console.log(searchUser, searchName)

    const fetchUser = () => {
        fetch("http://localhost:2000/users")
            .then((res) => res.json())
            .then(data => {
                setUserDetail(data.detail)
            })
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (

        <div className="container-fluid">
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
                                <th>FULL NAME</th>
                                <th>ADDRESS</th>
                                <th>CONTACT NO.</th>
                                <th>EMAIL ADDRESS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchUser.length > 0 ? searchUser.map((item, idx) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.fullName}</td>
                                        <td>{item.address}</td>
                                        <td>{item.contactno}</td>
                                        <td>{item.email}</td>
                                        <td>{item.customerEmail}</td>
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

export default Users