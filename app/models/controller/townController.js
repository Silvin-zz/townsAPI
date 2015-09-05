var express     = require('express');        // call express
var bodyParser  = require('body-parser');
var router      = express.Router();          // get an instance of the express Router


// MODELOS //
var Town        = require('../entity/town');

router.post('/', function(req, res) {

    var townObject              = new Town();
    townObject.name             = req.body.title;
    townObject.description      = req.body.description;
    townObject.state            = req.body.state;
    townObject.food             = req.body.food;
    townObject.manners          = req.body.manners;
    townObject.frontimage       = req.body.frontimage;
    townObject.latitude         = req.body.latitude;
    townObject.longitude        = req.body.longitude;
    townObject.video            = req.body.video;
    townObject.images           = [];

    console.log(req.body.images);
    console.log(req.body.images);

    for(var a = 0; a < req.body.images.length; a++){  //recorremos las imagenes que nos enviaron :)

        townObject.images.push({"url": req.body.images[a]});
    }

    townObject.save(function(err){

        if(err)
            res.send(err);
        res.json(townObject);
    });

});

router.get('/', function(req, res){
    Town.find({}, function(err,  towns){
        res.send(towns);
    });
});

module.exports = router;



