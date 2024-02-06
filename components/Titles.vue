<template>
  <div
    class="flex flex-col justify-center items-center pt-4 pb-4 fade-scroll my-2"
    :class="{ visible: isVisible }"
  >
    <div
      class="justify-center items-center"
    >
      <p
        class="w-full text-5xl text-orange-500 text-center"
      >
        {{ title }}
      </p>
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
    id: {
      type: String,
      default: "",
    },
  },
};
</script>