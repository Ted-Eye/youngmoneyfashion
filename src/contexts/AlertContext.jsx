import { createContext, useContext, useState } from "react";

const AlertContext = createContext()

export const AlertProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const doneFetching = ()=> {
        setLoading(false)
    }
    const fetching = () => {
        setLoading(true)
    }
    const value = {loading, fetching, doneFetching}

    return <AlertContext.Provider value={value}>
            {children}
    </AlertContext.Provider>
}
export const useAlert = () => {
    return useContext(AlertContext)
}