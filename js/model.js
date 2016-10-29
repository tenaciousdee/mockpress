/**
 * Model file for working with data
 */

/**
 * Main Model Object
 */

var model = {};

model.init = function() {
  model.updateLocalStore( data );
};

/**
 * Gets a single post or page based on the url slug
 *
 * @param {String} slug The slug for the post
 * @return {Object} contentObj Single post or page
 *
 */

model.getContent = function( slug ) {
  var contentObj = model.getPost( slug );

  if ( null === contentObj ) {
    contentObj = model.getPage( slug );
  }

  if( null === contentObj ) {
    contentObj = {
      title: '404 Error',
      content: 'Content not found'
    }
  }

  return contentObj;
};

/**
 * Gets a single post or page based on the current url
 *
 * @return {Object} contentObj Single post or page
 *
 */

model.getCurrentContent = function() {
  var slug = router.getSlug(),
      contentObj;

  if( null === slug ) slug = 'home';

  contentObj = model.getContent( slug );

  return contentObj;
};

/**
 * Gets posts from local store
 *
 * @return posts {array} an array of post objects
 */

model.getPosts = function() {
  var posts = model.getLocalStore().posts;
  return posts;
};

/**
 * Gets a single post based on url slug
 *
 * @param slug {string} The slug for the post
 * @return post {object} Single post
 */

 model.getPost = function( slug ) {
   var posts = model.getLocalStore().posts;

   for ( var i = 0, max = posts.length; i < max; i++ ) {
     if ( slug === posts[i].slug ) {
       return posts[i];
     }
   }

   return null;
 };

/**
 * Gets pages from local store
 *
 * @return {object[]} pages array of page objects
 */

model.getPages = function() {
  var pages = model.getLocalStore().pages;
  return pages;
}

/**
 * Gets a single page based on url slug
 *
 * @param {string} slug The slug for the page
 * @return {object} page Single page object
 */

 model.getPage = function( slug ) {
   var pages = model.getLocalStore().pages;

   for ( var i = 0, max = pages.length; i < max; i++ ) {
     if ( slug === pages[i].slug ) {
       return pages[i];
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
  localStorage.setItem( 'mockPress', JSON.stringify( store ) );
};

/**
 * Deletes data from local storage
 *
 */

model.removeLocalStorage = function() {
  localStorage.removeItem( 'mockPress' );
};
