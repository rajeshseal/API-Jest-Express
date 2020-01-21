const request = require('supertest');
const lodash = require('lodash');
const fetch  = require('node-fetch')
const modelGetStop = require('../pageObjects/01.nswStopInfo.js');

// let stopNameInput= { "language":"en",
// "name_sf":"rockdale", 
// "pathURL":"https://www.transportnsw.info/web/XML_STOPFINDER_REQUEST?"
//                     };

// getRequest(stopNameInput);

function getRequest(stnName) {
    var m= modelGetStop.trainStopModelRequest
        //console.log("recived from json--->",stnName)
        //console.log("data set from model--->",m)
        var keys = Object.keys(stnName);
        for(var i=0; i<keys.length; i++){
        var key = keys[i];
        //console.log(key, stnName[key]);
            if (stnName.key==m.key)
                {   
                    m[key]=stnName[key]
                }

        };

    //console.log("data set from query-->",m)

   
        var vQuery= encodeURI(`TfNSWSF=${m.TfNSWSF}&language=${m.language}&name_sf=${m.name_sf}&outputFormat=${m.outputFormat}&type_sf=${m.type_sf}&version=${m.version}`)
         let url = m.pathURL + vQuery
        //console.log ("the url formed is ", url)       
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