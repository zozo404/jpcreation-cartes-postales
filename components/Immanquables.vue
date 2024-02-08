<template>
  <section v-if="CartesPostales">
    <div
      class="text-center flex flex-col items-center"
      v-for="carte in CartesPostales"
      :key="carte._id"
    >
      <NuxtImg
        :src="carte.imageId.asset._ref"
        provider="sanity"
        :alt="carte.imageId.alt"
        class="w-11/12 shadow-none transition1sec shadow-right-bottom"
      />
      <h1 class="pt-2 pb-8 text-lg">{{ carte.name }}</h1>
    </div>
    <BtnRealisations />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
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