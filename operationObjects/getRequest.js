const request = require('supertest');
const lodash = require('lodash');
const fetch  = require('node-fetch')
const modelGetStop = require('../pageObjects/01.nswStopInfo.js');

    function getRequest(stnName) {
        var m= modelGetStop.modelGetStop();
        m.name_sf=stnName;
        var vQuery= encodeURI(`TfNSWSF=${m.TfNSWSF}&language=${m.language}&name_sf=${m.name_sf}&outputFormat=${m.outputFormat}&type_sf=${m.type_sf}&version=${m.version}`)
         let url = m.pathURL + vQuery
        console.log ("the url formed is ", url)       
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