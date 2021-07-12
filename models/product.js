const mongoose = require('mongoose')
const { Schema } = mongoose

const ProductSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  relevancia: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  fabricante: {
    type: String,
    unique: true,
    required: true
  },
  origen: {
    type: String,
    unique: true,
    required: true
  },
  img: {
   type: String,
    unique: true
  }
})

const productss = mongoose.model('productos', ProductSchema)

module.exports = productss