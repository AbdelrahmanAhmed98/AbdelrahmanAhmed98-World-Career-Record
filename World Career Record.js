$(function(){
  $(".close-btn").click(function(){
    $(".menu").toggleClass("menu-open");
    $(this).toggleClass("open-btn");


  });


});

$('ul#father>li').hover(function(){
  $(this).find('ul#son').show(400);
},function(){
  $(this).find('ul#son').hide(400);
});

$('ul#father>li').hover(function(){
  $(this).find('ul#Leagues').show(400);
},function(){
  $(this).find('ul#Leagues').hide(400);
});





function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}