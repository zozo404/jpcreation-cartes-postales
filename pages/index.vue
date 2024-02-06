<template>
  <div>
    <Titles title="Création de cartes postales" class="italianno mt-2"/>
    <Presentation />
    <Titles title="Les immanquables" class="italianno mt-16"/>
    <div class="flex items-center justify-center mt-2"><hr class="w-20 h-1 bg-orange-500 mt-1"></div>
    <Immanquables class="pt-14" />

  </div>
</template>
<script>

export default {
  name: "HomePage"
};
</script>