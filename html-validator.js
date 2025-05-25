const validator = require('html-validator');
const fs = require('fs');

const options = {
    format: 'text', // формат відповіді (json, text, html, xhtml, xml, gnu)
    data: fs.readFileSync('./src/index.html', 'utf8') // або вставте сам HTML-код
};

validator(options)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });