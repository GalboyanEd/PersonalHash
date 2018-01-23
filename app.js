var hash = require('object-hash');

function getNonce(fullName,difficulty){
	for(var i = 0;; i++){
		var toHash = fullName + i;
		var hashedName = hash(toHash);

		if(startZero(hashedName) >= difficulty){

			break;
		};
	};
	return {hashedName, toHash};
};

function startZero(str){
	str = str.split('');
	var result;
	for(result = 0; str[result] == '0'; result++){};
	return result;
}

module.exports = getNonce;