import React, { useEffect, useState } from 'react'
import PanelLayout from '../../components/layout/PanelLayout'
import CommentsContent from '../../components/comments/CommentsContent'
import { fetchData } from '../../utils/functions';

const Comments = () => {
    const [comments,setComments] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const finall = await fetchData("/getMyComments","GET",true)
            if(finall.success){
              setComments(finall.data)
            }else{
              setError(finall.message)
            }
            setLoading(false)
          }
          getData()
    }, [])
    

  return (
    <PanelLayout loading={loading} error={error}>
        <CommentsContent data={comments} />
    </PanelLayout>
  )
}

export default Comments