const request = require('request')


const forcast = (long,lat, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=0738eb7989997fb533428102025639a4&query='+ lat +','+ long + '&units=f'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) { 
            callback('unable to find a location', undefined)
        } else {
        callback (undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        } 
    })
}

module.exports = forcast