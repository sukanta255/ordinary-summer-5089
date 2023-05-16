import React from 'react'
import styles from "./Admin_Home.module.css"
import Admin_Sidebar from './Admin_Sidebar'
const Admin_Home = () => {
  return (
    <div class={styles.adminmain}>
        
        <div className={styles.sidebar}>
           <Admin_Sidebar/>
        </div>
        <div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Admin_Home