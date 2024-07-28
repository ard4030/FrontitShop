import React from 'react'
import styles from "./comment.module.css"
import AddComment from './AddComment'
import ReactStars from 'react-stars'

const Comments = ({data,productId}) => {
    
  return (
    <div className={styles.comments}>
        <h2>Comments List</h2>
        {data.map((item,index) => 
        <div className={styles.item} key={index}>
            <header>
                <div>
                    <img src='/man.png' />
                    <span>{item.userDetails[0].firstName}&nbsp;{item.userDetails[0].lastName}</span>
                </div>
                <ReactStars
                count={5}
                value={item.rate}
                size={24}
                color2={'#ffd700'} />
            </header>
            <p>{item.comment}</p>
        </div>
        )}
        <AddComment productId={productId} />
    </div>
  )
}

export default Comments