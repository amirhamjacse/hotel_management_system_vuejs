<template>
  <div>
    <canvas ref="pieChart"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { Chart } from "chart.js";

// Register the necessary chart elements
import { ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

export default {
  name: "PieChartTest",
  setup() {
    const pieChart = ref(null);

    onMounted(() => {
      new Chart(pieChart.value, {
        type: "pie",
        data: {
          labels: ["Occupied", "Vacant"],
          datasets: [
            {
              data: [30, 20],
              backgroundColor: ["#28a745", "#ffc107"], // Green and Yellow
              hoverBackgroundColor: ["#218838", "#e0a800"], // Darker on hover
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
        },
      });
    });

    return { pieChart };
  },
};
</script>

<style scoped>
canvas {
  max-width: 100%;
  height: 300px;
}
</style>
