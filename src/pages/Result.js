import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import {useSearchParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { fetchData } from '../utils/functions';
import { ORDER_STATE } from '../utils/constans';

const Result = () => {
    let [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data,setData] = useState(null)
    const { getCart } = useContext(CartContext)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const finall = await fetchData("/checkOrder","POST",true,{
                transId:searchParams.get("transId"),
                orderId:searchParams.get("orderId"),
                state:ORDER_STATE
            })
            if(finall.success){
                setData(finall)
                await getCart()
            }else{
                setError(finall.message)
            }
            setLoading(false)
        }
        getData()

    },[])
    
  return (
    <Layout loading={loading} error={error}>
        <div className='container'>
            {
                data?
                <>
                <div className={'res'}>
                    Payment Successful!<br />
                    Order Id is {data.orderId} <br/>
                    Trans Id is {data.transId}
                </div>
                </>:
                "NoRes"
            }
        </div>
    </Layout>
  )
}

export default Result