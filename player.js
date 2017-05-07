window.app = window.app || {};

$(function() {
    $(".progression-single").mediaelementplayer({
        stretching: "auto",
        audioHeight: 35,
        startVolume: 1,
        features: ["playpause", "current", "progress", "duration", "tracks", "volume"],
        isVideo: false,
        autosizeProgress: true,
        duration: 120,
        enableProgressTooltip: false,
        useSmoothHover: false,
        setDimensions: false
    });

    $("#button").bind("click", function() {
        var _pl = document.getElementById("player"),
            _timeStart = 90,
            _timeEnd = 120;

        mejs.players.mep_0.$media[0].setAttribute("duration", 120);
        _pl.src = "http://localhost:7340/rec.mp3";
        _pl.currentTime = _timeStart;
        _pl.duration = _timeEnd;
        _pl.play();
        _pl.ontimeupdate = function() {
            if (_pl.currentTime >= _timeEnd) {
                if (!_pl.paused) {
                    _pl.stop();
                }
                _pl.currentTime = _timeStart;
            }           
            //$("span.mejs-currenttime").text("00:00");
            //$("span.mejs-duration").text("02:00");
        };

        _pl.onplay = function() {
            if (_pl.currentTime >= _timeEnd) _pl.stop();
            //$("span.mejs-currenttime").text("00:00");
            //$("span.mejs-duration").text("02:00");
        };
    }); 
})

