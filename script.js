$(function() {

 $(window).scroll(function() {

 if($(this).scrollTop() != 0) {

 $('#toTop').fadeIn();
 
 } else {

 $('#toTop').fadeOut();

 }

 });
 
 $('#toTop').click(function() {

 $('body,html').animate({scrollTop:0},800);

 });
 
});

 






var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000); // Change image every 2 seconds
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";  
  }



var socialMedia = {
  facebook : 'http://facebook.com/',
  twitter: 'https://twitter.com/',
  vk:'http://pdd.ua/r/r/AD4ED01F-2DF3-11E0-A64B-00E081B0C1AE/3.21_b.gif'
};

var socialList = function() {
  var output = '<ul>',
  myList = document.querySelectorAll('.socialmediaicons');

  for (var key in arguments[0]) {
    output += '<li><a href="' + socialMedia[key] + '">' +
      '<img src="images/social/' + key + '.png" alt="icon for '+key+'">' +
      '</a></li>';
  }
  output += '</ul>';
  
  for (var i = myList.length - 1; i >= 0; i--) {
    myList[i].innerHTML = output;
  };
}(socialMedia);