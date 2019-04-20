<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<%@ include file="/WEB-INF/views/include/header.jsp"%>
<script src="resources/jquery-3.3.1.min.js"></script>
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<style type="text/css">
.index-page sidebar-collapse {
	margin: 0;
	height: 100% !important;
}

html {
	height: 100% !important;
}

* {
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
}
</style>
</head>
<%@ include file="/WEB-INF/views/include/header.jsp"%>
<body class="index-page sidebar-collapse">
	<%@ include file="/WEB-INF/views/include/navbar.jsp"%>

	<div class="wrapper">
		<div class="section section-signup"
			style="background-image: url('resources/assets/img/bg14.jpg'); background-size: cover; background-position: top center; min-height: 600px;">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-md-9 col-sm-12"
						style="margin: 0 auto; background: none; min-width: 300px;">
						<!-- React page -->
						<div id="root"></div>

					</div>
				</div>

			</div>
		</div>

		<!-- main 태크 시작 -->
		<div class="main"></div>
	</div>
	<!-- main 태크 끝 -->

	<%@ include file="/WEB-INF/views/include/modal.jsp"%>
	<%@ include file="/WEB-INF/views/include/footer.jsp"%>
	</div>
	<%@ include file="/WEB-INF/views/include/coreJsFile.jsp"%>

	<script type="text/javascript"
		src="resources/react/UserTasteIndex.bundle.js"></script>
	</div>
</body>

</html>