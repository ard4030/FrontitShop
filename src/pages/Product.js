import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/product/ProductDetails';
import Comments from '../components/product/Comments';
import { fetchData } from '../utils/functions';

const Product = () => {
  let { slug } = useParams();
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
      const getData = async () => {
        setLoading(true)
        const finall = await fetchData("/getSingleProduct","POST",false,{slug:slug})
        if(finall.success){
          setData({
            product:finall.product,
            comments:finall.comments
          })
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
        {data && <ProductDetails data={data.product} />}
        {data && <Comments data={data.comments} productId={data.product._id} />}
      </div>
    </Layout>
  )
}

export default Product