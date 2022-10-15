import React, { useEffect } from 'react'
import { Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import AddCategory from './AddCategory'
import { showCategoryList } from './CategorySlice'
import EditCategory from './EditCategory'
import DeleteCategory from './DeleteCategory'
import loading from '../../../image/LoadingIMG.gif'
// import DefaultForm from '../../Form/DefaultForm'

const Category = () => {

    document.title = `Category - Inventory`

    const dispatch = useDispatch();
    const { categoryList } = useSelector((state) => state.Category)

    //get data and store in categorylist from backend
    const fetchCategory = () => {
        fetch("http://localhost:2000/category")
            .then((res) => res.json())
            .then(data => {
                dispatch(showCategoryList(data.detail))
            })
    }

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
                <div className="col-10 bg-white rounded">
                    This part is for search field....
                    <Table responsive hover size='sm'>
                        <thead>
                            <tr>
                                <th>CATEGORY ID</th>
                                <th>CATEGORY NAME</th>
                                <th>STATUS</th>
                                <th>OPTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categoryList.length > 0 ? categoryList.map((item, index) => {
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