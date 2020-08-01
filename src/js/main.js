console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

Vue.component('tile-holder', {
	template: `		
    <div class="tiles">
		<frame 
		v-for="tile in tileInfo"
		:href= "tile.link"
		@hover="selectTile" 
		:selected-tile="selectedTile"
		></frame>
    </div>
`,
	data() {
		return {
			tileInfo: [
				{
					image: './dist/img/ToDoList_1920x1080.jpg',
					link:
						'http://circuslabs.net/~cody.powell/circus/quarterTwo/intermediatePrograming/toDoList/',
				},
				{
					image: './dist/img/Tequila-Sunrise-Popsicles-3-748x520.jpg',
					link:
						'http://circuslabs.net/~cody.powell/circus/quarterTwo/intermediatePrograming/popsiclePopUp/',
				},
				{
					image: './dist/img/giphy.gif',
					link:
						'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/intro-giphy-master/',
				},
				{
					image: './dist/img/particle_explosion.gif',
					link:
						'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/homeworkSix/',
				},
				{
					image: './dist/img/videoChrome.gif',
					link:
						'http://circuslabs.net/~cody.powell/circus/quarterTwo/intermediatePrograming/programming-video-chrome-master/',
				},
				{
					image: './dist/img/bobsButton.gif',
					link:
						'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/hamburgerButton/',
				},
				{
					image: './dist/img/grumpy.gif',
					link:
						'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/iSaidLetThereBeLightbox/',
				},
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
	props: ['tileInfo'],
	computed: {
		isSelected() {
			return this.image === this.selectedTile;
		},
	},
	template: `
	<a 
	href="">
		<img 
		@mouseover="hover" 
		src="tileInfo.image" 
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
