import Chart from 'react-apexcharts'

import React, { useEffect,useState } from 'react'
import axios from 'axios';
// import { getData } from '../../API/requests';


// http://localhost:4100/adddata

const PieChart = () => {

     const getData = async () => {
        try {
          return await axios.get("https://enchanting-gold-tie.cyclic.app/adddata");
        } catch (err) {
          console.log("err: ", err);
        }
      };
    const [data,setData] = useState([]);

    const fetchAndUpdatdata= async()=>{
     let value=await getData()
     setData(value)
    
    }
    

    useEffect(()=>{
       fetchAndUpdatdata();
       
    },[]);
    console.log(data)

  return (
    <div>
        <h1>hii</h1>
        <Chart
        
        type="pie"
        width={1349}
        height={550}
        series={[230,33,51,54,65]}
        
        options={{

            title:{ text:"Admin Data"

            },
            noData:{text:"Empty Data"},
            
            labels:["Products","Users","cart","request","Wishlist"]
        }}

        >
        </Chart>

        
     {/* <Doughnut data={data} /> */}
    </div>
  )
}

export default PieChart