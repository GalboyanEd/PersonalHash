var name = prompt('Type your name below', 'e.g. John.');
var dif = prompt('Enter difficulty ', 'e.g. 3');
var content = "0; url=http://localhost:3000/" + name + '/' + dif;
var meta = document.getElementsByTagName('meta');
meta[1].content = content;