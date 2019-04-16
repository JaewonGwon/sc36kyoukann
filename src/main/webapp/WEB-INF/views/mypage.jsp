<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp"%>
<link href="resources/assets/css/App.css" rel="stylesheet" />
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
<body class="index-page sidebar-collapse">
	<!-- Navbar include -->
	<%@ include file="/WEB-INF/views/include/navbar.jsp"%>
	<div class="wrapper" style="border: 1px solid blue;">
		<!-- main 태크 시작 -->
		<div class="main">
			<div class="section section-signup"
				style="min-height: 1400px; background-color: #eee;">
				<div class="container">
				</div>
			</div>
		</div>	
		<!-- main 태크 끝 -->
		<%@ include file="/WEB-INF/views/include/footer.jsp"%>
		<%@ include file="/WEB-INF/views/include/coreJsFile.jsp"%>
		<%@ include file="/WEB-INF/views/include/modal.jsp"%>
	</div>

	<script type="text/javascript" src="resources/react/index.bundle.js"></script>
</body>

</html>