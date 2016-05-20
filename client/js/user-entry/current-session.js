define(['jquery'],function($) {
  var singleton;

  Session.prototype.getById = getById;
  Session.prototype.setId = setId;

  return function getSingleton() {
    return (singleton = (singleton || new Session()));
  }();

  function Session() {

  }

  function getById(sid) {
    var self = this;
    return new Promise(function(resolve) {
      $.get('/session/' + sid, function(resp) {
        resolve(resp);
      }, 'json');
    });
  }

  function setId(sid) {
    this.id = sid;
  }
});