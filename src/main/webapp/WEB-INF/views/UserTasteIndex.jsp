<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp"%>
<script src="resources/jquery-3.3.1.min.js"></script>
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<link href="resources/assets/css/UserTaste.css" rel="stylesheet" />
<style>
select option {
	background-color: #fff !important;
	color: #000;
}
</style>
<body class="index-page sidebar-collapse">
	<!-- Navbar include -->
	<%@ include file="/WEB-INF/views/include/navbar.jsp"%>


	<div class="wrapper">
		<div class="section section-signup"
			style="background-image: url('resources/assets/img/bg14.jpg'); background-size: cover;">
			<div class="container">
				<div class="row">
					
						<!-- React page -->
						<div id="root"></div>

					</div>
				</div>

			</div>
		</div>
	</div>
	<!-- main 태크 시작 -->
	<div class="main"></div>
	</div>

	<%@ include file="/WEB-INF/views/include/modal.jsp"%>
	<%@ include file="/WEB-INF/views/include/footer.jsp"%>

	<%@ include file="/WEB-INF/views/include/coreJsFile.jsp"%>
	<script type="text/javascript"
		src="resources/react/UserTasteIndex.bundle.js"></script>

</body>

</html>