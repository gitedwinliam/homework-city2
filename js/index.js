$(document).ready(function(){

var cityList = ["NYC","SF","LA","ATX","SYD"];

for(i = 0; i < cityList.length; i++ ){
	$("#city-type").append("<option>" + cityList[i] + "</option>");

}

$("#city-type").change(function(){
	var choice = $("#city-type").val();
	console.log(choice);

	if(choice == "NYC"){
		$('body').attr('class', 'nyc'); //sets class to nyc
	}else if(choice == "SF"){
		$('body').attr('class', 'sf');
	}else if(choice == "LA"){
		$('body').attr('class', 'la');
	}else if(choice == "ATX"){
		$('body').attr('class', 'austin');
	}else if(choice == "SYD"){
		$('body').attr('class', 'sydney');
	}else{
		$('body').attr('class','');
	}
})

})