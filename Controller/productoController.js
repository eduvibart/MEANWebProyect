
var Mongoose = require('mongoose');
const ropaSchema = new mongoose.Schema({
    stock: Number,
    lanzamiento: Date,
    precio: Number,
    caracteristicas: {
        tipo: String,
        talle: String,
        marca: String,
        modelo: String,
        color: String,
    }
});
const RopaModel = mongoose.model("Ropa", ropaSchema);



module.exports.getProducto = function(req, res){
    if(req.Params && req.Params.productId){
        RopaModel.findById(req.params.productId)
        .exec(function(err,product){
            sendJsonResponse(res,200,product)
        });      
    }else{
        sendJsonResponse(res,404, {
            "Message" : "No existe tal producto"
        })
    }
}