function(head, req){
	var locations = [];
	var accuracy = req.query.accuracy || 100;
	while(row = getRow()){
		if (row.value.username == req.query.username && row.value.location.position.horizontal_accuracy <= accuracy){
			delete row.value._id;
			delete row.value._rev;
			locations.push(JSON.stringify(row.value));
			//send(JSON.stringify(row.value));
		}
	}
	send("["+locations.join(",")+"]");
}