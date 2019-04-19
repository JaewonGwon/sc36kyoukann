<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp" %>
<script src="resources/jquery-3.3.1.min.js"></script>
<script>
$(function(){
		$("#pw").keyup(function(e){
			if(e.keyCode == 13){
				var form_data = {
		      			id : $("#id").val(),
		            	pw : $("#pw").val()
		      	}

		         $.ajax({
		            method : 'post'
		            , url  : 'loginCheck'
		            , data : form_data
		            , success : function(resp) {
		               if(resp.trim() == "fail") {
		             
		                  $("#id").val('일치하는 회원정보가 없습니다!');
		                  $("#id").css("color", "red");
		                  return false;
		                  
		               } else {
		            	  $("#loginForm").submit();
		                  location.href='http://localhost:8888/test/index';		                 
		               }
		            }
		         }); 	
			}		
		});
	
	
	
	   $("#login").on("click", function() {
	      	var form_data = {
	      			id : $("#id").val(),
	            	pw : $("#pw").val()
	      	}

	         $.ajax({
	            method : 'post'
	            , url  : 'loginCheck'
	            , data : form_data
	            , success : function(resp) {
	               if(resp.trim() == "fail") {
	             
	                  $("#id").val('일치하는 회원정보가 없습니다!');
	                  $("#id").css("color", "red");
	                  return false;
	               } else {
	            	  $("#loginForm").submit();
	                  location.href='http://localhost:8888/test/index';
	                 
	               }
	            }
	         }); 
	   });
	   
	    
	});



</script>
<body class="index-page sidebar-collapse">


<!-- Navbar include -->
  <%@ include file="/WEB-INF/views/include/navbar.jsp" %>

  <div class="wrapper">
      <div class="section section-signup" style="background-image: url('resources/assets/img/bg13.jpg'); background-size: cover; background-position: top center; min-height: 700px;">
        <div class="container">
          <div class="row">
          
          
            <div class="card card-signup" style="background:none;">
            
           <!--  <div style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;"></div> -->                      
                      
              <form class="form" id="loginForm" method="post" action="loginCheck">
                <div class="card-header text-center">
                  <h3 class="card-title title-up" style="color: white; font-size: 26pt;">Login</h3>
                  <!-- <div class="social-line">
                    <a href="#pablo" class="btn btn-neutral btn-facebook btn-icon btn-round">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                    <a href="#pablo" class="btn btn-neutral btn-twitter btn-icon btn-lg btn-round">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#pablo" class="btn btn-neutral btn-google btn-icon btn-round">
                      <i class="fab fa-google-plus"></i>
                    </a>
                  </div> -->
                </div>
                <div class="card-body">
                  <div id="logcheck" class="input-group no-border">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="now-ui-icons users_circle-08"></i>
                      </span>
                    </div>
                    
                    <input type="text" class="form-control" name="id" id="id" placeholder="아이디를 입력하세요...">
                  </div>
                  <div class="input-group no-border" >
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="now-ui-icons ui-1_lock-circle-open"></i>
                      </span>
                    </div>
                    <input type="password" placeholder="패스워드를 입력하세요..." name="pw" id="pw" class="form-control" />
                  </div>
                  <!-- <div class="input-group no-border">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="now-ui-icons ui-1_email-85"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control" placeholder="Email...">
                  </div> -->
                  <!-- If you want to add a checkbox to this form, uncomment this code -->
                  <!-- <div class="checkbox">
								<input id="checkboxSignup" type="checkbox">
									<label for="checkboxSignup">
									Unchecked
									</label>
								</div> -->
                </div>
                <div class="card-footer text-center">               
                  <a href="#" id="login" class="btn btn-login btn-round btn-lg">로그인</a>             
                </div>
              </form>
              
              
	            <div class="text-center col-lg-12 col-md-12">
	              <a style="border: 1px solid #ddd; padding: 6px 18px; color: #ddd !important; font-size: 9pt;" href="joinus" class="btn btn-simple btn-round" role="button">
	               		 회원가입
	              </a>
	              <a style="border: 1px solid #ddd; padding: 6px 18px; color: #ddd !important; font-size: 9pt;" href="findmyinfo" class="btn btn-primary btn-lg btn-simple btn-round" role="button">
	               		 아이디/비밀번호 찾기
	              </a>
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