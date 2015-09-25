var app = (function($){

    var app = {};
    var video = document.getElementById("video");
    
	function filterEvent(e){
        e.stopPropagation();
        e.preventDefault();
        return false;
    }
 
	//disable text selection on page
	$('body').on('selectstart', filterEvent).on('drop', filterEvent).on('dragover', filterEvent).css({
        '-webkit-user-select':'none',
        '-moz-user-select':'none',
        '-ms-user-select':'none',
        '-o-user-select':'none',
        'user-select':'none'
        });
    
    app.play = function(){
       video.play();
       return video.currentTime;
    };

    app.pause = function(){
       video.pause();
       return video.currentTime;
    };

    app.reset = function(){
       video.currentTime = 0;
    };
    
    $(video).on("canplay", function(e){
        window.location = "http://video/canplay/";
    })
    
    return app;
 
 })(jQuery);