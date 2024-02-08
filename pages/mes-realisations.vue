<template>
  <section class="pb-16">
    <Animaux :animaux="Animaux" />
    <CartesPostales :cartes="CartesPostales" />
    <Aquarelles :aquarelles="Aquarelles" />
    <Divers :divers="Divers" />
    <Nus :nus="Nus" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MesRealisationsPage",
  computed: {
    ...mapGetters(["getImageSite", "getCartesPostales"]),
    Animaux() {
      return this.getImageSite.filter((el) => el.typesCartes == "Animaux");
    },
    CartesPostales(){
      return this.getCartesPostales
    },
    Aquarelles(){
      return this.getImageSite.filter((el) => el.typesCartes == "Aquarelles");
    },
    Divers(){
      return this.getImageSite.filter((el) => el.typesCartes == "Divers");
    },
    Nus(){
      return this.getImageSite.filter((el) => el.typesCartes == "Nus");
    }
  },
};
</script>
<style>
</style>