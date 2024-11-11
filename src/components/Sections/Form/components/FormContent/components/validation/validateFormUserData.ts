import { UserData } from "../hooks/useFormUserData";
import { UserDataErrors } from "../hooks/useFormUserDataErrors";

export function isUserDataCorrectlyFulfilled(userData: UserData, setUserDataErrors: React.Dispatch<React.SetStateAction<UserDataErrors>>): boolean {
    const requiredFields: { key: keyof UserData; errorKey: keyof UserDataErrors; errorMessage: string;}[] = [
        { key: 'firstName', errorKey: 'firstNameError', errorMessage: "Please complete this required field." },
        { key: 'secondName', errorKey: 'secondNameError', errorMessage: "Please complete this required field." },
        { key: 'companyName', errorKey: 'companyNameError', errorMessage: "Please complete this required field." },
        { key: 'businessEmail', errorKey: 'businessEmailError', errorMessage: "Please complete this required field." },
        { key: 'phoneNumber', errorKey: 'phoneNumberError', errorMessage: "Please complete this required field." },
        { key: 'isPrivacyPolicyAgreementChecked', errorKey: 'isPrivacyPolicyAgreementCheckedError', errorMessage: "Please select this required field." }
    ];

    if (isEveryFormFieldEmpty(userData)) {
        setUserDataErrors(prevErrors => ({
            ...prevErrors,
            formError: "It looks like one of the required fields hasn't been completed. Please ensure all fields marked with * are filled out before submitting your application.",
        }));

        return false
    }

    const errors: Partial<UserDataErrors> = {};

    for (const field of requiredFields) {
        if (!userData[field.key] || errors[field.errorKey]) {
            errors[field.errorKey] = field.errorMessage;
            break;
        }
    }

    if (Object.keys(errors).length > 0) {
        setUserDataErrors(prevErrors => ({
            ...prevErrors,
            ...errors,
        }));

        return false
    }

    const textRegex = /^([a-zA-Z]{1,})([a-zA-Z\s])$/
    const companyNameRegex = /^([a-zA-Z0-9.]{2,})$/
    const businessEmailRegex = /^([a-z0-9._%+-]{3,})@([a-zA-Z0-9.-]{2,})\.[a-z]{2,}$/

    if (!textRegex.test(userData.firstName)) {
        setUserDataErrors(prevErrors => ({
            ...prevErrors,
            firstNameError: "Please enter valid first name.",
        }));

        return false
    }

    if (!textRegex.test(userData.secondName)) {
        setUserDataErrors(prevErrors => ({
            ...prevErrors,
            secondNameError: "Please enter valid second name.",
        }));

        return false
    }

    if (!companyNameRegex.test(userData.companyName)) {
        setUserDataErrors(prevErrors => ({
            ...prevErrors,
            companyNameError: "Please enter valid company name.",
        }));

        return false
    }

    if (!businessEmailRegex.test(userData.businessEmail)) {
        setUserDataErrors(prevErrors => ({
            ...prevErrors,
            businessEmailError: "Please enter valid business email.",
        }));

        return false
    }

    if (!userData.isPrivacyPolicyAgreementChecked) {
        setUserDataErrors(prevErrors => ({
            ...prevErrors,
            isPrivacyPolicyAgreementCheckedError: "Please complete all required fields.",
        }));

        return false
    }

    // If everything is done correctly:
    return true
}

function isEveryFormFieldEmpty(userData: UserData): boolean {
    return userData.firstName === '' &&
           userData.secondName === '' &&
           userData.companyName === '' &&
           userData.businessEmail === '' &&
           userData.phoneNumber === '';
}