//Create global variable for the player's script
var instruments = new Array();
var exampleInstruments = new Array();

var playerScripts = new Array();//Contains the blockly play note code made by user

var blocksOnLevels = [50,50,5,5,5]; //Contains maximum count of blocks allowed

var playerFrozen = false; // Allow updates to the canvas objects
var exampleFrozen = false; // Allow updates to the canvas objects

//Load the images used to create the visual components of the project
var imgScore = new Image();   // creates an image element
imgScore.src = "Assets/Score.png";

var imgWhole = new Image();   // creates an image element
imgWhole.src = "Assets/Whole2.png";

var imgHalf = new Image();   // creates an image element
imgHalf.src = "Assets/Half2.png";

var imgQuarter = new Image();   // creates an image element
imgQuarter.src = "Assets/Quarter2.png";

var imgEighth = new Image();   // creates an image element
imgEighth.src = "Assets/Eighth2.png";

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
	this.monster = monster;				//Monster singing the song
	this.clef = clef;					//Clef the user is playing their music in
	this.noteCode = noteCode;			//User generated javascript

	this.preparedNotes = [];			//Array of notes to be played; Used to keep track of queue of notes
	
	this.tempo = 1;						//Speed of song
	
	this.delayTime = 0;					//Holds the current delay during runtime
	this.startDelayTime = 0;			//Variable holding the amount of time to pause before playing the music
	
	this.location = location;			//What div do I belong to?
	this.canvas = "";					//What canvas do I use?
	
	this.position = 0;					//Which instrument am I in the order?
	
	
	this.notesQueued = 0;				//Counter for the number of notes played thus far
	this.notesPlayed = 0;
	this.noteDistance = 120;			//Distance two whole notes would have from each other for scaling purposes
	this.nextNoteDistance = 0;			//Location of the next note to be played
	
	this.spriteBuffer = new Array();//Contains the list of sprites for the player buffer to draw
	
	this.height = 100 * this.position;	//Factor of position to determine the size of one instrument's note bar
	
	this.noteString = "";				//Contains the generated string to check against the victory string
	
	
	if(this.location.localeCompare("PlayerSong")==0)
	{
		this.canvas = "playerCanvas";
	}
	else
	{
		this.canvas = "exampleCanvas";
	}
};

Composition.prototype.playNote = function(note, octave){
	octave = octave % 7;	
	var that = this;
	
	//Get the current location this note is to be drawn on
	var nextNoteDistance = this.nextNoteDistance;

	var c = document.getElementById(that.canvas);
	var ctx = c.getContext("2d");
	
	//Determine delay through note
	switch(note) {
    case noteType.Whole:
		this.preparedNotes.push(setTimeout(function(){
			that.noteString += "w"+octave;
			that.spriteBuffer.push(new Sprite(imgWhole, nextNoteDistance,that.height + octave*6,30,30))//The array of notes for drawing
			that.notesPlayed++;
			if (nextNoteDistance+100 > c.width)
			{
				c.width = c.width + 200;
			}
			
		},this.delayTime));
		this.delayTime += 2000 * this.tempo;
		this.nextNoteDistance = this.nextNoteDistance +this.noteDistance;
        break;
    case noteType.Half:
		this.preparedNotes.push(setTimeout(function(){
			that.noteString += "h"+octave;
			that.spriteBuffer.push(new Sprite(imgHalf, nextNoteDistance,that.height + octave*6,30,30))//The array of notes for drawing
			that.notesPlayed++;
			if (nextNoteDistance+100 > c.width)
			{
				c.width = c.width + 100;
			}
		},this.delayTime));
		this.delayTime +=1000 * this.tempo;
		this.nextNoteDistance = this.nextNoteDistance +this.noteDistance/2;
        break;
	case noteType.Quarter:   
		this.preparedNotes.push(setTimeout(function(){
			that.noteString += "q"+octave;
			that.spriteBuffer.push(new Sprite(imgQuarter, nextNoteDistance,that.height + octave*6,30,30))//The array of notes for drawing
			that.notesPlayed++;
			if (nextNoteDistance+100 > c.width)
			{
				c.width = c.width + 50;
			}
		},this.delayTime));
		this.delayTime += 500 * this.tempo;
		this.nextNoteDistance = this.nextNoteDistance +this.noteDistance/4;
        break;
    case noteType.Eighth:
		this.preparedNotes.push(setTimeout(function(){
			that.noteString += "e"+octave;
			that.spriteBuffer.push(new Sprite(imgEighth, nextNoteDistance,that.height + octave*6,30,30))//The array of notes for drawing
			that.notesPlayed++;
			if (nextNoteDistance+100 > c.width)
			{
				c.width = c.width + 25;
			}
		},this.delayTime));
		this.delayTime += 250 * this.tempo;
		this.nextNoteDistance = this.nextNoteDistance +this.noteDistance/8;
        break;
	}
	
	this.notesQueued = this.notesQueued + 1;
	
}

//Function to evaluate the notes and play the song
Composition.prototype.playSong = function(){
	this.cancelSong();
	this.noteString = "";

	var c = document.getElementById(this.canvas);
	c.width = 600;
	
	try {
		eval(this.noteCode);
	} catch (e) {
		alert(e);
	}
}

Composition.prototype.songFinished = function(){
	
	if(this.notesPlayed == this.notesQueued)
	{
		return true;
	}
	
	else{
		return false;
	}
}

Composition.prototype.getNoteString = function(){
	return this.noteString;
}

Composition.prototype.setNoteCode = function(newNoteCode){
this.noteCode = newNoteCode;
}

Composition.prototype.setStartDelay = function(newDelay){
this.startDelayTime = newDelay;
}

Composition.prototype.setPosition = function(pos){
	this.position = pos;
	this.height = 100 * this.position;
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
	this.spriteBuffer = [];
	this.delayTime = this.startDelayTime;	
	this.noteNumber = 0;
	this.nextNoteDistance = 0;	
}

//Function to set up the preliminary drawing of the score, and the monster above it for identification purposes.
Composition.prototype.drawNoteScore = function(){
	var c = document.getElementById(this.canvas);
	var ctx = c.getContext("2d");
	
	//TODO for the length of the canvas, draw bars
	ctx.drawImage(imgScore, 0,this.height,600,100);                  // the image to draw
	
	//Draw the monster atop the score sheet
    for (var p = 0; p < this.spriteBuffer.length; p++) {
		ctx.drawImage(this.spriteBuffer[p].getImage(), this.spriteBuffer[p].getX(),this.spriteBuffer[p].getY(),this.spriteBuffer[p].getWidth(),this.spriteBuffer[p].getHeight());  
	}
}

//Create an instance of a composition
exampleInstruments.push(new Composition("furcorn","treble clef","this.playNote(3,0); this.playNote(3,1); this.playNote(4,1);","ExampleSong"));
exampleInstruments.push(new Composition("furcorn","treble clef","this.playNote(3,1); this.playNote(2,1); this.playNote(2,1);","ExampleSong"));
//exampleInstruments.push(new Composition("furcorn","treble clef","this.playNote(3,2); this.playNote(1,1); this.playNote(1,1);","ExampleSong"));

for(var i=0; i < exampleInstruments.length; i++)
{
	exampleInstruments[i].setPosition(i);

}
