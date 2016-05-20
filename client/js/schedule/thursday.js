define(['./schedule.js', './thursday.json!json.js'], function(Schedule, data) {
  var schedule;
  return {
    load: loadData,
    getEventsByTime: function() { return schedule.getEventsByTime(); },
    eng: 'Thursday',
  };

  function loadData() {
    if (!schedule) {
      schedule = new Schedule();
      data.forEach(e => schedule.addEvent(e));
    }
  }
});