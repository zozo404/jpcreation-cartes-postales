<template>
  <section v-if="divers">
    <Titles
      title="Mes divers"
      class="mt-16 SamsungGA425G:px-8"
      subtitle="Je peux personnaliser vos divers sur commande !"
    />
    <div class="flex flex-col-reverse gap-4 px-8 fade-scroll" :class="{visible: isVisible}">
      <div
        v-for="diver in divers"
        :key="diver.id"
        class="text-center flex flex-col items-center bg-white pt-6 px-4 shadow-none transition1sec shadow-right-bottom rounded-md "
      >
        <NuxtImg
          :src="diver.imageId.asset._ref"
          provider="sanity"
          :alt="diver.imageId.alt"
          class="w-11/12 rounded-md"
        />
        <h1 class="py-4 text-base">{{ diver.name }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
import scrollFadeMixin from "~/mixins/scrollFadeMixin";
export default {
  name: "Divers",
  mixins: [scrollFadeMixin],
  props: {
    divers: {
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