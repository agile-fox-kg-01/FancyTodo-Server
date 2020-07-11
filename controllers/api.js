const axios = require('axios');

const weather = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5",
  headers: {
    'user-key': process.env.WEATHER_KEY
  }
})

const joke = axios.create({
  baseURL: "https://api.kanye.rest"
})



class apiController {

  static getWeather(req, res, next) {
    weather
      .get('/weather?q=Indonesia&appid=dccd924444a1d136f002aeac48909167&units=metric')
      .then(result => {
        const temp = result.data.main.temp
        const desc = result.data.weather[0].description
        const output = `The weather now in Indonesia is about  ${temp} Degrees Celcius`
        res.status(200).json({ output })
      })
      .catch(err => {
        res.status(500).json({
          err
        })
      })
  }
  static randomQuote(req, res) {
    joke
      .get("https://api.kanye.rest")
      .then(result => {
        result = result.data.quote
        console.log(result);
        res.status(200).json(result)
      })
      .catch(err => {
        res.status(500).json({
          err
        })
      })
  }
}

module.exports = apiController