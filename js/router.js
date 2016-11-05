/**
 * Router file for managing URL changes
 */

/**
 * The main router object
 *
 */

var router = {};

/**
 * Initializes the router
 *
 */

router.init = function() {
  router.loadContent();
  router.listenPageChange();
};

/**
 * Gets the slug from the URL
 *
 * @return slug {string} Slug for content
 */

router.getSlug = function() {
  var slug = window.location.hash;
  if( "" === slug ) {
    return null;
  } else {
    return slug.substring( 1 );
  }
};

/**
 * Listener function for URL changes
 *
 */

router.listenPageChange = function() {
  window.addEventListener( 'hashchange', router.loadContent, false );
};

/**
 * Determines what to load in the view
 *
 */

router.loadContent = function() {
  var slug = router.getSlug(),
      toggleEl = helpers.getEditorToggleEl();

  view.clearContent();

  if ( null === slug ) {
    view.loadSingleContent( 'home' );
  } else if( 'blog' === slug ) {
    view.loadBlogPosts();
  } else {
    view.loadSingleContent( slug );
  }

  editor.currentContent = model.getContent( slug );

  if( false === toggleEl.classList.contains( 'hidden' ) ) {
    editor.fillEditForm( editor.currentContent );
  }
}
