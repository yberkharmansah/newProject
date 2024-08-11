<template>
  <div id="app">
    <audio ref="audio" loop>
      <source :src="require('@/assets/music.mp3')" type="audio/mpeg">
      Tarayıcınız bu ses dosyasını desteklemiyor.
    </audio>
    <router-view @playMusic="playMusic" />
  </div>
</template>

<script>
export default {
  methods: {
    playMusic() {
      this.$refs.audio.play();
    }
  }
}
</script>

<style>
/* App genel stilleri */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
