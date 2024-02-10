<template>
  <section v-if="cartes">
    <Titles
      title="Mes cartes dessinés"
      class="mt-16 SamsungGA425G:px-8"
      subtitle="Je peux dessiner vos cartes sur commande !"
    />
    <div
      class="flex flex-col gap-4 px-8 md:flex-row md:flex-wrap md:items-center md:justify-evenly"
    >
      <div
        v-for="carte in cartes"
        :key="carte.id"
        class="text-center flex flex-col items-center bg-white pt-6 px-4 shadow-none transition1sec shadow-right-bottom rounded-md md:w-[30%] md:justify-center md:h-fit"
      >
        <NuxtImg
          :src="carte.imageId.asset._ref"
          provider="sanity"
          :alt="carte.imageId.alt"
          class="w-fit rounded-md cursor-pointer"
          @click="showFullScreenImageCollection(carte)"
        />
        <h1 class="py-4 text-base">{{ carte.name }}</h1>
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
  name: "cartes",
  mixins: [scrollFadeMixin],
  props: {
    cartes: {
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