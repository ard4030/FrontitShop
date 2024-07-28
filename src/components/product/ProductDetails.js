import React, { useContext } from 'react'
import styles from "./productdetails.module.css"
import { CartContext } from '../../context/CartContext'
import { isCart } from '../../utils/functions'
import { BASE_URL } from '../../utils/constans'
import Fav from './Fav'

const ProductDetails = ({data}) => {
  const { addToCart , cart , increase , decrease } = useContext(CartContext)
  return (
    <div>
      <div className={styles.product}>
          <div className={styles.left}>
              <img alt='product' src={`${BASE_URL}/${data.images[0]}`} />
          </div>
          <div className={styles.right}>
              <h1>{data.title}</h1>
              <div className={styles.details}>
                <span className={styles.cat}>{data.category}</span>
                <Fav productId={data._id} />
              </div>
              <p>{data.description}</p>
              <span className={styles.price}>${data.price}</span>
              {
                isCart(data._id,cart.cart)?
                <div>
                  <button className='btn' onClick={() => increase(data._id)}>+</button>
                  <span className={styles.cnt}>{isCart(data._id,cart.cart).count}</span>
                  <button className='btn' onClick={() => decrease(data._id)}>-</button>
                </div>:
                <button 
              onClick={() => addToCart(data._id)}
              className={styles.btnAdd}>Add To Cart</button>
              }
              
          </div>
      </div>       
    </div>
  )
}

export default ProductDetails