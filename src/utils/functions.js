import { BASE_URL } from "./constans"

export const isCart = (productId,cart) => {
    const isItem = cart.find(item => item.productId === productId)
    return isItem
}

export const fetchData = async (api,method="GET",token,params) => {
    try {
        if(method==="GET"){
            const res = await fetch(`${BASE_URL}${api}`,{
                headers:{
                    "token":token?localStorage.getItem("token"):null
                }
            })
            const finall = await res.json();
            return finall
        }else{
            const res = await fetch(`${BASE_URL}${api}`,{
                method:"POST",
                headers:{
                    "token":token?localStorage.getItem("token"):null,
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(params)
            })
            const finall = await res.json();
            return finall
        }
    } catch (error) {
        return{
            success:false,
            message:error.message
        }
    }

}