var scoreURL = '/score/' + $("#score-name").text() + '.svg';
const noteClass = {
	'class="Note" fill="#111111"':'class="Note-C"',
	'class="Note" fill="#222222"':'class="Note-D"',
	'class="Note" fill="#333333"':'class="Note-E"',
	'class="Note" fill="#444444"':'class="Note-F"',
	'class="Note" fill="#555555"':'class="Note-G"',
	'class="Note" fill="#666666"':'class="Note-A"',
	'class="Note" fill="#777777"':'class="Note-B"',
	'class="Note" fill="#aaaaaa"':'class="Note-Cs"',
	'class="Note" fill="#bbbbbb"':'class="Note-Ds"',
	'class="Note" fill="#cccccc"':'class="Note-Fs"',
	'class="Note" fill="#dddddd"':'class="Note-Gs"',
	'class="Note" fill="#eeeeee"':'class="Note-As"',
};

if ($("#score").length > 0) {
	$.ajax({
	    type: 'get',
	    url: scoreURL,
	    dataType: 'text',
	    success: function(data) {
	    	
	//        $.each(noteClass, function(txtorig, txtnew) {
	//            data = data.replaceAll(txtorig, txtnew);
	//        });
	        
	        $('#score').html(data);
	    }
	});
}