<template>
  <div style="width: 100%; height: 400px;">
    <canvas ref="pieChart"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { Chart } from "chart.js";

// Register necessary chart components, including PieController for pie charts
import { PieController, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(PieController, ArcElement, Tooltip, Legend);

export default {
  name: "PieChartTest",
  setup() {
    const pieChart = ref(null);

    onMounted(() => {
      // Ensure the canvas element is available
      if (pieChart.value) {
        // Get the 2D context of the canvas
        const ctx = pieChart.value.getContext("2d");

        // Initialize the pie chart
        new Chart(ctx, {
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
      } else {
        console.error("Canvas element not found.");
      }
    });

    return { pieChart };
  },
};
</script>

<style scoped>
canvas {
  max-width: 100%;
  height: 300px; /* Set height of the canvas */
}
</style>
