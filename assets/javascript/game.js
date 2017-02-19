$(document).ready(function(){

	var wins = 0;
	var losses = 0;
	var counter = 0;


	generateNumber: function() {

		// This generates a number between 1 and 121. This is the number we are going to guess. 
		var random_num = Math.random() * 120 + 1;
		random_num = Math.floor(random_num);

		console.log(random_num);




	}



});