"use strict";

console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");
Vue.component('tile-holder', {
  template: "\t\t\n    <div class=\"tiles\">\n\t\t<frame \n\t\tv-for=\"tile in tileInfo\"\n\t\t:content= \"tile\"\n\t\t\n\t\t\n\t\t></frame>\n    </div>\n",
  data: function data() {
    return {
      tileInfo: [{
        image: './dist/img/ToDoList_1920x1080.jpg',
        link: 'http://circuslabs.net/~cody.powell/circus/quarterTwo/intermediatePrograming/toDoList/',
        title: 'To Do List'
      }, {
        image: './dist/img/Tequila-Sunrise-Popsicles-3-748x520.jpg',
        link: 'http://circuslabs.net/~cody.powell/circus/quarterTwo/intermediatePrograming/popsiclePopUp/',
        title: 'Pop Up notification, a Popsicle if you will.'
      }, {
        image: './dist/img/giphy.gif',
        link: 'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/intro-giphy-master/',
        title: 'Introduction to APIs with GIPHY'
      }, {
        image: './dist/img/particle_explosion.gif',
        link: 'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/homeworkSix/',
        title: 'PRACTICALS!!!'
      }, {
        image: './dist/img/videoChrome.gif',
        link: 'http://circuslabs.net/~cody.powell/circus/quarterTwo/intermediatePrograming/programming-video-chrome-master/',
        title: 'Video Chrome Editing'
      }, {
        image: './dist/img/bobsButton.gif',
        link: 'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/hamburgerButton/',
        title: 'A simple hamburger menu that reveals the finer things in life'
      }, {
        image: './dist/img/grumpy.gif',
        link: 'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/iSaidLetThereBeLightbox/',
        title: 'RIP GRUMPY CAT! THIS ONES FOR YOU!!!'
      }],
      hover: false,
      selectedTile: null
    };
  },
  methods: {// selectTile(image) {
    // 	this.selectedTile = image;
    // },
  }
});
Vue.component('frame', {
  props: ['content', 'hover'],
  // computed: {
  // 	isSelected() {
  // 		return this.image === this.selectedTile;
  // 	},
  // },
  template: "\n\t<a \n\t:href=\"content.link\">\n\t\t<img \n\t\t@mouseover=\"hover = true\" \n\t\t@mouseleave=\"hover = false\"\n\t\t:src=\"content.image\" \n\t\talt=\"\" \n\t\tclass=\"tile\" \n\t\t\n\t\t:class='{active: hover}'\n\t\t>\n\t\t\n\t\t<p v-if=\"hover\" class=\"title\">{{content.title}}</p>\n\t\t\n\t</a>\n    " // methods: {
  // 	hover() {
  // 		this.$emit('hover', this.image);
  // 	},
  // },

});
var app = new Vue({
  el: '#app'
});
//# sourceMappingURL=main.js.map
