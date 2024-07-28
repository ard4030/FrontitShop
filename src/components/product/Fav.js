import React, { useContext } from 'react'
import styles from "./fave.module.css"
import { AuthContext } from "../../context/AuthContext"
import { toast } from 'react-toastify';
import { fetchData } from '../../utils/functions';

const Fav = ({productId}) => {

    const { user , isLogin } = useContext(AuthContext);

    const favorits = async () => {
        const finall = await fetchData("/favorits","POST",true,{productId})
        if(finall.success){
            toast.success(finall.message)
            await isLogin()
        }else{
            toast.error(finall.message)
        }
    }

  return (
    <span 
    onClick={favorits}
    className={`${styles.fav} ${user && user.favorits.includes(productId)?styles.yes:styles.no}`}></span>
  )
}

export default Fav