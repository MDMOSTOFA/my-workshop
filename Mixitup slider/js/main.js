$(document).ready(function(){
		

			// Instantiate MixItUp:

			$('.continer_slider_images').mixItUp({
				callbacks: {
					onMixLoad: function(state){
						alert('Welcome My MixItUp Slider, Now ready  MixItUp Slider for You :)');
					}
				},
				animation: {
					effects: 'fade rotateY(-10deg)'
				},
				controls: {
					activeClass: 'active'
				},
					load: {
					filter: '.trailer'
				}
				
			});

	
	
});