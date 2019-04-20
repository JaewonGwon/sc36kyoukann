<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<script src="resources/jquery-3.3.1.min.js"></script>

<style>
.otext {
/*   position: fixed;
  top: 50%;
  left: 50%; */
  transform: translateX(0%) translateY(0%);
  list-style: none;
  border-bottom: 0;

}

.otext.hidden {
/*   border-bottom: 1px solid #fff; */
}


.otext li {
  display: inline-block;
  float: left;
  font-weight: 700;
  font-size: 2em;
  color: #fff;
  opacity: 1;
  transition: all 1.5s ease-in-out;
  max-width: 2em;
}

.otext.hidden li.spaced {
  padding-left: 0;
}
.otext li.spaced {
  padding-left: 0em;
}

.otext.hidden li.ghost {
  opacity: 0;
  max-width: 0;
}



</style>
<script>

$(function() {
	  var text = $(".otext");
	  $(window).scroll(function() {
	    var scroll = $(window).scrollTop();

	    if (scroll >= 400) {
	      text.removeClass("hidden");
	    } else {
	      text.addClass("hidden");
	    }
	  });
	});



	
	
	
</script>

<footer class="footer" data-background-color="black">
  <div class="container">
  
   <div class="row">

   	<div class="col-6" style="border: 1px solid  red;">
	   	<div class="row">
			<div class="col-12">
			   	<ul class="otext hidden">
				  <li>R</li>
				  <li class="ghost">e</li>
				  <li class="ghost">a</li>
				  <li class="ghost">d</li>
				  <li class="ghost">&nbsp;</li>
				  <li>B</li>
				  <li class="ghost">o</li>
				  <li class="ghost">o</li>
				  <li class="ghost">k</li>
				  <li class="ghost">s</li>
				  <li class="spaced">&nbsp;:&nbsp;</li>
				  <li>G</li>
				  <li class="ghost">o</li>
				  <li class="ghost">n</li>
				  <li class="ghost">g</li>
				  <li class="ghost">-</li>
				  <li>G</li>
				  <li class="ghost">a</li>
				  <li class="ghost">m</li>
				</ul>
			</div>
			
			
		
		
			
			<div class="col-12">
				<p style="font-size: 10pt;"><i class="fa fa-building"></i> 서울특별시 강남구 삼성1동 영동대로 513 COEX 4층 </p>
				<p style="font-size: 10pt;"><i class="fa fa-building"></i> 82-10-1234-5678</p>
				<p> Copyright Gong-Gam</p>
			</div>
		</div>
	</div>
	
	
	
	
   	<div class="col-6" style="border: 1px solid  red;">asd</div>
   </div>
    
  </div>
</footer>
