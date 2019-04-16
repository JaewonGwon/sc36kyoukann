<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp"%>
<script src="resources/jquery-3.3.1.min.js"></script>
<script type="text/javascript">
	//Instantiate the Bootstrap carousel
	$(function() {
		$('.multi-item-carousel .carousel-item').each(function() {
			var next = $(this).next();
			if (!next.length)
				next = $(this).siblings(':first');
			next.children(':first-child').clone().appendTo($(this));
		});
		$('.multi-item-carousel .carousel-item').each(function() {
			var prev = $(this).prev();
			if (!prev.length)
				prev = $(this).siblings(':last');
			prev.children(':nth-last-child(2)').clone().prependTo($(this));
		});
	});
</script>
<link href="resources/assets/css/App.css" rel="stylesheet" />
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
<style>
.multi-item-carousel .carousel-inner {
	width: 180%;
	left: -40%;
}

.carousel-inner .carousel-item-right.active, .carousel-inner .carousel-item-next
	{
	transform: translateX(33.33%);
}

.carousel-inner .carousel-item-left.active, .carousel-inner .carousel-item-prev
	{
	transform: translateX(-33.33%)
}

.carousel-inner .carousel-item-right, .carousel-inner .carousel-item-left
	{
	transform: translateX(0);
}

@media screen and (min-width: 1201px) and (max-width: 2400px) {
	.item__third {
		float: left;
		width: 33.33333333%;
		background-size: cover;
		height: 500px;
	}
	.main-carousel-col12-st {
		width: 100%;
		margin: 0px;
		padding: 0px;
		height: 360px;
	}
	.main-carousel-col6-st {
		height: 350px;
		padding: 40px;
	}
	.multi-item-carousel .carousel-control-prev, .multi-item-carousel .carousel-control-next
		{
		/* background: rgba(255, 255, 255, 0.5); */
		width: 20%;
		height: 360px;
	}
}

@media screen and (min-width: 992px) and (max-width: 1200px) {
	.item__third {
		float: left;
		width: 33.33333333%;
		background-size: cover;
		height: 500px;
	}
	.main-carousel-col12-st {
		width: 100%;
		margin: 0px;
		padding: 0px;
		height: 360px;
	}
	.main-carousel-col6-st {
		height: 350px;
		padding: 40px;
	}
	.multi-item-carousel .carousel-control-prev, .multi-item-carousel .carousel-control-next
		{
		/* background: rgba(255, 255, 255, 0.5); */
		width: 20%;
		height: 360px;
	}
}

@media screen and (min-width: 769px) and (max-width: 991px) {
	.item__third {
		float: left;
		width: 33.33333333%;
		background-size: cover;
		height: 800px;
	}
	.main-carousel-col12-st {
		width: 100%;
		margin: 0px;
		padding: 0px;
	}
	.main-carousel-col6-st {
		padding: 20px;
	}
	.multi-item-carousel .carousel-control-prev, .multi-item-carousel .carousel-control-next
		{
		/* background: rgba(255, 255, 255, 0.5); */
		width: 20%;
		height: 700px;
	}
}

@media screen and (min-width: 518px) and (max-width: 768px) {
	.item__third {
		float: left;
		width: 33.33333333%;
		background-size: cover;
		height: 800px;
	}
	.main-carousel-col12-st {
		width: 100%;
		margin: 0px;
		padding: 0px;
	}
	.main-carousel-col6-st {
		padding: 20px;
	}
	.multi-item-carousel .carousel-control-prev, .multi-item-carousel .carousel-control-next
		{
		/* background: rgba(255, 255, 255, 0.5); */
		width: 20%;
		height: 700px;
	}
}

@media screen and (min-width: 300px) and (max-width: 517px) {
	.item__third {
		float: left;
		width: 33.33333333%;
		background-size: cover;
		height: 800px;
	}
	.main-carousel-col12-st {
		width: 100%;
		margin: 0px;
		padding: 0px;
	}
	.main-carousel-col6-st {
		padding: 20px;
	}
	.multi-item-carousel .carousel-control-prev, .multi-item-carousel .carousel-control-next
		{
		/* background: rgba(255, 255, 255, 0.5); */
		width: 20%;
		height: 700px;
	}
}

.item-bg-pink {
	background-color: #E9B3D1;
}

.item-bg-orange {
	background-color: #F7A3A5;
}

.item-bg-sky {
	background-color: #95D6E3;
}

.main-carousel-row-st {
	width: 100%;
	margin: 0px;
	height: 100%;
	background-color: #eee;
}

.img-st {
	box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.3);
}

.main-carousel-span-st-title {
	color: #fff;
	font-weight: 600;
	overflow: hidden;
	text-overflow: ellipsis !important;
	font-size: 14pt;
	max-height: 32px;
}

.main-carousel-span-st-publ {
	color: #fff;
	text-overflow: ellipsis !important;
	font-size: 11pt;
	text-align: left;
	font-weight: 600;
}

.main-carousel-span-st-cont {
	color: #fff;
	text-overflow: ellipsis !important;
	font-size: 11pt;
	text-align: left;
	max-height: 120px;
	font-weight: 500;
	overflow: hidden;
}

.btn-puple {
	background-color: #FFFFFF;
	color: #B77BC4;
	box-shadow: 0px 2px 16px 4px rgba(0, 0, 0, 0.3);
}

.btn-puple:hover {
	background-color: #B77BC4;
	color: #FFFFFF;
	box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.3);
}

.btn-orange {
	background-color: #FFFFFF;
	color: #B23A30;
	box-shadow: 0px 2px 16px 4px rgba(0, 0, 0, 0.3);
}

.btn-orange:hover {
	background-color: #B23A30;
	color: #FFFFFF;
	box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.3);
}

.btn-sky {
	background-color: #FFFFFF;
	color: #1271A0;
	box-shadow: 0px 2px 16px 4px rgba(0, 0, 0, 0.3);
}

.btn-sky:hover {
	background-color: #1271A0;
	color: #FFFFFF;
	box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.3);
}

.carousel-indicators1 {
	right: 0;
	bottom: -30px;
}

.carousel-indicators1 li {
	outline: 1px solid lightgray;
}

.carousel-indicators1 .active {
	outline: 1px solid black;
}

.main-review-title {
	font-size: 13pt;
}

.main-review-uname {
	font-size: 11pt;
}

@media screen and (min-width: 1201px) and (max-width: 2400px) {
	.review-row-bg-st {
		margin: 0;
		background-color: #fff;
		height: 200px;
	}
	.card-body-st {
		padding: 0px;
		margin: 0;
		overflow: hidden;
		height: 170px;
	}
}

@media screen and (min-width: 992px) and (max-width: 1200px) {
	.review-row-bg-st {
		margin: 0;
		background-color: #fff;
		height: 200px;
	}
	.card-body-st {
		padding: 0px;
		margin: 0;
		overflow: hidden;
		height: 170px;
	}
}

@media screen and (min-width: 769px) and (max-width: 991px) {
	.review-row-bg-st {
		margin: 0;
		background-color: #fff;
	}
	.card-body-st {
		padding: 0px;
		margin: 0;
		overflow: hidden;
		height: 150px;
	}
}

@media screen and (min-width: 518px) and (max-width: 768px) {
	.review-row-bg-st {
		margin: 0;
		background-color: #fff;
	}
	.card-body-st {
		padding: 0px;
		margin: 0;
		overflow: hidden;
		height: 150px;
	}
}

@media screen and (min-width: 100px) and (max-width: 517px) {
	.review-row-bg-st {
		margin: 0;
		background-color: #fff;
	}
	.card-body-st {
		padding: 0px;
		margin: 0;
		overflow: hidden;
		height: 150px;
	}
}

.author_img {
	margin: 0;
	padding: 0px;
}

.author_text {
	margin: 0;
	padding-left: 10px;
}

.author_line {
	border-top: 1px dashed #ddd;
	padding-bottom: 22px;
}
</style>
<body class="index-page sidebar-collapse">
	<!-- Navbar include -->
	<%@ include file="/WEB-INF/views/include/navbar.jsp"%>



	<div class="wrapper" style="border: 1px solid blue;">
		<!-- main 태크 시작 -->
		<div class="main">
			<div class="section section-signup"
				style="min-height: 1400px; background-color: #eee;">
				<div class="container">
					<div id="root"></div>
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