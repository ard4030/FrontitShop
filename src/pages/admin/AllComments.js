import React, { useEffect, useState } from 'react'
import PanelLayout from '../../components/layout/PanelLayout'
import AllCommentsContent from '../../components/allComments/AllCommentsContent'
import { fetchData } from '../../utils/functions';

const AllComments = () => {
    const [comments,setComments] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    const getData = async () => {
        setLoading(true)
        const finall = await fetchData("/getAllComments","GET",true)
        if(finall.success){
            setComments(finall.comments)
        }else{  
            setError(finall.message)
        }
        setLoading(false)
    }

    useEffect(() => {
      getData()
    }, [])
    
  return (
    <PanelLayout loading={loading} error={error}>
        <AllCommentsContent getData={getData} setLoading={setLoading} data={comments} />
    </PanelLayout>
  )
}

export default AllComments