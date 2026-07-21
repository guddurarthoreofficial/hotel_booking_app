import Chart from "react-apexcharts";

const RevenueChart = () => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    stroke: {
      curve: "smooth",
      width: 4,
    },

    colors: ["#2563eb"],

    dataLabels: {
      enabled: false,
    },

    grid: {
      borderColor: "#e2e8f0",
      strokeDashArray: 4,
    },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
      ],
    },

    yaxis: {
      labels: {
        formatter: (value) => `₹${value / 1000}k`,
      },
    },

    tooltip: {
      y: {
        formatter: (value) => `₹${value.toLocaleString()}`,
      },
    },
  };

  const series = [
    {
      name: "Revenue",
      data: [180000, 240000, 210000, 320000, 410000, 480000],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height={320}
    />
  );
};

export default RevenueChart;