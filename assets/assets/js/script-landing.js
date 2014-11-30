$(document).ready(function()
{
    $(".bucket-icon").fadeIn(2000);
    setTimeout(function()
    {
    	
    	$("#expanding-background").css("width","100%");
    	$("#expanding-background").css("height","100%");
    	$("#expanding-background").css("border-radius","0px");
    	$("#expanding-background").css("top","0px");
    	$("#expanding-background").css("left","0px");
    	setTimeout(function()
    	{
    		$(".bucket-icon").fadeOut(11000);

    	},0)
        setTimeout(function()
        {
            $("#page-title").fadeIn(5000);
            $(".button").fadeIn(5000).css("display","inline-block");
        },9000);
    },2000);
    
    
})
    