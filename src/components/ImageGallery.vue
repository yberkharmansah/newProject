<template>
  <div id="gallery">
    <header class="header">
      <h1>Birinci Ayımız Kutlu Olsun Güzel Sevgilim</h1>
    </header>
    <section class="gallery">
      <div class="image-container">
        <img :src="currentImage" :alt="'Resim ' + (currentIndex + 1)">
      </div>
    </section>
    <section class="note">
      <p>{{ romanticNote }}</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require('@/assets/image.jpeg'),
        require('@/assets/image2.jpeg'),
        require('@/assets/image3.jpeg'),
        require('@/assets/image4.jpeg'),
        require('@/assets/image5.jpeg'),
        require('@/assets/image6.jpeg'),
        require('@/assets/image7.jpeg'),
        require('@/assets/image8.jpeg'),
        require('@/assets/image9.jpeg'),
        require('@/assets/image10.jpeg')
      ],
      currentIndex: 0,
      romanticNote: "Seninle sevgili oldugum için çok sanslıyım. Daha sadece 1 ay olmasına ragmen bir sürü muhtesem an yasadık ve her saniyemde senin ile oldugum için iyi ki dedim.Gerçekten seninle oldugum için çok mutlu ve sanslı hissediyorum.Seninle geçen her an ,her saniye ,senin her tepkin o kadar hoj o kadar hoj ki sevgilim. Seni çok seviyorum askım ve umarım bu küçük hediye hosuna gitmistir."
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  mounted() {
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 1500); // 2 saniyede bir resim değişir
    }
  }
}
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
  background-color: #ffb6c1;
  padding: 20px;
  font-size: 24px;
  text-align: center;
  color: white;
}

.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.image-container {
  width: 500px; /* Sabit genişlik */
  height: 800px; /* Sabit yükseklik */
  margin-bottom: 10px;
  overflow: hidden; /* Taşan içeriği gizlemek için */
}

img {
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
}

.note {
  font-family: 'Dancing Script', cursive;
  font-size: large;
  margin: 90px;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-image: url('@/assets/letter.jpg');
  background-size: auto;
  color: purple;
  font-weight: bold;
  text-align: center;
}
</style>
