$(function() {
    console.log( "let's go!" );
    
    //a person has a name (string), a set of moods(aray of strings), and a set of behaviors(array of objects)
    function person(name, behaviors, moods, dances){
    	this.constructor.population++;
    	this.name=name;
    	this.behaviors=behaviors;
    	this.moods=moods;
    	this.current_mood = "unknown";
        this.dances=dances;
    	return this;
    }

	var jaro_behaviors = [
		{speak:function(mood){return "I'm "+mood;}},
		{speak:function(mood){return "I'm hungry.";}}
		];

	var jaro_moods = ["happy", "sleepy", "energized", "sick"];
    var jaro_dances = ["waltz", "twist", "jerk", "tango"];
	var jaro = new person("jaro",jaro_behaviors, jaro_moods, jaro_dances );



	var peter_behaviors = [
		{speak:function(mood){return "I'm "+mood;}},
		{speak:function(mood){return "I'm going skiing.";}},
		{speak:function(mood){return "I like to read.";}}
		];
	var peter_moods = ["grumpy", "blah", "optimistic", "voracious"];
    var peter_dances = ["waltz", "twist", "jerk", "tango"];
	var peter = new person("peter",peter_behaviors, peter_moods, peter_dances );

	// put your person here

	var lisa_behaviors = [
		{speak:function(mood){return "I'm "+mood;}},
		{speak:function(mood){return "I'm thirsty.";}}
	];
	var lisa_moods = ["happy", "mad", "sad", "surprised"];
   var lisa_dances = ["waltz", "twist", "jerk", "tango"];
	var lisa = new person("lisa",lisa_behaviors, lisa_moods, lisa_dances );
	
    var pam_behaviors = [
	{speak:function(mood){return "I'm "+mood;}},
	{speak:function(mood){return "I'm hungry.";}}
	];

	var pam_moods = ["happy", "sleepy", "energized", "sick"];
   var pam_dances = ["waltz", "twist", "jerk", "tango"];
	var pam = new person("pam",pam_behaviors, pam_moods, pam_dances );


	var hetal_behaviors = [
		{speak:function(mood){return "I'm "+mood;}},
		{speak:function(mood){return "I'm sleepy.";}}
		];
		
	var hetal_moods = ["happy", "sad", "energize", "cool"];
   var hetal_dances = ["waltz", "twist", "jerk", "tango"];
	var hetal = new person("hetal",hetal_behaviors, hetal_moods, hetal_dances );

	
	
	
	var people = [];
	people.push(jaro);   
	people.push(peter);
	people.push(lisa);
    people.push(pam);

	//push your person in the people array
	people.push(hetal);
	
	
	
	function setWorldState(people){
				console.log("fire");
				$.each(people, function(i,person){
					person.current_mood = person.moods[getRandomInt(0,person.moods.length)];
                    person.current_dance = person.dances[getRandomInt(0,person.dances.length)];
                    console.log(person.name+" "+person.current_mood);
				});
				people.map(function(o){return '<strong>'+o.name+': </strong>'+o.current_mood});
				$('#world_state').html(people.map(function(o){return '<strong>'+o.name+': </strong>'+o.current_mood}).join('<br />'));
				$('#world_talk').html(people.map(function(o){return '<strong>'+o.name+': </strong>'+o.behaviors[getRandomInt(0,o.behaviors.length)].speak(o.current_mood)}).join('<br />'));
                $('#world_dance').html(people.map(function(o){return '<strong>'+o.name+': </strong>'+o.current_dance}).join('<br />'));           

				
	}
    
    setInterval(setWorldState, 5000, people);
    
    
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}