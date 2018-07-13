const fs = require('fs');
const os = require('os');
const yargs = require('yargs');
const notes = require('./notes.js');

var command = process.argv[2];
var argv = yargs.argv ;

if(command === "add"){
 var note = notes.addNote(argv.title, argv.body);

 if(note){
 	console.log("Note Created...");
 	console.log(note.title);
 }
}

else if(command === "list"){
	var note = notes.getAll();
	if(note){
		console.log(note);
	}
}


else if(command === "read"){
	var note = notes.readNote(argv.title);
	if(note){
		console.log(note[0].body);
	}

	else{
		console.log("Note not Found!!");
	}
}

else if(command === "remove"){
	var note = notes.removeNote(argv.title);
	if(note){
		console.log(note.title + 'Successfully removed');
	}	
}

else{
console.log("Command  not recognized!!");
}