// Created By: John Joseph Pietrangelo III 					GO DEVILS!!

//											IMPORTANT !!!
                                    
//			If opening browser off-line, jQuery code will not be recognized by your computer!


// *** Uncomment the lines 8 thru 12 as well as line 62, 85 & 86 below to begin Phases 1-6b ***	
//  Uncomment each Phase, in order. Open HTML file in browser after uncommenting a phase to see result 

// var main = 
	
// 	function()
// 	{
// 		"use strict";

// 		$(".comments button").on("click",  function(event)
												//		Uncomment for block below for Phase# 1 
											    // {
											   	// 		console.log("hello World!");
											   	// }

											   	   //		Uncomment for block below for Phase# 2 
											   	   // {
											   	   // 		$(".comments-input").append("<p>This is a new comment<p/>");
											   	   // }

											   	      //        Uncomment for block below for Phase# 3 
											   	      // {
											   	      // 		var $new_comment = $("<p>");
											   	      // 		$new_comment.text("This is a new comment");
											   	      // 		
											   	      //        $(".comments-input").append($new_comment);
											   	      // }

											   	         //		Uncomment for block below for Phase# 4
											   	         // {
											   	         // 	var $new_comment = $("<p>").text("This is a new comment");
											   	         // 	$(".comments-input").append($new_comment);
											   	         // }

											   	    //	Uncomment for block below for Phase# 5 	   
											   		// {
											   		// 	var $new_comment = $("<p>"),
											   			
											   		// 	comment_text = $(".comments input").val();

											   		// 	$new_comment.text(comment_text);

											   		// 	$(".comments-input").append($new_comment);
											   		// }


											   		//  Uncomment for block below for Phase# 6-a
		      //                                       {
								// 			   			var $new_comment;
											 
								// 			   			if ($(".comments input").val() !== "") 
								// 			   			{
								// 			   				$new_comment = $("<p>").text($(".comments input").val());
								// 			   				$new_comment.hide();
								// 			   				$(".comments-input").append($new_comment);
								// 			   				//Defualt parameter value is 400/ms: 
								// 							//Either value, number (500) or string ("500") data-type will be accepted.
								// 							$new_comment.fadeIn(1000);
								// 			   				$(".comments input").val("");
								// 			   			}	
								// 	

				// *** Uncomment the line below for Phases 1-6b ***				   		}
								// );

	//	   Uncomment for block below for Phase# 6-b
		// $(".comments input").on("keypress", function (event) 
		// {
		// 	var $new_comment;

		// 	if (event.keyCode === 13)
		// 	{
		// 		if ($(".comments input").val() !== "") 
		// 		{
		// 			$new_comment = $("<p>").text($(".comments input").val());
		// 			$new_comment.hide();
		// 			$(".comments-input").append($new_comment);
		// 			//Defualt parameter value is 400/ms: 
		// 			//Either value, number (500) or string ("500") data-type will be accepted.
		// 			$new_comment.fadeIn(1000);
		// 			$(".comments input").val("");
		// 		}	

		// 	}
		// });
     // *** Uncomment the 2 lines below for Phases 1-6b ***	       
 //    };      																								
	// $(document).ready(main);


	// 						***	FINAL Phase# 7 ***
	// Comment out the code below before beginning the instructions 
	// at begining of this file, to fire Phase# 1 correctly.



var main = function()
{
	"use strict";

	var addCommentFromInputBox = function()
	{
		var $new_comment;

		if ($(".comments input").val() !== "") 
			{
		 		$new_comment = $("<p>").text($(".comments input").val());
		 		$new_comment.hide();
		 		$(".comments-input").append($new_comment);
		 		//				fadeIn function's Defualt parameter value is 400/ms: 
		 		//		Either value: number (500) or string ("500") data-type will be accepted.
		 		$new_comment.fadeIn(1000);
		 		$(".comments input").val("");
		 	}	
	};

	$(".comments button").on("click",  function(event)
	{
		addCommentFromInputBox();
	});

	$(".comments input").on("keypress", function (event)
	{
		if (event.keyCode === 13)
		{ 
			addCommentFromInputBox();
		}
	});
};

$(document).ready(main);
