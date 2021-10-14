const validateForm = (formInputsErrors) => {
    let errors = 0
    for(let item of Object.keys(formInputsErrors)) {
        if(formInputsErrors[item].length > 0){
            errors += 1
        }
    }
    return errors
}

export default validateForm