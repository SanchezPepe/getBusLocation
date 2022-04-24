const express = require('express');
const app = express();
const axios = require('axios');
const parser = require('xml2json');
const PORT = 5555;

var xml2jsonOptions = {
    object: true,
    coerce: true,
    sanitize: true,
    trim: true
};

let quevedo = "http://bus.itam.mx/servicioubica/servu.asmx/obtenUltimasCoordenadasRuta1Telcel";
let barranca = "http://bus.itam.mx/servicioubica/servu.asmx/obtenUltimasCoordenadasRuta2Telcel";
let staTeresa1 = "http://bus.itam.mx/servicioubica/servu.asmx/obtenUltimasCoordenadasRuta3Telcel";
let staTeresa2 = "http://bus.itam.mx/servicioubica/servu.asmx/obtenUltimasCoordenadasRuta4Telcel";

function getBusLocation(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(function(response) {
                let xml = parser.toJson(response.data, xml2jsonOptions)["string"]["$t"];
                let data = parser.toJson(xml, xml2jsonOptions)

                resolve(data["NewDataSet"]);
            })
            .catch(function(error) {
                reject(error)
            })
    })
}

app.listen(PORT, () => {
    console.log(`Server ejecutándose en el puerto ${PORT}`);
});

app.get('/', async (_, res) => {
    let location = await getBusLocation(quevedo);

    res.json(location);
});

exports.getBus = app;

async function getBusData(url){
    let busData = await getBusLocation(url);
    let xml = parser.toJson(busData, xml2jsonOptions)["string"]["$t"];
    let data = parser.toJson(xml, xml2jsonOptions)

    return data["NewDataSet"]
}