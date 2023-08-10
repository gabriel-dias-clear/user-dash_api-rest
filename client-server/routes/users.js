const express = require('express');
const restify = require('restify-clients')
const router = express.Router();

const client = restify.createJsonClient({
  url: 'http://localhost:4000'
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  client.get('/users', function(err, request, response, obj){

    try {

    res.end(JSON.stringify(obj, null, 2))

      
    } catch (error) {
      console.log(error)
    }


  })

});

module.exports = router;
