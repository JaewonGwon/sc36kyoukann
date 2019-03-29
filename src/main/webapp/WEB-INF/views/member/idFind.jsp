<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
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
					alert("아이디를 찾았습니다.");
					 $("#message").text("찾으시는 아이디는"+m.id+"입니다.");
					 $("#message").attr("style","color:blue");
				}
		    }
		})
	})
})


</script>
<body>
	<a id="message"></a><br>
<form>
	이름 : <input type="text" id="name" name="name"><br>
	닉네임 : <input type="text" id="display_name" name="display_name"><br>
	<input type="button" id="idCheck" value="아이디 찾기"><br>
	<a href="login">로그인 하기</a>
</form>
</body>
</html>