import React, { useContext, useEffect } from 'react'
import styles from "./panellayout.module.css"
import Header from '../global/header/Header'
import PageLoading from '../global/pageLoading/PageLoading'
import LeftNav from './LeftNav'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Footer from '../global/footer/Footer'

const PanelLayout = ({children,loading,error}) => {
  const { user , loading:authLoading } = useContext(AuthContext)
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!user && !authLoading) navigate('/')   
  }, [user,authLoading])
    
  
  return (
    <div className={styles.layout}>
        <Header />
        <div className={`container ${styles.pnl}`}>
            <LeftNav />
            <div className={styles.content}>
                {
                loading?<PageLoading />:error?
                <div className='container'><span className={styles.err}>{error}</span></div>
                :children
                }  
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default PanelLayout