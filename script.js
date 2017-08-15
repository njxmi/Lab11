//script for Lab 11
//var requestURL = 'https://www.reddit.com/r/aww/.json';



//example from whiteboard exercise
// responseBody.data.children.forEach(function(child) {
	//console.log(child.data.title)
//});
	
$.getJSON('https://www.reddit.com/r/aww/.json', function(data) { 
    $.each(data.data.children, function(i,item){

        $("<img/>").attr("src", item.data.url).appendTo(".images");
    });
});