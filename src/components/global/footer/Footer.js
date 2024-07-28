import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div id={styles.footer}>
        <div className={`container ${styles.ftrContent}`}>
            <p>This Website Example For React Course </p>
            <p>Frontit.ir</p>
        </div>
    </div>
  )
}

export default Footer