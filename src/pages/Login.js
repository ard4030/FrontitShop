import React, { useContext, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import LoginContent from '../components/login/LoginContent'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    
    useEffect(() => {
      if(user) navigate("/")   
    }, [user])
      

  return (
    <Layout>
        <div className='container'>
            <LoginContent />
        </div>
    </Layout>
  )
}

export default Login