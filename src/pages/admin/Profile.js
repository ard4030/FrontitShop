import React, { useEffect, useState } from 'react'
import PanelLayout from '../../components/layout/PanelLayout'
import ProfileContent from '../../components/profile/ProfileContent'
import { fetchData } from '../../utils/functions'

const Profile = () => {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      setLoading(true)
      const finall = await fetchData("/isLogin","GET",true)
      if(finall.success){
        setUser(finall.user)
    }else{
        setUser(null)
        setError(finall.message)
    }
      setLoading(false)
    }
    getUser()
  }, [])
  
  return (
    <PanelLayout loading={loading} error={error}>
        <ProfileContent userData={user} />
    </PanelLayout>
  )
}

export default Profile