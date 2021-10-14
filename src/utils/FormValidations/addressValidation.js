const addressValidation = (value) => {
    let isEmpty = value === ""

    if(isEmpty) {
        return "required"
    }else {
        return ""
    }
}

export default addressValidation