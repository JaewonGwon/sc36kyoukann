<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>

<body>
${message }
<form action="pwFind" method="post">
	아이디 : <input type="text" id="id" name="id"><br>
	이름 : <input type="text" id="name" name="name"><br>
	닉네임 : <input type="text" id="display_name" name="display_name"><br>
	<input type="submit" id="pwdCheck" value="비밀번호 찾기"><br>
</form>
</body>
</html>