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
				"<img id='player_start' src='image/player_start.gif'>" +
				"<img id='player_play' src='image/player_play.gif'>" +
				"<img id='player_pause' src='image/player_pause.gif'>" +
				"<img id='player_stop' src='image/player_stop.gif'>" +
				"<img id='player_end' src='image/player_end.gif'>" +
				"</div>" +
				"<div>" +
				"<img id='player_rew' src='image/player_rew.gif'>" +
				"<span>" + 
				"<progress class='progress' id='player_progress' value='23' min='0' max='100'></meter>" +
				"</span>" +
				"<img id='player_fwd' src='image/player_fwd.gif'>" + 
				"</div>" +
				"<div>" +
				"<meter class='progress' id='player_volume' value='23' min='0' max='100'></meter>" +
				"</div>" +
				"</div>"
			);

			var songCount = 0;	
			player.src = playlist[songCount];
			
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
			// Event handlers and funtions.	

			/* Play button */			
			$('#player_play').click(function(){ playSong()	})

			/* Play function. */
			function playSong(){
				//songCount++;
				setTimeout(function (){
					player.src = playlist[songCount];
					player.play();
				}, 500); // Hér á eftir að setja breytu með sing length.
				console.log("in the player_play function")
			}

				/*while(songCount < playlist.length){
					player.src = playlist[songCount];
					//player.play();
					console.log(songCount);
					songCount++					
				}*/
				/*
				if (songCount < playlist.length) {
					player.src = playlist[songCount];
					player.play();
					console.log("songCount" + songCount)
				};
				songCount++;*/

				/*else{
					player.pause();
					console.log("pause in player_play function")
				}*/
				/*for (var i = 0; i < playlist.length; i++) {
					next();
				};*/
			      	
			    /*player.src = playlist[songCount];
			   	player.play();
			   	songCount++;*/
			   	//player.src = playlist[];
			   	//player.play();
			/* Pause function*/
			// þetta fall er ekki klárt. Reyna að útfæra þannig að pause og play séu sami gaurinn - SIK
			$('#player_pause').click(function(){
				player.pause();
				console.log("in the player_pause function")
			})

			/* Stop function.
			*/
			$('#player_stop').click(function(){ stopSong(); })

			function stopSong(){
				player.pause();
				songCount = 0;
				console.log("in the player_stop function")
			}

			/* Next song function. Ef counter er minni en núll fer 
			*  spilarinn á pause. */
			// Held að þetta fall sé fullbúið - SIK
			$('#player_start').click(function(){
				songCount--;
				if (songCount < 0) {					
					player.pause();
					songCount = 0;
					console.log("pause")
				}
				else{
					player.src = playlist[songCount];
					player.play();
					console.log("in the player_start function")
				}
				
			})

			/* Next song function. Ef counter er hærri en lengd playlistans fer 
			*  spilarinn á pause. */
			// Held að þetta fall sé fullbúið - SIK
			$('#player_end').click(function(){
				songCount++;
				if (songCount > playlist.length-1) {
					player.pause();
					songCount = playlist.length-1;
					console.log("pause")
				}
				else{
					player.src = playlist[songCount];
					player.play();
					console.log("in the player_end function")	
				}
				
			})

		});
	};

})(jQuery);