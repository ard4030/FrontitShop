import React, { useContext, useEffect} from 'react'
import Layout from '../components/layout/Layout'
import CartContent from '../components/cart/CartContent'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const { error , loading , cart , getCart } = useContext(CartContext)
    useEffect(() => {
      getCart()
    }, [])
    
  return (
    <Layout loading={loading} error={error}>
        <div className='container'>
          <CartContent data={cart} />
        </div>
    </Layout>
  )
}

export default Cart