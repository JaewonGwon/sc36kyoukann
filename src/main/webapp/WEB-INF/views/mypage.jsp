<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp"%>
<link href="resources/assets/css/App.css" rel="stylesheet" />
<body class="index-page sidebar-collapse">
	<!-- Navbar include -->
	<%@ include file="/WEB-INF/views/include/navbar.jsp"%>
	<div class="wrapper">
		<!-- main 태크 시작 -->
		<div class="main">
		
			<div class="section section-signup"	style="min-height: 1400px; background-color: #eee; padding-top: 15vh !important">
				<div class="container">
				
				
	
				  <div class="title text-center">
			        <h3 class="h3fontblack">My Page</h3>
			      </div>	
		          <div class="row" style="margin: 0; padding: 0px; background-color: #fff;">
		            <div class="col-md-6">
		                <div class="row">
		              		<div class="col-4" style="padding: 10px;">
              				  <img src='resources/assets/img/julie.jpg' alt='Circle Image' class='rounded-circle'>
				            </div>
		              		<div class="col-8">
		              		  <h4>Svetlana Anyukova</h4>
		              		  <p style="font-size: 12pt; font-weight: 500;">Nick Name</p>
		              		  <p></p>
				              <button class="btn btn-primary">
				                Launch Modal
				              </button>
				              <button class="btn btn-warning">
				                Launch Modal Mini
				              </button>
				            </div>
			            </div>
		            </div>
		            
		            <div class="col-md-6">
		            	<div class="row">
		            		<div class="col-5">
		            		asdasd
		            		</div>
		            		<div class="col-7">
		            		asdasd
		            		</div>
		            	</div>
		              
		            </div>


		          </div>
						

				
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