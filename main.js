const vm = Vue.createApp({
  data() {
    return { perspective: 500, rotateX: 0, rotateY: 0, rotateZ: 0 };
  },

  methods: {
    async copyToClipboard() {
      await navigator.clipboard.writeText(`transform: ${this.box.transform};`);
      return alert("Copied To Clipboard");
    },
    reset() {
      this.perspective = 500;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
  },
  computed: {
    box() {
      return {
        transform: `
        perspective(${this.perspective}px)
        rotateX(${this.rotateX}deg)
        rotateY(${this.rotateY}deg)
        rotateZ(${this.rotateZ}deg)
        `,
      };
    },
  },
}).mount("#app");
