import React, { useState } from 'react'
import styles from "./allcomments.module.css"
import ReactStars from 'react-stars';
import { toast } from 'react-toastify';
import { fetchData } from '../../utils/functions';

const AllCommentsContent = ({data,getData,setLoading}) => {
    const [com,setCom] = useState({
        comment:"",
        status:"",
        id:"",
        rate:0,
    })
    const [open,setOpen] = useState(false);

    const handleOpen = (item) => {
        setCom(item)
        setOpen(true)
    }

    const closeModal = () =>{
        setCom({
            comment:"",
            status:"",
            id:"",
            rate:0
        })
        setOpen(false)
    }

    const updateComment = async () => {
        setLoading(true)
        const finall = await fetchData("/editComment","POST",true,com)
        if(finall.success){
            toast.success(finall.message)
            await getData()
        }else{
            toast.error(finall.message)
        }
        setLoading(false)
    }

  return (
    <div>
        <h2>AllComments</h2>
        <div>
            {data.map((item,index) =>
            <div key={index} className={styles.item}>
                <span className={styles.index}>{index+1} - </span>
                <p>{item.comment}</p>
                <span className={`${styles.status} ${item.status}`}>{item.status}</span>
                <div>
                    <button
                    onClick={() => handleOpen(item)}
                    className='btn'>Edit</button>
                    <button style={{marginLeft:"5px"}} className='btn delete'>Delete</button>
                </div>
            </div>
            )}
        </div>

        <div className={`${styles.modal} ${open?styles.dFlex:styles.dnone}`}>
            <div onClick={closeModal} className={styles.closeModal}></div>
            <div className={styles.contModal}>
                <textarea 
                value={com.comment}
                onChange={(e) => setCom({...com,comment:e.target.value})}
                className={styles.edCom}></textarea>
                <ReactStars
                value={com.rate}
                onChange={(e) => setCom({...com,rate:e})}
                count={5}
                size={24}
                />
                <select 
                onChange={(e) => setCom({...com,status:e.target.value})}
                value={com.status}>
                    <option value={"active"}>Active</option>
                    <option value={"pending"}>Pending</option>
                </select>
                <div style={{margin:"10px 0"}}>
                    <button onClick={updateComment} className='btn'>Save</button>
                    <button onClick={closeModal} style={{marginLeft:"5px"}} className='btn delete'>Cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllCommentsContent