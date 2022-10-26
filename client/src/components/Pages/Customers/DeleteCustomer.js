import React from 'react'
import { Toast } from 'react-bootstrap'

const DeleteCustomer = (props) => {

    const delCustomer = () => {

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                customerID: props.DelCustomerID
            })
        }
        if (window.confirm(`Are You Sure ? You want to Delete Customer - ${props.DelCustomerName}`)) {
            //fetch delete api
            fetch("http://localhost:2000/customers", requestOptions)
                .then((res) => res.json())
                .then(result => {
                    alert(result.message)
                })
        }
        else {
            alert(`Failed to Delete Customer - ${props.DelCustomerName}!!`)
        }
    }

    return (

        <div>
            <i className="bi bi-trash3 btn-sm" onClick={delCustomer} />
        </div>

    )
}

export default DeleteCustomer