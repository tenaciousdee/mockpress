/**
 * Model file for working with data
 */

/**
 * Main Model Object
 */

var model = {};

model.init = function() {
  model.updateLocalStore( jsonData );
  console.log( model.getPosts() );
};

/**
 * Gets posts from local store
 *
 * @return posts {array} an array of post objects
 */

model.getPosts = function() {
  var posts = model.getLocalStore();
  return posts;
};

/**
 * Gets a single post based on url slug
 *
 * @param slug {string} The slug for the post
 * @return post {object} Single post
 */

 model.getPost = function( slug ) {
   var posts = model.getLocalStore();

   for ( var i = 0, max = posts.length; i < max; i++ ) {
     if ( slug === posts[i].slug ) {
       return posts[i];
     }
   }

   return null;
 };

/**
 * Gets content from local store
 *
 * @return store {object} object or array of objects of site data
 */

 model.getLocalStore = function() {
   return JSON.parse( localStorage.getItem( 'mockPress' ) );
 };

/**
 * Saves temporary store to local storage
 *
 * @param store {string} JSON string of data to store
 */

model.updateLocalStore = function( store ) {
  localStorage.setItem( 'mockPress', store );
};

/**
 * Deletes data from local storage
 *
 */

model.removeLocalStorage = function() {
  localStorage.removeItem( 'mockPress' );
};
