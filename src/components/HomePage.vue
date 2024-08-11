<template>
  <div id="home">
    <h1>Merhaba Yasemin!</h1>
    <p>Öncelikle sanırım bu sitenin ne oldugunu merak ediyorsun, acele etme! Öncelikle müzigi baslatalım.</p>
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
p {
  font-size: large;
}
#home {
  font-family: 'Dancing Script', cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #ffb6c1;
}

button {
  font-family: 'Dancing Script', cursive;
  padding: 10px 20px;
  background-color: #ff69b4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ff1493;
}
</style>
