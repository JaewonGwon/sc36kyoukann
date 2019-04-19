<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp"%>
<script src="resources/jquery-3.3.1.min.js"></script>

<script>
 
$(window).ready(function(){
	$('#i_scroll_wrap').scroll(function(){
		  
	  var scrollH = $('#i_scroll_wrap').scrollTop() + $('#i_scroll_wrap').height()-50;
	  var documentH = $('#i_scroll').height();

	  var temp = '';
	  if (scrollH == documentH){
	    for (var i=0; i<20; i++){
    
	    	$("#i_scroll").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>");

	    };
	  };  
	});
	
	
	$("#mem_modify").on("click", function(){
		alert('준비중입니다.');
	});

	
	
});


	 
</script>

<style>

.tab-a-st{
border-radius: none;
box-shadow: none !important;
background-color: #eee;
color: #ddd;
border: 1px solid red;
}
@media screen and (min-width: 991px) and (max-width: 1920px) {
  .figure-margin{
    margin: 10px 15px !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 990px) {
  .figure-margin{
    margin: 10px 30px !important;
  }
}
@media screen and (min-width: 576px) and (max-width: 768px) {
  .figure-margin{
    margin: 10px 0px !important;
  }	
}
@media screen and (min-width: 200px) and (max-width: 575px) {
  .figure-margin{
    margin: 40px 0px !important;
  }
}
#i_scroll_wrap{
	overflow: auto;
	height: 390px; 
	
}
.sns-icon{
	display: none;
}
</style>






<body class="index-page sidebar-collapse">
	<!-- Navbar include -->
	<%@ include file="/WEB-INF/views/include/navbar.jsp"%>
	<div class="wrapper">
		<!-- main 태크 시작 -->
		<div class="main">
	
	
		
			<div class="section section-signup"	style="background-color: #eee; padding-top: 15vh !important">
				<div class="container">
				
				  <div class="title text-center">
			        <h3 class="h3fontblack">My Page</h3>
			      </div>	
		          <div class="row" style="margin: 0; padding: 10px; background-color: #fff;">
		            <div class="col-md-6">
		                <div class="row">
		              		<div class="col-4" style="padding: 10px;">
              				  <img src='resources/assets/img/julie.jpg' alt='Circle Image' class='rounded-circle'>
				            </div>
		              		<div class="col-8">
		              		  <h4>Svetlana Anyukova</h4>
		              		  <p style="font-size: 12pt; font-weight: 500;">Nick Name</p>
				              <button class="btn btn-info" id="mem_modify">
								회원 정보 수정
				              </button>
				            </div>
			            </div>
		            </div>


		            <div class="col-md-6" style="padding: 10px;">
		            	<div class="row">
		            		<div class="col-4 p-10">
		            		휴대폰 번호
		            		</div>
		            		<div class="col-8 p-10">
		            		010-1234-5678
		            		</div>
		            		<div class="col-4 p-10">
		            		주소
		            		</div>
		            		<div class="col-8 p-10">
		            		서울시 강남구 삼성동 150번지 123
		            		</div>
		            		<div class="col-4 p-10">
		            		포인트
		            		</div>
		            		<div class="col-8 p-10">
		            		3425점
		            		</div>
		            	</div>         	
		            	<div class="row">
			              	
			              	<div class="col-12 text-center p-10 sns-icon" style="border-top: 1px dashed #ddd;">
					            
		            			 <a class="nav-link" rel="tooltip" title="Follow me on Twitter" data-placement="bottom" href="#" style="display: inline;">
					              <i class="fab fa-twitter" style="color: #56B9FF;"></i>

					            </a>
					            <a class="nav-link" rel="tooltip" title="Like me on Facebook" data-placement="bottom" href="#" style="display: inline;">
					              <i class="fab fa-facebook-square" style="color: #56B9FF;"></i>

					            </a>
					            <a class="nav-link" rel="tooltip" title="Follow me on Instagram" data-placement="bottom" href="#" style="display: inline;">
					              <i class="fab fa-instagram" style="color: #56B9FF;"></i>
					            </a>		            
		            		</div>
		            		
		            		
		          
		            		
			              	<div class="col-12 text-center p-10">
					            
					          <button class="btn btn-info" id="mem_modify">
								Facebook 추가
				              </button>
					           
					          <button class="btn btn-info" id="mem_modify">
								Instagram 추가
				              </button>
					           
					          <button class="btn btn-info" id="mem_modify">
								Twitter 추가
				              </button>
 		            
		            		</div>
		            
		            	</div>		              
		            </div>

		          </div>
				</div>
			</div>
			<!-- 윗 div 끝 -->
			
			
			
		
			<!-- 아래  div 시작 -->
			<div class="section section-tabs">
		        <div class="container">
		          <div class="row">
		            <div class="col-12">
		              <!-- Tabs with Background on Card -->
		              <div class="card" style="box-shadow: none; background-color: #eee;">
		                <div class="card-header">
		                  <ul class="nav nav-tabs nav-tabs-info justify-content-left" role="tablist" style="background-color: #eee; box-shadow: none;">
		                    <li class="nav-item" style="box-shadow: none;">
		                      <a class="nav-link tab-a-st active" data-toggle="tab" href="#home1" role="tab">Profile</a>
		                    </li>
		                    
		                    <li class="nav-item">
		                      <a class="nav-link tab-a-st" data-toggle="tab" href="#profile1" role="tab">My Books</a>
		                    </li>
		                  </ul>
		                </div>
		                <div class="card-body" style="padding: 0px; margin-top: 20px;">
		                
	                
		                
		                  <!-- Tab panes -->
		                  <div class="tab-content text-center">
		                  
		                    <div class="tab-pane active" id="home1" role="tabpanel">
		                      <div class="row" style="margin:0; padding: 0px;">
		                      	

		                      	<div class="col-lg-3 col-sm-12" style="padding: 0px;">
			                      	<div class="col-12 text-left" style="padding: 0px;">
			                      		<h5 style="padding: 6px;">Friends Profiles</h5><!-- or recent visitor -->
			                      	</div>
			              
			                      
			                      	
		                      		<div class="row" style="margin:0; padding: 0px;">
				                      	
				                      	<div class="col-3" style="padding: 6px;">
				                      	  <img src='resources/assets/img/julie.jpg' alt='Circle Image' class='rounded-circle'>
				                      	</div>
				                      	<div class="col-9 text-left" style="padding: 10px 6px; font-size:11pt;">
				                      		<p style="font-size: 11pt; font-weight: 500; margin: 0;">Paul Jason</p>
				                      		<a href="#" style="text-decoration: none;">
				                      		<i class="now-ui-icons shopping_shop" style="font-weight: 600; font-size: 9pt; color: #56B9FF;"></i>
				                      		<span style="font-size: 9pt; color: #56B9FF; font-weight: 600;">Visit Profile</span>
				                      		</a>
				                      	</div>
				                      	
				                      	<div class="col-3" style="padding: 6px;">
				                      	  <img src='resources/assets/img/julie.jpg' alt='Circle Image' class='rounded-circle'>
				                      	</div>
				                      	<div class="col-9 text-left" style="padding: 10px 6px; font-size:11pt;">
				                      		<p style="font-size: 11pt; font-weight: 500; margin: 0;">Paul Jason</p>
				                      		<a href="#" style="text-decoration: none;">
				                      		<i class="now-ui-icons shopping_shop" style="font-weight: 600; font-size: 9pt; color: #56B9FF;"></i>
				                      		<span style="font-size: 9pt; color: #56B9FF; font-weight: 600;">Visit Profile</span>
				                      		</a>
				                      	</div>
				                      	
				                      	<div class="col-3" style="padding: 6px;">
				                      	  <img src='resources/assets/img/julie.jpg' alt='Circle Image' class='rounded-circle'>
				                      	</div>
				                      	<div class="col-9 text-left" style="padding: 10px 6px; font-size:11pt;">
				                      		<p style="font-size: 11pt; font-weight: 500; margin: 0;">Paul Jason</p>
				                      		<a href="#" style="text-decoration: none;">
				                      		<i class="now-ui-icons shopping_shop" style="font-weight: 600; font-size: 9pt; color: #56B9FF;"></i>
				                      		<span style="font-size: 9pt; color: #56B9FF; font-weight: 600;">Visit Profile</span>
				                      		</a>
				                      	</div>
				                      	
				                      	<div class="col-3" style="padding: 6px;">
				                      	  <img src='resources/assets/img/julie.jpg' alt='Circle Image' class='rounded-circle'>
				                      	</div>
				                      	<div class="col-9 text-left" style="padding: 10px 6px; font-size:11pt;">
				                      		<p style="font-size: 11pt; font-weight: 500; margin: 0;">Paul Jason</p>
				                      		<a href="#" style="text-decoration: none;">
				                      		<i class="now-ui-icons shopping_shop" style="font-weight: 600; font-size: 9pt; color: #56B9FF;"></i>
				                      		<span style="font-size: 9pt; color: #56B9FF; font-weight: 600;">Visit Profile</span>
				                      		</a>
				                      	</div>
				                      	
				                      	<div class="col-3" style="padding: 6px;">
				                      	  <img src='resources/assets/img/julie.jpg' alt='Circle Image' class='rounded-circle'>
				                      	</div>
				                      	<div class="col-9 text-left" style="padding: 10px 6px; font-size:11pt;">
				                      		<p style="font-size: 11pt; font-weight: 500; margin: 0;">Paul Jason</p>
				                      		<a href="#" style="text-decoration: none;">
				                      		<i class="now-ui-icons shopping_shop" style="font-weight: 600; font-size: 9pt; color: #56B9FF;"></i>
				                      		<span style="font-size: 9pt; color: #56B9FF; font-weight: 600;">Visit Profile</span>
				                      		</a>
				                      	</div>
				                      	
			                      	</div>
			                      	

			                      	
		                      	</div>
		                      	<div class="col-lg-9 col-sm-12" style="padding: 0px;">
		                      		<div class="row" style="margin:0; padding: 0px;">
		                      			
		                      			<div class="col-12">
			                      			<div class="col-12 text-left" style="padding: 0px;">
				                      		<h5 style="padding: 6px;">About Me</h5><!-- or recent visitor -->
				                      		</div>
		                      			</div>
		                      			
		                      			
		                      			
		                      		
		                      			<div class="col-12 text-left" style="background-color: #fff;line-height: 18pt; padding: 20px;">
			                      			<p>아직 자기소개가 없습니다. 자기소개를 입력해 타인에게 보여주세요.</p>
			                      			<button class="btn btn-info" id="profile_content">
												자기소개 등록
							            	</button>

		                      			</div>
		                
		                      			
		                      			
		                      			<div class="col-12 text-left" style="background-color: #fff; margin-top: 20px; padding: 20px;">
		                      				<div class="col-12 text-left" style="padding: 0px;">
				                      		<h5 style="padding: 6px;">My Tag</h5><!-- or recent visitor -->
				                      		</div>
		                      				
		                      				
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">SF</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">환타지</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">영웅</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">사람</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">로맨스</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">무협</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">지구</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">UI</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">안드로이드</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">파이썬</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">자바</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">아이폰</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">스프링</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">HTML</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">CSS</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">PHP</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">UX</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">AI</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">Phothshop</a>
		                      				<a href="#" class="btn btn-simple btn-round btn-sm">C#</a>
		                      			</div>
		                      			
		                      		</div>
		                      		

		                      	</div>
		                      </div>
		                    </div>
		                    
		                   
		                    
		                    
		                    
		                    
		                    <div class="tab-pane" id="profile1" role="tabpanel">
		                      <div class="row" style="margin:0; padding: 0px;">
		                      	

		                      	<div class="col-lg-3 col-sm-12" style="padding: 0px;">
			                      	<div class="col-12 text-left" style="padding: 0px;">
			                      		<h5 style="padding: 6px;">Friends Profiles</h5><!-- or recent visitor -->
			                      	</div>
			              
			              

		                      		<div class="row" style="margin:0; padding: 0px;">
				                      	
				                      	<div class="col-3" style="padding: 6px;">
				                      	  <img src='resources/assets/img/julie.jpg' alt='Circle Image' class='rounded-circle'>
				                      	</div>
				                      	<div class="col-9 text-left" style="padding: 10px 6px; font-size:11pt;">
				                      		<p style="font-size: 11pt; font-weight: 500; margin: 0;">Paul Jason</p>
				                      		<a href="#" style="text-decoration: none;">
				                      		<i class="now-ui-icons shopping_shop" style="font-weight: 600; font-size: 9pt; color: #56B9FF;"></i>
				                      		<span style="font-size: 9pt; color: #56B9FF; font-weight: 600;">Visit Profile</span>
				                      		</a>
				                      	</div>
				                      	
				                      	<div class="col-3" style="padding: 6px;">
				                      	  <img src='resources/assets/img/julie.jpg' alt='Circle Image' class='rounded-circle'>
				                      	</div>
				                      	<div class="col-9 text-left" style="padding: 10px 6px; font-size:11pt;">
				                      		<p style="font-size: 11pt; font-weight: 500; margin: 0;">Paul Jason</p>
				                      		<a href="#" style="text-decoration: none;">
				                      		<i class="now-ui-icons shopping_shop" style="font-weight: 600; font-size: 9pt; color: #56B9FF;"></i>
				                      		<span style="font-size: 9pt; color: #56B9FF; font-weight: 600;">Visit Profile</span>
				                      		</a>
				                      	</div>
				                      	
				                      	<div class="col-3" style="padding: 6px;">
				                      	  <img src='resources/assets/img/julie.jpg' alt='Circle Image' class='rounded-circle'>
				                      	</div>
				                      	<div class="col-9 text-left" style="padding: 10px 6px; font-size:11pt;">
				                      		<p style="font-size: 11pt; font-weight: 500; margin: 0;">Paul Jason</p>
				                      		<a href="#" style="text-decoration: none;">
				                      		<i class="now-ui-icons shopping_shop" style="font-weight: 600; font-size: 9pt; color: #56B9FF;"></i>
				                      		<span style="font-size: 9pt; color: #56B9FF; font-weight: 600;">Visit Profile</span>
				                      		</a>
				                      	</div>
				                      	
				                      	<div class="col-3" style="padding: 6px;">
				                      	  <img src='resources/assets/img/julie.jpg' alt='Circle Image' class='rounded-circle'>
				                      	</div>
				                      	<div class="col-9 text-left" style="padding: 10px 6px; font-size:11pt;">
				                      		<p style="font-size: 11pt; font-weight: 500; margin: 0;">Paul Jason</p>
				                      		<a href="#" style="text-decoration: none;">
				                      		<i class="now-ui-icons shopping_shop" style="font-weight: 600; font-size: 9pt; color: #56B9FF;"></i>
				                      		<span style="font-size: 9pt; color: #56B9FF; font-weight: 600;">Visit Profile</span>
				                      		</a>
				                      	</div>
				                      	
				                      	<div class="col-3" style="padding: 6px;">
				                      	  <img src='resources/assets/img/julie.jpg' alt='Circle Image' class='rounded-circle'>
				                      	</div>
				                      	<div class="col-9 text-left" style="padding: 10px 6px; font-size:11pt;">
				                      		<p style="font-size: 11pt; font-weight: 500; margin: 0;">Paul Jason</p>
				                      		<a href="#" style="text-decoration: none;">
				                      		<i class="now-ui-icons shopping_shop" style="font-weight: 600; font-size: 9pt; color: #56B9FF;"></i>
				                      		<span style="font-size: 9pt; color: #56B9FF; font-weight: 600;">Visit Profile</span>
				                      		</a>
				                      	</div>
				                      	
			                      	</div>
			                      	

	                      	
		                      	</div>
		                      	<div class="col-lg-9 col-sm-12" style="padding: 0px;">
		                      		<div class="row" style="margin:0; padding: 0px;">
		                      			
		                      			<div class="col-12">
			                      			<div class="col-12 text-center" style="padding: 0px;">
				                      		<h5 style="padding: 6px;">My Books</h5><!-- or recent visitor -->
				                      		</div>
		                      			</div>
		                      		
		                      		
 		                      			<div class="col-12 i_scroll_wrap" id="i_scroll_wrap" style="background-color: #fff; padding: 30px;">
									
										
											
											  <div class="row i_scroll" id="i_scroll">
											  
 											 
									            <div class="col-lg-3 col-md-6 col-sm-12">
										            <figure class="snip1283 figure-margin">
													  <img src="resources/assets/img/book_img01.jpg" alt="book_image"/>
													  <figcaption>
													    <a href="#" class="read-more">책정보<br/>보러가기</a>
													  </figcaption>
													</figure>
									            </div> 
									            
									
									
									            <div class="col-lg-3 col-md-6 col-sm-12">
										            <figure class="snip1283 figure-margin">
													  <img src="resources/assets/img/book_img02.jpg" alt="book_image" />
													  <figcaption>
													    
													    <a href="#" class="read-more">책정보<br/>보러가기</a>
													  </figcaption>
													</figure>
									            </div> 
									            <div class="col-lg-3 col-md-6 col-sm-12">
										            <figure class="snip1283 figure-margin">
													  <img src="resources/assets/img/book_img03.jpg" alt="book_image" />
													  <figcaption>
													    
													    <a href="#" class="read-more">책정보<br/>보러가기</a>
													  </figcaption>
													</figure>
									            </div> 
									            <div class="col-lg-3 col-md-6 col-sm-12"> 
										            <figure class="snip1283 figure-margin">
													  <img src="resources/assets/img/book_img04.jpg" alt="book_image" />
													  <figcaption>
													    
													    <a href="#" class="read-more">책정보<br/>보러가기</a>
													  </figcaption>
													</figure>
									            </div> 
									            <div class="col-lg-3 col-md-6 col-sm-12"> 
										            <figure class="snip1283 figure-margin">
													  <img src="resources/assets/img/book_img05.jpg" alt="book_image" />
													  <figcaption>
													    
													    <a href="#" class="read-more">책정보<br/>보러가기</a>
													  </figcaption>
													</figure>
									            </div> 
									            <div class="col-lg-3 col-md-6 col-sm-12"> 
										            <figure class="snip1283 figure-margin">
													  <img src="resources/assets/img/book_img06.jpg" alt="book_image" />
													  <figcaption>
													    
													    <a href="#" class="read-more">책정보<br/>보러가기</a>
													  </figcaption>
													</figure>
									            </div> 
									            <div class="col-lg-3 col-md-6 col-sm-12"> 
										            <figure class="snip1283 figure-margin">
													  <img src="resources/assets/img/book_img07.jpg" alt="book_image" />
													  <figcaption>
													    
													    <a href="#" class="read-more">책정보<br/>보러가기</a>
													  </figcaption>
													</figure>
									            </div> 
									            
									            <div class="col-lg-3 col-md-6 col-sm-12"> 
										            <figure class="snip1283 figure-margin">
													  <img src="resources/assets/img/book_img08.jpg" alt="book_image" />
													  <figcaption>
													    <p>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</p>
													    <a href="#" class="read-more">책정보<br/>보러가기</a>
													  </figcaption>
													</figure>
									            </div>										            
									            

												
									          </div>
		                      			</div>
		                      			
									<!-- <div class="wrap" style="height: 300px; overflow: scroll; border: 1px solid red;">
											<div class="scroll">
											
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
											
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
											
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
											
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
											
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
											
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
											
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
											
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
											
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
											
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
											
											</div>
										</div> -->
		                      			
                    			
     			
		                      			
		                      		</div>
		                      		

		                      	</div>
		                      </div>
		                    </div>
		                    
		                  </div>
		                </div>
		              </div>
		              <!-- End Tabs on plain Card -->
		            </div>
		          </div>
		        </div>
		      </div>
		      <!-- End Section Tabs -->
      
      
			
		</div>	
		<!-- main 태크 끝 -->
		<%@ include file="/WEB-INF/views/include/footer.jsp"%>
		<%@ include file="/WEB-INF/views/include/coreJsFile.jsp"%>
		<%@ include file="/WEB-INF/views/include/modal.jsp"%>
	</div>


	<!-- <script type="text/javascript" src="resources/react/index.bundle.js"></script> -->
</body>

</html>