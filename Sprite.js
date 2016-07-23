
// Define the Sprite constructor
var Sprite = function(image, x, y, width, height){
	
	this.image = image;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};

Sprite.prototype.getImage = function(){
	return this.image;
}

Sprite.prototype.getX = function(){
	return this.x;
}

Sprite.prototype.getY = function(){
	return this.y;
}

Sprite.prototype.getWidth = function(){
	return this.width;
}

Sprite.prototype.getHeight = function(){
	return this.height;
}

