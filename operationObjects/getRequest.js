const request = require('supertest');
const lodash = require('lodash');
const fetch  = require('node-fetch')

// const getRequest =   function( site, uri ){
//     const url = site + uri
//     const stnNames =  fetch(url)
//     .then(res => res.json())
//    return(json)
//     }


    const getRequest = async function getRequest( site, uri ) {
        const url = site + uri
        const response = await fetch(url);
        console.log(response.json)
        return response.json()
    }
    

module.exports = {
    getRequest: getRequest
  
}
