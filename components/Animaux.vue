<template>
  <section v-if="animaux">
    <Titles
      title="Mes animaux dessinés"
      class="mt-16 SamsungGA425G:px-8"
      subtitle="Je peux dessiner vos animaux préféres sur commande !"
    />
    <div
      class="flex flex-col gap-4 px-8 md:flex-row md:flex-wrap md:items-center md:justify-evenly"
    >
      <div
        v-for="animal in animaux"
        :key="animal.id"
        class="text-center flex flex-col items-center bg-white pt-6 px-4 shadow-none transition1sec shadow-right-bottom rounded-md md:w-[30%] md:flex-row md:flex-wrap md:justify-center md:h-fit"
      >
        <NuxtImg
          :src="animal.imageId.asset._ref"
          provider="sanity"
          :alt="animal.imageId.alt"
          class="w-11/12 rounded-md cursor-pointer"
          @click="showFullScreenImageCollection(animal)"
        />
        <h1 class="py-4 text-base">{{ animal.name }}</h1>
      </div>
      <!-- image pop-up -->
      <div v-if="isFullScreen" class="full-screen-image flex-col">
        <span class="close" @click="isFullScreen = false">&times;</span>
        <NuxtImg
          provider="sanity"
          class="modal-content"
          :src="fullScreenImageUrl"
        />
        <p class="text-white">{{ fullScreenImageCollectionName }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import scrollFadeMixin from "~/mixins/scrollFadeMixin";
export default {
  name: "Animaux",
  mixins: [scrollFadeMixin],
  props: {
    animaux: {
      default: null,
      type: Array,
    },
  },
  data() {
    return {
      isVisible: true,
    };
  },
};
</script>

<style>
</style>