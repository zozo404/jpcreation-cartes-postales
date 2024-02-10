<template>
  <section v-if="CartesPostales">
    <div class="flex flex-wrap justify-evenly">
      <div
        class="text-center sm:flex items-center flex-col fade-scroll md:w-[50%]"
        :class="{ visible: isVisible }"
        v-for="carte in CartesPostales"
        :key="carte.id"
      >
        <NuxtImg
          :src="carte.imageId.asset._ref"
          provider="sanity"
          :alt="carte.imageId.alt"
          class="w-full shadow-none transition1sec shadow-right-bottom sm:w-4/5 2xl:w-[50%] cursor-pointer"
          @click="showFullScreenImageAll(carte)"
        />
        <h1 class="pt-2 pb-4">{{ carte.name }}</h1>
      </div>
    </div>

    <BtnRealisations />

    <!-- image pop-up -->
    <div v-if="isFullScreen" class="full-screen-image flex-col">
      <span class="close" @click="isFullScreen = false">&times;</span>
      <NuxtImg
        provider="sanity"
        class="modal-content"
        :src="fullScreenImageUrl"
      />
      <p class="text-white">{{ fullScreenImageName }}</p>
    </div>
  </section>
</template>

<script>
import scrollFadeMixin from "~/mixins/scrollFadeMixin";
import { mapGetters } from "vuex";
export default {
  mixins: [scrollFadeMixin],
  name: "Immanquables",
  computed: {
    ...mapGetters(["getCartesPostales"]),
    CartesPostales() {
      return this.getCartesPostales.filter((el) => el.immanquables === true);
    },
  },
};
</script>

<style>
.shadow-right-bottom:hover {
  box-shadow: 12px 12px 12px 0px
    rgba(37.99999999999999, 170.0000000000002, 225, 0.34);
}
</style>
