

Blockly.Blocks['composition'] = {
  init: function() {
    this.appendValueInput("Monster")
        .setCheck("Monster")
        .appendField("Monster:");
    this.appendDummyInput()
        .appendField("Clef:       ")
        .appendField(new Blockly.FieldDropdown([["Treble Clef", "TrebleClef"], ["C-Clef", "CClef"], ["Base Clef", "BaseClef"]]), "Clef");
    this.appendStatementInput("Score")
        .setCheck("Score")
        .appendField("Score:");
    this.appendDummyInput()
        .appendField("Enabled:")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "Enabled");
    this.setInputsInline(false);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['composition'] = function(block) {
	var code = "";
    if(enab == true)
    {

    }

	var monster = Blockly.JavaScript.valueToCode(block, 'Monster', Blockly.JavaScript.ORDER_ADDITION) || '0'
	var clef = block.getFieldValue('Clef');
	var enab = block.getFieldValue('Enabled');
	var script = Blockly.JavaScript.statementToCode(block, 'Score');
		
	code = 'instruments.push(new Composition("'+monster+ '","' +clef+'","","PlayerSong"))';
	playerScripts.push(script);
	
	return code;
}

Blockly.Blocks['monsterfurcorn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("Assets/Furcorn.png", 50, 50, "Furcorn"));
    this.setOutput(true, "Monster");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['monsterfurcorn'] = function(block) {
	var code = "FurCorn";
	return [code, Blockly.JavaScript.ORDER_MEMBER];
}

Blockly.Blocks['flexible_score'] = {
  init: function() {
    this.appendValueInput("Note")
        .setCheck("Note")
        .appendField("Notes:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['flexible_score'] = function(block) {
	
	code = Blockly.JavaScript.valueToCode(block, 'Note', Blockly.JavaScript.ORDER_ADDITION) || ''
	return code;
}

Blockly.Blocks['feighth'] = {
  init: function() {
    this.appendValueInput("Note")
        .setCheck("Note")
        .appendField(new Blockly.FieldImage("Assets/Eighth.png", 20, 15, "1/8"))
        .appendField(new Blockly.FieldDropdown([["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"], ["E", "E"], ["F", "F"], ["G", "G"], ["_", "_"]]), "Octave");
    this.setInputsInline(false);
    this.setOutput(true, "Note");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['feighth'] = function(block) {
	var octave = block.getFieldValue('Octave');
	octave = letter[octave];
	var code = "this.playNote(4,"+octave+");\n";
	code += Blockly.JavaScript.valueToCode(block, 'Note', Blockly.JavaScript.ORDER_ADDITION) || ''
	return [code, Blockly.JavaScript.ORDER_MEMBER];
}

Blockly.Blocks['fquarter'] = {
  init: function() {
    this.appendValueInput("Note")
        .setCheck("Note")
        .appendField(new Blockly.FieldImage("Assets/Quarter.png", 20, 15, "1/4"))
        .appendField(new Blockly.FieldDropdown([["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"], ["E", "E"], ["F", "F"], ["G", "G"], ["_", "_"]]), "Octave");
    this.setInputsInline(false);
    this.setOutput(true, "Note");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['fquarter'] = function(block) {
	var octave = block.getFieldValue('Octave');
	octave = letter[octave];
	var code = "this.playNote(3,"+octave+");\n";
	code += Blockly.JavaScript.valueToCode(block, 'Note', Blockly.JavaScript.ORDER_ADDITION) || ''
	return [code, Blockly.JavaScript.ORDER_MEMBER];
}

Blockly.Blocks['fhalf'] = {
  init: function() {
    this.appendValueInput("Note")
        .setCheck("Note")
        .appendField(new Blockly.FieldImage("Assets/Half.png", 20, 15, "1/2"))
        .appendField(new Blockly.FieldDropdown([["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"], ["E", "E"], ["F", "F"], ["G", "G"], ["_", "_"]]), "Octave");
    this.setInputsInline(false);
    this.setOutput(true, "Note");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['fhalf'] = function(block) {
	var octave = block.getFieldValue('Octave');
	octave = letter[octave];
	var code = "this.playNote(2,"+octave+");\n";
	code += Blockly.JavaScript.valueToCode(block, 'Note', Blockly.JavaScript.ORDER_ADDITION) || ''
	return [code, Blockly.JavaScript.ORDER_MEMBER];
}


Blockly.Blocks['fwhole'] = {
  init: function() {
    this.appendValueInput("Note")
        .setCheck("Note")
        .appendField(new Blockly.FieldImage("Assets/Whole.png", 20, 15, "1"))
        .appendField(new Blockly.FieldDropdown([["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"], ["E", "E"], ["F", "F"], ["G", "G"], ["_", "_"]]), "Octave");
    this.setInputsInline(false);
    this.setOutput(true, "Note");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['fwhole'] = function(block) {
	var octave = block.getFieldValue('Octave');
	octave = letter[octave];
	var code = "this.playNote(1,"+octave+");\n";
	code += Blockly.JavaScript.valueToCode(block, 'Note', Blockly.JavaScript.ORDER_ADDITION) || ''
	return [code, Blockly.JavaScript.ORDER_MEMBER];
}

Blockly.Blocks['veighth'] = {
  init: function() {
    this.appendValueInput("Note")
        .setCheck("Note")
        .appendField(new Blockly.FieldImage("Assets/Eighth.png", 20, 15, "1"))
        .appendField(new Blockly.FieldVariable("item"), "Octave");
    this.setInputsInline(false);
    this.setOutput(true, "Note");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['veighth'] = function(block) {
	var octave = block.getFieldValue('Octave');
	var code = "this.playNote(1,"+octave+");\n";
	code += Blockly.JavaScript.valueToCode(block, 'Note', Blockly.JavaScript.ORDER_ADDITION) || ''
	return [code, Blockly.JavaScript.ORDER_MEMBER];
}

Blockly.Blocks['vquarter'] = {
  init: function() {
    this.appendValueInput("Note")
        .setCheck("Note")
        .appendField(new Blockly.FieldImage("Assets/Quarter.png", 20, 15, "1"))
        .appendField(new Blockly.FieldVariable("item"), "Octave");
    this.setInputsInline(false);
    this.setOutput(true, "Note");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['vquarter'] = function(block) {
	var octave = block.getFieldValue('Octave');
	var code = "this.playNote(1,"+octave+");\n";
	code += Blockly.JavaScript.valueToCode(block, 'Note', Blockly.JavaScript.ORDER_ADDITION) || ''
	return [code, Blockly.JavaScript.ORDER_MEMBER];
}

Blockly.Blocks['vhalf'] = {
  init: function() {
    this.appendValueInput("Note")
        .setCheck("Note")
        .appendField(new Blockly.FieldImage("Assets/Half.png", 20, 15, "1"))
        .appendField(new Blockly.FieldVariable("item"), "Octave");
    this.setInputsInline(false);
    this.setOutput(true, "Note");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['vhalf'] = function(block) {
	var octave = block.getFieldValue('Octave');
	var code = "this.playNote(1,"+octave+");\n";
	code += Blockly.JavaScript.valueToCode(block, 'Note', Blockly.JavaScript.ORDER_ADDITION) || ''
	return [code, Blockly.JavaScript.ORDER_MEMBER];
}

Blockly.Blocks['vwhole'] = {
  init: function() {
    this.appendValueInput("Note")
        .setCheck("Note")
        .appendField(new Blockly.FieldImage("Assets/Whole.png", 20, 15, "1"))
        .appendField(new Blockly.FieldVariable("item"), "Octave");
    this.setInputsInline(false);
    this.setOutput(true, "Note");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['vwhole'] = function(block) {
	var octave = block.getFieldValue('Octave');
	var code = "this.playNote(1,"+octave+");\n";
	code += Blockly.JavaScript.valueToCode(block, 'Note', Blockly.JavaScript.ORDER_ADDITION) || ''
	return [code, Blockly.JavaScript.ORDER_MEMBER];
}

Blockly.Blocks['numbervariable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "Octave");
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['numbervariable'] = function(block) {
	var octave = block.getFieldValue('Octave');
	var code = octave;
	code += Blockly.JavaScript.valueToCode(block, 'Note', Blockly.JavaScript.ORDER_ADDITION) || ''
	return [code, Blockly.JavaScript.ORDER_MEMBER];
}

