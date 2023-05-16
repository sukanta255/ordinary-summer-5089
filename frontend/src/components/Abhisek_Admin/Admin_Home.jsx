import React from 'react'
import styles from "./Admin_Home.module.css"
import Admin_Sidebar from './Admin_Sidebar'
import { Box } from '@chakra-ui/react'
const Admin_Home = () => {
  return (
    <Box className={styles.adminmain} display={["flex"]} flexDirection={["column","column","row"]}>
        
        <Box w={["100%","100%","20%"]}bg={"tomato"} h={["70px","70px","400px"]} >
           <Admin_Sidebar/>
        </Box>
        <Box w={["100%","100%","80%"]} h={"450px"} bg={"pink"}>
            <div></div>
            <div></div>
        </Box>
    </Box>
  )
}

export default Admin_Home