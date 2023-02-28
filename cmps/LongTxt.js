export default {
  props: ["txt"],
  template: `
    Description:{displayTxt}
    <button @click="isShown=!isShown">
        Read {{isShown ? 'less' : 'more'}}
    </button>
    `,
  data() {
    return {
      isShown: false,
    };
  },
  methods: {},
  computed: {
    displayTxt() {
      if (this.isShown && this.txt.length > 100) return this.txt.slice(0, 100);
      else return this.txt;
    },
  },
};
