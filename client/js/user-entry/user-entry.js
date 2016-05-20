var currentUser = require('./current-user.js');
var currentSession = require('./current-session.js');

if (location.hash) {
  currentSession.getById(location.hash.substring(1)).then(function(session) {
    currentSession.setId(session.id);
    hideUserEntry();
    schedMatrix.show();
  });
}

var $ = require('jquery');
var schedMatrix = require('../schedule/matrix.js');

$('#user-entry-submit').on('click', submitUserEntry);
var userEntryInput = $('#user-entry-input');

function submitUserEntry() {
  currentUser.setName(userEntryInput.val()).then(function(session) {
    location.hash = session.id;
    currentSession.setId(session.id);
  });
  hideUserEntry();
  schedMatrix.show();
}

function hideUserEntry() {
  $('.user-entry').hide();
}