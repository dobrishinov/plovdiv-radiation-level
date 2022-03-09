(function () {
  'use strict'
  feather.replace({ 'aria-hidden': 'true' })
})(),


$(document).ready(function () {
  widget.getDataFromService();
});


setInterval(function () {
  widget.getDataFromService();
}, 15 * 1000);


var widget = function() {
  var callService = function() {
    $.ajax({
      url: "https://api.thingspeak.com/channels/1663924/feed/last.json?results=1",
      type: "GET",
      dataType: "json",
      success: function (response) {
        // console.log(response);
        $('#uSv').html(response.field3);
        $('#CPM').html(response.field2);
        $('#CPS').html(response.field1);
      }
    });
  }
  return {
    getDataFromService: function() { callService(); }
  };
}();


function microsievertConverter(valNum) {
  document.getElementById("outputMicrosievert").innerHTML = valNum;
  document.getElementById("outputNanosievert").innerHTML = valNum * 1000;
};