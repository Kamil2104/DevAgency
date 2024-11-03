import { useState } from "react"

export interface UserDataSelectedProducts {
    websiteDevelopment: boolean,
    websiteDesign: boolean,
    AIandLLMapplications: boolean,
    appImplementation: boolean,
    other: boolean
}

const useFormUserSelectedProducts = () => {
    const [userSelectedProducts, setUserSelectedProducts] = useState<UserDataSelectedProducts>({
        websiteDevelopment: false,
        websiteDesign: false,
        AIandLLMapplications: false,
        appImplementation: false,
        other: false
    });

    return {
        userSelectedProducts,
        setUserSelectedProducts,
    }
}

export default useFormUserSelectedProducts;