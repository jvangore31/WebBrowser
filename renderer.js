var $ = require('jquery');
//for the back button
var prev = "http://www.google.com"
//array that stores all the visited URLs
var websites = [];
//pushes the home page
websites.push(prev);
//keeps track of where user should be ( for back, forward, etc.)
var position;
var nextUrl;
var forward = false;
//resets values for a new tab
function reset(){
	websites = [];
	websites.push("http://www.google.com");
	forward = false;
}
//click the go button
$('#visit').click(function() {
	var url = $('#urlinput').val();
	$('.tab.active').text(url);
	$('.view.active').attr('src', url);
	websites.push(url);
	position = websites.length -1;
});
//click the new tab button
$('#newtab').click(function(){
	var url = $('#urlinput').val();
	$('.tab,.view').removeClass('active');
	$('#tabbar').append('<button id="tab" class ="tab active btn btn-primary btn-sm">' + url + '</button>');
	$('#views').append('<webview class ="view active" src = "'+url+'"></webview>' );
	$('input[name=urlinput]').val(url);
	reset();
});
//click the back button
//stack should be implemented to store previously visited websites
//does not remember for various tabs (resets everytime a tab is created or switched)
$('#back').click(function(){
	
	prev = websites[position - 1];
	$('.tab.active').text(prev);
	$('input[name=urlinput]').val(prev);
	$('.view.active').attr('src', prev);
	forward = true;
	position--;
	
});
//click the forward button
$('#forward').click(function(){
		
		if(forward){
			nextUrl = websites[position + 1]
			$('.tab.active').text(nextUrl);
			$('.view.active').attr('src', nextUrl);
			$('input[name=urlinput]').val(nextUrl);
			position++;
		}
});
//click different tabs
$('body').on('click', '.tab', function(){
	$('.tab, .view').removeClass('active');
	var index = $(this).index();
	$('.tab').eq(index).addClass('active');
	$('.view').eq(index).addClass('active');
	reset();
});

//need a way to remove tabs