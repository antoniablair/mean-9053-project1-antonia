/* globals _ */ 

function MyWorldService(people, things){
  this.people = people;
  this.things = things;

  function isActive(active) {
  	return active === true;
  };

  // Uses lodash sorting to alphabetize
  this.getPeople = function(activeonly){
  	if (activeonly) {
  		var nonactives = _.remove(this.people, function(person) {
  			return person.active !== true;
  		});
  	} 
  	return _.sortBy(people, "name");
	};

// find person, and make their things an empty array
this.getPerson = function(nameOfPerson) {
	for (var person in people) {
		var p = people[person];
		if (p.name == nameOfPerson) {
			if (p.things === undefined) {
				p.things = [];
			}
			return p;
		}
	}
};

  this.getThings = function() {
  	return _.sortBy(this.things, "name");
  };

  this.getThing = function(nameOfThing) {
   return _.find(this.things, function(thing){return thing.name == nameOfThing});
  }

  this.acquireThing = function(nameOfPerson, nameOfThing) {
    var person = this.getPerson(nameOfPerson);
    var thing = this.getThing(nameOfThing);

    if (thing.numberInStock > 0 ) {
      thing.numberInStock = (thing.numberInStock - 1);
      thing.numberOwned = (thing.numberOwned + 1);
      person.things.push(nameOfThing);
      return true;
    }
    else {
      throw ("No things in stock.");
    }
  };

  this.returnThing = function(nameOfPerson, nameOfThing){
    var person = this.getPerson(nameOfPerson);
    var thing = this.getThing(nameOfThing);

    if (person.hasThing(nameOfThing)) {
      console.log(person + " has a thing");
      thing.numberInStock++;
      thing.numberOwned--;
      person.things.splice(nameOfThing);
      console.log(person.hasThing(nameOfThing));
      return true;
    }
    else {
      throw ("They don't have that thing to return!");
    }
  }

};

MyWorldService.prototype = {
    getPeople : function(){
        return _.sortBy(this.people, "name");
    }
};
