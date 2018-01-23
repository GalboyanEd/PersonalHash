const getNonce = require('./app.js');
const express = require('express');

const app = express();
const port = 3000;

app.get('/:fullName/:difficulty', (request, response) => {
	var res = getNonce(request.params.fullName,request.params.difficulty);
    response.send('<p style ="font-size: 3em; text-align: center; font-weight: bold;">' +
     			'Hi: '+
     			request.params.fullName +
     			'!' +
     			'<br />' +
     			'We found your unique personal hash!' +
     			'<br />' +
     			'We hashed ' + res.toHash + ' and took its hash.' + 
     			'<br />' +
     			'It is starting with ' +	
     			request.params.difficulty +
     			' zeroes!' +
     			'<br />' +
     			res.hashedName +
     			'</p>')
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});