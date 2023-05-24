import Chart from "react-apexcharts";
import styles from "./PieChart.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { getData } from '../../API/requests';

// https://koovsbackend.onrender.com/adddata

const PieChart = () => {
  const [data, setData] = useState([]);
  const [length, setLength] = useState("");

  const getData = async () => {
    try {
      return await axios.get("https://enchanting-gold-tie.cyclic.app/adddata", {
        headers: {
          Authorization: localStorage.getItem("authToken"),
        },
      });
    } catch (err) {
      console.log("err: ", err);
    }
  };

  const fetchAndUpdatdata = async () => {
    let value = await getData();
    setData(value);
    console.log(value);
    setLength(value.data.length);
  };

  useEffect(() => {
    fetchAndUpdatdata();
  }, []);
  console.log(length);

  return (
    <div style={{ direction: "flex", flexDirection: "column" }}>
      <div className={styles.left}>
        <h1 className={styles.count}>{`Total Count:${length}`}</h1>
      </div>
      <div>
        <Chart
          type="pie"
          width={1349}
          height={550}
          series={[230, 33, 51, 54, 65]}
          options={{
            title: { text: "Admin Data" },
            noData: { text: "Empty Data" },

            labels: ["Products", "Users", "cart", "request", "Wishlist"],
          }}
        ></Chart>
      </div>
      {/* <Doughnut data={data} /> */}
    </div>
  );
};

export default PieChart;
