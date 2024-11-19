<template lang="">
  <div>
    <h1>Hello worlds, This is vuejs</h1>
  </div>
  <div id="app">
    <header>
      {{A}}
      <!-- <h1>{{ message }}</h1>
      <p>{{ description }}</p>
      <button @click="updateMessage">Update Message</button>
      <p>Uppercased Message: {{ uppercasedMessage }}</p> -->
    </header>
  </div>


</template>


<script>
export default {
  name: "App",  // Name of the component
  data() {
    return {
      // Define any reactive data properties here
      A: 57,
      message: "Hello, this is a Vue app!",
      description: "This is a basic example of a Vue app with HTML, CSS, and some dynamic data."
    };
  },

  methods: {
    // Define any methods here
    updateMessage() {
      this.message = "The message has been updated!";
    }
  },

  computed: {
    // Define any computed properties here
    uppercasedMessage() {
      return this.message.toUpperCase();
    }
  }
};
</script>

<style lang="">
  
</style>