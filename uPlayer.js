// Assignment 3. WEOP 2013
// uPlayer
// Carsten Petersen, Elín Gylfadóttir, Sigrún Inga Kristinsdóttir

;

(function($){
	$.fn.uPlayer = function(playlist, userOptions){

		// það gætu þurft að vera breytur hér.

		return this.each(function(elem){

		var defaultOptions = {
			// more options is better than fewer
			autoPlay: false,
			defaultVolume: 80,
			errorMsg: "Unskyld men sangen kan ikke blive loaded"
		};

		var finalOptions = $.extend(defaultOptions, userOptions);
			//TODO:
			// ef við ætlum að útfæra fallback þá að setja 
			/* if(Modernizr.audio == true){
				okkar player hér
			}
			else
				einhvern vara player hér. t.d. niftyPlayer
			*/
			// 1. búa til HTML fyrir spilarann
			var player = document.createElement('audio');
			$('player').appendTo(this);
			$('player').addClass('uPlayerAudio');

			$(this).append(

				// Hér set ég inn html eins og muckUp er. strengur + strengur.

				);
/*
			var uPlayerFrame = document.createElement('div');
			uPlayerFrame.setAttribute('id', 'uPlayerFrame');
			document.getElementById('uPlayerFrame').appendChild('audio');

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
*/
			// 2. hengja þetta HTML á elementið sem við erum að vinna á


			var playButton = $("<button value='play'>");
			playButton.click(function(){
				consol.log("inn í play function")
				player.play();
			});

			$('id á takkanumn').click(function(){
				uPlaySong();
			});

			// Síðan þarf að útfæra fallið fyrir uPlaySong(); athuga með að skipta um mynd ef fyrir play og pause.

		});
	};

})(jQuery);