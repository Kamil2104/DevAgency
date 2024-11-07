import { useState } from "react"

export interface UserDataErrors {
    formError: string,
    firstNameError: string,
    secondNameError: string,
    companyNameError: string,
    businessEmailError: string,
    phoneNumberError: string,
    isPrivacyPolicyAgreementCheckedError: string,
}

const useFormUserDataErrors = () => {
    const [userDataErrors, setUserDataErrors] = useState<UserDataErrors>({
        formError: '',
        firstNameError: '',
        secondNameError: '',
        companyNameError: '',
        businessEmailError: '',
        phoneNumberError: '',
        isPrivacyPolicyAgreementCheckedError: ''
    });

    return {
        userDataErrors,
        setUserDataErrors,
    }
}

export default useFormUserDataErrors;