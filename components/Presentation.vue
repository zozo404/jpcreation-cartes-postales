<template>
  <section class="md:flex justify-center items-center gap-8 md:px-20 xl:px-48 2xl:px-64">
    <div
      class="italic leading-8 px-4 text-[15px] md:text-[17px] text-justify pb-14 fade-scroll md:w-[60rem]"
      :class="{ visible: isVisible }"
    >
      <p class="lg:w-[80%]">
        Jeune, je dessinais naturellement bien et mes dessins ou caricatures de
        profs plaisaient à mes camarades de classe.
      </p>
      <br />
      <p class="lg:w-[80%]">
        Mes parents, persuadés d’héberger le futur Picasso, m’ont payé des cours
        de dessin par correspondance. Trop difficiles pour l’enfant que j’étais,
        j’ai troqué mon pinceau contre la pratique de nombreux sports et ceci
        pendant plusieurs décennies; si bien que pendant 41 ans je n’ai pas
        touché un crayon. Pas le moindre dessin !
      </p>
    </div>
    <div
      class="text-center sm:flex items-center flex-col fade-scroll md:-[70rem]"
      :class="{ visible: isVisible }"
    >
      <NuxtImg
        :src="CartesPostales.imageId.asset._ref"
        provider="sanity"
        :alt="CartesPostales.imageId.alt"
        class="rounded-md cursor-pointer 3xl:max-w-[32rem] shadow-none shadow-right-bottom transition1sec"
        @click="showFullScreenImage(CartesPostales.imageId.asset._ref)"
      />
      <h1 class="pt-2">{{ CartesPostales.name }}</h1>
    </div>
    <!-- image pop-up -->
    <div v-if="isFullScreen" class="full-screen-image flex-col">
      <span class="close" @click="isFullScreen = false">&times;</span>
      <NuxtImg
        provider="sanity"
        class="modal-content"
        :src="CartesPostales.imageId.asset._ref"
      />
      <p class="text-white">{{ CartesPostales.name }}</p>
    </div>
  </section>
</template>

<script>
import scrollFadeMixin from "~/mixins/scrollFadeMixin";
import { mapGetters } from "vuex";
export default {
  mixins: [scrollFadeMixin],
  name: "Presentation",
  computed: {
    ...mapGetters(["getCartesPostales"]),
    CartesPostales() {
      return this.getCartesPostales.find(
        (el) => el.name === "Barques Catalanes"
      );
    },
  },
};
</script>

