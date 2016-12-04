"use strict";

const util = require( "../components/helper" );

class CRUD {
    constructor( model ){
        this.Model = model;
    }

    readAll( req, res ){
        this.Model.find( ( err, models ) => {
            if( err ) {
                res.send( err );
            } else {
                res.json( models );
            }
        } );
    }

    create( req, res ){
        let model = new this.Model();
        console.log( "CRUD Request: ", req.body );
        util.getReqParams( model, req.body );

        console.log( model );
        model.save( ( err ) => {
            if( err ){
                res.send( err );
            } else {
                res.json( model );
            }
        } );
    }

    read( req, res ){
        this.Model.findById( req.params.id, ( err, model ) => {
            if( err ){
                res.send( err );
            } else {
                res.json( model );
            }
        } );
    }

    update( req, res ){
        this.Model.findById( req.params.id, ( err, model ) => {
            if( err ){
                res.send( err );
            } else {
                util.getReqParams( model, req.body );
                model.save( ( err ) => {
                    if( err ){
                        res.send( err );
                    } else {
                        res.json( model );
                    }
                } );
            }
        } );
    }

    delete( req, res, msg = "Model deleted successfully!" ){
        this.Model.remove( {
            _id: req.params.id
        }, ( err, model ) => {
            if( err ){
                res.send( err );
            } else {
                res.json( { message: msg } );
            }
         } );
    }
}

module.exports = CRUD;
