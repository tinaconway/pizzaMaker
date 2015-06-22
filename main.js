
var canvas = document.getElementById("canvas")
ctx = canvas.getContext('2d');

var Toppings = function(name, link) {
  this.name = name;
  this.link = link;
  var self = this;
  this.clicked = function (){
    var selfInner = this;
    selfInner.img = new Image();
    this.img.src = self.link;
    var innerImage = selfInner.img
    console.log(innerImage)
    canvas.onclick = function(evt) {
    var x;
    var y;
    if (evt.pageX || evt.pageY) {
      x = evt.pageX;
      y = evt.pageY;
    }
    else {
      x = evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = evt.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
        ctx.drawImage(innerImage, x, y);
    }
  }
};

var Sauce = function(name, link) {
  this.name = name;
  this.link = link;
  var self = this;
  this.clicked = function () {
    this.img = new Image();
    this.img.src = self.link;
    console.log(this.img)
    var width = 700;
    var height = 700;
    ctx.drawImage(this.img, 0, 0, width, height);
  }
};

function clearCanvas() {
var plate = new Image();
plate.src = "http://3.bp.blogspot.com/-ptpus-J6iVc/U57NoYQd0eI/AAAAAAAAAGc/9e83ygx66nw/s1600/Pizza.png";
ctx.drawImage(plate, 0, 0, 700, 700);
}



var tomatoSauce = new Sauce('tomato sauce', 'http://2.bp.blogspot.com/-Ebke1sTgVko/U6FEseMSDcI/AAAAAAAAAJ0/weqtyFmlpHU/s1600/Pizza+Sos+3.png');
var alfredoSauce = new Sauce('alfredo sauce', 'http://2.bp.blogspot.com/-kyb63YutMa8/U6FEtB4KEtI/AAAAAAAAAKE/j4mOrlZNiKo/s1600/Pizza+Sos+5.png');
var bbqSauce = new Sauce('bbq sauce', 'http://1.bp.blogspot.com/---M27YA3Jhk/U6E_2SsXahI/AAAAAAAAAJg/95I7R5K_XRQ/s1600/Pizza+Sos+1.png');

var cheese = new Toppings ('cheese', 'Images/cheese.png');

var onion = new Toppings('onion', 'Images/onion.png');
var jalapeno = new Toppings('jalapeno', 'Images/jalapeno.png');
var pineapple = new Toppings('pineapple', 'Images/pineapple.png');
var yellowPepper = new Toppings('yellow pepper', 'Images/yellowpepper.png');
var greenPepper = new Toppings('green pepper', 'Images/greenpepper.png');
var redPepper = new Toppings('red pepper', 'Images/redpepper.png');
var olive = new Toppings('olive', 'Images/olive.png');
var tomato = new Toppings('tomato', 'Images/Tomato.png');
var mushroom = new Toppings('tomato', 'Images/mushroom.png');
var pepperoni = new Toppings('pepperoni', 'Images/pepperoni.png');
var bacon = new Toppings('bacon', 'Images/bacon.png');
var sausage = new Toppings('sausage', 'Images/sausage.png');
var ham = new Toppings('ham', 'Images/ham.png');
var chicken = new Toppings('chicken', 'Images/chicken.png');
var salami = new Toppings('salami', 'Images/salami.png');




$(document).ready (function() {

  $('.toppings').on('click', '.onion', onion.clicked);
  $('.toppings').on('click', '.jalapeno', jalapeno.clicked);
  $('.toppings').on('click', '.pineapple', pineapple.clicked);
  $('.toppings').on('click', '.yellowPeppers', yellowPepper.clicked);
  $('.toppings').on('click', '.greenPeppers', greenPepper.clicked);
  $('.toppings').on('click', '.redPeppers', redPepper.clicked);
  $('.toppings').on('click', '.olives', olive.clicked);
  $('.toppings').on('click', '.tomato', tomato.clicked);
  $('.toppings').on('click', '.mushrooms', mushroom.clicked);
  $('.toppingsMeat').on('click', '.pepperoni', pepperoni.clicked);
  $('.toppingsMeat').on('click', '.bacon', bacon.clicked);
  $('.toppingsMeat').on('click', '.sausage', sausage.clicked);
  $('.toppingsMeat').on('click', '.ham', ham.clicked);
  $('.toppingsMeat').on('click', '.chicken', chicken.clicked);
  $('.toppingsMeat').on('click', '.salami', salami.clicked);
  $('.cheese').on('click', '.cheese', cheese.clicked);
  $('.sauce').on('click', '.tomatoSauce', tomatoSauce.clicked);
  $('.sauce').on('click', '.alfredoSauce', alfredoSauce.clicked);
  $('.sauce').on('click', '.bbqSauce', bbqSauce.clicked);
  $('.clearCanvas').on('click', '.clear', clearCanvas);

});
