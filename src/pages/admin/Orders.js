import React, { useEffect, useState } from 'react'
import PanelLayout from '../../components/layout/PanelLayout'
import OrderContent from '../../components/orders/OrderContent'
import { fetchData } from '../../utils/functions'

const Orders = () => {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const finall = await fetchData("/getOrdersByUser","GET",true)
      if(finall.success){
        setData(finall.data)
      }else{
        setError(finall.message)
      }
      setLoading(false)
    }
    getData()
  }, [])
  

  return (
    <PanelLayout loading={loading} error={error}>
        <OrderContent data={data} />
    </PanelLayout>
  )
}

export default Orders