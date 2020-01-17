//check if a train stop names Rockdale exists
const assert = require('assert')
const request = require('supertest');
const lodash = require('lodash');
const getRequest = require('../operationObjects/getRequest.js')

const data =  async function data() {
    const get_data=await getRequest.getRequest('https://www.transportnsw.info', encodeURI('/web/XML_STOPFINDER_REQUEST?TfNSWSF=true&language=en&name_sf=rockdale​&outputFormat=rapidJSON&type_sf=any&version=10.2.2.48'))
    return(get_data)
    
}
console.log(data)
assert.strictEqual(data[0],"Rockdale Station, Rockdale")