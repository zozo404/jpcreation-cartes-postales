<template>
  <div>
    <div
      class="flex flex-col justify-center items-center pt-4 pb-4 fade-scroll my-2"
      :class="{ visible: isVisible }"
    >
      <div class="justify-center items-center">
        <p class="italianno w-full text-5xl text-orange-500 text-center">
          {{ title }}
        </p>
        <p v-if="subtitle" class="w-full text-base text-center">
          {{ subtitle }}
        </p>
      </div>
    </div>
    <div v-if="barre" class="flex items-center justify-center my-14">
      <hr class="w-20 h-1 bg-orange-500 mt-1" />
    </div>
  </div>
</template>

<script>
import scrollFadeMixin from "~/mixins/scrollFadeMixin";

export default {
  name: "TitlesApp",
  mixins: [scrollFadeMixin],
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    barre: {
      type: Boolean,
      default: true,
    }
  },
};
</script>