"use strict";

// Routes
const express = require( "express" ),
    CRUD = require( "./crud" );

const bear = new CRUD( require( "../models/bear" ) ),
    router = express.Router();

router.route( "/bears" )
    // Get all bears...
    .get( ( req, res ) => {
        bear.readAll( req, res );
    } );

router.route( "/bear" )
     // Create new bear...
    .post( ( req, res ) => {
        bear.create( req, res );
    } );

router.route( "/bear/:id" )
    // Get bear with id
    .get( ( req, res ) => {
        bear.read( req, res );
    } )

    // Update bear with id
    .put( ( req, res ) => {
        bear.update( req, res );
    } )

    // Delete bear with id
    .delete( ( req, res ) => {
        bear.delete( req, res, "Bear deleted successfully!" );
    } );

module.exports = router;
