
// var buttonClass = document.getElementsByClassName('box_buttons');
// if (buttonClass.length > 0) {
// 	window.alert('Hola mundo');
// }


// var jsObject = {
// 	changeClassName: function (className){
// 		var node = document.getElementsByClassName('hi');
// 		node.class = className;
// 	}
// }

var person = {
	name: 'Tomás',
	lastName: 'Cayul',
	email: 'cayul.tomas@gmail.com',
	interests: ['Medio Ambiente', 'Ecología'],
	profesion:{
		name: 'Ingenieria en Recursos Naturales',
		university: 'Universidad de La Frontera',
	}
};

var nam = document.getElementById('name');
nam.innerHTML = person.name + ' ' + person.lastName;

var profesion = document.getElementById('profesion');
profesion.innerHTML = person.profesion.name

var email = document.getElementById('email');
email.innerHTML = person.email;

var university = document.getElementById('university');
university.innerHTML = person.profesion.university;

var interests = document.getElementById('interests');
interests.innerHTML = person.interests[0] + ' | ' + person.interests[1]; 

