import React, { useState, useEffect } from 'react'
import { Row, Table } from 'react-bootstrap'
import AddProducts from './AddProducts'
import { useDispatch, useSelector } from 'react-redux'
import { showProductList } from './ProductSlice'
import loading from '../../../image/LoadingIMG.gif'
import EditProducts from './EditProducts'

const Products = () => {

    document.title = `Products - Inventory`

    const dispatch = useDispatch()
    const { productList } = useSelector((state) => state.Products)

    const [searchProductName, setSearchProductName] = useState("")

    //get data from database and store in productlist
    const fetchProduct = () => {
        fetch("http://localhost:2000/products")
            .then((res) => res.json())
            .then(data => {
                dispatch(showProductList(data.detail))
                // console.log(data.detail)
            })
    }

    //searching products
    const searchProduct = productList.filter((pItem) => {
        return pItem.productName.toLowerCase().includes(searchProductName)
    })

    useEffect(() => {
        fetchProduct()
    }, [])

    return (

        <div className='container-fluid'>
            {/* Add product form and button */}
            <Row>
                <AddProducts />
            </Row>
            {/* display product section */}
            <Row>
                <div>
                    <input type="text" placeholder="Search..." className="shadow rounded mb-4"
                        style={{ position: "relative", right: ".8rem", height: "2.3rem", padding: "15px", width: "200px", border: "none" }}
                        onKeyUp={(e) => setSearchProductName(e.target.value)} />
                    <i className="bi bi-search" style={{ position: "relative", right: "3rem" }} />
                </div>
                <div className="col-9 bg-white rounded shadow">
                    <Table responsive hover size="sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>PRODUCT NAME</th>
                                <th>CATEGORY</th>
                                <th>QUANTITY</th>
                                <th>PRICE</th>
                                <th>OPTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {JSON.stringify(productList)} */}
                            {searchProduct.length > 0 ? searchProduct.map((item, index) => {
                                return (
                                    <tr key={item.productID}>
                                        <td>{item.productID}</td>
                                        <td>{item.productName}</td>
                                        <td>{item.productCategory}</td>
                                        <td>{item.productQty}</td>
                                        <td>{item.productPrice}</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-1 mx-1"><EditProducts EditProducts={item} /></div>
                                                <div className="col-1"></div>
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

export default Products