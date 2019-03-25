<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head><link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
/></head>
<%@ include file="/WEB-INF/views/include/header.jsp"%>
<body class="index-page sidebar-collapse">
<%-- <%@ include file="/WEB-INF/views/include/navbar.jsp"%> --%>
	<div class="wrapper">
		<div class="page-header clear-filter" filter-color="orange">
			<div class="page-header-image" data-parallax="true"
				style="background-image: url('resources/assets/img/header.jpg');">
			</div>
			<div class="container">
				<div class="content-center brand">
					<div class="container">
						<div class="title">
							<div id="root"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- main 태크 시작 -->
		<div class="main"></div>
		<!-- main 태크 끝 -->

	<%@ include file="/WEB-INF/views/include/footer.jsp"%>
	</div>
	<%@ include file="/WEB-INF/views/include/coreJsFile.jsp"%>
	<script type="text/javascript" src="resources/react/index.bundle.js"></script>
	<!-- <script type="text/javascript" src="resources/react/main.bundle.js"></script> -->
</body>

</html>