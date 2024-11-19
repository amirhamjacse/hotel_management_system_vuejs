<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3>Orders</h3>
      <button class="btn btn-primary" @click="addOrder">Add Order</button>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Room No.</th>
          <th>Item</th>
          <th>Quantity</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.roomNo }}</td>
          <td>{{ order.item }}</td>
          <td>{{ order.quantity }}</td>
          <td>{{ order.status }}</td>
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
  name: "Orders",
  data() {
    return {
      orders: [
        { id: 1, roomNo: 101, item: "Dinner", quantity: 2, status: "Pending" },
        { id: 2, roomNo: 102, item: "Laundry", quantity: 1, status: "Completed" },
      ],
    };
  },
  methods: {
    addOrder() {
      alert("Add order clicked");
    },
  },
};
</script>
