import React, { useContext, useState } from 'react'
import styles from "./addcomment.module.css"
import ReactStars from 'react-stars'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { fetchData } from '../../utils/functions'

const AddComment = ({productId}) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const [data,setData] = useState({
        comment:"",
        rate:2.5,
        productId
    })
    const [loading,setLoading] = useState(false)

    const ratingChanged = (newRating) => {
        setData({...data,rate:newRating})
    }

    const saveComment = async () => {
        if(!user){
            navigate('/login')
        }else{
            setLoading(true)
            const finall = await fetchData("/addComment","POST",true,data)
            if(finall.success){
                toast.success(finall.message)
                setData({
                    comment:"",
                    rate:2.5,
                    productId
                })
            }else{
                toast.error(finall.message)
            }
            setLoading(false)
        }
    }


  return (
    <div className={styles.addComment}>
        <div className={styles.header}>
            <span>Add Your Comment</span>
            <ReactStars
            count={5}
            value={data.rate}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'} />
        </div>
        <textarea 
        value={data.comment}
        onChange={(e) => setData({...data,comment:e.target.value})}
        className={styles.comment}></textarea>
        <button
        onClick={saveComment}
        className='btn'>{loading?"Loading ...":"Add Comment"}</button>
    </div>
  )
}

export default AddComment