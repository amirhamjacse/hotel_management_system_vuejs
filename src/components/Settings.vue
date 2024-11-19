<template>
  <div>
    <h3>Settings</h3>
    <form>
      <div class="mb-3">
        <label for="hostelName" class="form-label">Hostel Name</label>
        <input type="text" class="form-control" id="hostelName" v-model="settings.hostelName" />
      </div>
      <div class="mb-3">
        <label for="ownerEmail" class="form-label">Owner Email</label>
        <input type="email" class="form-control" id="ownerEmail" v-model="settings.ownerEmail" />
      </div>
      <div class="mb-3">
        <label for="contactNumber" class="form-label">Contact Number</label>
        <input type="text" class="form-control" id="contactNumber" v-model="settings.contactNumber" />
      </div>
      <button type="button" class="btn btn-primary" @click="saveSettings">Save Settings</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      settings: {
        hostelName: "Sunshine Hostel",
        ownerEmail: "owner@hostel.com",
        contactNumber: "123-456-7890",
      },
    };
  },
  methods: {
    saveSettings() {
      alert("Settings saved successfully!");
    },
  },
};
</script>
