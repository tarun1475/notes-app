const fs = require('fs');



var fetchNotes = () => {
	try{
		var notesString = fs.readFileSync("notes-json.js");
		return JSON.parse(notesString);

	} catch(e){
		return[];
	}
}

var saveNotes = (notes) => {
	fs.writeFileSync("notes-json.js", JSON.stringify(notes));
}

var addNote = (title , body)  => {
	var notes = fetchNotes();

	var note = {
		title,
		body
	};

	var duplicatesNotes = notes.filter((note) => note.title === title);
	// console.log(duplicatesNotes);

	if(duplicatesNotes.length === 0 ){
			notes.push(note);
			saveNotes(notes);
			return note;
	}
	
}

var removeNote = (title)  => {
	var notes = fetchNotes();

	var note = {
		title
	};

	var duplicatesNotes = notes.filter((note) => note.title === title);
	// console.log(duplicatesNotes);

	if(duplicatesNotes.length > 0 ){
			notes.pop(note);
			saveNotes(notes);
			return note;
	}
	
}

var readNote = (title)  => {
	var notes = fetchNotes();
	console.log(notes);

	var note = {
		title
	};

	var Notes = notes.filter((note) => note.title === title);
	// console.log(duplicatesNotes);

	if(Notes.length > 0 ){
			return notes;
	}
	
}


var getAll = ()  => {
	return fetchNotes();
}


module.exports = {
	addNote,
	removeNote,
	readNote,
    getAll
};