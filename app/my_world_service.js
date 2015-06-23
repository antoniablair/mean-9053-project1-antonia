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
this.getPerson = function(n) {
	for (var person in people) {
		var p = people[person];
		if (p.name == n) {
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
   return _.find(this.Thing, function(thing){return thing.name == nameOfThing});
  }
}
//    this.getThing = function() {
//    	return _.find(this.things, function(thing){return thing.name == thing});
//  };
// }

  // this.getThing = function(mything) {
  // return _.result(_.find(this.things, { 'name': 'Rock' }), 'name');
  // };

MyWorldService.prototype = {
    getPeople : function(){
        return _.sortBy(this.people, "name");
    }
};
