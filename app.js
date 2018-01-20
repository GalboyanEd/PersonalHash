var hash = require('object-hash');
var readline = require('readline');
var fullName = 'Eduard Galboyan';

process.stdout.write('Please wait...');

for(var i = 0;; i++){
	var toHash = fullName + i;
	var hashedName = hash(toHash);

	if(startZero(hashedName) >= 5){
  		readline.cursorTo(process.stdout, 0);
  		process.stdout.write('            ');
  		readline.cursorTo(process.stdout, 0);
  		
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