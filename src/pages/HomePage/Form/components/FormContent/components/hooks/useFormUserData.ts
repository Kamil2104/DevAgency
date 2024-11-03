import { useState } from "react"

export interface UserData {
    firstName: string,
    secondName: string,
    companyName: string,
    businessEmail: string,
    productRequirements: string[],
    phoneNumber: string,
    message: string,
    isPrivacyPolicyAgreementChecked: boolean,
}

const useFormUserData = () => {
    const [userData, setUserData] = useState<UserData>({
        firstName: '',
        secondName: '',
        companyName: '',
        businessEmail: '',
        productRequirements: [],
        phoneNumber: '',
        message: '',
        isPrivacyPolicyAgreementChecked: false
    });

    return {
        userData,
        setUserData,
    }
}

export default useFormUserData;