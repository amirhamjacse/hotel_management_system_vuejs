<template>
  <div class="container-fluid">
    <!-- Statistics Section -->
    <div class="row mb-4">
      <div class="col-md-3 col-sm-6 mb-4" v-for="(stat, index) in stats" :key="index">
        <div :class="'card shadow-sm text-white ' + stat.color">
          <div class="card-body d-flex align-items-center">
            <div class="me-3">
              <i :class="stat.icon + ' fs-1'"></i>
            </div>
            <div>
              <h5 class="card-title mb-1">{{ stat.title }}</h5>
              <p class="card-text fs-4 fw-bold">{{ stat.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="row mb-4">
      <div class="col-lg-6 col-md-12 mb-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Room Status Distribution</h5>
            <PieChart />
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-12 mb-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Monthly Orders</h5>
            <BarChart />
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <!-- <footer class="bg-dark text-white text-center py-4 mt-4">
      <p class="mb-0">© 2024 Hostel Management. All Rights Reserved.</p>
      <p class="mb-0">Designed by Your Name | Powered by Vue.js</p>
    </footer> -->
  </div>
</template>

<script>
import PieChart from './charts/PieChart.vue';
import BarChart from './charts/BarChart.vue';

export default {
  components: {
    PieChart,
    BarChart,
  },
  data() {
    return {
      stats: [
        { title: 'Total Rooms', value: 50, color: 'bg-primary', icon: 'bi bi-people-fill' },
        { title: 'Occupied Rooms', value: 30, color: 'bg-success', icon: 'bi bi-door-closed-fill' },
        { title: 'Vacant Rooms', value: 20, color: 'bg-warning', icon: 'bi bi-door-open-fill' },
        { title: 'Pending Orders', value: 10, color: 'bg-danger', icon: 'bi bi-cart-fill' },
      ],
    };
  },
};
</script>

<style scoped>
/* Optional styles to adjust cards */
.card {
  border-radius: 8px;
}

.card-body {
  padding: 1.5rem;
}

footer {
  background-color: #343a40;
}

footer p {
  margin: 0;
}
</style>
