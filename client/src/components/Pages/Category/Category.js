import React from 'react'
import { Row } from 'react-bootstrap'
import AddCategory from './AddCategory'

const Category = () => {

    document.title = `Category - Inventory`

    return (

        <div className="container-fluid">
            <Row>
                <AddCategory />
            </Row>
            <Row>
                This is category display field...
            </Row>
        </div>
    )
}

export default Category