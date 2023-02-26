import { Box } from '@chakra-ui/react'
import React from 'react'
import AdminSidebar from './AdminSidebar'
import PieChart from './PieChart'

const AdminDashboard = () => {
  return (
    <div>
    
    <Box display={"flex"}>
        <Box w={"20%"}>
            <AdminSidebar/>
        </Box>
        {/* <Box w={"100%"}> <PieChart/></Box> */}
     </Box>
    

    </div>
  )
}

export default AdminDashboard