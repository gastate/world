$(function () {
    console.log("let's go!");

    //a person has a name (string), a set of moods(aray of strings), and a set of behaviors(array of objects)
    function person(name, behaviors, moods, dances) {
        this.constructor.population++;
        this.name = name;
        this.behaviors = behaviors;
        this.moods = moods;
        this.current_mood = "unknown";
        this.dances = dances && typeof dances == Array ? dances : ['boogie', 'jig', 'ballet', 'polka'];
        this.dancing = function () {
            var num = getRandomInt(0, this.dances.length);
            return " is dancing " + this.dances[num];
        }.bind(this);
        return this;
    }


    var jaro_behaviors = [
        {
            speak: function (mood) {
                return "I'm " + mood;
            }
        },
        {
            speak: function () {
                return "I'm hungry.";
            }
        }
    ];

    var jaro_moods = ["happy", "sleepiest", "energized", "sick"];
    var jaro = new person("jaro", jaro_behaviors, jaro_moods);
    jaro.dances = ['belly dance', 'interpretive dance', 'mosh'];


    var peter_behaviors = [
        {
            speak: function (mood) {
                return "I'm " + mood;
            }
        },
        {
            speak: function () {
                return "I'm going skiing.";
            }
        },
        {
            speak: function () {
                return "I like to read.";
            }
        }
    ];
    var peter_moods = ["grumpy", "blah", "optimistic", "voracious"];
    var peter = new person("peter", peter_behaviors, peter_moods);

    // put your person here


	
	var shad = new person(
		"Shad",
		[
			{speak:function(mood){return "I'm "+mood;}},
			{speak:function(mood){return "Another virtual machine?";}},
			{speak:function(mood){return "Almost done...";}},
			{speak:function(mood){return "Heading out to lunch";}},
			{speak:function(mood){return "Who's online here?";}},
		],
		["sleepy","confused","hungry","in the zone","distracted","focused","engrossed"]
	);
	shad.dances = [ "whip", "nay nay", "stankey leg", "line dance", "twerk" ];


    var lisa_behaviors = [
        {
            speak: function (mood) {
                return "I'm " + mood;
            }
        },
        {
            speak: function () {
                return "I'm thirsty.";
            }
        }
    ];
    var lisa_moods = ["happy", "mad", "sad", "surprised", "excited", "moody"];


    var lisa = person("lisa", lisa_behaviors, lisa_moods, ['house', 'disco', 'salsa', 'swing', 'polka', 'samba']);


    var pam_behaviors = [
        {
            speak: function (mood) {
                return "I'm " + mood;
            }
        },
        {
            speak: function () {
                return "I'm hungry.";
            }
        }
    ];

    var pam_moods = ["happy", "sleepy", "energized", "sick"];
    var pam = new person("pam", pam_behaviors, pam_moods);
    pam.dances = ['jig', 'swing'];


    var jeff_behaviors = [
        {
            speak: function (mood) {
                return "I'm " + mood;
            }
        },
        {
            speak: function () {
                return "I'm sleepy.";
            }
        }
    ];

    var jeff_moods = ["happy", "sad", "energize", "cool"];
    var jeff = new person("jeff", jeff_behaviors, jeff_moods);


    var scott_behaviors = [
        {
            speak: function (mood) {
                return "I'm " + mood;
            }
        },
        {
            speak: function () {
                return "I'm hungry.";
            }
        }
    ];

    var scott_moods = ["caffeinated", "perky", "happy", "sniffly"];
    var scott = new person("scott", scott_behaviors, scott_moods);
    scott.dances = ['foxtrot', 'east coast swing', 'rumba'];

    var people = [];
    people.push(jaro);
    people.push(peter);
    people.push(lisa);
    people.push(pam);
    people.push(shad);
	people.push(jeff);
    people.push(scott);


    function setWorldState(people) {
        console.log("fire");
        $.each(people, function (i, person) {
            person.current_mood = person.moods[getRandomInt(0, person.moods.length)];

            console.log(person.name + " " + person.current_mood);
        });
        people.map(function (o) {
            return '<strong>' + o.name + ': </strong>' + o.current_mood
        });
        $('#world_state').html(people.map(function (o) {
            return '<strong>' + o.name + ': </strong>' + o.current_mood
        }).join('<br />'));
        $('#world_talk').html(people.map(function (o) {
            return '<strong>' + o.name + ': </strong>' + o.behaviors[getRandomInt(0, o.behaviors.length)].speak(o.current_mood)
        }).join('<br />'));
        $('#world_dance').html(people.map(function (o) {
            return '<strong>' + o.name + ': </strong>' + o.dancing();
        }).join('<br />'));


    }


	

    setInterval(setWorldState, 5000, people);


});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
