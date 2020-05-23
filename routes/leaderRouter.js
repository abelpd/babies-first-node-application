const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    res.end('Will add the leaders: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promo');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});

leaderRouter.route('/:leaderID')
.get((req,res,next) => {
    res.end('Will send details of the leaders: ' + req.params.promoID + ' to  you!');
})
.post( (req,res,next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /leaders/' + req.params.promoID);
})
.put((req,res,next) => {
    res.write('Updating the leaders: ' + req.params.promoID + '\n')
    res.end('Will update the leaders: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req,res,next) => {
    res.end('Deleting leaders: ' + req.params.promoID);
}); 



module.exports = leaderRouter;