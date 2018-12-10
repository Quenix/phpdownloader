$(document).ready( function () {
	$('#download').on('submit', function(e){
		e.preventDefault();
		ajaxDownloader();
	});
});

function downloadModal(videos, thumbnail){

	var html = "";
	
	for(var video in videos){
		html += "Formato: "+videos[video].format+" <br />";
		html += "Download: <a target = '_blank' href = '"+videos[video].url+"'>clique aqui</a> <br /> <br />";
	}
	
	$.alert({
	    title: videos[0].title,
	    content: "<img src="+thumbnail+">"+html,
	});
}

function helperExtractIdFromUrl(url){
    var video_id = url.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if(ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
    }

    var thumbnail = "https://img.youtube.com/vi/"+video_id+"/0.jpg";

    return thumbnail;
}


function ajaxDownloader(){
	
	var data = $("#youtubeDownloadField").val();
	var thumbnail = helperExtractIdFromUrl(data);

	$.ajax({
	    type: "POST",
	    url: "controller/Downloader.php",
	    data: {data:data},
	    dataType: "json",
	    success: function(response) {
	    	downloadModal(response, thumbnail);
	    }
	});
	
}
