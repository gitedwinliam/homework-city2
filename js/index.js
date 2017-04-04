$(document).ready(function(){

//create array and fill it up
var cityList = ["NYC","SF","LA","ATX","SYD"];

//populate options with values of the array
for(i = 0; i < cityList.length; i++ ){
	$("#city-type").append("<option>" + cityList[i] + "</option>");

}

//wait for a change in select
$("#city-type").change(function(){
	//create variable to get the changed value
	var choice = $("#city-type").val();

	//conditional loop to change value based on value of user
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
		//if user does not pick city, reset
		$('body').attr('class','');
	}
})

})