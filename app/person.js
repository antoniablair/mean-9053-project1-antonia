function Person(config){
  this.name = config.name;
  this.active = config.active;
  this.things = config.things;

// 	if (this.things === undefined) {
// 	this.things = [];
// }

  this.hasThing = function(nameOfThing) {
  	// if(typeof this.things == 'undefined') {
  	// 	return false;
  	// }
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