/**
* Building.js
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
        description:'string',
        building_date:{
        	type:'date'
        },
        size:{
        	type:'string'
        },
        location:{
            model:'location',
            required:'true'
        },
       	category:{
            model:'category',
            required:'true'
        },
        institution:{
            model:'institution'
        },
        photographies:{
            collection: 'photography',
            via: 'building'
        }
    }
};

