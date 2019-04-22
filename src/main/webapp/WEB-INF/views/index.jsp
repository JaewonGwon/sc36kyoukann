<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp" %>
<script src="resources/jquery-3.3.1.min.js"></script>
<script>
//Instantiate the Bootstrap carousel
$(function(){
	$('.multi-item-carousel .carousel-item').each(function(){
		  var next = $(this).next();
		  if (!next.length) next = $(this).siblings(':first')
		  next.children(':first-child').clone().appendTo($(this));
		});
		$('.multi-item-carousel .carousel-item').each(function(){
		  var prev = $(this).prev();
		  if (!prev.length) prev = $(this).siblings(':last')
		  prev.children(':nth-last-child(2)').clone().prependTo($(this));
		});
		reloadData();
		reloadReview();
		init();
});



function init() {
	$.ajax({
		url : 'ranking',
		method : 'GET',
		success : function(resp) {
			output(resp);
		}

	})
}
function output(resp) {
	var listwriter = '';
	$.each(
					resp,
					function(index, tt) {
						listwriter += '<div class="col-2 author_img">';
						listwriter += '<img src="resources/assets/img/crown.jpg" alt="Circle Image" class="rounded-circle review-user-img">';
						listwriter += '</div>';
						listwriter += '<div class="col-10 text-left author_text" style="">';
						listwriter += '<p style="font-weight: 500; font-size: 12pt;">';
						listwriter += tt.id;
						listwriter += '</p>';
						listwriter += '</div>';
						listwriter += '<div class="col-12 author_line"></div>';
		
					});

	$('#ranking').html(listwriter);
}

function reloadData() {
	$.ajax({
		url : 'request_main_book',
		method : 'GET',
		success : function(resp) {
			$.each(resp, function(index, bookData){
				console.log('.main-carousel-span-st-title, .recom' + index + '');
				console.log(bookData.book_title);
				$('.main-carousel-span-st-title.recom' + index + '').text(bookData.book_title);
				$('.main-carousel-span-st-publ.recom' + index + '').text(bookData.book_writer);
				$('.main-carousel-span-st-cont.recom' + index + '').text(bookData.book_content);
				$('.d-block.img-st2.recom' + index + '').attr('src', bookData.book_image);
			});
		}
	});
}




function reloadReview() {
	$.ajax({
		url : 'request_main_review',
		method : 'GET',
		success : function(resp) {
			$.each(resp, function(index, revData){
				console.log(revData);
				$('.main-review-title.review' + index + '').text(revData.rev_title);
				$('.main-review-uname.review' + index + '').text(revData.id);
				$('.main-review-content.review' + index + '').text(revData.rev_content);
			});
		}
	})
}
</script>
<style type="text/css">
 
 

.multi-item-carousel .carousel-inner {
  width: 180%;
  left: -40%;
}

.carousel-inner .carousel-item-right.active,
.carousel-inner .carousel-item-next {
  transform: translateX(33.33%);
}

.carousel-inner .carousel-item-left.active, 
.carousel-inner .carousel-item-prev {
  transform: translateX(-33.33%)
}

.carousel-inner .carousel-item-right,
.carousel-inner .carousel-item-left{ 
  transform: translateX(0);
}

@media screen and (min-width: 1201px) and (max-width: 2400px) {
	.item__third {
	  float: left;
	  width: 33.33333333%;
	  background-size: cover;
	  height: 500px;
	}
	
	.main-carousel-col12-st{
	  width: 100%;
	  margin:0px;
	  padding: 0px;
	  height: 360px;
	}
	.main-carousel-col6-st{
	  height: 350px;
	  padding: 40px;
	}
	
	.multi-item-carousel .carousel-control-prev, 
	.multi-item-carousel .carousel-control-next {
    /* background: rgba(255, 255, 255, 0.5); */
      width: 20%;
      height: 360px;
	}
}

@media screen and (min-width: 992px) and (max-width: 1200px) {
	.item__third {
	  float: left;
	  width: 33.33333333%;
	  background-size: cover;
	  height: 500px;
	}
	.main-carousel-col12-st{
	  width: 100%;
	  margin:0px;
	  padding: 0px;
	  height: 360px;
	
	}
	
	.main-carousel-col6-st{
	  height: 350px;
	  padding: 40px;
	}
	.multi-item-carousel .carousel-control-prev, 
	.multi-item-carousel .carousel-control-next {
    /* background: rgba(255, 255, 255, 0.5); */
      width: 20%;
      height: 360px;
	}
	
}
@media screen and (min-width: 769px) and (max-width: 991px) {
	.item__third {
	  float: left;
	  width: 33.33333333%;
	  background-size: cover;
	  height: 800px;
	}
	.main-carousel-col12-st{
	  width: 100%;
	  margin:0px;
	  padding: 0px;
	}
	
	.main-carousel-col6-st{
	  padding: 20px;
	}
	
	
	.multi-item-carousel .carousel-control-prev, 
	.multi-item-carousel .carousel-control-next {
    /* background: rgba(255, 255, 255, 0.5); */
      width: 20%;
      height: 700px;
	}
	
}

@media screen and (min-width: 518px) and (max-width: 768px) {
	.item__third {
	  float: left;
	  width: 33.33333333%;
	  background-size: cover;
	  height: 800px;
	}
	.main-carousel-col12-st{
	  width: 100%;
	  margin:0px;
	  padding: 0px;
	}
	
	.main-carousel-col6-st{
	  padding: 20px;
	}
	.multi-item-carousel .carousel-control-prev, 
	.multi-item-carousel .carousel-control-next {
    /* background: rgba(255, 255, 255, 0.5); */
      width: 20%;
      height: 700px;
	}
	
}

@media screen and (min-width: 300px) and (max-width: 517px) {
	.item__third {
	  float: left;
	  width: 33.33333333%;
	  background-size: cover;
	  height: 800px;
	}
	.main-carousel-col12-st{
	  width: 100%;
	  margin:0px;
	  padding: 0px;
	}
	
	.main-carousel-col6-st{
	  padding: 20px;
	}
	.multi-item-carousel .carousel-control-prev, 
	.multi-item-carousel .carousel-control-next {
    /* background: rgba(255, 255, 255, 0.5); */
      width: 20%;
      height: 700px;
	}
	
}

.item-bg-pink{
  background-color: #E9B3D1;
}
.item-bg-orange{
  background-color: #F7A3A5;
}
.item-bg-sky{
  background-color: #95D6E3;
}
.main-carousel-row-st{
  width: 100%;
  margin:0px;
  height: 100%;
  background-color: #eee;

}

.img-st{
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.3);
}
.img-st2{
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 418.91px;
 
}

.main-carousel-span-st-title{
  color: #fff;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis !important;
  font-size: 14pt;
  max-height: 32px;
  margin-bottom: 0px !important;
}



.main-carousel-span-st-publ{
  color: #fff;
  text-overflow: ellipsis !important;
  font-size: 11pt;
  text-align: left;
  font-weight: 600;
}
.main-carousel-span-st-cont{
  color: #fff;
  text-overflow: ellipsis !important;
  font-size: 11pt;
  text-align: left;
  max-height: 120px;
  font-weight: 500;
  overflow: hidden;
}

.btn-puple {
  background-color: #FFFFFF;
  color: #B77BC4;
  box-shadow: 0px 2px 16px 4px rgba(0, 0, 0, 0.3);
}
.btn-puple:hover{
  background-color: #B77BC4;
  color: #FFFFFF;
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.3);
}

.btn-orange {
  background-color: #FFFFFF;
  color: #B23A30;
  box-shadow: 0px 2px 16px 4px rgba(0, 0, 0, 0.3);
}
.btn-orange:hover{
  background-color: #B23A30;
  color: #FFFFFF;
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.3);
}
.btn-sky {
  background-color: #FFFFFF;
  color: #1271A0;
  box-shadow: 0px 2px 16px 4px rgba(0, 0, 0, 0.3);
}
.btn-sky:hover{
  background-color: #1271A0;
  color: #FFFFFF;
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.3);
}

.carousel-indicators1 {
  right: 0;
  bottom: -30px;
}
.carousel-indicators1 li {
  outline: 1px solid lightgray;
}
.carousel-indicators1 .active {
  outline: 1px solid black;
}

.main-review-title{
	font-size: 13pt;

}
.main-review-uname{
	font-size: 11pt;
}

@media screen and (min-width: 1201px) and (max-width: 2400px) {
	.review-row-bg-st{
	margin: 0;
	background-color: #fff;
	height: 200px;
	}
	.card-body-st{
	 padding: 0px;
	 margin: 0;
	 overflow: hidden;
	 height: 170px;
	 width: 255.63px; 
	}
	
	
	.author_img{
	margin:0;
	padding: 0px;

	}
	.author_text{
		margin:0;
		padding-left: 10px;
	}
	.author_line{
		border-top: 1px dashed #ddd;
		padding-bottom: 22px;
	}
	
}
@media screen and (min-width: 992px) and (max-width: 1200px) {
	.review-row-bg-st{
	margin: 0;
	background-color: #fff;
	height: 200px;
	}
	.card-body-st{
	 padding: 0px;
	 margin: 0;
	 overflow: hidden;
	 height: 170px;
	}
	.author_img{
	margin:0;
	padding: 0px;

	}
	.author_text{
		margin:0;
		padding-left: 10px;
	}
	.author_line{
		border-top: 1px dashed #ddd;
		padding-bottom: 22px;
	}

	
}
@media screen and (min-width: 769px) and (max-width: 991px) {
	.review-row-bg-st{
	margin: 0;
	background-color: #fff;
	}
	.card-body-st{
	 padding: 0px;
	 margin: 0;
	 overflow: hidden;
	 height: 150px;
	}
	.author_img{
	margin:0;
	padding: 0px;

	}
	.author_text{
		margin:0;
		padding-left: 10px;
	}
	.author_line{
		border-top: 1px dashed #ddd;
		padding-bottom: 22px;
	}

	
}
@media screen and (min-width: 518px) and (max-width: 768px) {
	.review-row-bg-st{
	 margin: 0;
	 background-color: #fff;
	}
	.card-body-st{
	 padding: 0px;
	 margin: 0;
	 overflow: hidden;
	 height: 150px;
	}
		.author_img{
	margin:0;
	padding: 0px;

	}
	.author_text{
		margin:0;
		padding-left: 10px;
	}
	.author_line{
		border-top: 1px dashed #ddd;
		padding-bottom: 22px;
	}
}
@media screen and (min-width: 100px) and (max-width: 517px) {
	.review-row-bg-st{
	 margin: 0;
	 background-color: #fff;
	}
	.card-body-st{
	 padding: 0px;
	 margin: 0;
	 overflow: hidden;
	 height: 150px;
	}
		.author_img{
	margin:0;
	padding: 0px;

	}
	.author_text{
		margin:0;
		padding-left: 10px;
	}
	.author_line{
		border-top: 1px dashed #ddd;
		padding-bottom: 22px;
	}
}

 </style>
<body class="index-page sidebar-collapse">

<!-- Navbar include -->
  <%@ include file="/WEB-INF/views/include/navbar.jsp" %>

  <div class="wrapper">
     <!-- main 태크 시작 -->
    <!-- main 태크 시작 -->
    <div class="main">
    
          
		<div id="carousel-1" class="carousel slide multi-item-carousel" data-ride="carousel" style="margin-top: 63px;">
		  <ol class="carousel-indicators">
		    <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
		    <li data-target="#carousel-1" data-slide-to="1"></li>
		    <li data-target="#carousel-1" data-slide-to="2"></li>
		  </ol>
		  <div class="carousel-inner" role="listbox">
		    <div class="carousel-item active">
		      <div class="item__third">
		      	<div class="row main-carousel-row-st">
		      		<div class="row main-carousel-col12-st item-bg-pink">
			      		<div class="col-lg-6 col-md-12 col-sm-12 text-center main-carousel-col6-st">
							<img class="d-block img-st2 recom0" src="resources/assets/img/book_img01.jpg" alt="First slide" style="margin: 0 auto;">
						</div>
				
			      		<div class="col-lg-6 col-md-12 col-sm-12 text-center main-carousel-col6-st">
							<p class="main-carousel-span-st-title recom0"></p>
							<p style="border-top: 1px solid #fff; width: 10%; margin: 10px auto;"></p>
							<p class="main-carousel-span-st-publ recom0"></p>
							<p class="main-carousel-span-st-cont recom0">
							</p>
							<p>
								<a href="#" class="btn btn-puple btn-round btn-md">See The Book</a>
							</p>
						
						</div>
		      		</div>
		      	</div>
		      </div>
		    </div>
		
		    <div class="carousel-item">
		      <div class="item__third">
		      	<div class="row main-carousel-row-st">
		      		<div class="row main-carousel-col12-st item-bg-sky">
			      		<div class="col-lg-6 col-md-12 col-sm-12 text-center main-carousel-col6-st">
							<img class="d-block img-st2 recom1" src="resources/assets/img/book_img02.jpg" alt="First slide" style="margin: 0 auto;">
						</div>
				
			      		<div class="col-lg-6 col-md-12 col-sm-12 text-center main-carousel-col6-st">
							<p class="main-carousel-span-st-title recom1"></p>
							<p style="border-top: 1px solid #fff; width: 10%; margin: 10px auto;"></p>
							<p class="main-carousel-span-st-publ recom1"></p>
							<p class="main-carousel-span-st-cont recom1">
							</p>
							<p>
								<a href="#" class="btn btn-sky btn-round btn-md">See The Book</a>
							</p>
						</div>
		      		</div>
		      	</div>
		      </div>
		    </div>
		    
		    <div class="carousel-item">
		      <div class="item__third">
		      	<div class="row main-carousel-row-st">
		      		<div class="row main-carousel-col12-st item-bg-orange">
			      		<div class="col-lg-6 col-md-12 col-sm-12 text-center main-carousel-col6-st">
							<img class="d-block img-st2 recom2" src="resources/assets/img/book_img03.jpg" alt="First slide" style="margin: 0 auto;">
						</div>
				
			      		<div class="col-lg-6 col-md-12 col-sm-12 text-center main-carousel-col6-st">
							<p class="main-carousel-span-st-title recom2"></p>
							<p style="border-top: 1px solid #fff; width: 10%; margin: 10px auto;"></p>
							<p class="main-carousel-span-st-publ recom2"></p>
							<p class="main-carousel-span-st-cont recom2">
							</p>
							<p>
								<a href="#" class="btn btn-orange btn-round btn-md">See The Book</a>
							</p>
						</div>
		      		</div>
		      	</div>
		      </div>
		    </div>
		
		  </div>
		  <a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev">
		    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
		    <span class="sr-only">Previous</span>
		  </a>
		  <a class="carousel-control-next" href="#carousel-1" role="button" data-slide="next">
		    <span class="carousel-control-next-icon" aria-hidden="true"></span>
		    <span class="sr-only">Next</span>
		  </a>
		</div>
		
    

    <!-- 추천 리뷰 보여주는 부분 시작 -->

      <div class="section section-tabs" style="padding: 0px; margin:0 auto;">
        <div class="row" style="padding: 40px 40px 0px 40px; margin:0 auto;">
          <div class="row">
            <div class="col-lg-3 col-md-3 ml-auto col-xl-3 col-sm-12">
              <p class="category">Author of the week</p>
              <!-- Nav tabs -->
              <div class="card">

                <div class="card-header">
                  <!-- <ul class="nav nav-tabs justify-content-center" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" data-toggle="tab" href="#home" role="tab">
                        <i class="now-ui-icons objects_umbrella-13"></i> Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#profile" role="tab">
                        <i class="now-ui-icons shopping_cart-simple"></i> Profile
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#messages" role="tab">
                        <i class="now-ui-icons shopping_shop"></i> Messages
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#settings" role="tab">
                        <i class="now-ui-icons ui-2_settings-90"></i> Settings
                      </a>
                    </li>
                  </ul> -->
                </div>
   
                
                
                <div class="card-body cs-st">
                  <!-- Tab panes -->
                  <div class="tab-content text-center">
                    <div class="tab-pane active" id="home" role="tabpanel">
                      <div class="row" id="ranking">
	                  </div>
                    </div>
                  </div>
         
                  
                </div>
              </div>
            </div>
            
            <div class="col-lg-9 col-md-9 col-xl-9 col-sm-12">
              <div class="row" style="margin: 0; padding: 0px;">
	              <div class="col-8">
	              	<p class="category">인기 리뷰</p>
	              </div>
	              <!--Controls-->
	              <div class="col-4">    	          		
					<div class="controls-top float-right">
						<a class="btn btn-outline-secondary prev" data-slide="prev" href="#multi-item-example"><i class="fa fa-chevron-left"></i></a> <a class="btn btn-outline-secondary next" data-slide="next" href="#multi-item-example"><i class="fa fa-chevron-right"></i></a>
					</div>				
				  </div>
				  <!--/.Controls-->
			  </div>
              <!-- Tabs with Background on Card -->
              <div class="card" style="background-color: #eee; box-shadow: none;">
                                


				<div class="container mt-3 mb-5">
					<div class="row">
						<div class="col-12">
							<!--Carousel Wrapper-->
							<div class="carousel slide carousel-multi-item" data-ride="carousel" id="multi-item-example">

								<!--Slides-->
								
								<div class="carousel-inner" role="listbox" style="background-color: none; box-shadow: none;">
									<!--First slide-->
									<div class="carousel-item active">
										<div class="row">
											<div class="col-md-6">
											
												<div class="card" style="box-shadow: none;">
													<div class="row review-row-bg-st review0">
														<div class="col-lg-5" style="margin-top: -50px; padding: 20px;">
															<img class="d-block img-st" src="resources/assets/img/book_img03.jpg" alt="First slide" style="margin: 0 auto;">
														</div>
														<div class="col-lg-7" style="padding: 10px;">
															<div class="card-body card-body-st">
																<p class="main-review-title review0">Hell Week</p>
																<p class="main-review-uname review0">By 에릭 라르셀</p>
																<p class="main-review-content review0" style="overflow:hidden !important;">
																	단순하게 생각하라, 과감하게 행동하라, 일주일뒤 당신의 모든것이 새롭게 태어난다!
																	단순하게 생각하라, 과감하게 행동하라, 일주일뒤 당신의 모든것이 새롭게 태어난다!
																	단순하게 생각하라, 과감하게 행동하라, 일주일뒤 당신의 모든것이 새롭게 태어난다!
																</p>
															</div>
														</div>
													</div>
													<div>
														<div class="col-12" style="border-top: 1px dashed #ddd; height: 100%;">
															<p style="margin: 0 auto; padding: 0px; text-align: center;">
																<button class="btn btn-round" type="button" id="rev_like" style="padding: 4px 8px 4px 8px; background-color: #ec407a; color: #fff;">
																	<i class="now-ui-icons ui-2_favourite-28" id="revlike" style="font-size: 0.8em; font-weight: 600;"></i> 35
																</button>
																<button class="btn btn-round" type="button" style="padding: 4px 8px 4px 8px; background-color: #2CA8FF; color: #fff;">
																	<i class="now-ui-icons ui-2_chat-round" style="font-size: 0.8em; font-weight: 600;"></i> 15
																</button>
															</p>
														</div>
													</div>
												</div>	
												
												
											</div>
											<div class="col-md-6 clearfix d-none d-md-block">
												<div class="card" style="box-shadow: none;">
													<div class="row review-row-bg-st">
														<div class="col-lg-5" style="margin-top: -50px; padding: 20px;">
															<img class="d-block img-st review1" src="resources/assets/img/book_img01.jpg" alt="First slide" style="margin: 0 auto;">
														</div>
														<div class="col-lg-7" style="padding: 10px;">
															<div class="card-body card-body-st">
																<p class="main-review-title review1">Harry Potter</p>
																<p class="main-review-uname review1">By J.K ROWLING</p>
																<p class="main-review-content review1" style="overflow:hidden !important;">
																	해리포터시리즈에서 특별한 점이라고 생각했던 것 중 하나가 꿈에 대한 묘사이다. 해리는 자신의 이마에 있는 번개 모양의 흉터를 만들어 놓은 숙적 볼드모트와 꿈으로 연결되어 있다. 꿈은 중요한 줄거리를 담당할 뿐만 아니라 해리의 감정 상태, 그리고 캐릭터를 더욱 현실적으로 보이게 하는 역할을 한다. 복선을 담당하기도 한다.
																</p>
															</div>
														</div>
													</div>
													<div>
														<div class="col-12" style="border-top: 1px dashed #ddd; height: 100%;">
															<p style="margin: 0 auto; padding: 0px; text-align: center;">
																<button class="btn btn-round" type="button" id="rev_like" style="padding: 4px 8px 4px 8px; background-color: #ec407a; color: #fff;">
																	<i class="now-ui-icons ui-2_favourite-28" id="revlike" style="font-size: 0.8em; font-weight: 600;"></i> 35
																</button>
																<button class="btn btn-round" type="button" style="padding: 4px 8px 4px 8px; background-color: #2CA8FF; color: #fff;">
																	<i class="now-ui-icons ui-2_chat-round" style="font-size: 0.8em; font-weight: 600;"></i> 15
																</button>
															</p>
														</div>
													</div>
													
												</div>	
											</div>
				
										</div>
									</div>
									<!--/.First slide-->
									<!--Second slide-->
									<div class="carousel-item">
										<div class="row">
											<div class="col-md-6">
											
												<div class="card" style="box-shadow: none;">
													<div class="row review-row-bg-st review2">
														<div class="col-lg-5" style="margin-top: -50px; padding: 20px;">
															<img class="d-block img-st" src="resources/assets/img/book_img02.jpg" alt="First slide" style="margin: 0 auto;">
														</div>
														<div class="col-lg-7" style="padding: 10px;">
															<div class="card-body card-body-st">
																<p class="main-review-title review2">Twilight</p>
																<p class="main-review-uname review2">By 스테파이 메이어</p>
																<p class="main-review-content review2" style="overflow:hidden !important;">
																	영화 트와일라잇 너무 지루했어...ㅠㅠ나만 그런가...시리즈가 있는 영화들은 항상 1편이 지루하고 재미가 없다.난 그냥 책으로 만족하련다.
																</p>
															</div>
														</div>
													</div>
													<div>
														<div class="col-12" style="border-top: 1px dashed #ddd; height: 100%;">
															<p style="margin: 0 auto; padding: 0px; text-align: center;">
																<button class="btn btn-round" type="button" id="rev_like" style="padding: 4px 8px 4px 8px; background-color: #ec407a; color: #fff;">
																	<i class="now-ui-icons ui-2_favourite-28" id="revlike" style="font-size: 0.8em; font-weight: 600;"></i> 35
																</button>
																<button class="btn btn-round" type="button" style="padding: 4px 8px 4px 8px; background-color: #2CA8FF; color: #fff;">
																	<i class="now-ui-icons ui-2_chat-round" style="font-size: 0.8em; font-weight: 600;"></i> 15
																</button>
															</p>
														</div>
													</div>
												</div>	
												
												
											</div>
											<div class="col-md-6 clearfix d-none d-md-block">
																								<div class="card" style="box-shadow: none;">
													<div class="row review-row-bg-st">
														<div class="col-lg-5" style="margin-top: -50px; padding: 20px;">
															<img class="d-block img-st review3" src="resources/assets/img/book_img04.jpg" alt="First slide" style="margin: 0 auto;">
														</div>
														<div class="col-lg-7" style="padding: 10px;">
															<div class="card-body card-body-st">
																<p class="main-review-title review3">Hell Week</p>
																<p class="main-review-uname review3">By 허지원</p>
																<p class="main-review-content review3" style="overflow:hidden !important;">
																	예쁜 연보라색에 트렌디한 느낌의 표지를 가진 책 <나는 아직 나를 모른다>는, 자신을 나쁘게 평가하여 몰아붙이거나 낙담하는 마음을 가진 이들에게 ‘당신은 사실 당신이 아는 것보다 훨씬 괜찮은 사람이다’라는 메시지를 전합니다.
																</p>
															</div>
														</div>
													</div>
													<div>
														<div class="col-12" style="border-top: 1px dashed #ddd; height: 100%;">
															<p style="margin: 0 auto; padding: 0px; text-align: center;">
																<button class="btn btn-round" type="button" id="rev_like" style="padding: 4px 8px 4px 8px; background-color: #ec407a; color: #fff;">
																	<i class="now-ui-icons ui-2_favourite-28" id="revlike" style="font-size: 0.8em; font-weight: 600;"></i> 35
																</button>
																<button class="btn btn-round" type="button" style="padding: 4px 8px 4px 8px; background-color: #2CA8FF; color: #fff;">
																	<i class="now-ui-icons ui-2_chat-round" style="font-size: 0.8em; font-weight: 600;"></i> 15
																</button>
															</p>
														</div>
													</div>
													
												</div>	

											</div>
				
										</div>
									</div>
									<!--/.Third slide-->
								</div>
								<!--/.Slides-->
				
							</div>
							<!--/.Carousel Wrapper-->
						</div>
					</div>
				</div>                

              </div>
              <!-- End Tabs on plain Card -->
            </div>
          </div>
        </div>
      </div>

    <!-- 추천 리뷰 보여주는 부분 끝 -->
       
   </div>
   <!-- main 태크 끝 -->

    <%@ include file="/WEB-INF/views/include/modal.jsp" %>
    <%@ include file="/WEB-INF/views/include/footer.jsp" %>


</div>
<%@ include file="/WEB-INF/views/include/coreJsFile.jsp" %>
</body>

</html>