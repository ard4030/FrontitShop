import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import Slider from '../components/home/carousel/Slider'
import CardList from '../components/home/CardList/CardList';
import { fetchData } from '../utils/functions';

const Home = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const finall = await fetchData("/getProducts","GET",false);
      if(finall.success){
        setData(finall.products)
      }else{
        setError(finall.message)
      }
        setLoading(false)
    }

    getData()
  }, [])
  

  return (
    <Layout loading={loading} error={error}>
        <div id="page">
            <Slider />
            <CardList data={data} />
        </div>
    </Layout>
  )
}

export default Home