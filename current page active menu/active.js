$(function() {
     var pgurl = window.location.href.substr(window.location.href
.lastIndexOf("/")+1);
     $("nav ul a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("active");
     })
});

/* here's the code if u want to use plain javascript

function setActive() {
  aObj = document.getElementById('nav').getElementsByTagName('a');
  for(i=0;i<aObj.length;i++) { 
    if(document.location.href.indexOf(aObj[i].href)>=0) {
      aObj[i].className='active';
    }
  }
}

window.onload = setActive;

*/



/***
function setActive() {
   
    $('#nav').find('a').each(function () {
        //console.log(document.location.href)
        if (document.location.href == "http://localhost:14040" + $(this).attr('href')) {
            $(this).parents("ul").removeClass("hidden-ul");
            $(this).parents().addClass("active");

        }
    });

 
}
window.onload = setActive;

***/
