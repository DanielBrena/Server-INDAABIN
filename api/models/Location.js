/**
* Location.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  	schema: true,
  	attributes: {
        latitude:{
      		type: 'string',
      		required: 'true'
    	},
    	longitude:{
      		type: 'string',
      		required: 'true'
    	},
        city:'string',
        state:'string',
        building:{
            model:'building'
        }
    }
};

