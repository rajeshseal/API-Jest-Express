//check if a train stop names Rockdale exists
const request = require('supertest');
const lodash = require('lodash');
const assert = require('assert');
const getRequest = require('../operationObjects/getRequest.js');

let stopName= "rockdale";
//let stopName= "redfern";

describe('GET /train stop', function() {
    it('should find train stop', function(done) {
        getRequest.getRequest(stopName)   
        .then((response) => {
                let nameListStops = lodash.filter(response.locations, ['type','stop']);
                //console.log(nameListStops)
                assert.strictEqual(nameListStops[0].name,"Rockdale Station, Rockdale");      
                done();
            })
    })
})