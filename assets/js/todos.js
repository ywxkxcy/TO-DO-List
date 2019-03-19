$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delte Toco
$("ul").on("click", "span", function(event){
	// get the parent element and remove it
	$(this).parent().fadeOut(500,function(){
		// now the this means li not the span
		$(this).remove();
	});
	// add event object (with any name) stop the event bubbling to parent element
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	// 13 is the enter key
	if(event.which === 13){
		// grabbing new todo text form input
		var todoText = $(this).val();
		// remove the text in the upper box
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ todoText +"<i class='far fa-check-circle'></li>")
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})