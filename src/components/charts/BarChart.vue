<template>
  <div style="width: 100%; height: 400px;">
    <canvas ref="barChart"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { Chart } from "chart.js";

// Register necessary chart components including BarController, LinearScale, etc.
import { BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default {
  name: "BarChartTest",
  setup() {
    const barChart = ref(null);

    onMounted(() => {
      // Ensure the canvas element is available
      if (barChart.value) {
        // Get the 2D context of the canvas
        const ctx = barChart.value.getContext("2d");

        // Initialize the bar chart
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [
              {
                label: "Sales",
                data: [12, 19, 3, 5, 2],
                backgroundColor: "#007bff",
                borderColor: "#0056b3",
                borderWidth: 1,
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
            scales: {
              x: {
                beginAtZero: true,
              },
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      } else {
        console.error("Canvas element not found.");
      }
    });

    return { barChart };
  },
};
</script>

<style scoped>
canvas {
  max-width: 100%;
  height: 300px; /* Set height of the canvas */
}
</style>
