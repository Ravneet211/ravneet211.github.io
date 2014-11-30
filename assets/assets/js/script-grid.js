$(document).ready(function()
{
    $(".painting-container").mouseenter(function()
    {
    	$(this).children().last().fadeIn(200);
    })
    $(".painting-container").mouseleave(function()
    {
    	$(this).children().last().hide();
    })

        
})
