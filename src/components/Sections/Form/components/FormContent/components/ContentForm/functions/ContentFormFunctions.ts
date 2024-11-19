import { useCallback, useMemo } from "react";

import useFormContext from "../../../../../../../../hooks/useFormContext";

import { isUserDataCorrectlyFulfilled } from "../../validation/validateFormUserData";

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
  setIsProductRequirementsSelectOpened: (isOpened: boolean) => void;
}

const useContentFormFunctions = ({ userData, setUserData, userDataErrors, setUserDataErrors, userSelectedProducts, setUserSelectedProducts, isProductRequirementsSelectOpened, setIsProductRequirementsSelectOpened }: ContentFormFunctionsProps) => {
  const { setDisplayedFormContent } = useFormContext();

  const handleValueChangeInFormField = useCallback((userDataName: string, newUserDataValue: string, userDataErrorName: string, inputFieldID: string) => {
      setUserData({ ...userData, [userDataName]: newUserDataValue });
      setUserDataErrors({ ...userDataErrors, [userDataErrorName]: "", formError: "" });

      const inputField = document.getElementById(inputFieldID);
      if (inputField) {
        inputField.style.borderColor = "#131313";
      }
  }, [userData, userDataErrors, setUserData, setUserDataErrors]);


  const handleSelectingProductRequirements = useCallback((selectedUserProduct: string, newSelectedUserProduct: string) => {
      setUserSelectedProducts({ ...userSelectedProducts, [selectedUserProduct]: true });
      setUserData({ ...userData, productRequirements: [ ...userData.productRequirements, newSelectedUserProduct ] });
      setUserDataErrors({ ...userDataErrors, formError: "" });
  }, [ userData, userDataErrors, userSelectedProducts, setUserSelectedProducts, setUserData, setUserDataErrors ]);


  const handleDeselectingProductRequirements = useCallback((selectedUserProduct: string, deselectedUserProduct: string) => {
      setUserSelectedProducts({ ...userSelectedProducts, [selectedUserProduct]: false });
      setUserData((prevUserData) => ({ ...prevUserData, productRequirements: prevUserData.productRequirements.filter((requirement) => requirement !== deselectedUserProduct)}));
  }, [userSelectedProducts, setUserSelectedProducts, setUserData]);


  const handleProductRequirementsSelectToggle = useCallback(() => {
      setIsProductRequirementsSelectOpened(!isProductRequirementsSelectOpened);
  }, [isProductRequirementsSelectOpened, setIsProductRequirementsSelectOpened]);


  const handleClosingProductRequirementsSelect = useCallback(() => {
      if (isProductRequirementsSelectOpened) {
        setIsProductRequirementsSelectOpened(false);
      }
  }, [isProductRequirementsSelectOpened, setIsProductRequirementsSelectOpened]);


  const handleFormSubmition = useCallback(() => {
      handleClosingProductRequirementsSelect();

      if (isUserDataCorrectlyFulfilled(userData, setUserDataErrors)) {
        setDisplayedFormContent("ThanksToTheUser");
      }
  }, [ userData, setUserDataErrors, handleClosingProductRequirementsSelect, setDisplayedFormContent ]);

  return useMemo(
    () => ({
      handleValueChangeInFormField,
      handleSelectingProductRequirements,
      handleDeselectingProductRequirements,
      handleProductRequirementsSelectToggle,
      handleClosingProductRequirementsSelect,
      handleFormSubmition,
    }), [ handleValueChangeInFormField, handleSelectingProductRequirements, handleDeselectingProductRequirements, handleProductRequirementsSelectToggle, handleClosingProductRequirementsSelect, handleFormSubmition, ]
  );
};

export default useContentFormFunctions;