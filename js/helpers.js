/**
 * Helper file for extra helper functions
 */

var helpers = {};

/**
 * Creates a list item with a link inside for menus
 *
 * @param {Object} contentObj Page object to create menu item for
 * @return {Object} menuItemEl List item DOM object
 */

helpers.createMenuItem = function( contentObj ) {
  var menuItemEl = document.createElement( 'li' );

  menuItemEl.appendChild( helpers.createLink( contentObj ) );

  return menuItemEl;
};

/**
 * Creates link
 *
 * @param {Object} contentObj Page or post object to create link for
 * @return {Object} linkEl Link object
 */

helpers.createLink = function( contentObj ) {
  var linkEl = document.createElement( 'a' ),
      linkTitle = document.createTextNode( contentObj.title );

  linkEl.appendChild( linkTitle );
  if ( 'home' === contentObj.slug ) {
    linkEl.href = "#"
  } else {
    linkEl.href = "#" + contentObj.slug;
  }

  return linkEl;
};

/**
 * Gets the main menu element
 * @return {Object} Main menu DOM element
 */

helpers.getMainMenuEl = function() {
 return document.querySelector( '#mainNav ul' );
};

/**
 * Gets page title from the DOM
 * @return {Object} Main page title DOM element
 */

helpers.getPageTitleEl = function() {
  return document.getElementById( 'pageTitle' );
};

helpers.getPageContentEl = function() {
  return document.getElementById( 'pageContent' );
};

/**
 * Gets the Editor element in the DOM
 * @return {Object} Main editor DOM object
 */

helpers.getEditorEl = function() {
  return document.getElementById( 'editor' );
}

/**
 * Gets Editor toggle element in the DOM
 * @return {Object} Main toggle element
 */

 helpers.getEditorToggleEl = function() {
   return document.getElementById( 'editorToggle' );
 }
