function(doc) {
    if (doc.location) {
        emit({
            type: "Point",
            coordinates: [doc.location.position.latitude, doc.location.position.longitude]
        }, doc);
    }
	else {
		emit({
            type: "Point",
            coordinates: [0,0]
        }, doc);
		
	}
}