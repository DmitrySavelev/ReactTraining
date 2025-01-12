import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        font: {
          size: 10, // Уменьшение шрифта меток оси X
        },
      },
    },
  },
};

function AnalyticsPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => console.log(error));
  }, []);
  const lineBarData = {
    labels: posts.map((data) => data.id), // Заголовки постов
    datasets: [
      {
        label: "Likes",
        data: posts.map((data) => data.reactions.likes),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Dislikes",
        data: posts.map((data) => data.reactions.dislikes),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Views",
        data: posts.map((data) => data.views),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["Likes", "Dislikes", "Views"],
    datasets: [
      {
        data: [
          posts.reduce((sum, data) => sum + data.reactions.likes, 0),
          posts.reduce((sum, data) => sum + data.reactions.dislikes, 0),
          posts.reduce((sum, data) => sum + data.views, 0),
        ],
        backgroundColor: ["#4bc0c0", "#C6D616", "#36a2eb"],
        hoverBackgroundColor: ["#D61121", "#D61121", "#D61121"],
      },
    ],
  };
  return (
    <div>
      <h1>Страница аналитики</h1>

      <div style={{ width: "75%", margin: "auto" }}>
        <h2>Лайки, дизлайки и просмотры (Line Chart)</h2>
        <Line data={lineBarData} options={options} />

        <h2>Лайки, дизлайки и просмотры (Bar Chart)</h2>
        <Bar data={lineBarData} options={options} />

        <h2>Общий график (Pie Chart)</h2>
        <Pie data={pieData} style={{ width: "40%", margin: "auto" }} />
      </div>
    </div>
  );
}

export default AnalyticsPage;
