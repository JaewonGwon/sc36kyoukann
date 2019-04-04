<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp" %>
<script src="resources/jquery-3.3.1.min.js"></script>

<body class="index-page sidebar-collapse">

<!-- Navbar include -->
  <%@ include file="/WEB-INF/views/include/navbar.jsp" %>

  <div class="wrapper">
      <div class="section section-signup" style="background-image: url('resources/assets/img/bg13.jpg'); background-size: cover; background-position: top center; min-height: 650px;">
        <div class="container">
				<div class="row" style="margin-top: 15%;">
	                <div class="col-12 text-center">               
	                  <a href="idFind" class="btn btn-login btn-round btn-lg m-30">아이디 찾기</a>
	                  <a href="pwFind" class="btn btn-login btn-round btn-lg m-30">비밀번호 찾기</a>             
	                </div>

                </div>
<!--               
	            <div class="text-center col-lg-12 col-md-12">
	              <a style="border: 1px solid #ddd; padding: 6px 18px; color: #ddd !important; font-size: 9pt;" href="joinus" class="btn btn-simple btn-round" role="button">
	               		 회원가입
	              </a>
	              <a style="border: 1px solid #ddd; padding: 6px 18px; color: #ddd !important; font-size: 9pt;" href="findmyinfo" class="btn btn-primary btn-lg btn-simple btn-round" role="button">
	               		 아이디/비밀번호 찾기
	              </a>
	            </div> -->

        </div>
      </div>
   <!-- main 태크 끝 -->

    <%@ include file="/WEB-INF/views/include/modal.jsp" %>
    <%@ include file="/WEB-INF/views/include/footer.jsp" %>
  </div>
  <%@ include file="/WEB-INF/views/include/coreJsFile.jsp" %>
</body>

</html>