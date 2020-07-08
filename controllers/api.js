const axios = require('axios');

const weather = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5",
  headers: {
    'user-key': process.env.WEATHER_KEY
  }
})



class apiController {



  static getWeather(req, res, next) {
    weather
      .get('/weather?q=Makassar&appid=dccd924444a1d136f002aeac48909167&units=metric')
      .then(result => {
        const temp = result.data.main.temp
        const desc = result.data.weather[0].description
        const icon = result.data.weather[0].icon
        const img = `http://openweathermap.org/img/wn/${icon}d@2x.png`
        const output = `The weather now in Makassar is ${temp} Degrees Celcius and ${desc} \n ${img}`
        res.status(200).json(output)
      })
      .catch(err => {
        res.status(500).json(err.message)
      })
  }
}

module.exports = apiController