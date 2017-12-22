
var facebook = {
	link: 'https://www.facebook.com/TomasCayul',
	target: '_blanck',
	imgSrc: 'img/fb.png',
	imgWidth: '70px'
};

var twitter ={
	link: 'https://twitter.com/?lang=es',
	target: '_blanck',
	imgSrc: 'img/tw.png',
	imgWidth: '70px'
};

var instagram ={
	link: 'https://www.instagram.com/?hl=es-la',
	target: '_blanck',
	imgSrc: 'img/inst.png',
	imgWidth: '70px'
};

var linkedin ={
	link: 'https://www.linkedin.com/',
	target: '_blanck',
	imgSrc: 'img/in.png',
	imgWidth: '70px'
};

//  Creacion de el arreglo vacio para agregar las redes sociales
var rss = [];

//  Con push se introducen los elementos al arreglo rss
rss.push(facebook);
rss.push(twitter);
rss.push(instagram);
rss.push(linkedin);

//  Revisar en consola como queda el arreglo
console.log(rss);

//  Bucle para colocar las redes sociales

//  el for se compone de tres parametros
for(var i = 0 ; i < rss.length; i++){
	// varInteres guarda cada rss  
	var varInteres = rss[i]
	// se identifica el elemento padre 
	var parentDiv = document.getElementById('ics');
	// se crea el elemento div que contiene toda la info de la rss
	var div = document.createElement('div');
	//  se crean a y img que son los elementos hijos del div
	var a = document.createElement('a');
	var img = document.createElement('img');
	// se crean los atributos de cada rss dependiendo del valor que tome varInteres
	a.href = varInteres.link;
	a.target = varInteres.target;
	img.src = varInteres.imgSrc;
	img.style.width = varInteres.imgWidth;
	// se crea el DOM 
	a.appendChild(img);
	div.appendChild(a);
	parentDiv.appendChild(div);

}