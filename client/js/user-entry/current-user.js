define(['jquery'],function($) {
  var singleton;

  User.prototype.setName = setName;

  return function getSingleton() {
    return (singleton = (singleton || new User()));
  }();

  function User() {

  }

  function setName(name) {
    this.name = name;
    return new Promise(function(resolve) {
      $.post('/user/' + name, function(resp) {
        resolve(resp);
      }, 'json');
    });
  }

  function getName() {
    return this.name;
  }
});