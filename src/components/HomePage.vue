<template>
  <div id="home">
    <h1>Selam bu muhteşem siteye hoşgeldin</h1>
    <p>O zaman önce bir müzik alalım ! </p>
    <p>Muhteşem bir grup müziği seçtim</p>
    <button @click="startMusic">Müzigi Baslat</button>
  </div>
</template>

<script>
export default {
  methods: {
    startMusic() {
      this.$emit('playMusic'); // App.vue'ye müzik çalma komutu gönder
      setTimeout(() => {
        this.$router.push('/gallery');
      }, 1000); // 1 saniye bekletme
    }
  }
}
</script>

<style>
/* HomePage bileşeni için stiller */
h1{
  color: white;
}
p {
  font-size: large;
  color: white;
}
#home {
  font-family: 'Dancing Script', cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(to right, #98DAF1 33%, #E78C89 33%, #E78C89 66%, #81CB71 66%);
}

button {
  font-family: 'Dancing Script', cursive;
  padding: 10px 20px;
  background-color: #9f61e6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ff1493;
}
</style>