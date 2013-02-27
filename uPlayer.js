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

			$(this).append( "<div id='uPlayFrame'>" +
				"<div id='playFunction'>" +
				"<img id='player_start' src='player_start.gif'>" +
				"<img id='player_play' src='player_play.gif'>" +
				"<img id='player_pause' src='player_pause.gif'>" +
				"<img id='player_stop' src='player_stop.gif'>" +
				"<img id='player_end' src='player_end.gif'>" +
				"</div>" +
				"<div>" +
				"<img id='player_rew' src='player_rew.gif'>" +
				"<span>" + 
				"<meter class='progress' id='player_progress' value='23' min='0' max='100'></meter>" +
				"</span>" +
				"<img id='player_fwd' src='player_fwd.gif'>" + 
				"</div>" +
				"<div>" +
				"<meter class='progress' id='player_volume' value='23' min='0' max='100'></meter>" +
				"</div>" +
				"</div>"
				);

			// 2. hengja þetta HTML á elementið sem við erum að vinna á



			$('id á takkanumn').click(function(){
				uPlaySong();
			});

			// Síðan þarf að útfæra fallið fyrir uPlaySong(); athuga með að skipta um mynd ef fyrir play og pause.
			// og gera þetta fyrir hverja virkni.
		});
	};

})(jQuery);