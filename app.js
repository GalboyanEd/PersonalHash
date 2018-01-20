var hash = require('object-hash');
var fullName = 'Eduard Galboyan';

for(var i = 0;; i++){
	var toHash = fullName + i;
	var hashedName = hash(toHash);

	if(startZero(hashedName) >= 10){
		console.log('Your name is: ' + fullName);
		console.log('The hash of: ' + toHash + ' is ' + hashedName);
		console.log('Look it is starting with ' + startZero(hashedName) + ' zeros!');
		break;
	}

}




function startZero(str){
	str = str.split('');
	var result;
	for(result = 0; str[result] == '0'; result++){};
	return result;
}