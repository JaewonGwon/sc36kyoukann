<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>

Testing . . .

<script src="resources/jquery-3.3.1.min.js"></script>
<script>
$(function(){
	$.ajax({
		url:'http://127.0.0.1:5000/regist_member',
		method: 'POST',
		data: {
			favor : '[2, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]'
		},
		success: function(resp){
			console.log(resp)
		}
	})	
})
</script>
</body>

</html>