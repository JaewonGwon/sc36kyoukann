<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp"%>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<style>
img {
	width: 200px
}

.profileID, .profileName {
	width: 100px
}

.profileContainer {
	margin-top: 5%
}

.bookCover {
	width: 100px
}

.table {
	background-color: transparent;
}

.profileFrame {
	background-color: rgba(0, 0, 0, 0.3);
}
</style>
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

							<div id="root"></div>

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
	<script type="text/javascript" src="resources/react/MyPage.bundle.js"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<!-- <script type="text/javascript" src="resources/react/main.bundle.js"></script> -->
</body>

</html>