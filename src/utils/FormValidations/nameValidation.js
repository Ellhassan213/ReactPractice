const nameValidation = (value) => {
    let isEmpty = value === ""
    let re = /^[a-zA-Z]*$/;
    let isNameValid = re.test(value);

    if(isEmpty) {
        return "required"
    }else if(!isNameValid) {
        return "Numbers and special characters not allowed"
    }
    else{
        return ""
    }
}

export default nameValidation