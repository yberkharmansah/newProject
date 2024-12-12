<template>
  <div id="gallery">
    <header class="header">
      <h1>Muhteşem dostluğumuzun günlüğü</h1>
    </header>

    <section class="section">
      <h2>Resimler</h2>
      <div class="gallery">
        <button class="nav-button left" @click="prevImage">❮</button>
        <div class="media-container">
          <img :src="currentImage" :alt="'Resim ' + (currentIndex + 1)">
        </div>
        <button class="nav-button right" @click="nextImage">❯</button>
      </div>
    </section>

    <section class="section">
      <h2>Videolar</h2>
      <div class="gallery">
        <button class="nav-button left" @click="prevVideo">❮</button>
        <div class="media-container">
          <video :src="currentVideo" controls></video>
        </div>
        <button class="nav-button right" @click="nextVideo">❯</button>
      </div>
    </section>

    <section class="note">
      <p>{{ romanticNote }}</p>
    </section>
  </div>
</template>

<script>
const requireImageContext = require.context('@/assets/images', false, /\.(jpeg|jpg)$/);
const requireVideoContext = require.context('@/assets/videos', false, /\.(mp4)$/);

export default {
  data() {
    return {
      images: requireImageContext.keys().map(fileName => requireImageContext(fileName)),
      videos: requireVideoContext.keys().map(fileName => requireVideoContext(fileName)),
      currentIndex: 0,
      currentVideoIndex: 0,
      romanticNote: "Gerçek Agalar ortamı.Bu eğlenceli vakitlerde emeği geçen herkese teşekkürler."
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
    currentVideo() {
      return this.videos[this.currentVideoIndex];
    }
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextVideo() {
      this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videos.length;
    },
    prevVideo() {
      this.currentVideoIndex = (this.currentVideoIndex - 1 + this.videos.length) % this.videos.length;
    }
  }
};
</script>

<style>
/* Gallery bileşeni için stiller */
#gallery {
  background-image: url('@/assets/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh; /* Sayfanın tam yüksekliğinde arkaplan */
}

.header {
  font-family: 'Dancing Script', cursive;
  background-color: #9f61e6;
  padding: 20px;
  font-size: 24px;
  text-align: center;
  color: white;
}

.section {
  margin: 20px 0;
}

.section h2 {
  text-align: center;
  font-family: 'Dancing Script', cursive;
  color: #ff69b4;
  font-size: 28px;
  margin-bottom: 10px;
}

.gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
}

.media-container {
  width: flex; /* Sabit genişlik */
  height: 800px; /* Sabit yükseklik */
  overflow: hidden; /* Taşan içeriği gizlemek için */
}

img, video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff69b4;
}

.nav-button.left {
  left: 20px;
}

.nav-button.right {
  right: 20px;
}

.nav-button:hover {
  background-color: #ff69b4;
  color: white;
}

.note {
  font-family: 'Dancing Script', cursive;
  font-size: x-large;
  margin: 90px;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-size: auto;
  background-color: #9f61e6;
  color: purple;
  font-weight: bold;
  text-align: center;
}
</style>
