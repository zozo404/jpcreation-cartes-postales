<template>
  <div>
    <Titles
      title="Création de cartes postales"
      class="italianno mt-2 py-4 SamsungGA425G:px-8"
      :barre='false'
    />
    <Presentation class="SamsungGA425G:px-8" />
    <Titles
      title="Les immanquables"
      class="italianno mt-16 SamsungGA425G:px-8"
    />
    <Immanquables class="SamsungGA425G:px-8" />
    <Titles title="À propos" class="italianno mt-16" />
    <Propos class="pb-16"/>
    <Inspiration />
  </div>
</template>
<script>
export default {
  name: "HomePage",
};
</script>