/* Assignment 3. WEOP spring 2013
*  jQuery plugIn - uPlayer
*  Carsten Petersen, Elín Gylfadóttir, Sigrún Inga Kristinsdóttir
*/

;

(function($){
	$.fn.uPlayer = function(playlist, userOptions){

		return this.each(function(elem){

			//Breytur
			var defaultOptions = {
				// more options is better than fewer
				autoPlay: true,
				defaultVolume: 80,
				errorMsg: "Unskyld men sangen kan ikke blive loaded"
			};

			var finalOptions = $.extend(defaultOptions, userOptions);
				
				// ef við ætlum að útfæra fallback þá að setja 
				/* if(Modernizr.audio == true){
					okkar player hér
				}
				else
					einhvern vara player hér. t.d. niftyPlayer
					þetta er ekki krafa heldur aukabónus.
				*/

			// HTML fyrir spilarann
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
				"<div>" +
				"<img class='button' id='player_rew' src='image/player_rew.gif'>" +
				"<span>" + 
				"<progress class='progress' id='player_progress' value='23' min='0' max='100'></meter>" +
				"</span>" +
				"<img class='button' id='player_fwd' src='image/player_fwd.gif'>" + 
				"</div>" +
				"<div>" +
				"<meter class='progress' id='player_volume' value='23' min='0' max='100'></meter>" +
				"</div>" +
				"</div>"
			);

			/* Ýmsar breytur */
			var songCount = 0;	
			player.src = playlist[songCount];
			var isPlaying = true;			
			var playImage = "image/player_play.gif"
			var pauseImage = "image/player_pause.gif"

			$(player).bind("ended", function(){
				songCount++;
				if (songCount > playlist.length-1) {
					songCount = 0;
				};
				playSong();
			})
			// autoPlay ef finalOpstion autoPlay er á true
			if(Modernizr.audio == true){
				//player.src = playlist[0];
				if(finalOptions.autoPlay == true){
					playSong();
				}
				
			}
			// Event handlers and functions.	

			/* Play / Pause button */			
			$('#player_play').click(function(){ 
				if(isPlaying == true){
					pauseSong();
				}
				else{
					playSong();
				}
			})

			/* Increase songcount when song ends.
			 If last song then loop back to start of list.*/
			 function songEnd(){
			$("audio").on("ended", function() { 
		    	songCount++;

		    	if (songCount > playlist-1){
		    		songCount = 0;
		    	}
			})}


			/* Play function. */
			function playSong(){
				//songCount++;
				//setTimeout(function (){
					$("#player_play").attr("src", pauseImage);
					player.src = playlist[songCount];
					player.play();					
					isPlaying = true;
				//});//, player.duration); // Hér á eftir að setja breytu með sing length.
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
			$('#player_stop').click(function(){ stopSong(); })

			function stopSong(){
				pauseSong();
				songCount = 0;
				console.log("in the player_stop function")
			}

			/* Previous song function. Ef counter er minni en núll fer spilarinn á pause. */
			$('#player_start').click(function(){ prevSong(); })

			function prevSong(){
				songCount--;
				if (songCount < 0) {					
					pauseSong();
					songCount = 0;
					console.log("pause")
				}
				else{
					playSong();
					console.log("Previous song: " + songCount)
				}
			}

			/* Next song function. Ef counter er hærri en lengd playlistans fer spilarinn á pause. */
			$('#player_end').click(function(){ nextSong(); })

			function nextSong(){
				songCount++;
				if (songCount > playlist.length-1) {
					songCount = 0;
					playSong();
					/*pauseSong();
					songCount = playlist.length-1;
					console.log("pause")*/
				}
				else{
					playSong();
					//console.log("Next song: " + songCount)	
				}
				console.log("Next song: " + songCount)
			}

		});
	};

})(jQuery);