/* Add all the required libraries*/

/* Connect to your database using mongoose - remember to keep your key secret*/

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html
config = require('./config');
mongoose = require('mongoose');
Listing = require('./ListingSchema.js');
//console.log(config.db.uri);
mongoose.connect(config.db.uri);
//console.log('db connected');


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({ code: 'LBW' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
    
Listing.find({code : 'CABL'}, function(err, codeDocument){
     if(err) throw err;
     delete codeDocument;
     console.log(codeDocument);
     //SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
  });
};

var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */

Listing.findOne({ code: 'PHL' },function(err, user) {
  if (err) throw err;
   	user.address ='1953 Museum Rd, Gainesville, FL 32603';
   	user.save(function(err){
   		if (err) throw err;
  //return the updated document to console 
  console.log(user);
  	})
});
};


var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
Listing.find({}, function(err, users) {
  if (err) throw err;
  // object of all the listings
  console.log(users);
});
   
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
