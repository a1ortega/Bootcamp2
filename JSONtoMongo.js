'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/
//see https://mongoosejs.com/docs/connections.html
//See https://docs.atlas.mongodb.com/driver-connection/
//console.log('connecting');
mongoose.connect(config.db.uri);
//console.log('connected');

/*
  Instantiate a mongoose model for each listing obj in the JSON file, 
  and then save it to your Mongo database 
  //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach



  Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
 */
 
fs.readFile('listings.json', 'utf8', function(err, data) {
  if (err)   //Check for errors
  	throw err;
    //console.log(data); //DEBUG**
   // console.log('parsed!'); //DEBUG**\
   console.log("Reading File");
  //listingData = data;
  var jsondataset = JSON.parse(data);
  	jsondataset.entries.forEach(function(listings){
  		var obj2save = new Listing(listings);
  		obj2save.save(function(err){
  			if(err)
  				throw err;
  		});
  		});
  		console.log('**Done writing to Mongo! Please close this terminal window**');
  });
  
 // Source : https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications 

/*  
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
 
