import React, { useContext } from 'react'
import Layout from '../components/layout/Layout'
import RegisterContent from '../components/register/RegisterContent'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    if(user) navigate("/home")
  return (
    <Layout>
        <div className={`container `}>
            <RegisterContent />
        </div>
    </Layout>
  )
}

export default Register