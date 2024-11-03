import { useState } from "react"

export interface UserDataErrors {
    firstNameError: string,
    secondNameError: string,
    companyNameError: string,
    businessEmailError: string,
    phoneNumberError: string,
    isPrivacyPolicyAgreementCheckedError: string,
}

const useFormUserDataErrors = () => {
    const [userDataErrors, setUserDataErrors] = useState<UserDataErrors>({
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