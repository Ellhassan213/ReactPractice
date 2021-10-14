import {useState} from "react"
import validateForm from "../utils/FormValidations/validateForm"
import nameValidation from "../utils/FormValidations/nameValidation"
import emailValidation from "../utils/FormValidations/emailValidation"
import phoneValidation from "../utils/FormValidations/phoneValidation"
import addressValidation from "../utils/FormValidations/addressValidation"

const useForm = () => {
    const [formInputs, setFormInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: ""
    })
    const [formInputsErrors, setFormInputsErrors] = useState({
        firstName: "empty",
        lastName: "empty",
        email: "empty",
        phone: "empty",
        address: "empty"
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormInputs({...formInputs, [name]: value})
    }

    const getFieldErrorMessage = (name, value) => {
        let errorMessage = ""
        if(name==="firstName" || name==="lastName") {
            errorMessage = nameValidation(value)
        }else if(name==="email") {
            errorMessage = emailValidation(value)
        }else if(name==="phone") {
            errorMessage = phoneValidation(value)
        }
        else if(name==="address") {
            errorMessage = addressValidation(value)
        }
        return errorMessage
    }

    const handleBlur = (event) => {
        const {name, value} = event.target
        const errorMessage = getFieldErrorMessage(name, value)
        setFormInputsErrors({...formInputsErrors, [name]: errorMessage})
    }

    const handleSubmit = () => {
        const errors = validateForm(formInputsErrors)
        return errors
    }

    return {formInputs, formInputsErrors, handleChange, handleBlur, handleSubmit}
}

export default useForm