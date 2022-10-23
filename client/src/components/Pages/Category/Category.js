import React, { useEffect, useState } from 'react'
import { Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import AddCategory from './AddCategory'
import { showCategoryList } from './CategorySlice'
import EditCategory from './EditCategory'
import DeleteCategory from './DeleteCategory'
import loading from '../../../image/LoadingIMG.gif'

const Category = () => {

    document.title = `Category - Inventory`

    const dispatch = useDispatch();
    const { categoryList } = useSelector((state) => state.Category)

    const [searchName, setSearchName] = useState("")

    //get data and store in categorylist from backend
    const fetchCategory = () => {

        fetch("http://localhost:2000/category")
            .then((res) => res.json())
            .then(data => {
                dispatch(showCategoryList(data.detail))
            })
    }

    // searching category
    const searchCategory = categoryList.filter((sItem) => {
        return sItem.catName.toLowerCase().includes(searchName)
    })

    // console.log(searchCategory)

    useEffect(() => {
        fetchCategory()
    }, [])

    return (

        <div className="container-fluid">

            {/* Add category button and form */}
            <Row>
                <AddCategory />
            </Row>

            {/* display category section */}
            <Row>
                {/* {JSON.stringify(categoryList)} */}
                <div>
                    {/* <i className="bi bi-search" style={{ position: "relative" }} /> */}
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
                                <th>CATEGORY NAME</th>
                                <th>STATUS</th>
                                <th>OPTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchCategory.length > 0 ? searchCategory.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.catID}</td>
                                        <td>{item.catName}</td>
                                        <td>{item.catStatus}</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-1 mx-1"><EditCategory EditItem={item} /></div>
                                                <div className="col-1"><DeleteCategory DeleteItem={item} /></div>
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

export default Category