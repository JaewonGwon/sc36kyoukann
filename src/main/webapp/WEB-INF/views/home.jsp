<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp"%>
<body class="index-page sidebar-collapse">
<%@ include file="/WEB-INF/views/include/navbar.jsp"%>
<style>
.carousel-control-next2, .carousel-control-prev2 {
	position: absolute;
	top: 0;
	bottom: 0;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
	-ms-flex-pack: center;
	justify-content: center;
	width: 5%;
	color: #4f220e;
	text-align: center;
	/* opacity:.5 */
}

.carousel-control-next2:focus, .carousel-control-next2:hover,
	.carousel-control-prev2:focus, .carousel-control-prev2:hover {
	color: #4f220e;
	text-decoration: none;
	outline: 0;
	opacity: .6
}

.carousel-control-prev2 {
	left: 0
}

.carousel-control-next2 {
	right: 0
}

.carousel-control-next-icon, .carousel-control-prev-icon {
	display: inline-block;
	width: 20px;
	height: 20px;
	background: transparent no-repeat center center;
	background-size: 100% 100%
}

.carousel-control-prev-icon {
	background-image:
		url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E")
}

.carousel-control-next-icon {
	background-image:
		url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E")
}
</style>
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
	<script src="resources/react/main.bundle.js"></script>
</body>

</html>