<template>
  <section v-if="produits">
    <div
      class="flex flex-col gap-4 px-8 md:flex-row md:flex-wrap md:items-center md:justify-evenly"
    >
      <div
        v-for="produit in produits"
        :key="produit.id"
        class="text-center flex flex-col items-center bg-white pt-6 px-4 shadow-none transition1sec shadow-right-bottom rounded-md md:w-[23%] md:h-fit"
      >
        <NuxtImg
          :src="produit.imageId.asset._ref"
          provider="sanity"
          :alt="produit.imageId.alt"
          class=" rounded-md cursor-pointer"
          @click="showFullScreenImageCollection(produit)"
        />
        <h1 class="py-4 text-base">{{ produit.name }}</h1>
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
  name: "Produits",
  mixins: [scrollFadeMixin],
  props: {
    produits: {
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