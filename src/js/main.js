console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

Vue.component('tile-holder', {
	template: `		
    <div class="tiles">
		<frame 
		v-for="image in images" 
		:image="image" 
		@hover="selectTile" 
		:selected-tile="selectedTile"
		
	></frame>
    </div>
`,
	data() {
		return {
			images: [
				'./dist/img/ToDoList_1920x1080.jpg',
				'./dist/img/Tequila-Sunrise-Popsicles-3-748x520.jpg',
				'./dist/img/giphy.gif',
				'./dist/img/particle_explosion.gif',
				'./dist/img/videoChrome.gif',
				'./dist/img/bobsButton.gif',
				'./dist/img/grumpy.gif',
			],
			links: [
				'http://circuslabs.net/~cody.powell/circus/quarterTwo/intermediatePrograming/toDoList/',
				'http://circuslabs.net/~cody.powell/circus/quarterTwo/intermediatePrograming/popsiclePopUp/',
				'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/intro-giphy-master/',
				'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/homeworkSix/',
				'http://circuslabs.net/~cody.powell/circus/quarterTwo/intermediatePrograming/programming-video-chrome-master/',
				'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/hamburgerButton/',
				'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/iSaidLetThereBeLightbox/',
			],
			selectedTile: null,
		};
	},
	methods: {
		selectTile(image) {
			this.selectedTile = image;
		},
	},
});

Vue.component('frame', {
	props: {
		image: String,
		selectedTile: String,
		link: String,
	},
	computed: {
		isSelected() {
			return this.image === this.selectedTile;
		},
	},
	template: `
	<a href="">
		<img 
		@mouseover="hover" 
		:src="image" 
		alt="" 
		class="tile" 
		:class="{active: isSelected}">
	</a>
    `,
	methods: {
		hover() {
			this.$emit('hover', this.image);
		},
	},
});

var app = new Vue({
	el: '#app',
});
