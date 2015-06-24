function Person(config){
  this.name = config.name;
  this.active = config.active;
  this.things = config.things;

  this.hasThing = function(nameOfThing) {
  	for(var thing in this.things) {
  		if (this.things[thing] == nameOfThing) {
  			return true;
  		}
  		else {
  			return false;
  		}
  	}
  };
}


