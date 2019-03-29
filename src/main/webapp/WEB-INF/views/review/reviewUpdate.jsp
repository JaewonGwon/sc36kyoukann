<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="update" method="post">
	<table border="1">
	<tr>
		<th>책 제목</th>
		<td>${sessionScope.review.book_title}</td>
	</tr>
	<tr>
		<th>id</th>
		<td>${sessionScope.review.id}</td>
	</tr>
	<tr>
		<th>날짜</th>
		<td>${sessionScope.review.regdate}</td>
	</tr>
	<tr>
		<th>리뷰제목</th>
		<td><textarea name="rev_title" cols="60" rows="1">"${sessionScope.review.rev_title}"</textarea></td>
	</tr>
	<tr>
		<th>리뷰내용</th>
		<td><textarea name="rev_content" cols="60" rows="10">"${sessionScope.review.rev_content}"</textarea></td>
	</tr>
	<tr>
		<td colspan="2">
			<input type="hidden" name="rev_num" value="${sessionScope.review.rev_num}"/>
			<input type="submit" value="수정" />
			<input type="reset" value="취소" />
			<a href="/" >목록으로</a>
		</td>
	</tr>
	</table>
</form>
</body>
</html>