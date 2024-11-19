<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register chart.js components
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default {
  name: 'BarChart',
  setup() {
    const chartCanvas = ref(null);

    onMounted(() => {
      if (chartCanvas.value) {
        new Chart(chartCanvas.value, {
          type: 'bar',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                label: 'Orders',
                data: [5, 8, 6, 10, 12, 7],
                backgroundColor: '#007bff', // Blue color for bars
                borderColor: '#0056b3', // Darker border for contrast
                borderWidth: 1, // Add border width
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Months',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Orders',
                },
              },
            },
          },
        });
      }
    });

    return { chartCanvas };
  },
};
</script>

<style scoped>
canvas {
  max-width: 100%;
  height: 400px;
}
</style>
