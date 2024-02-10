// mixins/scrollFadeMixin.js
export default {
  data() {
    return {
      isVisible: false,
      isFullScreen: false,
      fullScreenImageUrl: "",
      fullScreenImageName: "",
      fullScreenImageCollectionName: "",

    };
  },
  methods: {
    handleScroll() {
      const elementTop = this.$el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Vérifier si l'élément est dans la vue
      // Modifier la valeur pour faire apparaître l'élément +/- vite
      this.isVisible = elementTop < windowHeight / 1.1;
    },
    showFullScreenImage(CartesPostales) {
      // View image in full screen
      this.isFullScreen = true;
      this.fullScreenImageUrl = CartesPostales;
    },
    showFullScreenImageAll(imageUrl) {
      // View image in full screen
      this.isFullScreen = true;
      this.fullScreenImageUrl = imageUrl.imageId.asset._ref;
      this.fullScreenImageName = imageUrl.name
    },
    showFullScreenImageCollection(collection) {
      // View image in full screen
      this.isFullScreen = true;
      this.fullScreenImageUrl = collection.imageId.asset._ref;
      this.fullScreenImageCollectionName = collection.name
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll(); // Appeler la fonction une fois au montage pour vérifier la visibilité initiale
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};