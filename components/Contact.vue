<template>
  <div>
    <!-- Main content -->
    <main class="container mx-auto my-4 px-4 2xl:px-24 3xl:px-4 md:mb-0 pb-8">
      <div class="text-center pb-4 xl:pb-12">
        <p class="mb-8 text-2xl">Nous sommes à votre écoute !</p>
      </div>
      <!-- Contact form -->
      <section class="lg:flex lg:flex-wrap lg:justify-around xl:pr-20">
        <div
          class="lg:flex-grow 3xl:flex-grow-0 3xl:w-2/6 flex flex-col lg:pr-4 md:items-center"
        >
          <form
            class="max-w-lg md:w-full"
            action="https://getform.io/f/Pe9qZBeL"
            method="POST"
            enctype="multipart/form-data"
          >
            <!-- Nom et prénom -->
            <div class="mb-4">
              <label for="fullName" class="block text-base"
                >Nom et prénom<span class="text-red-600">*</span></label
              >
              <input
                id="fullName"
                v-model="fullName"
                type="text"
                name="fullName"
                class="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>

            <!-- Adresse e-mail -->
            <div class="mb-4">
              <label for="email" class="block text-base"
                >Email<span class="text-red-600">*</span></label
              >
              <input
                id="email"
                v-model="email"
                type="email"
                name="email"
                class="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>

            <!-- Objet -->
            <div class="mb-4">
              <label for="object" class="block text-base"
                >Objet<span class="text-red-600">*</span></label
              >
              <input
                id="object"
                v-model="object"
                type="text"
                name="object"
                class="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>

            <!-- Message -->
            <div class="mb-4">
              <label for="message" class="block text-base"
                >Message<span class="text-red-600">*</span></label
              >
              <textarea
                id="message"
                v-model="message"
                name="message"
                rows="4"
                class="mt-1 p-2 border rounded-md w-full"
                required
              ></textarea>
            </div>

            <!-- Fichier(s) -->
            <div class="flex flex-col items-center mb-4">
              <label for="file" class="block text-base">Fichier(s) :</label>
              <input
                id="file"
                type="file"
                name="files[]"
                multiple
                class="mt-1 p-2 border rounded-md w-60 text-sm bg-gray-300"
              />
              <i>5 Mo max</i>
            </div>

            <!-- Captcha -->
            <div
              class="g-recaptcha mb-4"
              data-sitekey="6LeCe3IpAAAAALHABArRvvItxIPbk25A7DqT6ZZH"
            ></div>

            <!-- Bouton Envoyer -->
            <div class="text-center sm:text-start md:text-center">
              <button
                class="lexend relative hover:text-black py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-10 after:z-[-10] after:bg-[#68C3D4] after:rounded-t-full after:w-full after:bottom-0 after:left-0 w-1/2 self-center font-rubik-doodle-shadow hover:font-bold"
                type="submit"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
        <div class="hidden xl:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d94019.6345440772!2d2.32285572128804!3d42.57411166584408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aff8c5b46cf29d%3A0xae3c06ca22e5aa6f!2s7%20Chem.%20du%20Mas%20Bellonte%2C%2066820%20Fuilla!5e0!3m2!1sfr!2sfr!4v1707410304488!5m2!1sfr!2sfr"
            width="450"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="border-2 border-orange-400 rounded-md"
          />
        </div>
      </section>

      <!-- Coordonnées -->
      <section class="mt-8 text-center">
        <div class="pb-4 lg:pb-0">
          <hr
            class="border-t-2 border-orange-500 mb-6 mx-auto w-16 opacity-50"
          />
          <h2 class="text-2xl font-bold mb-4">Détails supplémentaires</h2>
          <div class="text-lg flex flex-col gap-2">
            <a href="tel:+33 6 75 53 72 52" target="_blank">
              <i class="fas fa-phone"></i>
              +33 6 75 53 72 52
            </a>
            <a href="mailto:jean-pierre.lefevre813@orange.fr" target="_blank">
              <i class="fas fa-envelope"></i> jean-pierre.lefevre813@orange.fr
            </a>
            <a href="https://maps.app.goo.gl/SMRWnJ9YUquGmZ8B8" target="_blank">
              <i class="fas fa-house"></i> 7 Chemin du Mas Bellonte 66820 FUILLA
            </a>
          </div>
        </div>
        <div class="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d94019.6345440772!2d2.32285572128804!3d42.57411166584408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aff8c5b46cf29d%3A0xae3c06ca22e5aa6f!2s7%20Chem.%20du%20Mas%20Bellonte%2C%2066820%20Fuilla!5e0!3m2!1sfr!2sfr!4v1707410304488!5m2!1sfr!2sfr"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full md:w-3/4 mt-2 xl:hidden border-2 border-orange-400 rounded-md"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
  data() {
    return {
      fullName: "",
      email: "",
      message: "",
      object: "",
    };
  },
  methods: {
    submitForm() {
      // Mettez ici la logique pour envoyer le formulaire (par exemple, une requête API)
      // eslint-disable-next-line no-console
      console.log("Formulaire soumis !");
    },
  },
};
</script>