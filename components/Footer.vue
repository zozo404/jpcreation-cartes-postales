<template>
  <footer class="relative pb-4 lg:pt-0 custom-border">
    <div>
      <div class="pt-4">
        <!-- summary -->
        <ul class="flex justify-around text-center gap-1">
          <li
            v-for="section in sections"
            :key="section.id"
            class="hover:text-[#68C3D4] transition fade-scroll"
            :class="{ visible: isVisible }"
          >
            <NuxtLink :to="section.link">
              {{ section.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <!-- copyrights -->
    <div class="text-center py-2">
      <p class="fade-scroll" :class="{ visible: isVisible }">
        <NuxtLink to="mentions-legales">Legal Mention</NuxtLink> | All rights
        reserved
      </p>
      <p class="fade-scroll" :class="{ visible: isVisible }">
        &copy; 2023-2024
        <a href="https://zozoy.fr/" target="_blank">zozoy.fr</a>
      </p>
    </div>
  </footer>
</template>
<script>
import scrollFadeMixin from "~/mixins/scrollFadeMixin";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  mixins: [scrollFadeMixin],
  data() {
    return {
      sections: [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Mes réalisations", link: "mes-realisations" },
        { id: 3, name: "Contact", link: "contact" },
      ],
    };
  },
};
</script>
<style>
.custom-border {
  box-shadow: 0px -10px 10px 0px rgba(38, 170, 225, 0.34);
}
</style>