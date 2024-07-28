import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchData } from "../utils/functions";

export const AuthContext = createContext();
export const AuthWrapper = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    const loginUser = async (userName,password) => {
        setLoading(true)
        const finall = await fetchData("/loginUserEmail","POST",false,{userName,password})
        if(finall.success){
            localStorage.setItem("token",finall.accessToken)
            setUser(finall.user)
            toast.success(finall.message)
        }else{
            setUser(null)
            toast.error(finall.message)
        }
        setLoading(false)
    }

    const isLogin = async () => {
        setLoading(true)
        const finall = await fetchData("/isLogin","GET",true)
        if(finall.success){
            setUser(finall.user)
        }else{
            setUser(null)
            setError(finall.message)
        }
        setLoading(false)
    }

    const logOut = async () => {
        localStorage.removeItem("token")
        setUser(null)
        // await isLogin()
    }

    useEffect(() => {
       isLogin()
    }, [])
    
    return(
        <AuthContext.Provider value={{
            loginUser,user,loading,error,setError,setLoading,isLogin,logOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}