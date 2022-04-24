const express = require('express');
const app = express();
const axios = require('axios');
const parser = require('xml2json');
const PORT = 5555;

let quevedo = "http://bus.itam.mx/servicioubica/servu.asmx/obtenUltimasCoordenadasRuta1Telcel";
let barranca = "http://bus.itam.mx/servicioubica/servu.asmx/obtenUltimasCoordenadasRuta2Telcel";
let staTeresa1 = "http://bus.itam.mx/servicioubica/servu.asmx/obtenUltimasCoordenadasRuta3Telcel";
let staTeresa2 = "http://bus.itam.mx/servicioubica/servu.asmx/obtenUltimasCoordenadasRuta4Telcel";

function getBusLocation(url) {
    let xml2jsonOptions = {
        object: true,
        coerce: true,
        sanitize: true,
        trim: true
    };

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
    console.log(`Server running on: ${PORT}`);
});

app.get('/quevedo', async (_, res) => {
    let location = await getBusLocation(quevedo);
    res.json(location);
});

app.get('/barranca', async (_, res) => {
    let location = await getBusLocation(barranca);
    res.json(location);
});

app.get('/staTeresa1', async (_, res) => {
    let location = await getBusLocation(staTeresa1);
    res.json(location);
});

app.get('/staTeresa2', async (_, res) => {
    let location = await getBusLocation(staTeresa2);
    res.json(location);
});

exports.getBus = app;