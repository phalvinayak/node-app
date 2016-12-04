/* global process */
"use strict";

const express = require( "express" ),
    bodyParser = require( "body-parser" ),
    mongoose = require( "mongoose" ),
    app = express(),
    port = process.env.PORT || 3000;

app.use( bodyParser.urlencoded( { extended: true } ) )
   .use( bodyParser.json() );

// mongoose.connect( "mongodb://localhost:27017/mydb" );
mongoose.connect( "mongodb://phalvinayak:vins4520@ds035735.mlab.com:35735/restbase" );

app.use( "/api", require( "./app/routes" ) )
   .listen( port );

console.log( `Server is running on port ${port}` );
