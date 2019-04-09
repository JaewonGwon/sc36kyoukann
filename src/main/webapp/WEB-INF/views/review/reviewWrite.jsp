<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp" %>


<script src="resources/jquery-3.3.1.min.js"></script>
<!-- <script type="text/javascript" src="resources/react/index.bundle.js"></script> -->




<script>


</script>

<script>

</script>




<body class="index-page sidebar-collapse">

<!-- Navbar include -->
  <%@ include file="/WEB-INF/views/include/navbar.jsp" %>

  <div class="wrapper">
      <div class="section section-signup" style="min-height: 600px; background-color: #eee;">
        <div class="container">
          <div class="row">
            
	          <div class="container">
		        <div class="content-center brand">
			      	<div class="container">
			          <div class="title text-center">
			            <h3 class="h3fontblack">Review Write</h3>
			          </div>		          

						<form>

							<div class="row review_content_wrap" id="itemwrap">
							
								<div class='col-lg-8 review_content'>
									 <div class='carousel-content text-carousel-st2'>
								     <div class='in-div-text-carousel-st2'>
								         <!-- 베스트 리뷰  태크, user name, hitcount 있는부분 시작-->
								         <p class='main-review-tag'>                           
											<input class="review-mod-input-st text-info reviewreg-nick-input" type="text" name="nickname" value="User NickName" readonly/>
								         </p>
	
	
								     	<p class='main-review-title' style="margin-top: 15px;">
								     		<input class="review-mod-input-st" type="text" name="uwtitle" id="booktitle" placeholder="글 제목을 입력 해주세요." />
								     	</p>
								     	<p class='main-review-title2'>
									     	
											<input class="review-mod-input-st" id="myInput" type="text" name="booktitle" placeholder="책 제목을 입력 해주세요." />
	
								     	</p>
								         <p class='main-review-content2'>
											<textarea class="review-mod-ta-st" style="" id="content" maxlength="2000" placeholder="글자수는 한글 2000자로 제한 합니다."></textarea>
											<span id="counter">###</span>
										</p>									
								         <!-- 베스트 리뷰 태크 부분 시작 -->
								         <p class='main-review-tag' style="padding-bottom: 15px;">
								         	<input class="review-mod-input-st" type="text" name="booktag" />
								         </p>
								         <!-- 베스트 리뷰 태크 부분 끝 -->
								         
								      </div>
								   </div>
								  </div>
	
							</div>
						
							<div class="row">
								<div class="col-12 text-center" id="btn-wrap">
									<button class="btn btn-success btn-round" id="reviewreg" type="button">등록</button>
									<button class="btn btn-primary btn-round" id="reviewreset" type="reset">취소</button>
									<button class="btn btn-round" id="reviewback" type="button">목록</button>
								</div>
							</div>	        
						</form>		
				   
			        </div>
		          </div>
		        </div>
		      </div>  
	                  
            
          </div>
        </div>
      </div>
   <!-- main 태크 끝 -->

    <%@ include file="/WEB-INF/views/include/modal.jsp" %>
    <%@ include file="/WEB-INF/views/include/footer.jsp" %>
  </div>
  <%@ include file="/WEB-INF/views/include/coreJsFile.jsp" %>
</body>

</html>