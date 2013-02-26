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
			// var audio = document.createElement('audio');
			var uPlayerFrame = document.createElement('div');
			uPlayerFrame.setAttribute('id', 'uPlayerFrame');

			var playFunction = document.createElement('div');
			playFunction.setAttribute('id', 'playFunction');
			document.getElementById('playFunction').appendChild('uPlayerFrame');

			var player_start = document.createElement('span');
			player_start.setAttribute('id', 'player_start');
			document.getElementById('player_start').appendChild('playFunction');

			var player_play = document.createElement('span');
			player_play.setAttribute('id', 'player_play');
			document.getElementById('player_play').appendChild('playFunction');

			var player_pause = document.createElement('span');
			player_pause.setAttribute('id', 'player_pause');
			document.getElementById('player_pause').appendChild('playFunction');

			var player_stop = document.createElement('span');
			player_stop.setAttribute('id', 'player_stop');
			document.getElementById('player_stop').appendChild('playFunction');

			var player_end = document.createElement('span');
			player_end.setAttribute('id', 'player_end');
			document.getElementById('player_end').appendChild('playFunction');

			var playProgressFunction = document.createElement('div');
			playFunction.setAttribute('id', 'playProgressFunction');
			document.getElementById('playProgressFunction').appendChild('uPlayerFrame');

			var player_rew = document.createElement('span');
			player_rew.setAttribute('id', 'player_rew');
			document.getElementById('player_rew').appendChild('playProgressFunction');
			
			var player_progress = document.createElement('meter');
			player_progress.setAttribute('id', 'player_progress');
			document.getElementById('player_progress').appendChild('playProgressFunction');

			var player_fwd = document.createElement('span');
			player_fwd.setAttribute('id', 'player_fwd');
			document.getElementById('player_fwd').appendChild('playProgressFunction');

			var player_volume = document.createElement('meter');
			player_volume.setAttribute('id', 'player_volume');
			document.getElementById('player_volume').appendChild('playProgressFunction');

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