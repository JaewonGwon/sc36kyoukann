<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp" %>
<script src="resources/jquery-3.3.1.min.js"></script>
<script>

$(function(){
	$("#formCheck").on('click', function(){
		var email = $("#email").val();

		
		if(email.length == 0){
			alert("이메일을 입력해주세요.");
			$("#email").select();
			return false;
		}

		$(".form").submit();
		
	});
});


</script>
<body class="index-page sidebar-collapse">

<!-- Navbar include -->
  <%@ include file="/WEB-INF/views/include/navbar.jsp" %>


  <div class="wrapper">
      <div class="section section-signup" style="background-image: url('resources/assets/img/bg13.jpg'); background-size: cover; background-position: top center; min-height: 650px;">
        <div class="container">
          <div class="row">
            <div class="card card-signup" style="background:none;">
             
              <form class="form" method="post" action="emailSend" style="background-color: rgba(0, 0, 0, 0.4); border-radius:10px;">
              
                <div class="card-header text-center">
                  <h3 class="card-title title-up" style="color: white; font-size: 26pt;">비밀번호 찾기</h3>
                </div>
                <div class="card-body">


                  <div class="col-12"><p style="text-align: center; color: #fff; font-style: italic;">임시 비밀번호를 받을 이메일 주소</p></div>

				  
                  <div class="input-group no-border" >
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="now-ui-icons ui-1_email-85"></i>
                      </span>
                      
                    </div>
                    <input type="text" placeholder="이메일 주소를 입력하세요..." name="email" id="email" class="form-control" />
                  </div>
                </div>
                <div class="card-footer text-center">               
                  <a href="#" id="formCheck" class="btn btn-login btn-round btn-lg">전송</a>             
                </div>
              </form>
<!--               	
	            <div class="text-center col-lg-12 col-md-12">
				  <a style="border: 1px solid #ddd; padding: 6px 18px; color: #ddd !important;" href="login" class="btn btn-simple btn-round" role="button">
	               		로그인 하기
	              </a>
	            </div> -->
              
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