import React from 'react'
import styles from "./slider.module.css"
import { Carousel } from 'antd';

const Slider = () => {
    // const contentStyle = {
    //     margin: 0,
    //     height: '160px',
    //     color: '#fff',
    //     lineHeight: '160px',
    //     textAlign: 'center',
    //     background: '#364d79',
    //   };
  return (
    <div>
      <Carousel >
        <div className={styles.item}>
          <img alt='bnr1' src='/bnr3.png' />
        </div>
        <div className={styles.item}>
          <img alt='bnr2' src='/bnr4.png' />
        </div>
      </Carousel>
    </div>
  )
}

export default Slider