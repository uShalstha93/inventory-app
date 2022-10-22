import React, { useState } from 'react'
import { Toast } from 'react-bootstrap'

const DeleteProduct = (props) => {

    const [currentDeleteProduct, setCurrentDeleteProduct] = useState({})

    const delProduct = () => {

        setCurrentDeleteProduct(props.DelProduct)

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                productID: currentDeleteProduct.productID
            })
        }
        if (window.confirm(`Are You Sure ? You want to Delete Product - ${currentDeleteProduct.productName}`)) {
            //fetch delete api
            fetch("http://localhost:2000/products", requestOptions)
            .then((res) => res.json())
            .then(result => {
                alert(result.message)
            })
        }
        else {
            alert(`Failed to Delete Product - ${currentDeleteProduct.productName}!!`)
        }
    }

    return (

        <div>
            <i className="bi bi-trash3 btn-sm" onClick={delProduct} />
        </div>

    )
}

export default DeleteProduct