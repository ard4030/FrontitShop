import React, { useContext } from 'react'
import styles from "./cartcontent.module.css"
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../utils/constans'

const CartContent = ({data}) => {
    const { increase , decrease } = useContext(CartContext)
    const navigate = useNavigate()
  return (
    <div>
        <table className={styles.tbl}>
            <thead>
                <tr>
                    <td>Pic</td>
                    <td>Product Name</td>
                    <td>Count</td>
                    <td>Price</td>
                    <td>Total Price</td>
                    <td>Action</td>
                </tr>
            </thead>

            <tbody>
                {data.cart.map((item,index)=>
                <tr key={index}>
                    <td><img alt={item.title} className={styles.pic} src={`${BASE_URL}/${item.image[0]}`} /></td>
                    <td>{item.title}</td>
                    <td>{item.count}</td>
                    <td>${item.price}</td>
                    <td>${item.totalItemPrice}</td>
                    <td>
                        <div>
                            <button onClick={() => increase(item.productId)} className='btn'>+</button>
                            <span className={styles.count}>{item.count}</span>
                            <button onClick={() => decrease(item.productId)} className='btn'>-</button>
                        </div>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
        <div className={styles.foot}>
         <div>
            <span>Total Finall Price  : </span>
            <span>${data.total}</span>
         </div>   
         <button
         onClick={() => navigate('/checkout')}
         className='btn'>Go to Checkout</button>
        </div>
    </div>
  )
}

export default CartContent