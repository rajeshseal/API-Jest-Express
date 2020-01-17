const request = require('supertest');
const lodash = require('lodash');
const fetch  = require('node-fetch')

    function getRequest( site, uri ) {
        const url = site + uri
         return fetch(url)
            .then((response) => {
                // console.log(response.json)
                return response.json()
            }).then((data) => {
                //console.log(data);
                return data;
            })
    }
    

module.exports = {
    getRequest: getRequest
  
}
