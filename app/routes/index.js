"use strict";

// Routes
const express = require( "express" ),
    router = express.Router();

// All global routes
router.get( "/", ( req, res ) => {
    res.json( { message: "Hoorey!, welcome to node api!"} );
} );


// Controller specific routes. Automation of including all controllers.
const files = require( "fs" ).readdirSync( `${__dirname}/../controllers` );
for( let i = 0, len = files.length; i < len; i++ ) {
    let file = files[ i ].substr( 0, files[ i ].lastIndexOf( "." ) );
    if( file === "crud" ){ continue; } // Excluding for CRUD file.
    router.use( "/", require( `../controllers/${file}` ) );
}

module.exports = router;
