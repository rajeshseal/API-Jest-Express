//check if a train stop names Rockdale exists
const request = require('supertest');
const lodash = require('lodash');
const assert = require('assert');
const getRequest = require('../operationObjects/getRequest.js');
const fs = require('fs');

// let stopNameInput= { "language":"en",
//                 "name_sf":"redfern", 
//                 "pathURL":"https://www.transportnsw.info/web/XML_STOPFINDER_REQUEST?"
// };


const dataBuffer=fs.readFileSync('../API-Test-Jest-Supertest/testData//testDataGetStop.json')
const dataJSON=dataBuffer.toString()
const stopNameInput= JSON.parse(dataJSON)


describe('GET /train stop', function() {
    it('should find train stop', function(done) {
        getRequest.getRequest(stopNameInput)   
        .then((response) => {
                let nameListStops = lodash.filter(response.locations, ['type','stop']);
                //console.log(nameListStops)
                //assert.strictEqual(nameListStops[0].name,"Rockdale Station, Rockdale");  
                assert.strictEqual(nameListStops[0].name, stopNameInput.expectedResult);
                done();
            })
    })
})