//check if a train stop names Rockdale exists

const request = require('supertest');
const lodash = require('lodash');
const assert = require('assert');
const getRequest = require('../operationObjects/getRequest.js');
const nswStopInfo= require('../pageObjects/01.nswStopInfo.js');


describe('GET /train stop', function() {
    it('should find train stop', function(done) {
        //getRequest.getRequest('https://www.transportnsw.info/web/XML_STOPFINDER_REQUEST?', encodeURI('TfNSWSF=true&language=en&name_sf=rockdale​&outputFormat=rapidJSON&type_sf=any&version=10.2.2.48'))   
        getRequest.getRequest(nswStopInfo.stopQuery())   
        .then((response) => {
                let nameListStops = lodash.filter(response.locations, ['type','stop']);
                //console.log(nameListStops)
                assert.strictEqual(nameListStops[0].name,"Rockdale Station, Rockdale");      
                done();
            })
    })
})