/**
 * Code for the Editor
 */

/**
 * The main Editor object
 */

var editor = {};

/**
 * Initializes the Mockpress app
 */

editor.init = function() {
  // call editor toggle listener
  editor.listenEditorToggle();
}

/**
 * Listens for the editor toggle button
 */

editor.listenEditorToggle = function() {
  var toggleEl = helpers.getEditorToggleEl();

  toggleEl.addEventListener('click', editor.toggle, false);
};

/**
 * Controls the toggle for the editor
 * @return {Object} Main toggle element
 */

editor.toggle = function() {
  var editorEl = helpers.getEditorEl(),
      toggleEl = helpers.getEditorToggleEl();

  editorEl.classList.toggle( 'hidden' );
  toggleEl.classList.toggle( 'hidden' );

  event.preventDefault();
};
