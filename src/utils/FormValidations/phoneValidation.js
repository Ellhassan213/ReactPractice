const phoneValidation = (value) => {
    let isEmpty = value === ""
    let re = /^[0-9]+$/;
    let isEmailValid = re.test(value);

    if(isEmpty) {
        return "required"
    }else if(!isEmailValid) {
        return "Phone Number not valid"
    }else {
        return ""
    }
}

export default phoneValidation