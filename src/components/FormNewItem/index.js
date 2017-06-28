import React from 'react'

const FormNewItem = ({ onDescriptionChange, onCreateNewItem, description}) => {
    let placeholder = "New item..."

    return (
    <form onSubmit={(e) => {
                // TODO: Lift state to Checklist 
                e.preventDefault()
                if (description === '') return false
                onCreateNewItem()
            }}>
                <input type="text"
                    value={description}
                    onChange={(e) => {
                        e.preventDefault()
                        // TODO: Lift state to Checklist 
                        onDescriptionChange(e.target.value);
                    }}
                    placeholder={placeholder}
                    onFocus={(e) => e.target.placeholder = ""}
                    onBlur={(e) => e.target.placeholder = placeholder}
                />
        < input type="Submit" value={'+'} readOnly />
    </form > )
}



export default FormNewItem