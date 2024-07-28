import React, { useContext } from 'react'
import styles from "./leftnav.module.css"
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const LeftNav = () => {
    const { pathname } = useLocation()
    const { logOut , user } = useContext(AuthContext)
    
  return (
    <div className={styles.leftNav}>
        <img className={styles.prof} alt='' src='/man.png' />
        <ul className={styles.list}>
            <li className={pathname === "/admin/dashboard/"?styles.active:""}><Link to={"/admin/dashboard/"}>Dashboard</Link></li>
            <li className={pathname === "/admin/profile/"?styles.active:""}><Link to={"/admin/profile/"}>Profile</Link></li>
            <li className={pathname === "/admin/orders/"?styles.active:""}><Link to={"/admin/orders/"}>Orders</Link></li>
            <li className={pathname === "/admin/comments/"?styles.active:""}><Link to={"/admin/comments/"}>Comments</Link></li>
            {
              user?.Roles?.includes("SUPERADMIN") &&
              <li className={pathname === "/admin/allcomments/"?styles.active:""}><Link to={"/admin/allcomments/"}>All Comments</Link></li>
            }
            <li onClick={logOut}>Log out</li>
        </ul>
    </div>
  )
}

export default LeftNav