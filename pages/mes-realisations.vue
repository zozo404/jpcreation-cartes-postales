<template>
  <section class="pb-16">
    <Titles
      title="Mes animaux dessinés"
      class="mt-16 SamsungGA425G:px-8"
      subtitle="Je peux dessiner vos animaux préférés sur commande !"
    />
    <Produits :produits="Animaux" />
    <Titles
      title="Mes Cartes Postales dessinés"
      class="mt-16 SamsungGA425G:px-8"
      subtitle="Je peux dessiner vos cartes postalés sur commande !"
    />
    <Produits :produits="CartesPostales" />
    <Titles
      title="Mes Aquarelles dessinées"
      class="mt-16 SamsungGA425G:px-8"
      subtitle="Je peux dessiner vos animaux préférées sur commande !"
    />
    <Produits :produits="Aquarelles" />
    <Titles
      title="Divers"
      class="mt-16 SamsungGA425G:px-8"
    />
    <Produits :produits="Divers" />
    <Titles
      title="Mes Nus dessinés"
      class="mt-16 SamsungGA425G:px-8"
      subtitle="Je peux dessiner vos nus sur commande !"
    />
    <Produits :produits="Nus" />
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