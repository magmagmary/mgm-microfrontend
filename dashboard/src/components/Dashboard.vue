<template>
  <div class="dashboard">
    <h1>{{ title }}</h1>
    <p>Welcome to your dashboard!</p>
    <button @click="incrementCounter">
      Clicked {{ counter }} times
    </button>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      title: 'My Dashboard',
      counter: 0
    }
  },
  methods: {
    incrementCounter() {
      this.counter++
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #369870;
}
</style>
