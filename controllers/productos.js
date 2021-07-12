const ProductSchema = require('../models/product')
const routers = {
    getAllProducts: async(req, res) => {
         try {
            const  AllProducts  = await ProductSchema.find({})

        console.log(AllProducts )
            res.status(200).json(AllProducts)
          } catch (error) {
            console.error('> error retrieving all books: ', error.message)
        
            next(new Error('error retrieving books'))
          }
    }/* ,
    postfilm: async(req, res) => {
        // let data = await films.postPelicula(`http://www.omdbapi.com/?t=${title}${apiKey}`)
        let nameF = req.body.Title
        res.status(200).json({ message: `Se ha guardado ${nameF}` });

    },
    putfilm: async(req, res) => {
        // let data = await films.putPelicula(`http://www.omdbapi.com/?t=${title}${apiKey}`)

        let nameF = req.body.Title
        let idF = req.body.imdbID
        res.status(200).json({ id: idF, message: `Se ha actualizado  ${nameF}` })
    },
    deletefilm: async(req, res) => {
        // let data = await films.deletePelicula(`http://www.omdbapi.com/?t=${title}${apiKey}`)
        let nameF = req.body.Title
        let idF = req.body.imdbID
        res.status(200).json({ id: idF, message: `Se ha borrado  ${nameF}` })
    },
    error: (req, res) => {
        res.status(404).json({ message: 'ruta ' + req.url + ' No encontrada.' })
    } */
}

module.exports = routers;