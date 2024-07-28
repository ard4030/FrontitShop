import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";
import { fetchData } from "../utils/functions";

export const CartContext = createContext();
export const CartWrapper = ({children}) => {
    const [cart,setCart] = useState({
        cart:[],
        total:0
    });
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null)
    const { user } = useContext(AuthContext)

    const getCart = async () => {
        setLoading(true)
        const finall = await fetchData("/getCart","GET",true)
        if(finall.success){
            setCart({
                cart:finall.cart,
                total:finall.totalPrice
            })
        }else{
            setCart({
                cart:[],
                total:0
            })
        }
        setLoading(false)
    }

    const addToCart = async (productId) => {
        setLoading(true)
        const finall = await fetchData("/addToCart","POST",true,{productId})
        if(finall.success){
            toast.success(finall.message)
            getCart()
        }else{
            toast.error(finall.message)
        }
        setLoading(false)
    }

    const increase = async (productId) => {
        setLoading(true)
        const finall = await fetchData("/increaseItemCart","POST",true,{productId})
        if(finall.success){
            await getCart()
        }else{
            toast.error(finall.message)
        }
        setLoading(false)
    }

    const decrease = async (productId) => {
        setLoading(true)
        const finall = await fetchData("/decreaseItemCart","POST",true,{productId})
        if(finall.success){
            await getCart()
        }else{
            toast.error(finall.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        getCart()
    }, [user])
    
    return(
        <CartContext.Provider value={{cart,loading,addToCart,increase,decrease,error,setError,getCart}}>
            {children}
        </CartContext.Provider>
    )
}