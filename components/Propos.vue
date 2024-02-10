<template>
  <section class="md:flex items-center">
    <div
      class="hidden text-center md:flex items-center flex-col fade-scroll md:w-1/2"
      :class="{ visible: isVisible }"
    >
      <NuxtImg
        :src="CartesPostales.imageId.asset._ref"
        provider="sanity"
        :alt="CartesPostales.imageId.alt"
        class="w-full shadow-none transition1sec shadow-right-bottom sm:w-4/5 md:w-[70%] cursor-pointer"
        @click="showFullScreenImage(CartesPostales.imageId.asset._ref)"
      />
      <h1 class="pt-2">{{ CartesPostales.name }}</h1>
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
    </div>
    <div
      class="italic leading-8 px-4 text-[15px] text-justify pb-14 text-base SamsungGA425G:px-8 md:w-1/2"
    >
      <p>
        A l’aube de la retraite, je me suis inscrit dans un club de dessin avec
        un professeur de bon niveau et la petite flamme presque complètement
        éteinte s’est ravivée. Un peu plus tard, l’idée déclinable à l’infini de
        créer mes amoureux à droite de chacune de mes cartes postales et du
        petit cœur à gauche est née.
      </p>
      <br />
      <p>Et c’est parti pour une nouvelle aventure.</p>
      <br />
      <p>
        Si vous aimez mes cartes postales ou mes dessins d’animaux, je compte
        sur vous pour me solliciter et je peux dessiner vos animaux préférés ou
        personnaliser mes cartes postales pour vous, pour des villes ou
        villages, des commerces, des librairies ou maisons de la presse, des
        monuments, des Mairies, des étiquettes de bouteilles de vin, des
        mariages etc…
      </p>
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
      return this.getCartesPostales.find((el) => el.name === "Le Castillet");
    },
  },
};
</script>