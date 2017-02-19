$.get("https://api.stackexchange.com/2.2/users/1163298/associated", function(data) {
	rep = 0;
	
	for( i = 0; i < data.items.length; i++ ) {
		if( data.items[i].reputation > 200 ) {
			rep += data.items[i].reputation;
		}
	}

	rep = (rep + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
	$("#reputation").text('Reputation: ' + rep);
});