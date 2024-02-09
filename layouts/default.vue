<template>
  <div class="bg-zinc-100">
    <Header />
    <Nuxt class="pt-4" />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "Default",
  components: {
    Header,
  },
};
</script>
<style>
html {
  font-family: "Lexend";
}
.italianno {
  font-family: "Italianno";
}
.lexend {
  font-family: "Lexend";
}
.fade-scroll {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.backgroundBlur{
  backdrop-filter: blur(4px);
}
.blur-element{
  filter: blur(1px);
}
.fade-scroll.visible {
  opacity: 1;
}
.transition1sec{
  transition: 1s;
}
/* width */
/* ::-webkit-scrollbar {
    width: 20px;
} */

/* Track */
/* ::-webkit-scrollbar-track {
    background: #000B76;
} */

/* Handle */
/* ::-webkit-scrollbar-thumb {
    background: #68C3D4;
    border-radius: 1rem;
    border: 3px solid #000B76;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
} */

/*styles for full screen image pop-up here*/
.full-screen-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.full-screen-image img {
  max-width: 100%;
  max-height: 44rem;
}

.full-screen-image .close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.full-screen-image .close:hover,
.full-screen-image .close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}
</style>