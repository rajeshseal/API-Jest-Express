//check if a train stop names Rockdale exists

const request = require('supertest');
const lodash = require('lodash');
const assert = require('assert')

describe('GET /stop', function() {
    it('should find train stop', function(done) {
      request('https://www.transportnsw.info')
        .get (encodeURI('/web/XML_STOPFINDER_REQUEST?TfNSWSF=true&language=en&name_sf=rockdale​&outputFormat=rapidJSON&type_sf=any&version=10.2.2.48'))
        .expect('Content-Type','application/json')
        .expect(200)
        .then(response => {
            let nameListStops = lodash.filter(response.body.locations, ['type','stop']);
            //console.log(typeof(nameListStops))
            //console.log(nameList);
            //expect(nameListStops[0]).toHaveProperty('name', 'Rockdale Station, Rockdale')      

            assert.strictEqual(nameListStops[0].name,"Rockdale Station, Rockdale")
            done();
        })
    })
})
