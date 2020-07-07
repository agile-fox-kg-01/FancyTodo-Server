const axios = require('axios');

class GhibliController {
    static async listFilms(req, res, next) {

        // console.log(`test`);

        try {
            let allFilms = await axios({
                method: 'GET',
                url: 'https://ghibliapi.herokuapp.com/films'
            })

            allFilms.data = allFilms.data.map(film => {
                let tmpObj ={}

                tmpObj.title = film.title
                tmpObj.description = film.description
                tmpObj.director = film.director
                tmpObj.producer = film.producer
                tmpObj.relase_date = film.relase_date
                tmpObj.rt_score = film.rt_score

                // console.log(film)

                return tmpObj
            })


            // console.log(allFilms.data.length);

            res.status(200).json(allFilms.data);
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
}

module.exports = GhibliController;