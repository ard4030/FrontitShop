import React from 'react'
import styles from "./cardlist.module.css"
import Card from './Card'

const CardList = ({data=[]}) => {
  return (
    <div className={`container ${styles.cardList}`}>
        {
            data.map((item,index) => 
            <Card data={item} key={index} />
            )
        }
    </div>
  )
}

export default CardList