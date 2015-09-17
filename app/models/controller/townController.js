var express     = require('express');        // call express
var bodyParser  = require('body-parser');
var router      = express.Router();          // get an instance of the express Router


// MODELOS //
var Town        = require('../entity/town');

router.post('/', function(req, res) {

    var townObject              = new Town();
    townObject.name             = req.body.name;
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



router.put('/:id', function(req, res){

    Town.findById(req.params.id, function(err, townObject){

        if(err){
            res.send(err);
        }

        console.log("=============ENTRANDO =============================");
        console.log(req.body);

        if(typeof(req.body.name) !== undefined){  console.log("entramos ===================");   townObject.name             = req.body.name;         }
        if("description" in req.body){     townObject.description      = req.body.description;  }
        if("state"       in req.body){     townObject.state            = req.body.state;        }
        if("food"        in req.body){     townObject.food             = req.body.food;         }
        if("manners"     in req.body){     townObject.manners          = req.body.manners;      }
        if("frontimage"  in req.body){     townObject.frontimage       = req.body.frontimage;   }
        if("latitude"    in req.body){     townObject.latitude         = req.body.latitude;     }
        if("longitude"   in req.body){     townObject.longitude        = req.body.longitude;    }
        if("video"       in req.body){     townObject.video            = req.body.video;        }

        if("images"       in req.body){
            townObject.images = [];

            for(var a = 0; a < req.body.images.length; a++){                    //recorremos las imagenes que nos enviaron :)
                townObject.images.push({"url": req.body.images[a]});
            }



        }

        townObject.save(function(err){
            if(err){
                res.send(err);
            }
            res.json(townObject);

        });

        






    });


});

module.exports = router;



