$(document).ready(function () {

	// .click or .on("click", function()) does the same thing 

	$("#stream1_btn").click(function () {
		$(".stream1").hide(); // hide the element and can be done a different speeds as shown below
		$(".stream1").show('slow'); // show the element at a slow speed
		$(".stream1").show('medium'); // show the element at a medium speed
		$(".stream1").show('fast'); // show the element at a fast speed
		$(".stream1").show(1000); // show the element at a 1000 miliseconds speed
		// can use toggle function or slidedown function or slideup function
		$(".stream1").fadeTo(1000, 0.5); // fades the element at a 1000 miliseconds speed and 0.5 opacity 
	});
	$("#stream2_btn").on("click", function () {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream').addClass('highlight_stream1'); // removed and add class can be done this way as well. this is called chaining. Can be done to event listeners as well 
	});
	
	$("#stream3_btn").on("click", function () {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream3").addClass('highlight_stream');
	});


});