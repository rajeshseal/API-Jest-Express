
function stopQuery(){
    let pathURL = "https://www.transportnsw.info/web/XML_STOPFINDER_REQUEST?" + encodeURI('TfNSWSF=true&language=en&name_sf=rockdale​&outputFormat=rapidJSON&type_sf=any&version=10.2.2.48');
    return(pathURL);
}

module.exports = {
    stopQuery: stopQuery
}
