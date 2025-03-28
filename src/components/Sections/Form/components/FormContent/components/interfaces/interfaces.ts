import { UserData } from "../hooks/useFormUserData"
import { UserDataErrors } from "../hooks/useFormUserDataErrors"
import { UserDataSelectedProducts } from "../hooks/useFormUserSelectedProducts"

export interface InputProps  {
    className: 'halfSizeInput' | 'fullSizeInput',
    id: string,
    placeholder: string,
    value: string,
    onClick: () => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error?: string
}

export interface RegionSelectorProps {
    selectedCountryCode: string,
    onSelect: (code: string) => void,
    error: string
}

export interface ProductRequirementsProps {
    userData: UserData,
    userSelectedProducts: UserDataSelectedProducts,
    isProductRequirementsSelectOpened: boolean,
    handleProductRequirementsSelectToggle: () => void,
    handleSelectingProductRequirements: (selectedUserProduct: string, newSelectedUserProduct: string) => void,
    handleDeselectingProductRequirements: (selectedUserProduct: string, deselectedUserProduct: string) => void
}

export interface TextareaProps {
    value: string,
    onClick: () => void,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

export interface PrivacyPolicyCheckboxProps {
    userData: UserData,
    setUserData: React.Dispatch<React.SetStateAction<UserData>>,
    userDataErrors: UserDataErrors,
    setUserDataErrors: React.Dispatch<React.SetStateAction<UserDataErrors>>
}

export interface SubmitButtonProps {
    handleFormSubmition: () => void
}