<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex items-center justify-center h-screen">
    <div v-if="error.statusCode === 404">
      <div class="flex justify-center">
        <NuxtImg class="w-[40%] md:w-[60%]" src="/jp.png" />
      </div>
      <div
        class="text-center container mx-auto my-14 flex items-center justify-center md:my-24 lg:my"
      >
        <div class="text-center">
          <h1 class="text-6xl font-bold italianno animation-target">
            <span class="letter" style="opacity: 0">4</span>
            <span class="letter" style="opacity: 0">0</span>
            <span class="letter" style="opacity: 0">4</span>
          </h1>
          <p class="text-2xl font-semibold">La page n'existe pas</p>
          <p>Veuillez retourner sur le site avec le bouton</p>
          <a
            href="/"
            class="text-orange-500 text-2xl hover:underline mt-4 block animate-bounce"
          >
            Retour au site
          </a>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        class="text-center container mx-auto my-14 flex items-center justify-center md:my-24 lg:my"
      >
        <div class="text-center">
          <h1 class="text-6xl font-bold">An error occurred</h1>
          <p class="text-xl font-semibold">La page n'existe pas</p>
          <p class="mt-4">Veuillez retourner sur le site avec le bouton</p>
          <a
            href="/"
            class="text-orange-500 hover:underline mt-4 block animate-bounce"
          >
            Retour au site
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  layout: "error-layout",
  // eslint-disable-next-line vue/require-prop-types
  props: ["error"], // you can set a custom layout for the error page
  mounted() {
    this.playAnimation();
  },
  methods: {
    playAnimation() {
      anime({
        targets: ".animation-target .letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        delay: anime.stagger(500), // Délai entre chaque lettre
        duration: 2000,
        loop: true,
      });
    },
  },
};
</script>