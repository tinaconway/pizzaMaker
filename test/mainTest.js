describe('Constructors', function () {

  beforeEach(function () {
     this.anchovies = new Toppings('anchovies', 'http://1.bp.blogspot.com/-8f_Ua22ZpN0/TmAZB4izzjI/AAAAAAAABLs/uIY8P-kePxI/s190/cartoon-fish-anchovy-2.jpg');
     this.basil = new Toppings();
  });

  it('should be instance of Toppings', function() {
    expect(this.anchovies).to.be.an.instanceof(Toppings);
  });
  it('should have properties', function () {
    expect(this.anchovies.name).to.be.equal('anchovies');
    expect(this.anchovies.link).to.be.equal('http://1.bp.blogspot.com/-8f_Ua22ZpN0/TmAZB4izzjI/AAAAAAAABLs/uIY8P-kePxI/s190/cartoon-fish-anchovy-2.jpg')
  });
  it('should have default properties', function () {
    expect(this.basil.name).to.be.equal('name');
    expect(this.basil.link).to.be.equal('')
  });


});

describe('Clicked Method', function () {
  var $fixture = $('<canvas>')
  beforeEach(function () {
     this.anchovies = new Toppings('anchovies', 'http://1.bp.blogspot.com/-8f_Ua22ZpN0/TmAZB4izzjI/AAAAAAAABLs/uIY8P-kePxI/s190/cartoon-fish-anchovy-2.jpg');
     this.anchovies.clicked();
  });

  it('check that clicked exists and is a function', function () {
    expect(this.anchovies.clicked).is.a('function');
  });

//cannot test canvas


});
