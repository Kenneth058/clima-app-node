const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=46607a1882a05f603b99178a62509f9c`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}