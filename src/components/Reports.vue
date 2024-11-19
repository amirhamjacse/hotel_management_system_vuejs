<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3>Reports</h3>
      <button class="btn btn-primary" @click="generateReport">Generate Report</button>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Report ID</th>
          <th>Title</th>
          <th>Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="report in reports" :key="report.id">
          <td>{{ report.id }}</td>
          <td>{{ report.title }}</td>
          <td>{{ report.date }}</td>
          <td>{{ report.status }}</td>
          <td>
            <button class="btn btn-info btn-sm">View</button>
            <button class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Reports",
  data() {
    return {
      reports: [
        { id: 1, title: "Monthly Report", date: "2024-11-01", status: "Completed" },
        { id: 2, title: "Revenue Report", date: "2024-11-10", status: "Pending" },
      ],
    };
  },
  methods: {
    generateReport() {
      alert("Generate report clicked");
    },
  },
};
</script>
