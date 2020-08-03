console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

Vue.component('tile-holder', {
	template: `		
    <div class="tiles">
		<frame 
		v-for="tile in tileInfo"
		:content= "tile"
		
		
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
					title: 'To Do List',
				},
				{
					image: './dist/img/Tequila-Sunrise-Popsicles-3-748x520.jpg',
					link:
						'http://circuslabs.net/~cody.powell/circus/quarterTwo/intermediatePrograming/popsiclePopUp/',
					title: 'Pop Up notification, a Popsicle if you will.',
				},
				{
					image: './dist/img/giphy.gif',
					link:
						'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/intro-giphy-master/',
					title: 'Introduction to APIs with GIPHY',
				},
				{
					image: './dist/img/particle_explosion.gif',
					link:
						'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/homeworkSix/',
					title: 'PRACTICALS!!!',
				},
				{
					image: './dist/img/videoChrome.gif',
					link:
						'http://circuslabs.net/~cody.powell/circus/quarterTwo/intermediatePrograming/programming-video-chrome-master/',
					title: 'Video Chrome Editing',
				},
				{
					image: './dist/img/bobsButton.gif',
					link:
						'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/hamburgerButton/',
					title:
						'A simple hamburger menu that reveals the finer things in life',
				},
				{
					image: './dist/img/grumpy.gif',
					link:
						'http://circuslabs.net/~cody.powell/circus/quarterOne/introToPrograming/iSaidLetThereBeLightbox/',
					title: 'RIP GRUMPY CAT! THIS ONES FOR YOU!!!',
				},
			],
			hover: false,
			selectedTile: null,
		};
	},
	methods: {
		// selectTile(image) {
		// 	this.selectedTile = image;
		// },
	},
});

Vue.component('frame', {
	props: ['content', 'hover'],
	// computed: {
	// 	isSelected() {
	// 		return this.image === this.selectedTile;
	// 	},
	// },
	template: `
	<a 
	:href="content.link">
		<img 
		@mouseover="hover = true" 
		@mouseleave="hover = false"
		:src="content.image" 
		alt="" 
		class="tile" 
		
		:class='{active: hover}'
		>
		
		<p v-if="hover" class="title">{{content.title}}</p>
		
	</a>
    `,
	// methods: {
	// 	hover() {
	// 		this.$emit('hover', this.image);
	// 	},
	// },
});

var app = new Vue({
	el: '#app',
});
