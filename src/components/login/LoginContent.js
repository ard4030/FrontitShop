import React, { useContext, useState } from 'react'
import styles from "./logincontent.module.css"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const LoginContent = () => {
    const [data, setData] = useState({
        userName:"",
        password:"",
    })
    const { loginUser } = useContext(AuthContext)

    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const submit = async (e) => {
        e.preventDefault();
        await loginUser(data.userName,data.password)
    }
  return (
    <div className={styles.registerContent}>
        <div className={styles.content}>
            <h1 className={styles.title}>Login</h1>
            <form onSubmit={submit}>
                <div className={styles.item}>
                    <label>User Name</label>
                    <input 
                    onChange={handleChange}
                    name={"userName"} />
                </div>
                <div className={styles.item}>
                    <label>Password</label>
                    <input 
                    onChange={handleChange}
                    type='password'
                    name={"password"} />
                </div>


                <div className={styles.foot}>
                    <button className={`btn`}>Login</button>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginContent