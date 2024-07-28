import React, { useContext } from 'react'
import styles from "./header.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import { CartContext } from '../../../context/CartContext'

const Header = () => {
    const { user } = useContext(AuthContext)
    const { cart } = useContext(CartContext)
    const navigate = useNavigate()
  return (
    <div id={styles.header}>
        <div className={`container ${styles.headContent}`}>
            <div className={styles.left}>
                <div id={styles.logo}>
                    <img src='/store.png' alt='logo' />
                </div>
                <div id={styles.menu}>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/product'>About Us</Link></li>
                        <li><Link to=''>Blog</Link></li>
                    </ul>
                </div>
            </div>
            <div id={styles.login}>
                {
                    user?
                    <Link to={"/admin/dashboard/"} className={styles.pnl}>{user.firstName}</Link>
                    :
                    <>
                        <Link to='/register'>Register</Link>
                        |
                        <Link to="/login">Login</Link>
                    </>
                }
                <span onClick={() => navigate('/cart')} className={styles.basket}>
                    <span className={styles.badge}>{cart.cart.length}</span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Header