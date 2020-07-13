const axios = require('axios')
class ApiController {

    static getRestaurantBandung(req,res,next){
        axios({
            method: 'GET',
            url: 'https://developers.zomato.com/api/v2.1/search?entity_id=11052&entity_type=city&count=10',
            headers:{
                'user-key': process.env.ZOMATO_KEY
            }
        })
        .then(result=>{
            res.status(200).json(result.data.restaurants)
        })
        .catch(err=>{
            res.status(500).json(err.message)
        })
    }    

    static getLocationBandung(req,res,next){
        axios({
            method: 'GET',
            url: 'https://developers.zomato.com/api/v2.1/collections?city_id=11052&count=9',
            headers:{
                'user-key': process.env.ZOMATO_KEY
            }
        })
        .then(result=>{
            res.status(200).json(result.data)
        })
        .catch(err=>{
            res.status(500).json(err.message)
        })
    }
}
module.exports = ApiController
















    // static getCovid(req,res,next){
    //     axios({
    //         method: 'GET',
    //         url: 'https://dekontaminasi.com/api/id/covid19/stats'
    //     })
    //     .then(result=>{
    //         res.status(200).json(result.data)
    //     })
    //     .catch(err=>{
    //         res.status(500).json(err.message)
    //     })
    // }
    // static async getCovid(req,res,next){
    //     try{
    //         const result = await axios({
    //             method: 'GET',
    //             url: 'https://dekontaminasi.com/api/id/covid19/stats'
    //         })
    //         res.status(200).json(result.data)
    //     } catch(err){
    //         res.status(500).json(err.message)
    //     }
    // }
    // static getCategories(req,res,next){
    //     axios({
    //         method: 'GET',
    //         url: 'https://developers.zomato.com/api/v2.1/categories',
    //         headers:{
    //             'user-key': process.env.ZOMATO_KEY
    //         }
    //     })
    //     .then(result=>{
    //         res.status(200).json(result.data)
    //     })
    //     .catch(err=>{
    //         res.status(500).json(err.message)
    //     })
    // }
    // static getCategories(req,res,next){
    //     zomato
    //         .get('/categories')
    //         .then(result=>{
    //             res.status(200).json(result.data)
    //         })
    //         .catch(err=>{
    //             console.log(err.response.data) 
    //             // Keluarannya : { code: 403, status: 'Forbidden', message: 'Invalid API Key' }
    //             res.status(500).json(err.response.data)
    //         })
    // }
    // static getRestaurant(req,res,next){
    //     zomato
    //         .get('/search?entity_id=11052&entity_type=city')
    //         .then(result=>{
    //             res.status(200).json(result.data)
    //         })
    //         .catch(err=>{
    //             res.status(500).json(err.message)
    //         })
    // }




// const zomato = axios.create({
//     baseURL: 'https://developers.zomato.com/api/v2.1',
//     headers: { 'user-key': process.env.ZOMATO_KEY}
// })
// const zomato = axios.create({
//     baseURL: 'https://developers.zomato.com/api/v2.1',
//     headers: { 
//         'user-key': 'eb157cb32b1bc834b1d92e6a9b0e8f33'
//     }
// })


    // static getRestaurantBandung(req,res,next){
    //     axios({
    //         method: 'GET',
    //         url: 'https://developers.zomato.com/api/v2.1/collections?city_id=11052&count=9',
    //         headers:{
    //             'user-key': process.env.ZOMATO_KEY
    //         }
    //     })
    //     .then(result=>{
    //         res.status(200).json(result.data)
    //     })
    //     .catch(err=>{
    //         res.status(500).json(err.message)
    //     })
    // }