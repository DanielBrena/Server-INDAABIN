/**
* Photography.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	schema: true,
  	attributes: {

        name:{
      		type: 'string',
      		required: 'true',
      		unique: true
    	},
    	id_image:{
    		type:'string',
    		required:'true'
    	},
        url:{
        	type:'string',
        	required: 'true'
        },
        status:{
        	type:'boolean',
        	defaultsTo: false
        },
        building:{
            model:'building'
        }
    }
};

