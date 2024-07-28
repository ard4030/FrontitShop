import React from 'react'
import { LineWave } from 'react-loader-spinner'
import styles from "./pageloading.module.css"
const PageLoading = () => {
  return (
    <div className={styles.pg}>
        <LineWave
        visible={true}
        height="100"
        width="100"
        color="#604cc3"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
        />
    </div>
  )
}

export default PageLoading