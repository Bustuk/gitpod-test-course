<template>
  <div>
    <p>Socket Value: {{ socketValue }}</p>
    <p>Fetch Value: {{ fetchedValue }}</p>
  </div>
</template>

<script>
import io from 'socket.io-client';
import { ref } from 'vue';
export default {
  name: 'App',
  setup() {
    const socketValue = ref(0)
    const fetchedValue = ref(0)
    const socket = io('https://8069-violet-shrew-p49fz8pd.ws-eu18.gitpod.io', {
      reconnection: false,
      transports: ["websocket", "polling"]
    });

    socket.on("status", status => {
        socketValue.value = status;
    });
    fetch('https://8069-violet-shrew-p49fz8pd.ws-eu18.gitpod.io')
      .then(response =>{console.log(response); return response.json()})
      .then(data => fetchedValue.value = data.test);
    return {
     fetchedValue,
     socketValue
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
