import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Revenue() {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Sales",
        data: [
          12000, 19000, 15000, 18000, 22000, 20000, 25000, 18000, 20000, 28000,
          25000, 30000,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Total Revenue",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Revenue (USD)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
    },
  };
  const data2 = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
    { name: "Apr", value: 600 },
    { name: "May", value: 400 },
    { name: "Jun", value: 700 },
  ];
  return (
    <>
      <div className="row d-flex justify-content-evenly w-100">
        <div className="col-5 mt-4 bg-white total-re">
          <Bar data={data} options={options} className="h-100" />
        </div>

        <div className="col-6 mt-4 bg-white h-100">
          <p className="text-center">Sales Overview</p>
          <LineChart width={600} height={400} data={data2}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </>
  );
}

export default Revenue;
