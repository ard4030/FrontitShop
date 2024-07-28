import React from 'react'
import styles from "./card.module.css"
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../../utils/constans'

const Card = ({data}) => {
  return (
    <div className={styles.card}>
        <img alt="" src={`${BASE_URL}/${data.images[0]}`} />
        <h3 className={styles.title}>{data.title}</h3>
        <div className={styles.footerCard}>
            <span>${data.price}</span>
            <Link to={`/product/${data.slug}`}>View</Link>
        </div>
    </div>
  )
}

export default Card