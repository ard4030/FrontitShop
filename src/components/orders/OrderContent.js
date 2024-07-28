import React from 'react'
import styles from "./ordercontent.module.css"

const OrderContent = ({data}) => {

  return (
    <div>
        <h2>My Orders</h2>
        <div className={styles.orders}>
            {data.map((item,index) => 
            <div key={index} className={styles.order}>
                <span className={styles.index}>{index+1} - </span>
                <div className={styles.products}>
                    {JSON.parse(item.cartDetails).cart.map((item1,index1) =>
                    <span key={index1} className={styles.prName}>{item1.title}</span>
                    )}
                </div>
                <span className={styles.price}>${item.totalPrice}</span>
                <span className={item.status === "pending"?styles.pending:styles.success}>{item.status}</span>
                <span className={styles.orderId}>{item.orderId}</span>
            </div>
            )}
        </div>
    </div>
  )
}

export default OrderContent