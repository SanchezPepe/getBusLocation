const express = require('express');
const app = express();
const axios = require('axios');
const xml2json = require('xml2js').parseString;

let url = "http://bus.itam.mx/servicioubica/servu.asmx/obtenUltimasCoordenadasRuta1Telcel?";

function getBusLocation(res, data) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(function(response) {
                //console.log(response.data);
                resolve(response.data);
            })
            .catch(function(error) {
                reject(error)
            })
    })
}

const PORT = 5555;

app.listen(PORT, () => {
    console.log(`Server ejecutándose en el puerto ${PORT}`);
});

app.get('/', async (req, res) => {
    let xml = await getBusLocation(url);
    res.send(data);
});

exports.getBus = app;