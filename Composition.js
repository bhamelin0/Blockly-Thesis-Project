//Create global variable for the player's script
var playerScript;

var instruments = new Array();

var playerScripts = new Array();

//Create notes enumeration
var letter = {
    A: 0,
    B: 1,
    C: 2,
	D: 3,
    E: 4,
    F: 5,
	G: 6,
	_: -1
};

var noteType = {
    Whole: 1,
    Half: 2,
    Quarter: 3,
	Eighth: 4,
};


// Define the Composition constructor
var Composition = function(monster, clef, noteCode,location){
	this.monster = monster;
	this.clef = clef;
	this.noteCode = noteCode;
	this.noteString = "";
	this.tempo = 1;
	this.noteArray = [];
	this.delayTime = 0;
	this.preparedNotes = [];
	this.location = location;
	this.position = 0;
};

//Function to render the background of the div's musical notation.
Composition.prototype.draw = function(){
	//evaluateScore;
}

Composition.prototype.playNote = function(note, octave){
	octave = octave % 7;
	
	var loc = this.location;
	
	//Determine delay through note
	switch(note) {
    case noteType.Whole:
		this.preparedNotes.push(setTimeout(function(){document.getElementById(loc).value += octave;},this.delayTime));
		this.delayTime += 2000 * this.tempo;
        break;
    case noteType.Half:
		this.preparedNotes.push(setTimeout(function(){document.getElementById(loc).value += octave;},this.delayTime));
		this.delayTime +=1000 * this.tempo;
        break;
	case noteType.Quarter:   
		this.preparedNotes.push(setTimeout(function(){document.getElementById(loc).value += octave;},this.delayTime));
		this.delayTime += 500 * this.tempo;
        break;
    case noteType.Eighth:
		this.preparedNotes.push(setTimeout(function(){document.getElementById(loc).value += octave;},this.delayTime));
		this.delayTime += 250 * this.tempo;
        break;
	}
}

//Function to evaluate the notes and play the song
Composition.prototype.playSong = function(){
	this.cancelSong();
	eval(this.noteCode);
}

Composition.prototype.setNoteCode = function(newNoteCode){
this.noteCode = newNoteCode;
}

Composition.prototype.setPosition = function(pos){
this.position = pos;
}

Composition.prototype.toString = function(){
    var out = this.monster + " " + this.clef + "\n" + this.noteCode;
    return out;
}

Composition.prototype.cancelSong = function(){
	for (var p = 0; p < this.preparedNotes.length; p++) {
		clearTimeout(this.preparedNotes[p]);
	}

	//Reset the array
	this.preparedNotes = [];
	this.delayTime = 0;	
}


//Create an instance of a composition
var exampleSong = new Composition("furcorn","treble clef","Sample Code","ExampleSong");

