import React from 'react'
import styles from "./layout.module.css"
import Header from '../global/header/Header'
import PageLoading from '../global/pageLoading/PageLoading'
import Footer from '../global/footer/Footer'

const Layout = ({children,loading,error}) => {
  
  return (
    <div className={styles.layout}>
        <Header />
        <div>
          {
            loading?<PageLoading />:error?
            <div className='container'><span className={styles.err}>{error}</span></div>
            :children
          }  
        </div>
        <Footer />
    </div>
  )
}

export default Layout