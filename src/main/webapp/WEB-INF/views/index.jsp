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
   


      <div class="page-header clear-filter" style="background-color: #eee;">
      <div class="page-header-image" data-parallax="true">
      </div>
      
      
      <div class="container main-reiew-cont" style="max-width: 100%;">
        <div class="content-center brand">
        
	      	<div class="container" style="max-width: 96%;">
	      	
	      	<div class="row">
	      	
	      	<div class="col-lg-3 col-md-12 col-sm-12" style="border: 1px solid blue; padding: 0px;">
	          <div class="title">
	            <h3 class="h3fontblack">Author of the week</h3>
	          </div>
	          
	          
	        </div>
	      	<div class="col-lg-9 col-md-12 col-sm-12" style="border: 1px solid blue; padding: 0px;">
	      	
	          <div class="title">
	            <h3 class="h3fontblack">Popular by Genre</h3>
	          </div>
	    
  
	          <div class="col-6" style="border: 1px solid red; padding: 20px;">
	          
   
		          <div class="row justify-content-center">
		            <div class="col-lg-12 col-md-12">
		              <div id="text-carousel" class="carousel slide" data-ride="carousel">
		                <ol class="carousel-indicators">
		                  <li data-target="#text-carousel" data-slide-to="0" class="active"></li>
		                  <li data-target="#text-carousel" data-slide-to="1"></li>
		                  <li data-target="#text-carousel" data-slide-to="2"></li>
		                </ol>
		                
		                 <div class="row">
	      				  <div class="col-12">

			                <div class="carousel-inner" role="listbox" style="box-shadow: none; background-color: #ddd !impotant;">
			                  
			                  
			                  <div class="carousel-item active">
			                    <div>
			                    
			                    
			                    
			                    
			                    <div class="carousel-content p-40 text-carousel-st">
			                        <div class="in-div-text-carousel-st">
			                        	<p class="main-review-title">Harry Potter And the Sorcerer's Stone을 읽고..</p>
			                            <p class="main-review-content">
											해리포터시리즈에서 특별한 점이라고 생각했던 것 중 하나가 꿈에 대한 묘사이다. 해리는 자신의 이마에 있는 번개 모양의 흉터를 만들어 놓은 숙적 볼드모트와 꿈으로 연결되어 있다. 꿈은 중요한 줄거리를 담당할 뿐만 아니라 해리의 감정 상태, 그리고 캐릭터를 더욱 현실적으로 보이게 하는 역할을 한다. 복선을 담당하기도 한다.
	
	작가는 큰 줄거리 사이사이에 복선을 여기저기 장치해 놓았다. 이 것들이 독자들을 방대한양의 시리즈인 7권 까지 읽게 하는 힘이다. 궁금 했던 것들이 하나하나 풀려져 가면서 느끼는 재미는 다음 권을 계속 읽고 싶게 만든다. 이 것들은 절대 억지스럽게 풀리지 않는다. 하나하나 모두 타당한 이유가 있고, 유치하지 않다.
										</p>
			                            <!-- 베스트 리뷰 태크 부분 시작 -->
			                            <p class="main-review-tag">
			                            	<span class="badge badge-info">SF</span>
			                            	<span class="badge badge-info">환타지</span>
			                            	<span class="badge badge-info">호구와트</span>
			                            	<span class="badge badge-info">마법</span>
			                            	<span class="badge badge-info">해리포터</span>
			                            </p>
			                            <!-- 베스트 리뷰 태크 부분 끝 -->
	
			                            <!-- 베스트 리뷰  태크, user name, hitcount 있는부분 시작-->
			                            <p class="main-review-tag">	                            
			                              <div class="row">
			                              	<div class="col-lg-8" style="text-align: left;padding-top: 4px;">
												<button class="btn btn-link btn-info uname-st">USER NAME</button>
											</div>
			                              	<div class="col-lg-4" style="text-align: right;">
												<button class="btn btn-round" type="button" style="padding: 4px 8px 4px 8px; background-color: #ec407a;">
									                <i class="now-ui-icons ui-2_favourite-28" style="font-size: 0.8em; font-weight: 600;"></i> 203								            </button>
											</div>
			                              </div>								  						             
	              		                </p>
	 		                            <!-- 베스트 리뷰  태크, user name, hitcount 있는부분 끝-->
	              		                
			                        </div>
		                    	</div>
		                    	
		                    	
		                    	
		                    	
			                  </div>
			                  
	
	
	
			                  <div class="carousel-item">
			                    <div class="carousel-content p-40 text-carousel-st">
			                        <div class="in-div-text-carousel-st">
			                        	<p class="main-review-title">일주일은 당신의 인생을 바꾸기에 충분한 시간이다.</p>
			                            <p class="main-review-content">
											변화를 기피하는 건 인간의 본성이다. 우리는 변화를 힘들고 고통스러운 일이라고 생각하기 때문에 본능적으로 변화를 멀리한다. 《헬위크》는 하루하루를 똑같이 살아가며 스스로에게 실망한 사람들에게 내려진 최후의 처방전이자 특효약이다. 헬위크를 통과하며 우리는 기억에 남을 만한 도전, 새로운 것을 배울 기회, 가슴 벅차게 떠올릴 경험, 삶의 지침으로 삼을 교훈을 얻게 될 것이다.
										</p>
			                            <!-- 베스트 리뷰 태크 부분 시작 -->
			                            <p class="main-review-tag">
			                            	<span class="badge badge-info">자기계발</span>
			                            	<span class="badge badge-info">성공</span>
			                            	<span class="badge badge-info">시간관리</span>
			                            	<span class="badge badge-info">일주일</span>
			                            	<span class="badge badge-info">핵빡쎄</span>
			                            </p>
			                            <!-- 베스트 리뷰 태크 부분 끝 -->
	
			                            <!-- 베스트 리뷰  태크, user name, hitcount 있는부분 시작-->
			                            <p class="main-review-tag">	                            
			                              <div class="row">
			                              	<div class="col-lg-8" style="text-align: left;padding-top: 4px;">
												<button class="btn btn-link btn-info uname-st">USER NAME</button>
											</div>
			                              	<div class="col-lg-4" style="text-align: right;">
												<button class="btn btn-round" type="button" style="padding: 4px 8px 4px 8px; background-color: #ec407a;">
									                <i class="now-ui-icons ui-2_favourite-28" style="font-size: 0.8em; font-weight: 600;"></i> 385								            </button>
											</div>
			                              </div>								  						             
	              		                </p>
	 		                            <!-- 베스트 리뷰  태크, user name, hitcount 있는부분 끝-->
			                        </div>
		                    	</div>
			                  </div>
			                </div>
		                 </div>
		                </div>
		                <a class="carousel-control-prev2" href="#text-carousel" role="button" data-slide="prev">
		                  <i class="now-ui-icons arrows-1_minimal-left"></i>
		                </a>
		                <a class="carousel-control-next2" href="#text-carousel" role="button" data-slide="next">
		                  <i class="now-ui-icons arrows-1_minimal-right"></i>
		                </a>
		              </div>
		            </div>
		          </div>
		          
	          </div>
	          <div class="col-6">
	          asdsd
	          </div>
	          
	          </div>
	          
	          
	          
	          
	          
	          </div>
	          
	          
	          
	          
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