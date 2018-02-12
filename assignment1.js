function createNewPerson(name)
{
	var obj = {};
	obj.name = name;	
	obj.greeting = function()
	{
		alert('Hello my name is ' + this.name + '.');
	};

	return obj;
}

var brian = createNewPerson('Brian');
brian.name;
brian.greeting();


function Person(name)
{
	this.name=name;
	this.greeting = function()
	{
		alert('Hi! My name is ' + this.name + ', and I am created through a contructor function');
	};
}

var person1 = new Person('Bob');
var person2 = new Person('Sarah');

person1.name = 'Bob Ross';
person2.name = 'Sarah Jane';

person1.greeting();
person2.greeting();

function People(firstname, lastname, age, gender, interests)
{
	this.name = {firstname, lastname};
	this.age = age;
	this.gender = gender;
	this.interests = interests;
};

People.prototype.greeting = function()
{
	alert('HI!  My name is ' + this.name.firstname + ', I like ' + this.interests + ' and I am dope af.');
};

var Renee = new People('Renee', 'McPherson', 19, 'F', 'Painting');
Renee.greeting();

function Teacher(firstname, lastname, age, gender, interests, subject)
{
	People.call(this, firstname, lastname, age, gender, interests);
	this.subject=subject;
}

Teacher.prototype = Object.create(People.prototype);
Teacher.prototype.constructor = Teacher;

var teacher1 = new Teacher('Nick', 'Poon', 22, 'M', 'Movies', 'film studies');
teacher1.greeting();

Teacher.prototype.greeting = function()
{
	var prefix;

	if (this.gender === 'M')
	{
		prefix = 'Mr. ';
	}
	else
	{
		prefix = 'Ms. ';
	}

	alert('Hello! I am ' + prefix + this.name.lastname + ', and I teach ' + this.subject + '.');

};

teacher1.greeting();

function Shape(sides, x, y) 
{
  this.sides = sides;
  this.x = x;
  this.y = y;
}

Shape.prototype.move = function(x, y)
{
	this.x = x;
	this.y = y;
}

Shape.prototype.position = function()
{
	return "position: " + this.x + "," + this.y;
}

function Quadrilateral(x, y, s1, s2, s3, s4) 
{
  Shape.call(this, 4, x, y);
  this.s1 = s1;
  this.s2 = s2;
  this.s3 = s3;
  this.s4 = s4;
}

Quadrilateral.prototype = Object.create(Shape.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

Quadrilateral.prototype.perimeter = function() 
{
  return this.s1 + this.s2 + this.s3 + this.s4;
}

function Rectangle(x, y, w, h) 
{
  Quadrilateral.call(this, x, y, w, h, w, h);
  this.width = w;
  this.height = h;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function() 
{
  return this.width * this.height;
}

function Square(x, y, l) 
{
  Rectangle.call(this, x, y, l, l)
  this.length = l;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square

var square = new Square(1,1,3);
// Create square with sides of length 3	
var squareWidth1 = square.length;
alert('The square\'s width is ' + squareWidth1 + ' as defined on Square.');
// obtain side length from square object
var squareWidth2 = square.width;
alert('The square\'s width is ' + squareWidth2 + ' as obtained from Rectangle object\'s properties.');
// obtain side length through rectangle object inheritance

var squareSideLength = square.s1;
alert('The square\'s width is ' + squareSideLength + ' as obtained from Quadrilateral object\'s properties.' );
// obtain side length through quadrilateral object inheritance

alert('The square\'s area is ' + square.area() + ' and it is calculated through Rectangle\'s area method');
// through Rectangle area method

alert('the square\'s perimeter is ' + square.perimeter() + ' and it is calculated through Quadrilateral\'s perimeter method');
// through Quadrilateral perimeter method

square.move(2,3);
alert('The square has sucessfully moved to ' + square.position() + ' using Shape object\'s move method.');
// move using Shape






