$(function() {
    console.log( "let's go!" );
    
    //a person has a name (string), a set of moods(aray of strings), and a set of behaviors(array of objects)
    function person(name, behaviors, moods){
    	this.constructor.population++;
    	this.name=name;
    	this.behaviors=behaviors;
    	this.moods=moods;
    	this.current_mood = "unknown";
    	return this;
    }

	var jaro_behaviors = [
		{speak:function(mood){return "I'm "+mood;}},
		{speak:function(mood){return "I'm hungry.";}}
		];
		
	var jaro_moods = ["happy", "sleepy", "energized", "sick"];
	var jaro = new person("jaro",jaro_behaviors, jaro_moods );
	
	
	
	var peter_behaviors = [
		{speak:function(mood){return "I'm "+mood;}},
		{speak:function(mood){return "I'm going skiing.";}},
		{speak:function(mood){return "I like to read.";}}
		];	
	var peter_moods = ["grumpy", "blah", "optimistic", "voracious"];
	var peter = new person("peter",peter_behaviors, peter_moods );
	
	// put your person here
	
	
	var hetal_behaviors = [
		{speak:function(mood){return "I'm "+mood;}},
		{speak:function(mood){return "I'm sleepy.";}}
		];
		
	var hetal_moods = ["happy", "sad", "energize", "cool"];
	var hetal = new person("hetal",hetal_behaviors, hetal_moods );
	
	
	
	var people = [];
	people.push(jaro);   
	people.push(peter);
	//push your person in the people array
	people.push(hetal);
	
	
	
	function setWorldState(people){
				console.log("fire");
				$.each(people, function(i,person){
					person.current_mood = person.moods[getRandomInt(0,person.moods.length)];
					console.log(person.name+" "+person.current_mood);
				});
				people.map(function(o){return '<strong>'+o.name+': </strong>'+o.current_mood});
				$('#world_state').html(people.map(function(o){return '<strong>'+o.name+': </strong>'+o.current_mood}).join('<br />'));
				$('#world_talk').html(people.map(function(o){return '<strong>'+o.name+': </strong>'+o.behaviors[getRandomInt(0,o.behaviors.length)].speak(o.current_mood)}).join('<br />'));
				
				
	}
    
    setInterval(setWorldState, 5000, people);
    
    
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}