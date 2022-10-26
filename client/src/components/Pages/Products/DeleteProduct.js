import React from 'react'
import { Toast } from 'react-bootstrap'

const DeleteProduct = (props) => {

    const delProduct = () => {

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                productID: props.DelProductID
            })
        }
        if (window.confirm(`Are You Sure ? You want to Delete Product - ${props.DelProductName}`)) {
            //fetch delete api
            fetch("http://localhost:2000/products", requestOptions)
            .then((res) => res.json())
            .then(result => {
                alert(result.message)
            })
        }
        else {
            alert(`Failed to Delete Product - ${props.DelProductName}!!`)
        }
    }

    return (

        <div>
            <i className="bi bi-trash3 btn-sm" onClick={delProduct} />
        </div>

    )
}

export default DeleteProduct