// input kentän ikonin toiminta
$(".x").hide();

$('#searchInput').keyup(function(){
  if($(this).val() == ''){
    $('.x').hide();
  }else{
    $('.x').show();
  }
});

// input-kentän tyhjennys
$(".x").click(function(){
  $('#searchInput').val('');
    $(".x").hide();
});


// tab-taulukon toiminnallisuus
$('.menu .item')
  .tab()
;

// Map tietorakenteet asemien nimille ja lyhenteille
var stationNameMap = new Map();
var stationShortCodeMap = new Map();

// asemien nimet = asemien lyhenne, map-tietorakenteeseen
$( document ).ready(function() {
  $.getJSON("https://rata.digitraffic.fi/api/v1/metadata/stations", function(data){ 

    $.each(data, function(key, value){
      var statioName = value.stationName;
      var stationShortCode = value.stationShortCode;

      stationNameMap.set(statioName, stationShortCode );

      stationShortCodeMap.set(stationShortCode, statioName );
    });

    for (var [key, value] of stationNameMap.entries()) {
      console.log(key + ' = ' + value);
      
    }  
  });
});


// funktiot avainten asettamiselle tietorakenteeseen
function findStationShort(key){
  
  var short = stationNameMap.get(key);
  console.log(short);
  return short;
}



function findStationName(key){
  
  var name = stationShortCodeMap.get(key);
  console.log(name);
  return name;
}


// hakutoiminto enterin painamisella
$("#searchInput").keypress(function(event) {
  if (event.keyCode === 13) {
    var search = ($("#searchInput").val());
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/"+ search + "?arrived_trains=0&arriving_trains=10&departed_trains=0&departing_trains=0&include_nonstopping=false", function(data){ 

  var trainData = '';
    // sekä olioiden iterointi ja asetus taulukkoon
    $.each(data, function(key, value){
      trainData += '<tr>';
      trainData += '<td>'+value.trainType+' '+value.trainNumber+' </td>';
      trainData += '<td>'+(value.timeTableRows)[0].stationShortCode+' </td>';
      trainData += '<td>'+(value.timeTableRows)[value.timeTableRows.length-1].stationShortCode+' </td>';
      trainData += '<td>'+(value.timeTableRows)[0].scheduledTime+' </td>';
      trainData += '</tr>';
      });

      $('#trainTableArriving').append(trainData);    

    });
  }
});

// samat toiminnot lähtevien junien tauluun
$("#searchInput").keypress(function(event) {
  if (event.keyCode === 13) {
    var search = ($("#searchInput").val());
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/"+ search + "?arrived_trains=0&arriving_trains=0&departed_trains=0&departing_trains=10&include_nonstopping=false", function(data){ 

  var trainData = '';
    // sekä olioiden iterointi ja asetus taulukkoon
    $.each(data, function(key, value){
      trainData += '<tr>';
      trainData += '<td>'+value.trainType+' '+value.trainNumber+' </td>';
      trainData += '<td>'+(value.timeTableRows)[0].stationShortCode+' </td>';
      trainData += '<td>'+(value.timeTableRows)[value.timeTableRows.length-1].stationShortCode+' </td>';
      trainData += '<td>'+(value.timeTableRows)[0].scheduledTime+' </td>';
      trainData += '</tr>';
      });

      $('#trainTableDeparting').append(trainData);    

    });
  }
});


/*
// hakutoiminto enterin painamisella
$("#searchInput").keypress(function(event) {
  if (event.keyCode === 13) {
    var search = ($("#searchInput").val());
    var stationShort = findStationShort(search);
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/"+ stationShort + "?arrived_trains=0&arriving_trains=11&departed_trains=0&departing_trains=0&include_nonstopping=false", function(data){ 

    var trainData = '';
    // sekä olioiden iterointi ja asetus taulukkoon
    $.each(data, function(key, value){
      trainData += '<tr>';
      trainData += '<td>'+value.trainType+' '+value.trainNumber+' </td>';
      // haetaan aseman nimi lyhenteen perusteella

      var shortCodeArr = (value.timeTableRows)[0].stationShortCode;
      var nameArr = findStationName(shortCodeArr);
      
      
      trainData += '<td>'+nameArr+' </td>';

      var shortCodeDep = (value.timeTableRows)[value.timeTableRows.length-1].stationShortCode;
      var nameDep = findStationName(shortCodeDep);


      trainData += '<td>'+nameDep+' </td>';
      trainData += '<td>'+(value.timeTableRows)[0].scheduledTime+' </td>';
      trainData += '</tr>';
      });

      $('#trainTableArriving').append(trainData);    

    });
  }
});
*/







