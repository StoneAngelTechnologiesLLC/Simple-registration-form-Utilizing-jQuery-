// Created By: John Joseph Pietrangelo III 					GO DEVILS!!

//											IMPORTANT !!!
                                    
//			If opening browser off-line, jQuery code will not be recognized by your computer!

var main = function()
{
	"use strict";
	//										** Phase #5

	var toDos = [
					"Get Groceries",
					"Make up some new ToDos",
					"Prep for Monday's class",
					"Checkout Linked-in",
					"Take Gracie to the park",
					"Finish writing this book"
				];

	$(".tabs a span").toArray().forEach(function(element)
	{
		var $element = $(element);

		// To create an event("click") handler for this element
		$(element).on("click", function()
		{
			//since we are using jQuery version of element,
			//We will create temporary variable
			//so we don't have to re-create it.
			var $content, $input, $button;

			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();

			if ($element.parent().is(":nth-child(1)"))
			{
				$(".mainContainer").css("width", "66.66%");
				$content = $("<ul>");
				// for (var i = 0; i <= toDos.length; i++) // 1st to last
				for (var i = toDos.length-1; i >= 0; i--)  // last to 1st
				{
					$content.append($("<li>").text(toDos[i]));
				}
				//$("main .content").append($content);
				//$content.append($("<li>").text("hello"));
			}

			else if ($element.parent().is(":nth-child(2)"))
			{
				$(".mainContainer").css("width", "66.66%");
				$content = $("<ul>");
				toDos.forEach(function (todo)
				{
					$content.append($("<li>").text(todo));
				});
			} 
			else if ($element.parent().is(":nth-child(3)"))
			{
				$(".mainContainer").css("width", "33.2%");
				$input = $("<input>");

				$button = $("<button>").text("ASU");

				$button.on("click", function()
				{
					if($input.val() !== "")
					{
						toDos.push($input.val());
						$input.val("");
					}
				});

				$content = $("<div>").append($input, $button);
			} 
 			
 			$("main .content").append($content);
			return false;
		});
	});	

	$(".tabs a:first-child span").trigger("click");
	};

$(document).ready(main);



	//$(".tabs a:first-child span").trigger("click");
	// //									** Phase #4 Using A ForEach Loop, Array

	// 	$(".tabs a span").toArray().forEach(function (element)
	// 	{
	// 		// To create an event("click") handler for this element
	// 		$(element).on("click", function()
	// 		{
	// 			$("tabs. a span").removeClass("active");
	// 			$(element).addClass("active");
	// 			$("main .content").empty();
	// 			return false;
	// 		}); 

	// 	});
 // 	//  //								** Phase #3 Using A For Loop

	// //  var tabnumber;
	// //  for (tabNumber = 1; tabnumber <= 3; tabnumber++) 
	// //  {
	// //  	var tabSelector = ".tabs a:nth-child("+ tabNumber +") span";
	// //  }

	// //  $(tabSelector).on("click", function() 
	// //  {
	// //  	$(".tabs span").removeClass("active");
	// //  	$(tabSelector).addClass("active");
	// //  	return false;
	// //  })

 // 	// //  	//  						** Phase #2 Refactoring Using A Funstion
	
	// // // var makeTabActive = function(tabNumber)
	// // // {
	// // // 	// construct the selector from the tab number
	// // // 	var tabSelector = ".tabs a:nth-child("+ tabNumber +") span";
	// // // 	$(".tabs span").removeClass("active");
	// // // 	$(tabSelector).addClass("active");
	// // // }

	// // // //  						** Phase #2 Refactoring Using A Funstion

	// // // $(".tabs a:nth-child(1)").on("click", function ()
	// // // {
	// // // 	makeTabActive(1);
		
	// // // 	// //  					** Phase #1 Creating The Tab Functonality

	// // // 	// // To make ALL tabs INACTIVE.
	// // // 	// $(".tabs span").removeClass("active");

	// // // 	// // To make 1st tab ACTIVE
	// // // 	// $(".tabs a:nth-child(1) span").addClass("active");

	// // // 	// // To empty main section, in order to re-create it
	// // // 	// $("main .content").empty();

	// // // 	// To return false, so we don't follow the link
	// // // 	return false;
	// // // });

	// // // //  						** Phase #2 Refactoring Using A Funstion

	// // // $(".tabs a:nth-child(2)").on("click", function()
	// // // {
	// // // 	makeTabActive(2);
	// // // 	// //  					** Phase #1 Creating The Tab Functonality

	// // // 	// $(".tabs span").removeClass("active");
	// // // 	// $(".tabs a:nth-child(2) span").addClass("active");
	// // // 	// $("main .content").empty();
	// // // 	return false;
	// // // });

	// // // //  						** Phase #2 Refactoring Using A Funstion

	// // // $(".tabs a:nth-child(3)").on("click", function()
	// // // {
	// // // 	makeTabActive(3);
	// // // 	// //  					** Phase #1 Creating The Tab Functonality

	// // // 	// $(".tabs span").removeClass("active");
	// // // 	// $(".tabs a:nth-child(3) span").addClass("active");
	// // // 	// $("main .content").empty();
	// // // 	return false;
	// // // });


// };

// $(document).ready(main);
