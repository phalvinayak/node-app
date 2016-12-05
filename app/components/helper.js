"use strict";

// Class utility, holds generic methods.
class Utility{
    construcor(){

    }

    // Read all the request parameters and add/update on model.
    getReqParams( model, req ){
        console.log( "Request: ", req );
        for (let key in req ) {
            if (req.hasOwnProperty(key)) {
                model[ key ] = req[ key ];
            }
        }
        console.log( "Bear", model );
    }
}

// New instace created here, such that this will act as singleton
// As all the node require statement are cached, this object will be cached when used it at different palces
module.exports = new Utility();
