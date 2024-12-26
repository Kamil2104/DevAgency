import { useCallback, useMemo } from "react";

import useFormContext from "../../../../../../../../hooks/useFormContext";
import useIsMobileView from "../../../../../../../../hooks/useIsMobileView";

import { isUserDataCorrectlyFulfilled } from "../../validation/validateFormUserData";

import { UserData } from "../../hooks/useFormUserData";
import { UserDataErrors } from "../../hooks/useFormUserDataErrors";
import { UserDataSelectedProducts } from "../../hooks/useFormUserSelectedProducts";

interface ContentFormFunctionsProps {
  userData: UserData,
  setUserData: React.Dispatch<React.SetStateAction<UserData>>,
  userDataErrors: UserDataErrors,
  setUserDataErrors: React.Dispatch<React.SetStateAction<UserDataErrors>>,
  setSelectedCountryCode: (code: string) => void,
  userSelectedProducts: UserDataSelectedProducts,
  setUserSelectedProducts: React.Dispatch<React.SetStateAction<UserDataSelectedProducts>>,
  isProductRequirementsSelectOpened: boolean,
  setIsProductRequirementsSelectOpened: (isOpened: boolean) => void;
}

const useContentFormFunctions = ({ userData, setUserData, userDataErrors, setUserDataErrors, setSelectedCountryCode,  userSelectedProducts, setUserSelectedProducts, isProductRequirementsSelectOpened, setIsProductRequirementsSelectOpened }: ContentFormFunctionsProps) => {
  const { setDisplayedFormContent } = useFormContext();
  const { windowWidth } = useIsMobileView()

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


  const handleSelectingRegion = useCallback((code: string) => {
    setSelectedCountryCode(code.toUpperCase())
    setUserData({ ...userData, phoneNumberRegion: code });
    setUserDataErrors({ ...userDataErrors, phoneNumberRegionError: "" });

    const regionSelectorButton = document.getElementById('rfs-btn')
    if (regionSelectorButton) {
      regionSelectorButton.style.borderColor = '#131313'
    }
  }, [setSelectedCountryCode, userData, setUserData, userDataErrors, setUserDataErrors])

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

      if (isUserDataCorrectlyFulfilled(windowWidth, userData, setUserDataErrors)) {
        setDisplayedFormContent("ThanksToTheUser");
      }
  }, [ windowWidth, userData, setUserDataErrors, handleClosingProductRequirementsSelect, setDisplayedFormContent ]);

  return useMemo(
    () => ({
      handleValueChangeInFormField,
      handleSelectingProductRequirements,
      handleDeselectingProductRequirements,
      handleSelectingRegion,
      handleProductRequirementsSelectToggle,
      handleClosingProductRequirementsSelect,
      handleFormSubmition,
    }), [ handleValueChangeInFormField, handleSelectingRegion, handleSelectingProductRequirements, handleDeselectingProductRequirements, handleProductRequirementsSelectToggle, handleClosingProductRequirementsSelect, handleFormSubmition, ]
  );
};

export default useContentFormFunctions;