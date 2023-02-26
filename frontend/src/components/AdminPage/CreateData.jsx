import { Box } from '@chakra-ui/react'
import React from 'react'
import AddData from './AddData'
import AdminSidebar from './AdminSidebar'
import { SidebarContent } from './SidebarContent'

const CreateData = () => {
  return (
    <div>
     <Box display={"flex"}>
        <Box w={"20%"}>
            <AdminSidebar/>
        </Box>
        <Box w={"100%"}> <AddData/></Box>
     </Box>
    </div>
  )
}

export default CreateData





