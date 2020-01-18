const request = require('supertest');
const lodash = require('lodash');
const fetch  = require('node-fetch')

    function getRequest( url ) {
        //Query and return http response using node-fetch
        //const url = site + uri
         return fetch(url)
            
            .then((response) => {
                // console.log(response.json)
                return response.json()
            }).then((data) => {
                //console.log(data);
                return data;
            })

            // //Query and return http response using describe    
            // describe('GET /stop', function() {
            //     it('Get the train stop search reponse', function(done) {
            //     request(url)
            //         //.get (encodeURI('/web/XML_STOPFINDER_REQUEST?TfNSWSF=true&language=en&name_sf=rockdale​&outputFormat=rapidJSON&type_sf=any&version=10.2.2.48'))
            //         .expect('Content-Type','application/json')
            //         .expect(200)
            //         .then(response => {
            //             done();
            //         })
            //     })
            // })
            



        // end of describe
    }
   


module.exports = {
    getRequest: getRequest
  
}
