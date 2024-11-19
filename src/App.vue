<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Hostel Management</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><router-link to="/" class="nav-link">Dashboard</router-link></li>
            <li class="nav-item"><router-link to="/rooms" class="nav-link">Rooms</router-link></li>
            <li class="nav-item"><router-link to="/tenants" class="nav-link">Tenants</router-link></li>
            <li class="nav-item"><router-link to="/orders" class="nav-link">Orders</router-link></li>
            <li class="nav-item"><router-link to="/reports" class="nav-link">Reports</router-link></li>
            <li class="nav-item"><router-link to="/settings" class="nav-link">Settings</router-link></li>
          </ul>
        </div>
        <button class="btn btn-outline-light">Logout</button>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container mt-4">
      <router-view></router-view>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-4 mt-5">
      <div class="container">
        <div class="row">
          <!-- About Us Section -->
          <div class="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>We provide efficient hostel management services with a focus on quality, comfort, and security. Our goal is to offer a seamless experience for both tenants and management.</p>
          </div>

          <!-- Quick Links Section -->
          <div class="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul class="list-unstyled">
              <li><router-link to="/" class="text-white">Dashboard</router-link></li>
              <li><router-link to="/rooms" class="text-white">Rooms</router-link></li>
              <li><router-link to="/tenants" class="text-white">Tenants</router-link></li>
              <li><router-link to="/orders" class="text-white">Orders</router-link></li>
              <li><router-link to="/reports" class="text-white">Reports</router-link></li>
              <li><router-link to="/settings" class="text-white">Settings</router-link></li>
            </ul>
          </div>

          <!-- Social Media Links Section -->
          <div class="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div>
              <a href="#" class="text-white me-3">
                <i class="bi bi-facebook fs-3"></i>
              </a>
              <a href="#" class="text-white me-3">
                <i class="bi bi-twitter fs-3"></i>
              </a>
              <a href="#" class="text-white me-3">
                <i class="bi bi-linkedin fs-3"></i>
              </a>
              <a href="#" class="text-white me-3">
                <i class="bi bi-instagram fs-3"></i>
              </a>
            </div>
          </div>
        </div>
        <hr class="text-white">
        <div class="row">
          <div class="col-12">
            <p class="mb-0">© 2024 Hostel Management. All Rights Reserved.</p>
            <p class="mb-0">Designed by Your Name | Powered by Vue.js</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
/* Styling for footer */
footer {
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: #343a40;
}

footer p {
  margin: 0;
  color: #ccc;
}

footer .container {
  padding: 20px;
}

footer .row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

footer .col-md-4 {
  flex: 1 1 30%;
}

footer .col-md-4 ul {
  padding-left: 0;
}

footer .col-md-4 ul li {
  margin-bottom: 10px;
}

footer .col-md-4 a {
  text-decoration: none;
}

footer .col-md-4 .bi {
  margin-right: 10px;
}

footer .bi {
  color: white;
  transition: color 0.3s;
}

footer .bi:hover {
  color: #007bff;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
  footer .col-md-4 {
    flex: 1 1 100%;
    margin-bottom: 20px;
  }
}
</style>
