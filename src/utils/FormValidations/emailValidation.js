const emailValidation = (value) => {
    let isEmpty = value === ""
    let re = /\S+@\S+\.\S+/;
    let isEmailValid = re.test(value);

    if(isEmpty) {
        return "required"
    }else if(!isEmailValid) {
        return "Email not valid"
    }else {
        return ""
    }
}

export default emailValidation