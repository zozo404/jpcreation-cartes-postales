<template>
  <section v-if="nus">
    <Titles
      title="Mes nus"
      class="mt-16 SamsungGA425G:px-8"
      subtitle="Je peux personnaliser vos nus sur commande !"
    />
    <div class="flex flex-col gap-4 px-8 fade-scroll" :class="{visible: isVisible}">
      <div
        v-for="nu in nus"
        :key="nu.id"
        class="text-center flex flex-col items-center bg-white pt-6 px-4 shadow-none transition1sec shadow-right-bottom rounded-md "
      >
        <NuxtImg
          :src="nu.imageId.asset._ref"
          provider="sanity"
          :alt="nu.imageId.alt"
          class="w-11/12 rounded-md"
        />
        <h1 class="py-4 text-base">{{ nu.name }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
import scrollFadeMixin from "~/mixins/scrollFadeMixin";
export default {
  name: "Nus",
  mixins: [scrollFadeMixin],
  props: {
    nus: {
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