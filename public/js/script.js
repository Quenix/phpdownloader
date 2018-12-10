$(document).ready( function () {
	$('#download').on('submit', function(e){
		e.preventDefault();
		downloadModal();
	});
});

function downloadModal(){
	$.alert({
	    title: 'Alert!',
	    content: 'Simple alert!',
	})
}