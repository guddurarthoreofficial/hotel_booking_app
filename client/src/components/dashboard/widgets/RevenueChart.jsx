import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getRevenueAnalytics } from "../../../services/dashboardService";

const RevenueChart = () => {
  const [period, setPeriod] = useState("1y");
  const [labels, setLabels] = useState([]);
  const [revenue, setRevenue] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadRevenue = async (selectedPeriod) => {
    try {
      setLoading(true);

      const res = await getRevenueAnalytics(selectedPeriod);

      setLabels(res.revenue.map((item) => item._id));
      setRevenue(res.revenue.map((item) => item.amount));
    } catch (error) {
      console.error("Failed to load revenue analytics", error);
      setLabels([]);
      setRevenue([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRevenue(period);
  }, [period]);

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
      categories: labels,
    },

    yaxis: {
      labels: {
        formatter: (value) => `₹${value.toLocaleString()}`,
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
      data: revenue,
    },
  ];

  const filters = [
    { label: "1W", value: "1w" },
    { label: "1M", value: "1m" },
    { label: "1Y", value: "1y" },
    { label: "5Y", value: "5y" },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold">Revenue Analytics</h2>

        <div className="flex gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setPeriod(filter.value)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                period === filter.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="h-[320px] flex items-center justify-center">
          <p className="text-gray-500">Loading revenue...</p>
        </div>
      ) : revenue.length === 0 ? (
        <div className="h-[320px] flex items-center justify-center">
          <p className="text-gray-500">No revenue data available</p>
        </div>
      ) : (
        <Chart
          options={options}
          series={series}
          type="area"
          height={320}
        />
      )}
    </div>
  );
};

export default RevenueChart;