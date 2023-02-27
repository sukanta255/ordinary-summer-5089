import { Box } from '@chakra-ui/react'
import React from 'react'
import AdminSidebar from './AdminSidebar'
import PieChart from './PieChart'

const AdminDashboard = () => {
  return (
    <div style={{maxWidth:"100%"}}>
    
    <Box display={"flex"}>
        <div>
            <AdminSidebar/>
        </div>
        <div> <PieChart/></div>
     </Box>
    

    </div>
  )
}

export default AdminDashboard