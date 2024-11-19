<template>
    <div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h3>Tenants</h3>
        <button class="btn btn-primary" @click="addTenant">Add Tenant</button>
      </div>
  
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Room No.</th>
            <th>Contact</th>
            <th>Check-in Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tenant in tenants" :key="tenant.name">
            <td>{{ tenant.name }}</td>
            <td>{{ tenant.roomNo }}</td>
            <td>{{ tenant.contact }}</td>
            <td>{{ tenant.checkInDate }}</td>
            <td>
              <button class="btn btn-warning btn-sm">Edit</button>
              <button class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "Tenants",
    data() {
      return {
        tenants: [
          {
            name: "John Doe",
            roomNo: 101,
            contact: "123-456-7890",
            checkInDate: "2024-01-01",
          },
        ],
      };
    },
    methods: {
      addTenant() {
        alert("Add tenant clicked");
      },
    },
  };
  </script>
  