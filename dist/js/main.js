"use strict";

console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");
Vue.component('tile-holder', {
  template: "\t\t\n    <div class=\"tiles\">\n\t\t<frame \n\t\tv-for=\"tile in tileInfo\"\n\t\t:href= \"tile.link\"\n\t\t@hover=\"selectTile\" \n\t\t:selected-tile=\"selectedTile\"\n\t\t></frame>\n    </div>\n",
  data: function data() {
    return {
      tileInfo: [{
        image: './dist/img/ToDoList_1920x1080.jpg',
        link: 'http://circuslabs.net/~cody.powell/circus/quarterTwo/intermediatePrograming/toDoList/'
      }, {
        image: './dist/img/Tequila-Sunrise-Popsicles-3-748x520.jpg',
        link: 'http://circuslabs.net/~cody.powell/circus/quarterTwo/intermediatePrograming/popsiclePopUp/'
      }, {
        image: './dist/img/giphy.gif',
        link: 'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/intro-giphy-master/'
      }, {
        image: './dist/img/particle_explosion.gif',
        link: 'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/homeworkSix/'
      }, {
        image: './dist/img/videoChrome.gif',
        link: 'http://circuslabs.net/~cody.powell/circus/quarterTwo/intermediatePrograming/programming-video-chrome-master/'
      }, {
        image: './dist/img/bobsButton.gif',
        link: 'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/hamburgerButton/'
      }, {
        image: './dist/img/grumpy.gif',
        link: 'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/iSaidLetThereBeLightbox/'
      }],
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
  props: ['tileInfo'],
  computed: {
    isSelected: function isSelected() {
      return this.image === this.selectedTile;
    }
  },
  template: "\n\t<a \n\thref=\"\">\n\t\t<img \n\t\t@mouseover=\"hover\" \n\t\tsrc=\"tileInfo.image\" \n\t\talt=\"\" \n\t\tclass=\"tile\" \n\t\t:class=\"{active: isSelected}\">\n\t</a>\n    ",
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
