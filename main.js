$(document).on('ready', function() {
  var outerShell = $('<div class="outerShell"></div>');
  var innerShell = $('<div class="innerShell"></div>');
  outerShell.append(innerShell);

	var now = new Date();
  var hours = now.getHours();
  convertedHours = hours % 12;
  if (convertedHours < 10){
  	convertedHours = "0" + convertedHours;
  }
  var minutes = now.getMinutes();
  if (minutes < 10){
  	minutes = "0" + minutes;
  }


  var labels = $('<ul class="labels"></ul>');
  var amPmLabels = $('<li></li>');
  var autoLabel = $('<li>AUTO</li>');
  if(hours>11){
  	amPmLabels.append("PM");
  }
  else{
  	amPmLabels.append("AM");
  }
  labels.append(amPmLabels);
  labels.append(autoLabel);
  innerShell.append(labels);


  var clockFace = $('<div class="clockFace"></div>');
  var indicator = $('<div class="indicator">.</div>');
  var clockText = $('<div class="clockText"></div>');


  clockText.append('<p class="hours">'+convertedHours+'</p>');
  clockText.append(":");
  clockText.append('<p class="mins">'+minutes+'</p>');

  clockFace.append(indicator);
  clockFace.append(clockText);
  innerShell.append(clockFace);

  var clearfix = $('<div class="clearfix"></div>');
  innerShell.append(clearfix);

  var amFreq = $('<div class="frequencies"><p class="right-offset">AM</p> 53 60 70 90 110 140 170</div>');
  var fmFreq = $('<div class="frequencies"><p class="right-offset">FM</p> 88 92 96 102 106 108</div>');
  innerShell.append(amFreq);
  innerShell.append(fmFreq);

  $(".container").append(outerShell);



  setInterval(function(){
	  var hours = now.getHours();
	  var convertedHours = hours % 12;
	  if (convertedHours < 10){
	  	convertedHours = "0" + convertedHours;
	  }
	  console.log(convertedHours);

  	var minutes = new Date().getMinutes();
  	if (minutes < 10){
  		minutes = "0" + minutes;
  	}

  	$(".mins").html(minutes);
  	$(".hours").html(convertedHours);

  }, 1000);



});