$(document).ready(function() {		

  var SECONDS = 12;         //Number of seconds for each image
  var firstslide = Math.floor(Math.random()*($('ul.slideshow li').size()-2))+1; //randomly select first slide
	slideShow(SECONDS*500, firstslide);   //Execute the slideShow
});

function slideShow(speed, firstslide) {

  //Set the opacity of all images to 0
	$('ul.slideshow li').css({opacity: 0.0});
	$('ul.slideshow li').removeClass('show');
	
	//Remove the show class from all images
	$('ul.slideshow li').removeClass('show');
	
	//Display first slide (set it to full opacity)
	$('ul.slideshow li').eq(firstslide).addClass('show').css({opacity: 1.0});
		
	//Call the gallery function to run the slideshow	
	var timer = setInterval('gallery()',speed);
	
}

function gallery() {

	//if no IMGs have the show class, grab the first image
	//var current = ($('ul.slideshow li.show')?  $('ul.slideshow li.show') : $('#ul.slideshow li:first'));
	var current = $('ul.slideshow li.show');

	//Get next image, if it reached the end of the slideshow, rotate it back to the first image
	var next = ((current.next().index() < ($('ul.slideshow li').size()-1)) ? current.next() : $('ul.slideshow li:first').next());
		
	//Set the fade in effect for the next image, show class has higher z-index
	next.css({opacity: 0.0}).addClass('show').animate({opacity: 1.0}, 1000);

	//Hide the current image
	current.animate({opacity: 0.0}, 1000).removeClass('show');

}