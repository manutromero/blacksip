var express = require('express')
var http = require('http')
var app = express();
var bodyParser = require('body-parser');

AircraftBrands = [
    {
        "id": 1,
        "name": "Boeing"
    },
    {
        "id": 2,
        "name": "Airbus"
    }
]
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/mi-servicio', (req, res)=>{
    console.log(req.body)
    res.json("Hola desde API")
})

app.get('/mi-servicio', (req,res)=>{
    res.send(AircraftBrands)
})

http.createServer(app).listen(8001, () =>{
     console.log("Server correndio en el puerto 8001")
});