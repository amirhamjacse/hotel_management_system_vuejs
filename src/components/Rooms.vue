<template>
    <div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h3>Rooms</h3>
        <button class="btn btn-primary" @click="addRoom">Add Room</button>
      </div>
  
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Room No.</th>
            <th>Type</th>
            <th>Status</th>
            <th>Rent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="room in rooms" :key="room.roomNo">
            <td>{{ room.roomNo }}</td>
            <td>{{ room.type }}</td>
            <td>{{ room.status }}</td>
            <td>{{ room.rent }}</td>
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
    name: "Rooms",
    data() {
      return {
        rooms: [
          { roomNo: 101, type: "Single", status: "Occupied", rent: "$300" },
          { roomNo: 102, type: "Shared", status: "Vacant", rent: "$200" },
        ],
      };
    },
    methods: {
      addRoom() {
        alert("Add room clicked");
      },
    },
  };
  </script>
  