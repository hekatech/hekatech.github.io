var elm = $('p, del, .main-content li, center');

const emojiList = [
	'4o-1','4o-2','4o-3','4o-4',
	'4o-o1','4o-o2','4o-o3','4o-o4',
	'4o-5','4o-6','4o-7',
];

elm.each(function(i){
	$.each(emojiList, function(ii,emojiName) {
		var emojiTag = ':' + emojiName + ':',
		emojiRE = new RegExp(emojiTag,'gi');
		emojiSpan =
			'<span class="hkt-emoji e'
			+ emojiName
			+ '"></span>';
		var txt = elm.eq(i).html();
		elm.eq(i).html(
        	txt.replace(emojiRE,emojiSpan)
    	);
	});
});
