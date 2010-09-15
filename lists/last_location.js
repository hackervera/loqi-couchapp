function(head, req){
	row = getRow();
	if (row.value.username == req.query.username){
		delete row.value._id;
		delete row.value._rev;
		send(JSON.stringify(row.value));
	}
}