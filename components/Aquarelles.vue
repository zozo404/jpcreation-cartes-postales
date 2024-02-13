<template>
  <section v-if="aquarelles">
    <Titles
      title="Mes aquarelles dessinés"
      class="mt-16 SamsungGA425G:px-8"
      subtitle="Je peux dessiner vos aquarelles sur commande !"
    />
    <div
      class="flex flex-col gap-4 px-8 md:flex-row md:flex-wrap md:items-center md:justify-evenly"
    >
      <div
        v-for="aquarelle in aquarelles"
        :key="aquarelle.id"
        class="text-center flex flex-col items-center bg-white pt-6 px-4 shadow-none transition1sec shadow-right-bottom rounded-md md:w-[30%] md:flex-row md:flex-wrap md:justify-center md:h-fit"
      >
        <NuxtImg
          :src="aquarelle.imageId.asset._ref"
          provider="sanity"
          :alt="aquarelle.imageId.alt"
          class="w-11/12 rounded-md cursor-pointer lg:max-h-[23rem] xl:max-h-[30rem] 2xl:max-h-[35rem] 3xl:max-h-[47rem]"
          @click="showFullScreenImageCollection(aquarelle)"
        />
        <h1 class="py-4 text-base">{{ aquarelle.name }}</h1>
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
  name: "aquarelles",
  mixins: [scrollFadeMixin],
  props: {
    aquarelles: {
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