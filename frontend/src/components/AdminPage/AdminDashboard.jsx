import React from 'react'
import AddData from './AddData'
import AdminSidebar from './AdminSidebar'

const AdminDashboard = () => {
  return (
    <div>
    
        
      <AdminSidebar/>
       <AddData/>
       <input style={{fontSize:"20px"}} type={"text"} placeholder={"name is here"}/>

    </div>
  )
}

export default AdminDashboard