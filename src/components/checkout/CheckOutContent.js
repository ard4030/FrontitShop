import React, { useContext, useEffect, useState } from 'react'
import styles from "./checkout.module.css"
import { CartContext } from '../../context/CartContext'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../../utils/functions';

const CheckOutContent = ({setLoading,setError,order}) => {
    const { cart } = useContext(CartContext);
    const [data,setData] = useState({
        name:"",
        mobile:"",
        address:""
    })
    const navigate = useNavigate();
    
    useEffect(() => {
      order && order.length>0 && setData(order[0])
    },[])
    
    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        const finall = await fetchData("/addOrder","POST",true,data)
        if(finall.success){
            toast.success(finall.message)
            navigate(`/result?orderId=${finall.orderId}&transId=${finall.transId}`)
        }else{
            setError(finall.message)
        }
        setLoading(false)
    }
    

  return (
    <div className={styles.checkout}>
        <form onSubmit={submitForm}>
            <div className={styles.item}>
                <label>Name : </label>
                <input
                name='name'
                onChange={handleChange}
                value={data.name}
                />
            </div>
            <div className={styles.item}>
                <label>Mobile : </label>
                <input
                name='mobile'
                onChange={handleChange}
                value={data.mobile}
                />
            </div>
            <div className={styles.item}>
                <label>Address : </label>
                <input
                name='address'
                onChange={handleChange}
                value={data.address}
                />
            </div>
            <div className={styles.dtItem}>
                Total Price ${cart.total} for {cart.cart.length} Item
            </div>
            <button className='btn'>Go To Pay</button>
        </form>
    </div>
  )
}

export default CheckOutContent