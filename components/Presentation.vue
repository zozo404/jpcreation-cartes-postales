<template>
  <section>
    <div class="italic leading-8 px-4 text-[15px] text-justify pb-14">
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
    <div class="text-center">
      <NuxtImg
        :src="CartesPostales.imageId.asset._ref"
        provider="sanity"
        alt="logo"
        class="w-full"
      />
      <h1 class="pt-2">{{ CartesPostales.name }}</h1>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
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

<style>
</style>