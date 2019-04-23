<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<style>
@import url('https://fonts.googleapis.com/css?family=Dancing+Script');

.shine {
  width:8px;
  height:25px;
  background:white;
  position:absolute;
  margin-left:-150px;
  margin-top:-26px;
  transform:rotate(-20deg);
  animation: shine 5s infinite ease-in-out;
  opacity:0.85;
}

@keyframes shine {
  0% {
    left:0px;
    width:8px
  }
  
  25%, 100% {
    left:800px;
    width:8px;
  }
}



</style>
<!-- Navbar -->
  <nav class="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
    <div class="container">
      <div class="navbar-translate">
        <a class="navbar-brand" href="index" rel="tooltip" title="공감  - 당신의 사적인 독서생활을 채우다!" data-placement="bottom">
          	Read Books : Gong-Gam
          	<div class="shine"></div>
        </a>
        <c:if test="${sessionScope.loginId != null}">
	        <a class="navbar-brand text-warning" rel="tooltip" data-placement="bottom" style="font-size: 11px;">
				<i class="now-ui-icons users_circle-08"></i>
				${sessionScope.loginId}님 접속중
			</a>
		</c:if>
        <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-bar top-bar"></span>
          <span class="navbar-toggler-bar middle-bar"></span>
          <span class="navbar-toggler-bar bottom-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse justify-content-end" id="navigation">
        <ul class="navbar-nav">
          <li class="nav-item"> 
            <a class="nav-link" href="recommend">
              <i class="now-ui-icons ui-2_like"></i>
              <p>도서 추천</p>
            </a>
          </li>
          <li class="nav-item">
       <a class="nav-link" href="bookreview">
              <i class="now-ui-icons ui-2_chat-round"></i>
              <p>도서 리뷰</p>
            </a>
          </li>
          <li class="nav-item">
       <a class="nav-link" href="profile">
              <i class="now-ui-icons education_agenda-bookmark"></i>
              <p>내 서재</p>
            </a>
          </li>
          <c:if test="${sessionScope.loginId == null}">
	          <li class="nav-item">
	            <a class="nav-link btn btn-warning" href="login">
	              <i class="now-ui-icons gestures_tap-01"></i>
	              <p>로그인</p>
	            </a>
	          </li>
          </c:if>
          
          <c:if test="${sessionScope.loginId != null}">
	          <li class="nav-item">
	            <a class="nav-link" href="logout">
	              <i class="now-ui-icons media-1_button-power"></i>
	              <p>로그아웃</p>
	            </a>
	          </li>
          </c:if>
          
          <li class="nav-item">
            <a class="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="#" target="_blank">
              <i class="fab fa-twitter"></i>
              <p class="d-lg-none d-xl-none">Twitter</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="#" target="_blank">
              <i class="fab fa-facebook-square"></i>
              <p class="d-lg-none d-xl-none">Facebook</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="#" target="_blank">
              <i class="fab fa-instagram"></i>
              <p class="d-lg-none d-xl-none">Instagram</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->