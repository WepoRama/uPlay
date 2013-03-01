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
				defaultVolume: 80,
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
				"<ol id='play_list'>"+
				"</ol>" +
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
				//setja inn loadPlaylist fallið sem tekur inn listan og ol elementið
				loadPlaylist(playlist, "#play_list");
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
			
			$('#player_stop').click(function(){ stopSong(); })

			$('#player_start').click(function(){ prevSong(); })

			$('#player_end').click(function(){ nextSong(); })
			
			/* Play / pause function. */
			function playSong(){
				//songCount++;
				//setTimeout(function (){

					$("#player_play").attr("src", pauseImage);
					for (var i = 0; i < playlist.length; i++) {
						$("#song" + i ).css("color", "#69DB0E");
					};					
					player.src = playlist[songCount];
					$("#song" + songCount ).css("color", "#ff9f00");
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

		});
	};

})(jQuery);