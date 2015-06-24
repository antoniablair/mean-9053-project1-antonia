function Thing(config){
  this.name = config.name;
  this.numberInStock = config.numberInStock;
  this.numberOwned = config.numberOwned;

  this.available = function() {
  	if(this.numberInStock <= 0 ) {
  		return false;
  	}
  	else {
  		return true;
  	}
  };

  this.isOwned = function() {
  	if(this.numberOwned > 0 ) {
  		return true;
  	}
  	else {
  		return false;
  	}
  };
}