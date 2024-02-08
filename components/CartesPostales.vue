<template>
  <section v-if="cartes">
    <Titles
      title="Mes cartes postales"
      class="mt-16 SamsungGA425G:px-8"
      subtitle="Je peux personnaliser vos cartes postales sur commande !"
    />
    <div class="flex flex-col gap-4 px-8 fade-scroll" :class="{visible: isVisible}">
      <div
        v-for="carte in cartes"
        :key="carte.id"
        class="text-center flex flex-col items-center bg-white pt-6 px-4 shadow-none transition1sec shadow-right-bottom rounded-md "
      >
        <NuxtImg
          :src="carte.imageId.asset._ref"
          provider="sanity"
          :alt="carte.imageId.alt"
          class="w-11/12 rounded-md"
        />
        <h1 class="py-4 text-base">{{ carte.name }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
import scrollFadeMixin from "~/mixins/scrollFadeMixin";
export default {
  name: "Cartes",
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