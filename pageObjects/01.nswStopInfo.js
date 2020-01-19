
function modelGetStop(){
    var trainStopModelRequest = 
            {TfNSWSF: true, 
            language: "en", 
            name_sf: "banksia",
            outputFormat: "rapidJSON",
            type_sf: "any",
            version: "10.2.2.48",
            pathURL:"https://www.transportnsw.info/web/XML_STOPFINDER_REQUEST?"};
            //console.log("The page model data is --", trainStopModelRequest )
    return (trainStopModelRequest)
}


module.exports = {
    modelGetStop: modelGetStop
}
