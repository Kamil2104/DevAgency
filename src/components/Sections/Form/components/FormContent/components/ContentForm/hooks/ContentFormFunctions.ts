import useFormContext from "../../../../../../../../hooks/useFormContext"

import { isUserDataCorrectlyFulfilled } from "../../validation/validateFormUserData"

import { UserData } from "../../hooks/useFormUserData";
import { UserDataErrors } from "../../hooks/useFormUserDataErrors";
import { UserDataSelectedProducts } from "../../hooks/useFormUserSelectedProducts";

interface ContentFormFunctionsProps {
    userData: UserData,
    setUserData: React.Dispatch<React.SetStateAction<UserData>>,
    userDataErrors: UserDataErrors,
    setUserDataErrors: React.Dispatch<React.SetStateAction<UserDataErrors>>,
    userSelectedProducts: UserDataSelectedProducts,
    setUserSelectedProducts: React.Dispatch<React.SetStateAction<UserDataSelectedProducts>>,
    isProductRequirementsSelectOpened: boolean,
    setIsProductRequirementsSelectOpened: (isOpened: boolean) => void,
}

const useContentFormFunctions = ({ userData, setUserData, userDataErrors,  setUserDataErrors, userSelectedProducts, setUserSelectedProducts, isProductRequirementsSelectOpened, setIsProductRequirementsSelectOpened }: ContentFormFunctionsProps) => {
    const { setDisplayedFormContent } = useFormContext()

    // Function for handling value changing in input fields
    const handleValueChangeInFormField = (userDataName: string, newUserDataValue: string, userDataErrorName: string, inputFieldID: string) => {
        setUserData({ ...userData, [userDataName]: newUserDataValue })
        setUserDataErrors({...userDataErrors, [userDataErrorName]: '', formError: '' })

        const inputField = document.getElementById(inputFieldID);
        if (inputField) {
          inputField.style.borderColor = '#131313';
        }
      }

      // Functions for product requirements
      const handleSelectingProductRequirements = (selectedUserProduct: string, newSelectedUserProduct: string) => {
        setUserSelectedProducts({...userSelectedProducts, [selectedUserProduct]: true})
        setUserData({
          ...userData,
          productRequirements: [...userData.productRequirements, newSelectedUserProduct],
        });
        setUserDataErrors({...userDataErrors, formError: '' })
      }

      const handleDeselectingProductRequirements = (selectedUserProduct: string, deselectedUserProduct: string) => {
        setUserSelectedProducts({...userSelectedProducts, [selectedUserProduct]: false})
        setUserData((prevUserData) => ({
          ...prevUserData,
          productRequirements: prevUserData.productRequirements.filter((requirement: string) => requirement !== deselectedUserProduct)
        }))
      }

      const handleProductRequirementsSelectToggle = () => {
        setIsProductRequirementsSelectOpened(!isProductRequirementsSelectOpened)
      }

      const handleClosingProductRequirementsSelect = () => {
        if (isProductRequirementsSelectOpened) {
          setIsProductRequirementsSelectOpened(false)
        }
      }

      // Function for form validation and submition
      const handleFormSubmition = () => {
        handleClosingProductRequirementsSelect()

        if (isUserDataCorrectlyFulfilled(userData, setUserDataErrors)) {
          setDisplayedFormContent('ThanksToTheUser')
        }
      }

    return {
        handleValueChangeInFormField,
        handleSelectingProductRequirements,
        handleDeselectingProductRequirements,
        handleProductRequirementsSelectToggle,
        handleClosingProductRequirementsSelect,
        handleFormSubmition
    }
}

export default useContentFormFunctions