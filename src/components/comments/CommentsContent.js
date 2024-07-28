import React from 'react'
import styles from "./commentscontent.module.css"
import { Link } from 'react-router-dom'

const CommentsContent = ({data}) => {

  return (
    <div>
        <h2>My Comments</h2>
        <div>
            {data.map((item,index) => 
            <div className={styles.item} key={index}>
                <span className={styles.index}>{index+1} - </span>
                <p>{item.comment}</p>
                <span style={{marginRight:"5px"}} className={`status ${item.status}`}>{item.status}</span>
                <div className={styles.star}>
                    <img alt='' src='/start1.png' />
                    {item.rate}
                </div>
                <Link className={`btn ${styles.btn}`} to={`/product/${item.finall[0].slug}`}>View Product</Link>
            </div>
            )}
        </div>
    </div>
  )
}

export default CommentsContent