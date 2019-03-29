<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!-- 페이지 지시자 -->
<html>
<head>
<meta charset="UTF-8">
<title>회원가입</title>

</head>
<body>
	<h2>[ 회원 가입 ]</h2>
	<script>
		
			return true;

		
		
	</script>

	<!-- 가입 폼 시작 -->
	<form id="" action="joinus" method="post">
		<table border="1">
			<tr>
				<th>아이디</th>
				<td><input id="id" type="text" value="" name="id" /></td>
			</tr>
			<tr>
				<th>비밀번호</th>
				<td><input id="pw" type="password" name="pw" /></td>
			</tr>

			<tr>
				<th>이메일</th>
				<td><input id="email" type="text" name="email" /></td>
			</tr>
			<tr>
				<th>이름</th>
				<td><input id="name" type="text" name="name" /></td>
			</tr>
			<tr>
				<th>닉네임</th>
				<td><input id="display_name" type="text" name="display_name" /></td>
			</tr>
			<tr>
				<th>성별</th>
				<td><input class="" type="radio" name="gender" value="male"
					checked /> 남자 <input class="" type="radio" name="gender"
					value="female" /> 여자</td>
			</tr>
			<tr>
				<th>주소</th>
				<td><input id="address" type="text" name="address" /></td>
			</tr>

			<tr>
				<th>전화번호</th>
				<td><input id="phone" type="text" name="phone" /></td>
			</tr>

			<tr>
				<th colspan="2"><input type="submit" value="회원가입"
					onclick="return validate();" /> <input type="reset" value="지우기" />
				</th>
			</tr>
		</table>
	</form>
</body>
</html>