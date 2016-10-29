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
 * Dynamically fills the edit form based on the url
 * @param {Object} contentObj Post or page object to load
 */

editor.fillEditForm = function( contentObj ) {
  var titleForm = helpers.getEditorTitleEl(),
      contentForm = helpers.getEditorContentEl();

  titleForm.value = contentObj.title;
  contentForm.value = contentObj.content;

  editor.addFormListeners();
};


/**
 * Adds event listeners to form elements
 */

editor.addFormListeners = function() {
  var titleForm = helpers.getEditorTitleEl(),
      contentForm = helpers.getEditorContentEl();

  titleForm.addEventListener('input', view.updateTitleFromForm, false);
  contentForm.addEventListener('input', view.updateContentFromForm, false);
};

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

  if( false === toggleEl.classList.contains( 'hidden' ) ) {
    editor.fillEditForm( model.getCurrentContent() );
  }
};
