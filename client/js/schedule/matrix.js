define(['jquery', './thursday.js', './friday.js', './saturday.js', './sunday.js'], function($, thu, fri, sat, sun) {
  var container = $('.festival-schedule');
  var currentDay = thu;
  var containerTitle = container.children('h3');

  return {
    show: showSchedule
  };

  function showSchedule() {
    container.show();
    loadScheduleFor(currentDay);
    renderByTime(currentDay);
  }

  function loadScheduleFor(day) {
    containerTitle.text(day.eng);
    day.load();
  }

  function renderByTime(day) {
    var stages = {};
    var stageArr = [];
    var times = {};
    var timeArr = [];
    var matrix = day.getEventsByTime().reduce(function(prev, cur, i) {
      if (!times[cur.startTime]) {
        times[cur.startTime] = prev.length;
        timeArr.push(cur.startTime);
      }
      prev.push([]);
      if (!stages[cur.stage]) {
        stages[cur.stage] = prev[times[cur.startTime]].length;
        stageArr.push(cur.stage);
      }
      prev[times[cur.startTime]].push(cur);
      return prev;
    }, []);


    var table = '<table><tr><td></td><th>' + stageArr.join('</th><th>') + '</th></tr>';

    table += '<tr>' + matrix.map(function(r, i) {
      return '<th>' + timeArr[i] + '</th><td>' +
        r.map(function(e) {
          return e.artist;
        }).join('</td><td>') + '</td>';
    }).join('</tr><tr>') + '</tr></table>';

    container.children('article').html(table);
  }
});