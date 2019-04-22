<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<script src="resources/jquery-3.3.1.min.js"></script>
<link href="resources/assets/css/circle.css" rel="stylesheet" />
<link href="resources/assets/css/common_circle.css" rel="stylesheet" />
<link href="resources/assets/css/style3.css" rel="stylesheet" />

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
  transition: all 2s ease-in-out;
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
   	<div class="col-6">
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
			<div class="col-12" style="padding-top: 10px;">
				<p style="font-size: 10pt;"><i class="fa fa-building"></i><span style="margin-left: 10px;">서울특별시 강남구 삼성1동 영동대로 513 COEX 4층 </span></p>
				<p style="font-size: 10pt;"><i class="fa fa-phone"></i><span style="margin-left: 10px;">82-02-1234-5678</span><i class="fa fa-envelope" style="margin-left: 30px;"></i><span style="margin-left: 10px;">contect@gong-gam.com</span></p>
				<!-- <p> Copyright Gong-Gam</p> -->
			</div>
		</div>
	</div>
   	<div class="col-6 text-center">
		<div class="row">
			<div class="col-12">
			   	<ul class="otext hidden">
				  <li>T</li>
				  <li class="ghost">e</li>
				  <li class="ghost">a</li>
				  <li class="ghost">m</li>
				  <li class="ghost">&nbsp;</li>
				  <li>M</li>
				  <li class="ghost">e</li>
				  <li class="ghost">m</li>
				  <li class="ghost">b</li>
				  <li class="ghost">e</li>
				  <li class="ghost">r</li>
				  <li class="ghost">s</li>	
				</ul>
			</div>
			<div class="col-12">
				<section class="sec_main">
					<ul class="ch-grid">
						<li>
							<div class="ch-item">	
								<div class="ch-info">
									<h3>Kwon<br>Jae<br>Won</h3>
									<!-- <p>by Jonathan Quintin</p> -->
								</div>
								<div class="ch-thumb ch-img-1"></div>
							</div>
						</li>
						<li>
							<div class="ch-item">
								<div class="ch-info">
									<h3>Kim<br>Jin Hyoung</h3>
								</div>
								<div class="ch-thumb ch-img-2"></div>
							</div>
						</li>
						<li>
							<div class="ch-item">
								<div class="ch-info">
									<h3>Jung<br>So<br>Mi</h3>
								</div>
								<div class="ch-thumb ch-img-3"></div>
							</div>
						</li>
						<li>
							<div class="ch-item">
								<div class="ch-info">
									<h3>Lee Seung Jun</h3>
								</div>
								<div class="ch-thumb ch-img-4"></div>
							</div>
						</li>
						<li>
							<div class="ch-item">
								<div class="ch-info">
									<h3>Hwang Seung Yun</h3>
								</div>
								<div class="ch-thumb ch-img-5"></div>
							</div>
						</li>
					</ul>
				</section>
			</div>			
		</div>					
	</div>
	<div class="col-12" style="margin: 0; padding: 15px 15px 0px 15px;">
		<p style="border-top: 1px dashed #ddd; font-size: 10pt; text-align: right; padding: 15px 15px 0px 15px; margin: 0px 0px;">
			© 2019, Designed by Gong-Gam. Coded by Creative Gong-Gam.
		</p>
	</div>
   </div>
  </div>
</footer>
