<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp" %>
<script src="resources/jquery-3.3.1.min.js"></script>
<script>
$(function(){
	$('#idCheck').on('click', function(){
		var name = $('#name').val();
		var display_name = $('#display_name').val();
		var aa = '';
		
		$.ajax({
		      url : 'idFind'
		      , method : 'post'
		      , data : {
		    	  		name : name,
		    	  		display_name : display_name
		    	  		} 
		      , success : function(m) {
		          if (m.id==null) {
		        	  alert("정보가 다릅니다. 다시 입력해주세요"); 
		        	  $("#message").text("이름, 별명이 다릅니다. 다시 입력해주세요");
		        	  $("#message").attr("style","color:red");
					$('#name').select();
				}else {
					var temp = '';
					alert("아이디를 찾았습니다.");
					 
					
					 temp += '<a id="message" style="border: 1px solid #ddd; padding: 6px 18px; color: #ddd !important;" href="login" class="btn btn-simple btn-round" role="button">'
					 temp += '</a>'
					 $("#messagewrap").html(temp);
					
					 $("#message").text("찾으시는 아이디는 "+ m.id +"입니다.");
					 $("#message").attr("style","color:#fff");
				}
		    }
		})
	})
})



</script>
<body class="index-page sidebar-collapse">

<!-- Navbar include -->
  <%@ include file="/WEB-INF/views/include/navbar.jsp" %>

  <div class="wrapper">
      <div class="section section-signup" style="background-image: url('resources/assets/img/bg13.jpg'); background-size: cover; background-position: top center; min-height: 650px;">
        <div class="container">
          <div class="row">
            <div class="card card-signup" style="background:none;">
            
              <form class="form" id="loginForm" method="post" action="loginCheck">
                <div class="card-header text-center">
                  <h3 class="card-title title-up" style="color: white; font-size: 26pt;">아이디 찾기</h3>
                </div>
                <div class="card-body">
                  <div id="logcheck" class="input-group no-border">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="now-ui-icons users_circle-08"></i>
                      </span>
                    </div>
                    
                    <input type="text" class="form-control" name="name" id="name" placeholder="이름을 입력하세요...">
                  </div>
                  <div class="input-group no-border" >
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="now-ui-icons ui-1_lock-circle-open"></i>
                      </span>
                    </div>
                    <input type="text" placeholder="닉네임을 입력하세요..." name="display_name" id="display_name" class="form-control" />
                  </div>
                </div>
                <div class="card-footer text-center">               
                  <a href="#" id="idCheck" class="btn btn-login btn-round btn-lg">아이디 찾기</a>             
                </div>
              </form>
              	
              	<div class="col-12 text-center" id="messagewrap">
              	 
              	</div>
              
	            <div class="text-center col-lg-12 col-md-12">
				  <a style="border: 1px solid #ddd; padding: 6px 18px; color: #ddd !important;" href="login" class="btn btn-simple btn-round" role="button">
	               		로그인 하기
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