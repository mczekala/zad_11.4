function Phone(brand, model, price, color) {
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", model is " + this.model + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", "6S", 2250, "silver");
var HTCU11 = new Phone("HTC", "U11", 1999, "black");
var SamsungS9 = new Phone("Samsung", "S9", 3599, "black");

iPhone6S.printInfo();
HTCU11.printInfo();
SamsungS9.printInfo();