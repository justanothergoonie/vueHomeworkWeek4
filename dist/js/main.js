"use strict";

console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");
Vue.component('tile-holder', {
  template: "\t\t\n    <div class=\"tiles\">\n\t\t<frame \n\t\tv-for=\"image in images\" \n\t\t:image=\"image\" \n\t\t@hover=\"selectTile\" \n\t\t:selected-tile=\"selectedTile\"\n\t\t\n\t></frame>\n    </div>\n",
  data: function data() {
    return {
      images: ['./dist/img/ToDoList_1920x1080.jpg', './dist/img/Tequila-Sunrise-Popsicles-3-748x520.jpg', './dist/img/giphy.gif', './dist/img/particle_explosion.gif', './dist/img/videoChrome.gif', './dist/img/bobsButton.gif', './dist/img/grumpy.gif'],
      links: ['http://circuslabs.net/~cody.powell/circus/quarterTwo/intermediatePrograming/toDoList/', 'http://circuslabs.net/~cody.powell/circus/quarterTwo/intermediatePrograming/popsiclePopUp/', 'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/intro-giphy-master/', 'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/homeworkSix/', 'http://circuslabs.net/~cody.powell/circus/quarterTwo/intermediatePrograming/programming-video-chrome-master/', 'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/hamburgerButton/', 'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/iSaidLetThereBeLightbox/'],
      selectedTile: null
    };
  },
  methods: {
    selectTile: function selectTile(image) {
      this.selectedTile = image;
    }
  }
});
Vue.component('frame', {
  props: {
    image: String,
    selectedTile: String,
    link: String
  },
  computed: {
    isSelected: function isSelected() {
      return this.image === this.selectedTile;
    }
  },
  template: "\n\t<a href=\"\">\n\t\t<img \n\t\t@mouseover=\"hover\" \n\t\t:src=\"image\" \n\t\talt=\"\" \n\t\tclass=\"tile\" \n\t\t:class=\"{active: isSelected}\">\n\t</a>\n    ",
  methods: {
    hover: function hover() {
      this.$emit('hover', this.image);
    }
  }
});
var app = new Vue({
  el: '#app'
});
//# sourceMappingURL=main.js.map
