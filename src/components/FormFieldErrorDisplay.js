import React from "react"

const FormFieldErrorDisplay = ({errors, inputField}) => {
    return (
        errors[inputField]==="empty" ?
        <p></p> : 
        <p>{errors[inputField]}</p>
    )
}

export default FormFieldErrorDisplay