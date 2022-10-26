import React from 'react'

const DeleteCategory = (props) => {

    const delCategory = () => {
        
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                catID: props.DelCategoryID
            })
        }
        if (window.confirm(`Are You Sure? You want to delete Category - ${props.DelCategoryName}`)) {
            fetch("http://localhost:2000/category", requestOptions)
                .then((res) => res.json())
                .then(result => {
                    alert(result.message)
                })
        }
        else {
            alert(`Failed to Delete category - ${props.DelCategoryName}!!`)
        }
    }

    return (

        <div>
            <i className="bi bi-trash3 btn-sm" onClick={delCategory} />
        </div>

    )
}

export default DeleteCategory