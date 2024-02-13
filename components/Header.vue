<template>
  <header
    class="w-full z-20 sticky top-0 bg-white shadow-bottom transition1sec"
    :class="{ 'bg-color': isScrolled }"
  >
    <!-- nav desktop -->
    <nav
      class="md:max-h-28 max-h-20 w-full py-2 md:py-6 grid grid-cols-2 md:grid-cols-2 grid-rows-1 items-center justify-between md:border-none lg:px-24 2xl:px-60"
      aria-label="Top"
    >
      <!-- logo -->
      <NuxtLink to="/" class="flex justify-start pl-12 md:col-span-1 h-full">
        <span class="sr-only">Logo</span>
        <div v-if="Logo.imageId.asset._ref">
          <NuxtImg
            :src="Logo.imageId.asset._ref"
            provider="sanity"
            alt="logo"
            class="h-full"
            sizes="xs:100vw"
          />
        </div>
        <div v-else>
          <NuxtImg src="jp.png" alt="logo" class="h-16" sizes="xs:100vw" />
        </div>
      </NuxtLink>
      <div class="hidden md:block"></div>
      <div class="hidden md:block"></div>
      <div
        class="w-full h-full pr-8 md:hidden flex justify-end items-center gap-4"
      >
        <div @click="toggle">
          <i
            class="fa-solid fa-bars cursor-pointer h-5 p-3 bg-orange-400 rounded-md text-white"
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          @click="redirectFacebook"
          class="cursor-pointer w-[15%] hidden md:block fill-orange-400 hover:fill-cyan-500 transition1sec"
        >
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
          />
        </svg>
      </div>
      <!-- navigation -->
      <div
        class="hidden col-span-2 md:col-span-1 md:col-start-2 md:row-start-1 md:flex flex-row gap-3 xl:gap-4 items-center lg:justify-end lg:pr-8"
      >
        <div
          v-for="lien in liens"
          :key="lien.texte"
          class="py-4 flex space-x-6"
        >
          <NuxtLink
            key="Index"
            :to="lien.lien"
            class="text-base md:text-xl 2xl:text-2xl font-medium text-cyan-500 hover:text-orange-500 transition"
            @click="toggle"
          >
            {{ lien.texte }}
          </NuxtLink>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          @click="redirectFacebook"
          class="cursor-pointer w-7 fill-orange-400 hover:fill-cyan-500 transition1sec py-4"
        >
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
          />
        </svg>
      </div>
      <!-- fin nav fermée -->
    </nav>
    <!-- nav responsive ouverte -->
    <nav
      :class="{ hidden: isActive }"
      class="md:hidden w-full absolute top-0 h-screen z-40 grid grid-cols-2 grid-rows-4 bg-opacity-40 backgroundBlur bg-black"
    >
      <div
        class="grid grid-cols-2 md:grid-cols-4 grid-rows-1 col-span-2 my-2 h-12 justify-items-center w-full"
      >
        <!-- logo -->
        <NuxtLink to="/" class="flex justify-center md:col-span-1 h-full">
          <span class="sr-only">Logo</span>
          <div v-if="Logo.imageId.asset._ref">
            <NuxtImg
              :src="Logo.imageId.asset._ref"
              provider="sanity"
              alt="logo"
              class="h-16"
              sizes="xs:100vw"
            />
          </div>
          <div v-else>
            <NuxtImg src="jp.png" alt="logo" class="h-16" sizes="xs:100vw" />
          </div>
        </NuxtLink>
        <div class="hidden md:block"></div>
        <div class="hidden md:block"></div>
        <!-- hamburger icon -->
        <div
          class="w-full h-full pr-8 md:hidden flex justify-end items-center my-2 gap-4"
        >
          <div @click="toggle">
            <i
              class="fa-solid fa-xmark cursor-pointer h-6 p-3 bg-orange-400 rounded-md"
              style="color: #ffffff"
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            @click="redirectFacebook"
            class="cursor-pointer w-[15%] hidden md:block fill-orange-400 hover:fill-cyan-500 transition1sec"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
            />
          </svg>
        </div>
      </div>
      <!-- liens -->
      <div
        v-for="lien in liens"
        :key="lien.texte"
        class="mb-4 py-4 flex flex-col items-center"
        @click="toggle"
      >
        <NuxtLink
          key="Index"
          :to="lien.lien"
          class="text-2xl font-medium hover:text-[#68C3D4] transition text-white"
        >
          {{ lien.texte }}
        </NuxtLink>
      </div>
      <!--  -->
    </nav>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    redirectFacebook() {
      window.open(
        "https://www.facebook.com/profile.php?id=100086833912404",
        "_blank"
      );
    },
  },
  computed: {
    ...mapGetters(["getImageSite"]),
    Logo() {
      return this.getImageSite.find((el) => el.name === "Logo");
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      isScrolled: false,
      isActive: true,
      liens: [
        {
          texte: "Accueil",
          lien: "/",
        },
        {
          texte: "Mes réalisations",
          lien: "/mes-realisations",
        },
        {
          texte: "Contact",
          lien: "/contact",
        },
      ],
    };
  },
};
</script>
<style>
/* Ajout de la classe bg-color avec la couleur que vous souhaitez pour le défilement */
.bg-color {
  background-color: #303030;
  transition: 1s;
  color: white;
  /* Remplacez ceci par la couleur que vous souhaitez appliquer en fond d'écran lors du défilement */
}
.transition1sec {
  transition: 1s;
}
.shadow-bottom {
  box-shadow: 0px 6px 12px 0px
    rgba(37.99999999999999, 170.0000000000002, 225, 0.34);
}
</style>