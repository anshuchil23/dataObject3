const person = {
    firstName: 'Rhea',
    lastName: 'John',
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    age: '22',
    currentLocation : 'New York',
    height: '1.60m',
    nationality: 'Indian',
    sex: 'female',
    pronoun: 'she,her',
    occupation: 'college student',
    employmentStatus: 'unemployed',
    relationshipStatus: 'single',
    hobbies: [
        {
            name: 'painting',
            duration: '6 years',
            future: 'would like to sell prints but never puts in the time',
        },

        {
            name: 'violin',
            duration: '3 years',
            future: 'wants to learn other intruments but cannot afford them',
        },

        {
            name: 'writing',
            duration: '2 years',
            future: 'Is working on a story they hope to sell in the future',
        }
    ],
    family: [
        {
            relation: 'mother',
            age: '47',
            currentLocation: 'Singapore',
        },
        {
            relation:'father',
            age: '53',
            currentLocation: 'Dubai',
        },
        {
            relation: 'brother',
            age: '35',
            currentLocation: 'London',
        }
    ],

    friends: [
        {
            name: 'Michael Trooper',
            age: '23',
            affinity: 'A good friend she can rely on every now and then.'
        },
        {
            name: 'Muskan Kulkarni',
            age: '22',
            affinity: 'They share almost everything with each other',
        },
        {
            name: 'Jacob Jasper',
            age: '21',
            affinity: 'Were recently in a reltionship together but ended on a good note.'
        },
        {
            name: 'Lily Mohan',
            age: '22',
            affinity: 'Enjoys hanging out with her but does not depend on her for much'
        }
   
    ],
   
    ideals: [
        {
            description: 'Prioritizes leading a life of passion and love over one of wealth'
        },
        {
            description: 'Does not believe in destiny'
        },
        {
            description: 'Believes that one should stand up for their friends'
        },
        {
            description: 'Believes in forgiveness'
        },
        {
            description: 'believes that listening to ones problems is more important than solving them'
        } 
    ],

}
var personName = document.querySelector('h1');
personName.innerHTML = person.fullName();

var personAge = document.querySelector('h2');
personAge.innerHTML = person.age;

var listIdeals = document.querySelector('.ideals');
var personIdeals = person.ideals;
personIdeals.forEach(function(rheaIdeal) {
    var idealItem = document.createElement('li');
    idealItem.innerHTML = rheaIdeal.description;
    listIdeals.appendChild(idealItem);
});

var listHobbies = document.querySelector('.hobbies');
var personHobbies = person.hobbies;
personHobbies.forEach(function(rheaHobby) {
    var hobbyItem = document.createElement('li');
    hobbyItem.innerHTML = rheaHobby.name;
    listHobbies.appendChild(hobbyItem);
});



