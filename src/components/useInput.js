import { useState } from "react"

const useInput = (validateValue) => {
    const [enteredValue,setEnteredValue] = useState('')
    const [isTouched,setIsTouched] = useState(false)

    const valueIsValid = validateValue(enteredValue)
    const hassError = !valueIsValid && isTouched

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value)
    }

    const inputBlurHandler = (e) => {
        setIsTouched(true)
    }
    
    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError: hassError,
        valueChangeHandler,
        inputBlurHandler
    }
}

export default useInput