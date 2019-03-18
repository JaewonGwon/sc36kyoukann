<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>로그인</title>
</head>
<body>
	${loginFail}
	<form action="loginCheck" method="post">
		id : <input type="text" name="id"> pw : <input type="password"
			name="pw"> <input type="submit" value="로그인">
		<hr />
		<p>
			<a href="joinus">회원가입</a>
		</p>
	</form>
</body>
</html>