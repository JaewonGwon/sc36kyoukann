<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp" %>
<script src="resources/jquery-3.3.1.min.js"></script>
<script type="text/javascript">

//Instantiate the Bootstrap carousel
$(function(){
	$('.multi-item-carousel .carousel-item').each(function(){
		  var next = $(this).next();
		  if (!next.length) next = $(this).siblings(':first');
		  next.children(':first-child').clone().appendTo($(this));
		});
		$('.multi-item-carousel .carousel-item').each(function(){
		  var prev = $(this).prev();
		  if (!prev.length) prev = $(this).siblings(':last');
		  prev.children(':nth-last-child(2)').clone().prependTo($(this));
		});

});

</script>
<body class="index-page sidebar-collapse">

<!-- Navbar include -->
  <%@ include file="/WEB-INF/views/include/navbar.jsp" %>
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

.main-carousel-span-st-title{
  color: #fff;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis !important;
  font-size: 14pt;
  max-height: 32px;

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
	height: 270px;
	}
	.card-body-st{
	 padding: 0px;
	 margin: 0;
	 border: 1px solid red; 
	 overflow: hidden;
	 height: 180px;

	}
}






@media screen and (min-width: 992px) and (max-width: 1200px) {
	.review-row-bg-st{
	margin: 0;
	background-color: #fff;
	height: 250px;
	}
	.card-body-st{
	 padding: 0px;
	 margin: 0;
	}

}
@media screen and (min-width: 769px) and (max-width: 991px) {


}

@media screen and (min-width: 518px) and (max-width: 768px) {

	
}

@media screen and (min-width: 300px) and (max-width: 517px) {
	
}




 </style>
  <div class="wrapper">
    
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
							<img class="d-block img-st" src="resources/assets/img/book_img01.jpg" alt="First slide" style="margin: 0 auto;">
						</div>
				
			      		<div class="col-lg-6 col-md-12 col-sm-12 text-center main-carousel-col6-st">
							<p class="main-carousel-span-st-title">Harry Potter And The Sorcerer's Stone</p>
							<p class="main-carousel-span-st-publ">By J.K.ROWLING</p>
							<p class="main-carousel-span-st-cont">
								Since the publication of Harry Potter and the Philosopher's Stone in 1997, many publishers have created new editions of each book with new cover art provided by various illustrators. Bloomsbury is the British publication that has created both adult and children's covers. The adult edition usually depicts an object or place that plays a key part in the plot while the children's one features a major event in the book. Bloomsbury have commissioned many illustrators to design the cover. In 2013, they had woodcut artist Andrew Davidson create new cover art for the paperback adult edition.
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
							<img class="d-block img-st" src="resources/assets/img/book_img02.jpg" alt="First slide" style="margin: 0 auto;">
						</div>
				
			      		<div class="col-lg-6 col-md-12 col-sm-12 text-center main-carousel-col6-st">
							<p class="main-carousel-span-st-title">Twilight</p>
							<p class="main-carousel-span-st-publ">스테파니 메이어</p>
							<p class="main-carousel-span-st-cont">
								트와일라잇(영어: Twilight) 시리즈는 《트와일라잇》, 《뉴문》, 《이클립스》, 《브레이킹 던》 총 4권으로 이루어진 스테프니 메이어의 뱀파이어를 소재로 한 판타지 로맨스 소설이다.
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
							<img class="d-block img-st" src="resources/assets/img/book_img03.jpg" alt="First slide" style="margin: 0 auto;">
						</div>
				
			      		<div class="col-lg-6 col-md-12 col-sm-12 text-center main-carousel-col6-st">
							<p class="main-carousel-span-st-title">Hell Week</p>
							<p class="main-carousel-span-st-publ">By 에릭 라르셀</p>
							<p class="main-carousel-span-st-cont">
								단순하게 생각하라, 과감하게 행동하라, 일주일뒤 당신의 모든것이 새롭게 태어난다!
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

      <div class="section section-tabs">
        <div class="row" style="padding: 40px; margin:0 auto;">
          <div class="row">
            <div class="col-lg-3 col-md-3 ml-auto col-xl-3 col-sm-12">
              <p class="category">Tabs with Icons on Card</p>
              <!-- Nav tabs -->
              <div class="card">
                <div class="card-header">
                  <ul class="nav nav-tabs justify-content-center" role="tablist">
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
                  </ul>
                </div>
                <div class="card-body">
                  <!-- Tab panes -->
                  <div class="tab-content text-center">
                    <div class="tab-pane active" id="home" role="tabpanel">
                      <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
                    </div>
                    <div class="tab-pane" id="profile" role="tabpanel">
                      <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>
                    </div>
                    <div class="tab-pane" id="messages" role="tabpanel">
                      <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
                    </div>
                    <div class="tab-pane" id="settings" role="tabpanel">
                      <p>
                        "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-lg-9 col-md-9 ml-auto col-xl-9 col-sm-12">
              <div class="row" style="margin: 0; padding: 0px;">
	              <div class="col-6">
	              	<p class="category">Tabs with Background on Card</p>
	              </div>
	              <!--Controls-->
	              <div class="col-6">    	          		
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
						<div class="col">
							<!--Carousel Wrapper-->
							<div class="carousel slide carousel-multi-item" data-ride="carousel" id="multi-item-example">

								<!--Slides-->
								
								<div class="carousel-inner" role="listbox" style="background-color: none; box-shadow: none;">
									<!--First slide-->
									<div class="carousel-item active">
										<div class="row">
											<div class="col-md-6">
											
										


											
											
												<div class="card" style="box-shadow: none;">
													<div class="row review-row-bg-st" style="">
														<div class="col-lg-5" style="margin-top: -50px; padding: 20px;">
															<img class="d-block img-st" src="resources/assets/img/book_img03.jpg" alt="First slide" style="margin: 0 auto;">
														</div>
														<div class="col-lg-7" style="padding: 10px;">
															<div class="card-body card-body-st">
																<p class="main-review-title">Hell Week</p>
																<p class="main-review-uname">By 에릭 라르셀</p>
																<p class="main-review-content">
																	단순하게 생각하라, 과감하게 행동하라, 일주일뒤 당신의 모든것이 새롭게 태어난다!
																	단순하게 생각하라, 과감하게 행동하라, 일주일뒤 당신의 모든것이 새롭게 태어난다!
																	단순하게 생각하라, 과감하게 행동하라, 일주일뒤 당신의 모든것이 새롭게 태어난다!
																</p>
															</div>
														</div>
													</div>
												</div>	
												
											
											
												
												
												
											</div>
											<div class="col-md-6 clearfix d-none d-md-block">
											
												<div class="card" style="box-shadow: none;">
													<img alt="Card image cap" class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg">
													<div class="card-body">
														<h4 class="card-title">Card title</h4>
														<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
												<div class="card">
													<img alt="Card image cap" class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg">
													<div class="card-body">
														<h4 class="card-title">Card title</h4>
														<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
													</div>
												</div>
											</div>
											<div class="col-md-6 clearfix d-none d-md-block">
												<div class="card">
													<img alt="Card image cap" class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg">
													<div class="card-body">
														<h4 class="card-title">Card title</h4>
														<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
													</div>
												</div>
											</div>
				
										</div>
									</div>
									<!--/.Second slide-->
									<!--Third slide-->
									<div class="carousel-item">
										<div class="row">
											<div class="col-md-6">
												<div class="card">
													<img alt="Card image cap" class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg">
													<div class="card-body">
														<h4 class="card-title">Card title</h4>
														<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
													</div>
												</div>
											</div>
											<div class="col-md-6 clearfix d-none d-md-block">
												<div class="card">
													<img alt="Card image cap" class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg">
													<div class="card-body">
														<h4 class="card-title">Card title</h4>
														<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
    
    
    <!-- 요즘 핫한 책리스트 시작 -->
	  
      
      <div class="section section-examples" style="background-image: url('resources/assets/img/bg12.jpg'); background-size: cover; background-position: top center; min-height: 700px;">
         
         <div class="container text-center">
          <div class="row justify-content-md-center">
            <div class="col-md-12 col-lg-8">
              <h3 class="title titlefontwhite">도서 주간 베스트셀러</h3>
              <!-- <h5 class="description">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 ui kit.</h5> -->
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
 
            <div class="col-lg-3 col-md-6 col-sm-6">
	            <figure class="snip1283">
				  <img src="resources/assets/img/book_img01.jpg" alt="book_image" />
				  <figcaption>
				    <h3>Sue Shei</h3>
				    <p>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</p><a href="#" class="read-more">Read More</a>
				  </figcaption>
				</figure>
            </div> 


            <div class="col-lg-3 col-md-6 col-sm-6">
	            <figure class="snip1283">
				  <img src="resources/assets/img/book_img02.jpg" alt="book_image" />
				  <figcaption>
				    <h3>Sue Shei</h3>
				    <p>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</p><a href="#" class="read-more">Read More</a>
				  </figcaption>
				</figure>
            </div> 
            <div class="col-lg-3 col-md-6 col-sm-6">
	            <figure class="snip1283">
				  <img src="resources/assets/img/book_img03.jpg" alt="book_image" />
				  <figcaption>
				    <h3>Sue Shei</h3>
				    <p>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</p><a href="#" class="read-more">Read More</a>
				  </figcaption>
				</figure>
            </div> 
            <div class="col-lg-3 col-md-6 col-sm-6"> 
	            <figure class="snip1283">
				  <img src="resources/assets/img/book_img04.jpg" alt="book_image" />
				  <figcaption>
				    <h3>Sue Shei</h3>
				    <p>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</p><a href="#" class="read-more">Read More</a>
				  </figcaption>
				</figure>
            </div> 
            <div class="col-lg-3 col-md-6 col-sm-6"> 
	            <figure class="snip1283">
				  <img src="resources/assets/img/book_img05.jpg" alt="book_image" />
				  <figcaption>
				    <h3>Sue Shei</h3>
				    <p>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</p><a href="#" class="read-more">Read More</a>
				  </figcaption>
				</figure>
            </div> 
            <div class="col-lg-3 col-md-6 col-sm-6"> 
	            <figure class="snip1283">
				  <img src="resources/assets/img/book_img06.jpg" alt="book_image" />
				  <figcaption>
				    <h3>Sue Shei</h3>
				    <p>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</p><a href="#" class="read-more">Read More</a>
				  </figcaption>
				</figure>
            </div> 
            <div class="col-lg-3 col-md-6 col-sm-6"> 
	            <figure class="snip1283">
				  <img src="resources/assets/img/book_img07.jpg" alt="book_image" />
				  <figcaption>
				    <h3>Sue Shei</h3>
				    <p>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</p><a href="#" class="read-more">Read More</a>
				  </figcaption>
				</figure>
            </div> 
            <div class="col-lg-3 col-md-6 col-sm-6"> 
	            <figure class="snip1283">
				  <img src="resources/assets/img/book_img08.jpg" alt="book_image" />
				  <figcaption>
				    <h3>Sue Shei</h3>
				    <p>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</p><a href="#" class="read-more">Read More</a>
				  </figcaption>
				</figure>
            </div> 


          </div>
         
        </div>
      </div>
    <!-- 요즘 핫한 책리스트 끝 -->
    
    
   </div>
   <!-- main 태크 끝 -->

    <%@ include file="/WEB-INF/views/include/modal.jsp" %>
    <%@ include file="/WEB-INF/views/include/footer.jsp" %>

  </div>
  <%@ include file="/WEB-INF/views/include/coreJsFile.jsp" %>
</body>

</html>