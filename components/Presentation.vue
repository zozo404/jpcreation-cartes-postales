<template>
  <section>
    <div
      class="italic leading-8 px-4 text-[15px] md:text-[17px] text-justify pb-14 fade-scroll"
      :class="{ visible: isVisible }"
    >
      <p>
        Jeune, je dessinais naturellement bien et mes dessins ou caricatures de
        profs plaisaient à mes camarades de classe.
      </p>
      <br />
      <p>
        Mes parents, persuadés d’héberger le futur Picasso, m’ont payé des cours
        de dessin par correspondance. Trop difficiles pour l’enfant que j’étais,
        j’ai troqué mon pinceau contre la pratique de nombreux sports et ceci
        pendant plusieurs décennies; si bien que pendant 41 ans je n’ai pas
        touché un crayon. Pas le moindre dessin !
      </p>
    </div>
    <div
      class="text-center sm:flex items-center flex-col fade-scroll"
      :class="{ visible: isVisible }"
    >
      <NuxtImg
        :src="CartesPostales.imageId.asset._ref"
        provider="sanity"
        :alt="CartesPostales.imageId.alt"
        class="w-full shadow-none transition1sec shadow-right-bottom sm:w-4/5 md:w-[70%] 2xl:w-[30%] cursor-pointer"
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

