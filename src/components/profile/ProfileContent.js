import React, { useContext, useState } from 'react'
import styles from "./profilecontent.module.css"
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { fetchData } from '../../utils/functions';

const ProfileContent = ({userData}) => {
    
    const [data,setData] = useState(userData);
    const { setLoading } = useContext(AuthContext)

    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const finall = await fetchData("/updateProfile","POST",true,data)
        if(finall.success){
            toast.success(finall.message)
        }else{
            toast.error(finall.message)
        }
        setLoading(false)
    }

  return (
    <div>
        <h2>My Profile</h2>
        <form onSubmit={handleSubmit} className={styles.items}>
            <div className={styles.item}>
                <label>First Name</label>
                <input 
                onChange={handleChange}
                name='firstName'
                value={data.firstName} />
            </div>

            <div className={styles.item}>
                <label>Last Name</label>
                <input
                onChange={handleChange}
                name='lastName'
                value={data.lastName}
                />
            </div>

            <div className={styles.item}>
                <label>User Name</label>
                <input
                onChange={handleChange}
                name='userName'
                value={data.userName}
                />
            </div>

            <div className={styles.item}>
                <label>Email</label>
                <input
                onChange={handleChange}
                name='email'
                value={data.email}
                />
            </div>

            <div className={styles.item}>
                <label>Mobile</label>
                <input
                onChange={handleChange}
                name='mobile'
                value={data.mobile}
                />
            </div>

            <div className={styles.item}>
                <label>Roles</label>
                <div>
                    {data.Roles.map((item,index) => 
                    <span key={index} className={styles.roles}>{item}</span>
                    )}
                </div>
            </div>
        <button type='submit' className='btn larg'>Save</button>
        </form>
    </div>
  )
}

export default ProfileContent