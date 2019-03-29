<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<script src="resources/jquery-3.3.1.min.js"></script>
<script>
$(function(){
	 $.ajax({
	      url : 'searchReview'
	      , method : 'post'
	      , success : function(resp) {
	         output(resp);
	      }
	   })
})
function output(resp) {
	var write="";
	write += '<tr><th>책번호</th><th>책제목</th><th>id</th><th>날짜</th><th>리뷰제목</th><th>리뷰내용</th><th>좋아요</th><th>스크랩</th>';
	write += '<tr>';
	write += '<td>' + resp.rev_num + '</td><td>' + resp.book_title +'</td><td>' + resp.id + '</td><td>' + resp.regdate + '</td><td>' + resp.rev_title + '</td><td>' + resp.rev_content + '</td><td>' + resp.rev_like + '</td><td>'+resp.rev_scrap+'</td>';
	write += '<td><form action="delete" method="post">';
	write += '<input type="submit"  value="삭제 "/>';
	write += '<input type="hidden" value ="'+resp.rev_num+'" name ="rev_num">'
	write += '</form></td>';
	write += '<td><form action="update" method="get">';
	write += '<input type="submit"  value="수정"/>';
	write += '<input type="hidden" value ="'+resp.rev_num+'" name ="rev_num">'
	write += '</form></td>';
	write += '</tr>';
	
	
	$("#reviewTable").html(write);

}

</script>
<body>
<table border="1" id="reviewTable">
	
</table>
</body>
</html>