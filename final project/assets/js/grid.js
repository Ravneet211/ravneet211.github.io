$(document).ready(function(){
	$("img").mouseenter(function()
	{
		$(this).siblings(0).fadeIn(750);
		var description = $(this).siblings(0);
		var lol = $(this).parent().children(0);
		var h = lol.height();
		setTimeout(function()
		{
			var w = description.siblings(0).width();
			var h = description.siblings(0).height();
			description.css("width",w);
			description.css("z-index",2);
			description.css("position","relative");
			description.css("top",-description.height());
		},0);
		setTimeout(function()
		{    
             description.css("-webkit-transform","translateY("+ description.height()/2+"px)");
             description.siblings(0).css("-webkit-transform","translateY("+ -description.height()/2+"px)");
             description.siblings(0).css("-webkit-transition-duration","0.75s");
             description.css("-webkit-transition-duration","0.75s");
        },0);
        $("img").mouseleave(function()
        {
        	$(this).css("-webkit-transform","translateY(0px)");
        	$(this).siblings(0).css("webkit-transform","translateY(0px)");
        	var description = $(this).siblings(0)
        	setTimeout(function()
        	{
        		description.fadeOut(325);
        	},0);
        });

	});


})