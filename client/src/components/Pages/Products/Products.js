import React from 'react'
import { Row } from 'react-bootstrap'
import AddProducts from './AddProducts'

const Products = () => {

    document.title = `Products - Inventory`

    return (

        <div className='container-fluid'>
            <Row>
                <AddProducts />
            </Row>
            <Row>
                This is product display page
            </Row>
        </div>

    )
}

export default Products