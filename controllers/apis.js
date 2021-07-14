const router = require('express').Router();
const product = require("./productos")

router.get('/productos', product.getAllProducts) //Se crea la ruta
router.get('/producto/:p', product.getProduct)
/* router.post('/film', films.postfilm)
router.put('/film', films.putfilm) //Se crea la ruta
router.delete('/film', films.deletefilm)

router.all('*', films.error) */

module.exports = router