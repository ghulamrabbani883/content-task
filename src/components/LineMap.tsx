import React, { useState } from "react";
import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

const LineMap = () => {
  const [cases, setCases] = useState<number[]>([]);
  const [deaths, setDeaths] = useState<number[]>([]);
  const [recovered, setRecovered] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Cases",
        fill: true,
        borderColor: "#894211",
        borderWidth: 2,
        data: cases,
      },
      {
        label: "Deaths",
        fill: true,
        borderColor: "#657373",
        borderWidth: 2,
        data: deaths,
      },
      {
        label: "Recovered",
        fill: true,
        borderColor: "#089374",
        borderWidth: 2,
        data: recovered,
      },
    ],
    options: {
        responsive: false,
        plugins: {
           title: {
              display: true,
              text: 'Web Application Technologies',
              color: '#F9BD5A',
              position: 'right',
              align: 'center',
              font: {
                 weight: 'bold'
              },
              padding: 8,
              fullSize: true,
           }
        }
     },
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    const casesData: number[] = Object.values(data.cases);
    const recoveredData: number[] = Object.values(data.recovered);
    const deathData: number[] = Object.values(data.deaths);
    const labelsData: string[] = Object.keys(data.cases);
    
    setCases(casesData);
    setDeaths(deathData);
    setRecovered(recoveredData);
    setLabels(labelsData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-[100%] ls:w-[90%] lg:w-[80%] flex justify-center items-center">
      <Line data={data}  />
    </div>
  );
};

export default LineMap;
