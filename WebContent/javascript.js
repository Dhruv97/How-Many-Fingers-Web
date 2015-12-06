
$(document).ready(function(){

 $("#answer").hide();
});
	

$(document).ready(function(){
	 
		 
		 

	 
	});
	
	
	
	$(document).ready(function() {
		

	$("#button").click(function() {
		
		var x = Math.random();
		var value = $("input").val(); 
		x = 6*x;
		x = Math.floor(x);
		
		if(x == value) {
		$('#answer').addClass('animated rotateIn');
		$("#answer").html("You're right! The answer is " + x) + "!";
		$("#answer").fadeIn();
	} else {
		$('#answer').addClass('animated wobble');
		$("#answer").html("You're wrong! The answer is " + x + "!");
		$("#answer").fadeIn();
	
	}
		
		 
	})
	
	});
	
	$(document).ready(function(){
		  $("input").keyup(function(){
		    $("#answer").hide();
		  });
		});