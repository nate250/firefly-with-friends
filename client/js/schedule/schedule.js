define(['js-bst'], function(bst) {
  var SplayTree = bst.__SplayTree1__(compareKey);
  Schedule.prototype.addEvent = addEvent;
  Schedule.prototype.getEventsByTime = getEventsByTime;
  return Schedule;

  function Schedule() {
    this.events = [];
    this.indexByTime = new SplayTree();
    this.indexByStage = new SplayTree();
  }

  function addEvent(event) {
    var idx = this.events.length;
    this.events.push(event);
    var byTime = {};
    byTime[event.startTime] = event;
    var byStage = {};
    byStage[event.stage] = event;
    this.indexByTime.insert(byTime);
    this.indexByStage.insert(byStage);
  }

  function getEventsByTime() {
    var arr = [];
    this.indexByTime.in_order_traversal(function(idx) {
      var kIdx = Object.getOwnPropertyNames(idx)[0];
      arr.push(idx[kIdx]);
    });
    return arr;
  }
  
  function addToIndex(index, key, event) {
    if (!Array.isArray(index[key])) {
      index[key] = [];
    }
    index[key].push(idx);
  }

  function compareKey(a, b) {
    var kA = Object.getOwnPropertyNames(a)[0];
    var kB = Object.getOwnPropertyNames(b)[0];

    return kB - kA;
  }
});