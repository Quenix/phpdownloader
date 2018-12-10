$(document).ready( function () {
	$('#download').on('submit', function(e){
		e.preventDefault();
		ajaxDownloader();
	});
});

function downloadModal(videos){
	
	console.log(videos);
	
	var html = "";
	
	for(var video in videos){
		html += "Formato: "+videos[video].format+" <br />";
		html += "Download: <a target = '_blank' href = '"+videos[video].url+"'>clique aqui</a> <br /> <br />";
	}
	
	$.alert({
	    title: 'Alert!',
	    content: html,
	});
}


function ajaxDownloader(){
	
	var data = $("#youtubeDownloadField").val();
	
	$.ajax({
	    type: "POST",
	    url: "controller/Downloader.php",
	    data: {data:data},
	    dataType: "json",
	    success: function(response) {
	    	downloadModal(response);
	    }
	});
	
}
