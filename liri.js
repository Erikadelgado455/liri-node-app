function twitter(inputs) {
	var params = {screen_name: inputs, count: 20};
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
			if (!error) {
				for (i = 0; i < tweets.length; i ++){
					console.log("Tweet: " + "'" + tweets[i].text + "'" + " Created At: " + tweets[i].created_at);
				}
			} else {
				console.log(error);
			}
		});
}