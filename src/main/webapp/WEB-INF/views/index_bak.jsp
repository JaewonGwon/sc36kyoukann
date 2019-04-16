<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp" %>
<body class="index-page sidebar-collapse">

<!-- Navbar include -->
  <%@ include file="/WEB-INF/views/include/navbar.jsp" %>
  <style type="text/css">
 
 }
 </style>
  <div class="wrapper">
    <div class="page-header clear-filter" filter-color="orange">
      <div class="page-header-image" data-parallax="true" style="background-image:url('resources/assets/img/header.jpg');">
      </div>
      <div class="container" >
        <div class="content-center brand">
	      	<div class="container">
	          <div class="title">
	            <h3>책 추천 받으시오</h3>
	          </div>
	          <div class="row justify-content-center"> 
	            <div class="col-lg-8 col-md-12" style="">
	              
	              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
	                <ol class="carousel-indicators">
	                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
	                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
	                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	                </ol>
	                <div class="carousel-inner carousel-inner-wh" role="listbox">
	                  <div class="carousel-item active">
	                    <img class="d-block" src="resources/assets/img/book_img01.jpg" alt="First slide">
	                    <div class="carousel-caption d-none d-md-block">
	                      <h5>Nature, United States</h5>
	                    </div>
	                  </div>
	                  <div class="carousel-item">
	                    <img class="d-block" src="resources/assets/img/book_img02.jpg" alt="Second slide">
	                    <div class="carousel-caption d-none d-md-block">
	                      <h5>Somewhere Beyond, United States</h5>
	                    </div>
	                  </div>
	                  <div class="carousel-item">
	                    <img class="d-block" src="resources/assets/img/book_img03.jpg" alt="Third slide">
	                    <div class="carousel-caption d-none d-md-block">
	                      <h5>Yellowstone National Park, United States</h5>
	                    </div>
	                  </div>
	                </div>
	                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
	                  <i class="now-ui-icons arrows-1_minimal-left"></i>
	                </a>
	                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
	                  <i class="now-ui-icons arrows-1_minimal-right"></i>
	                </a>
	              </div>
	            </div>
	          </div>
	          
	        </div>
        </div>
      </div>
    </div>
    
    <!-- main 태크 시작 -->
    <div class="main">
    
    <!-- 추천 리뷰 보여주는 부분 시작 -->
      <div class="page-header clear-filter" style="background-color: #eee;">
      <div class="page-header-image" data-parallax="true">
      </div>
      <div class="container">
        <div class="content-center brand">
	      	<div class="container">
	          <div class="title">
	            <h3 class="h3fontblack">리뷰 추천 받으시오</h3>
	          </div>
	          <div class="row justify-content-center">
	            <div class="col-lg-8 col-md-12">
	              <div id="text-carousel" class="carousel slide" data-ride="carousel">
	                <ol class="carousel-indicators">
	                  <li data-target="#text-carousel" data-slide-to="0" class="active"></li>
	                  <li data-target="#text-carousel" data-slide-to="1"></li>
	                  <li data-target="#text-carousel" data-slide-to="2"></li>
	                </ol>
	                
	                 <div class="row">
      				  <div class="col-xs-3 col-xs-6">
	                
		                <div class="carousel-inner" role="listbox" style="box-shadow: none; background-color: #ddd !impotant;">
		                  <div class="carousel-item active">
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
		                        	<p class="main-review-title">영화보다 재미있는 트와일라잇 책</p>
		                            <p class="main-review-content">
										영화 트와일라잇 너무 지루했어...ㅠㅠ나만 그런가...시리즈가 있는 영화들은 항상 1편이 지루하고 재미가 없다.난 그냥 책으로 만족하련다.
									</p>
		                            <!-- 베스트 리뷰 태크 부분 시작 -->
		                            <p class="main-review-tag">
		                            	<span class="badge badge-info">SF</span>
		                            	<span class="badge badge-info">환타지</span>
		                            	<span class="badge badge-info">뱀파이어</span>
		                            	<span class="badge badge-info">사랑</span>
		                            	<span class="badge badge-info">늑대인간</span>
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
								                <i class="now-ui-icons ui-2_favourite-28" style="font-size: 0.8em; font-weight: 600;"></i> 15								            </button>
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