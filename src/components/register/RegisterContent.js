import React, { useState } from 'react'
import styles from "./register.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { fetchData } from '../../utils/functions'

const RegisterContent = () => {
    const [data, setData] = useState({
        userName:"",
        password:"",
        repeatPassword:"",
        firstName:"",
        lastName:""
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const submit = async (e) => {
        e.preventDefault();
        if(data.password !== data.repeatPassword){
            toast.error("Password not match!")
            return
        }

        if(!data.password || !data.repeatPassword || !data.userName){
            toast.error("Username or password must not be empty!")
            return
        }

        const finall = await fetchData("/register","POST",false,data)
        if(finall.success){
            toast.success(finall.message)
            navigate('/login')
        }else{
            toast.error(finall.message)
        }
    }


  return (
    <div className={styles.registerContent}>
        <div className={styles.content}>
            <h1 className={styles.title}>Register</h1>
            <form onSubmit={submit}>
                <div className={styles.item}>
                    <label>First Name</label>
                    <input 
                    onChange={handleChange}
                    name={"firstName"} />
                </div>
                <div className={styles.item}>
                    <label>Last Name</label>
                    <input 
                    onChange={handleChange}
                    name={"lastName"} />
                </div>
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

                <div className={styles.item}>
                    <label>Reapeat Password</label>
                    <input 
                    onChange={handleChange}
                    type='password'
                    name={"repeatPassword"} />
                </div>

                <div className={styles.foot}>
                    <button className={`btn`}>Register</button>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterContent