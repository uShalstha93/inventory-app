import React, { useState } from 'react'

const DeleteCategory = (props) => {

    const [currentDeleteItem, setCurrentDeleteItem] = useState({})

    const deleteCategory = () => {
        setCurrentDeleteItem(props.DeleteItem)
        // console.log(currentDeleteItem.catID)
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                catID: currentDeleteItem.catID
            })
        }
        if (window.confirm(`Are You Sure? You want to delete Category - ${currentDeleteItem.catName}`)) {
            fetch("http://localhost:2000/category", requestOptions)
                .then(alert(`${currentDeleteItem.catName} Deleted Successfully!!`))
        }
        else {
            alert(`Failed to Delete category - ${currentDeleteItem.catName}!!`)
        }
    }

    return (

        <div>
            <i className="bi bi-trash3 btn-sm" onClick={deleteCategory} />
        </div>

    )
}

export default DeleteCategory