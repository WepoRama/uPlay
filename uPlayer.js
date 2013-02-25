;

function($){
	$.fn.uPlayer = function(userOption){

		var defaultOption = {
			autoPlay: false,
			defaultVolume: 80
		};

		var finalOption = $.extend(defaultOption, userOption);

		return this.each(function(elem){
			//TODO:
			// 1. búa til HTML fyrir spilarann
			// 2. hengja þetta HTML á elementið sem við erum að vinna á

			var player = $("<audio></audio>");

			var playButton = $("<button value='play'>");
			playButton.click(function(){
				player.play();
			});

			player.on("progress", function(e){
				// TODO: uppfæra progressbarinn
			});

			player.on("ended", function(e){
				// TODO: skipta yfir á næsta lag
			})


		})
	}

})(jQuery);