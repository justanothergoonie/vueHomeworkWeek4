"use strict";

console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");
Vue.component('tile-holder', {
  template: "\t\t\n    <div class=\"tiles\">\n        <div>\n            <tile v-for=\"image in images\" :src=\"image\" @select=\"selectTile\" :selected-tile=\"selectedTile\"></tile>\n        </div>\n    </div>\n",
  data: function data() {
    return {
      images: ['./dist/img/ToDoList_1920x1080.jpg', './dist/img/Tequila-Sunrise-Popsicles-3-748x520.jpg', './dist/img/giphy.gif', './dist/img/particle_explosion.gif', './dist/img/videoChrome.gif', './dist/img/bobsButton.gif', './dist/img/grumpy.gif'],
      selectedTile: null
    };
  },
  methods: {
    selectTile: function selectTile(image) {
      this.selectedTile = image;
    }
  }
});
Vue.component('tile', {
  props: {
    image: String,
    selectedTile: String
  },
  computed: {
    isSelected: function isSelected() {
      return this.image === this.selectedTile;
    }
  },
  template: "\t\n        <img @click=\"select\" :src=\"image\" alt=\"\" class=\"tile\" :class=\"{active: isSelected}\">\n    ",
  methods: {
    select: function select() {
      this.$emit('select', this.image);
    }
  }
});
var app = new Vue({
  el: '#app'
});
//# sourceMappingURL=main.js.map
