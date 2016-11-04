/**
 * Code for the Editor
 */

/**
 * The main Editor object
 */

var editor = {};

editor.currentContent = '';

/**
 * Initializes the Mockpress app
 */

editor.init = function() {
  // call editor toggle listener
  editor.listenEditorToggle();
}

/**
 * Updates local storage for post or page
 *
 */

editor.updateContent = function() {
  model.updateContent( editor.currentContent );
};

/**
 * Dynamically fills the edit form based on the url
 *
 */

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
      updateBtn = helpers.getEditorUpdateBtn();

  titleForm.addEventListener('input', view.updateTitleFromForm, false);
  contentForm.addEventListener('input', view.updateContentFromForm, false);
  updateBtn.addEventListener('click', editor.updateContent, false);
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

  editor.currentContent = model.getCurrentContent();

  editorEl.classList.toggle( 'hidden' );
  toggleEl.classList.toggle( 'hidden' );

  event.preventDefault();

  if( false === toggleEl.classList.contains( 'hidden' ) ) {
    editor.fillEditForm( editor.currentContent );
  }
};
