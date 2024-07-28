import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import CheckOutContent from '../components/checkout/CheckOutContent'
import { fetchData } from '../utils/functions'

const CheckOut = () => {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const [data,setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const finall = await fetchData("/getSingleOrderById","GET",true)
            if(finall.success){
                if(finall.data) setData(finall.data)
            }else{
                setError(finall.message)
            }
            setLoading(false)
        }

        getData()
    }, [])
  return (
    <Layout loading={loading} error={error}>
        <div className='container'>
            <CheckOutContent order={data} setLoading={setLoading} setError={setError} />
        </div>
    </Layout>
  )
}

export default CheckOut