import React, { useContext } from 'react'
import PanelLayout from '../../components/layout/PanelLayout'
import { AuthContext } from '../../context/AuthContext'

const Dashboard = () => {
    const { user } = useContext(AuthContext)
  return (
    <PanelLayout>
            Hi {user?.firstName}&nbsp;{user?.lastName} 👋  
    </PanelLayout>
  )
}

export default Dashboard