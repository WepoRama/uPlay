/* Assignment 3. WEOP spring 2013
*  jQuery plugIn - uPlayer
*  Carsten Petersen, Elín Gylfadóttir, Sigrún Inga Kristinsdóttir
*/

;

(function($){
	$.fn.uPlayer = function(playlist, userOptions){

		return this.each(function(elem){

			/* initial */
			var defaultOptions = {
				// more options is better than fewer
				autoPlay: true,
				defaultVolume: 1,
				errorMsg: "Unskyld men sangen kan ikke blive loaded"
			};

			var finalOptions = $.extend(defaultOptions, userOptions);
				
			/* HTML fyrir spilarann */
			var player = document.createElement('audio');
			$('player').appendTo(this);
			$('player').addClass('uPlayerAudio');

			$(this).append( "<div id='uPlayFrame'>" +
				"<div id='playFunction'>" +
				"<img class='button' id='player_start' src='image/player_start.gif'>" +
				"<img class='button' id='player_play' src='image/player_pause.gif'>" +
				"<img class='button' id='player_stop' src='image/player_stop.gif'>" +
				"<img class='button' id='player_end' src='image/player_end.gif'>" +
				"</div>" +
				"<div id='progressFunction'>" +
				"<meter class='progress' id='player_progress' value='23' min='0' max='100'></meter>" +
				"</div>" +
				"<div>" +
				"<img class='button' id='player_volume' src='image/volume_medium.gif'>" +
				"<meter class='progress' id='player_volume_slide' min='0' max='1'></meter>" +
				"</div>" +
				"<ol id='play_list'>"+
				"</ol>" +
				"</div>"
			);

			/* Ýmsar breytur */
			var songCount = 0;	
			player.src = playlist[songCount];
			var isPlaying = true;			
			var playImage = "image/player_play.gif";
			var pauseImage = "image/player_pause.gif";
			var volumePlay = finalOptions.audioVolume;			
			player.volume = volumePlay;
			var volumeTemp = 0;
			var onMute = false;
			var highImage = "image/volume_high.gif";
			var mediumImage = "image/volume_medium.gif";
			var lowImage = "image/volume_low.gif";
			var muteImage = "image/volume_muted.gif";

			/* Progress */
			$('#player_progress').attr('value', 0);
			player.addEventListener("timeupdate", function(){
				var length = player.duration;
				var secounds = player.currentTime;
				var progr = (secounds/length)*100;
				$('#player_progress').val(progr);
			})

			/* Volume */
			$('#player_volume_slide').attr('value', player.volume);

			$(player).bind("ended", function(){
				songCount++;
				if (songCount > playlist.length-1) {
					songCount = 0;
				};
				playSong();
			})

			// autoPlay ef finalOptions autoPlay er á true
			if(Modernizr.audio == true){
				//setja inn loadPlaylist fallið sem tekur inn listan og ol elementið
				loadPlaylist(playlist, "#play_list");
				if(finalOptions.autoPlay == true){
					playSong();
				}
			}

			/* Play / Pause button */			
			$('#player_play').click(function(){ 
				if(isPlaying == true){
					pauseSong();
				}
				else{
					playSong();
				}
			})
			
			$('#player_stop').click(function(){ stopSong(); })

			$('#player_start').click(function(){ prevSong(); })

			$('#player_end').click(function(){ nextSong(); })
			
			$('#player_volume').click(function(){ volumeSong();})

			$('#player_volume_slide').click(function(e){
				var offset = $(this).offset();
        		player.volume = (e.clientX-offset.left)/$(this).width();
        		//var max = $(this).attr("max");
        		$("#player_volume_slide").attr("value", player.volume);
        		if(player.volume == 0){
        			$("#player_volume_slide").attr("src", muteImage);
        		}
        		else if(player.volume >= 0.7){
					$("#player_volume").attr("src", highImage);
				}
				else if(player.volume <= 0.3){
					$("#player_volume").attr("src", lowImage);
				}
				else
					$("#player_volume").attr("src", mediumImage);
        	})

			/* Play / pause function. */
			function playSong(){
				$("#player_play").attr("src", pauseImage);
				for (var i = 0; i < playlist.length; i++) {
					$("#song" + i ).css("color", "#69DB0E");
				};					
				player.src = playlist[songCount];
				$("#song" + songCount ).css("color", "#ff9f00");
				player.play();					
				isPlaying = true;
				console.log("in the player_play function")
			}

			/* Pause function. */
			function pauseSong(){
				$("#player_play").attr("src", playImage);
				player.pause();
				isPlaying = false;
				console.log("in the player_pause function")	
			}

			/* Stop function.*/
			function stopSong(){
				pauseSong();
				songCount = 0;
				console.log("in the player_stop function")
			}

			/* Previous song function. Ef counter er minni en núll fer spilarinn á pause. */
			function prevSong(){
				songCount--;
				if (songCount < 0) {
					songCount = playlist.length-1;
					playSong();
					console.log("play in if prevSong")
				}
				else{
					playSong();
					console.log("in the player_start function")
				}
			}

			/* Next song function. Ef counter er hærri en lengd playlistans fer spilarinn á pause. */
			function nextSong(){
				songCount++;
				if (songCount > playlist.length-1) {
					songCount = 0;
					playSong();
					console.log("play in if nextSong")
				}
				else{
					playSong();
					console.log("in the player_end function")	
				}
			}

			function loadPlaylist(playlist, unorderListElem){
				var playlistElem = " ";
				for (var i = 0; i < playlist.length; i++) {
					playlistElem += "<li class='listElem' id='song" + i + "'>" + playlist[i] + "</il>";
				};
				$(unorderListElem).append(playlistElem)
			}

			function volumeSong(){
				if(onMute === true){
					player.volume = volumeTemp
					onMute = false;
					if(volumePlay >= 0.7){
						$("#player_volume").attr("src", highImage);
					}
					else if(volumePlay <= 0.3){
						$("#player_volume").attr("src", lowImage);
					}
					else
						$("#player_volume").attr("src", mediumImage);					
				}
				else{
					volumeTemp = player.volume;
					player.volume = 0;
					onMute = true;
					$("#player_volume").attr("src", muteImage);
				}
				$("#player_volume_slide").val(player.volume);
			}

		});
	};

})(jQuery);