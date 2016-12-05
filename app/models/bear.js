"use strict";

const mongoose = require( "mongoose" ),
    Schema = mongoose.Schema;

const BearSchema = new Schema( {
    name: String
} );

module.exports = mongoose.model( "Bear", BearSchema );
