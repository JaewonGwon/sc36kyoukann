<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp" %>
<script src="resources/jquery-3.3.1.min.js"></script>


<script>

$(function() {
	   init();
	   
	});
function init() {
	   $.ajax({
	      url : 'review'
	      , method : 'POST'
	      , success : function(resp) {
	         output(resp);
	      }
	   
	   })
	}
function output(resp) {
	   var listwriter = '';
	   var img = 'resources/assets/img/book_img01.jpg';
	   var reviewlink = "'reviewDetail'";
	   
	   $.each(resp, function(index, tt) {
		  listwriter += '<div class="item" style="cursor:pointer;" OnClick="javascript:location.href='+reviewlink+'">';
	      listwriter += '<div class="carousel-content text-carousel-st2">';
		  listwriter += '<div class="in-div-text-carousel-st2">';
		  listwriter += '<p class="main-review-title">'+tt.rev_title+'</p>';
		  listwriter += '<p class="main-review-title2">';
		  listwriter += '<a href="#" data-toggle="tooltip" title="<img src='+ img +'>">';
		  
		  
		  listwriter += tt.book_title;
		  listwriter += '</a>';
		  listwriter += '</p>';
		  listwriter += '<p class="main-review-content2">';
		  listwriter += tt.rev_content;
		  listwriter += '</p>'
	      listwriter += '<p class="main-review-tag">';
	      listwriter +='<span class="badge badge-success">SF</span>';
	      listwriter +='<span class="badge badge-success">환타지</span>';
	      listwriter +='<span class="badge badge-success">호구와트</span>';
	      listwriter +='<span class="badge badge-success">마법</span>';
	      listwriter +='<span class="badge badge-success">해리포터</span>';
	      listwriter +='</p>';
	      listwriter +='<p class="main-review-tag">';
	      listwriter +='<div class="row">';
	      listwriter +='<div class="col-lg-7" style="text-align: left;padding-top: 4px;">';
	      listwriter +='<button class="btn btn-link btn-info uname-st">USER NAME</button>';
	      listwriter +='</div>';
	      listwriter +='<div class="col-lg-5" style="text-align: right; padding-top: 4px;">';
	      listwriter +='<button class="btn btn-round" type="button" style="padding: 4px 8px 4px 8px; background-color: #ec407a;">';
	      listwriter +='<i class="now-ui-icons ui-2_favourite-28" style="font-size: 0.8em; font-weight: 600;"></i> 203';
	      listwriter +='</button>';
	      listwriter +='<button class="btn btn-round" type="button" style="padding: 4px 8px 4px 8px; background-color: #2CA8FF;">';
	      listwriter +='<i class="now-ui-icons ui-2_chat-round" style="font-size: 0.8em; font-weight: 600;"></i> 15';
	      listwriter +='</button>';
	      listwriter +='</div>';
	      listwriter +='</div>';	
	      listwriter +='</p>';
	      listwriter +='</div>';
	      listwriter +='</div>';
	      listwriter +='</div>';
	   });
	   
	   $('#itemwrap').html(listwriter);
	}
function bookdelete() {
	   var rev_num = $(this).attr("data-value");
	  
	   $.ajax({
	      url : 'delete'
	      , method : 'POST'
	      , data : {rev_num : rev_num}
	      , success : init
	   })
	   
	}

</script>

<script>

/*리뷰 10개씩 뿌려주는 코드 시작 (더보기 버튼)*/
$(window).on('load', function () {
    load('#itemwrap', '10');
    $("#btn-wrap button").on("click", function () {
        load('#itemwrap', '10', '#btn-wrap');
    })
});
 
function load(id, cnt, btn) {
    var girls_list = id + " .item:not(.active)";
    var girls_length = $(girls_list).length;
    var girls_total_cnt;
    if (cnt < girls_length) {
        girls_total_cnt = cnt;
    } else {
        girls_total_cnt = girls_length;
        $('#reviewmore').hide()
    }
    $(girls_list + ":lt(" + girls_total_cnt + ")").addClass("active");
}
/*리뷰 10개씩 뿌려주는 코드 끝 (더보기 버튼)*/


/* 검색버튼 클릭시 모달창 검색 인풋박스에 포커스 주는 코드 시작*/
$(document).ready(function(){
  $("#modalClick").click(function(){
    $("#myModal").modal("show");
  });
  $("#myModal").on('shown.bs.modal', function(){
    $("#reviewSearch").focus();
    $("#reviewSearch").select();
  });
});
/* 검색버튼 클릭시 모달창 검색 인풋박스에 포커스 주는 코드 끝*/	

/* 리뷰 제목부분 툴팁 그림 나오게 하는 소스 시작*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip({
	  html : true
  });
});
/* 리뷰 제목부분 툴팁 그림 나오게 하는 소스 끝*/
 
</script>



<body class="index-page sidebar-collapse">

<!-- Navbar include -->
  <%@ include file="/WEB-INF/views/include/navbar.jsp" %>

  <div class="wrapper">
      <div class="section section-signup" style="min-height: 600px; background-color: #eee;">
        <div class="container">
          <div class="row">
            
	          <div class="container">
		        <div class="content-center brand">
			      	<div class="container">
			          <div class="title text-center">
			            <h3 class="h3fontblack">Review</h3>
			          </div>		          

						<div class="col-12 text-center p-20">
							<div class="dropdown m-30" style="display: inline;">
							  <a id="dropdownMenu1" class="latest-st" data-toggle="dropdown" aria-expanded="true" href="#">
							    <i class="now-ui-icons tech_watch-time"></i>					    
	                            <span>조회</span>                           
							  </a>
							  <ul class="dropdown-menu latest-drop-ui" role="menu" aria-labelledby="dropdownMenu1">
							    <li role="presentation">
							      <a role="menuitem" tabindex="-1" href="#">
							        <i class="now-ui-icons tech_watch-time"></i>
							                  날짜순
							      </a>
							    </li>
							    <li role="presentation">
							      <a role="menuitem" tabindex="-1" href="#">
							        <i class="now-ui-icons ui-2_favourite-28"></i>
		                          	인기순
							      </a>
							    </li>
							    <li role="presentation">
							      <a role="menuitem" tabindex="-1" href="#">
							        <i class="now-ui-icons ui-2_chat-round"></i>
		                          	댓글순
							      </a>
							    </li>
							  </ul>
							</div>	
									          
							<div class="dropdown m-30" style="display: inline;">
							  <a id="dropdownMenu1" class="latest-st" data-toggle="modal" data-target="#myModal" id="modalClick" href="#">
							    <i class="now-ui-icons ui-1_zoom-bold text-dark"></i>					    
	                            <span>검색</span>                           
							  </a>
							</div>
									          
							<div class="dropdown m-30" style="display: inline;">
							  <a id="dropdownMenu1" class="latest-st" data-toggle="dropdown" aria-expanded="true" href="#">
							    <i class="now-ui-icons text_align-left"></i>					    
	                            <span>리뷰작성</span>                           
							  </a>
							</div>
						</div>
				  
						<div class="masonry" id="itemwrap">
						
						 <%--  <div class="item" OnClick="location.href ='reviewDetailTest'" style="cursor:pointer;">

							 <div class="carousel-content text-carousel-st2">
		                        <div class="in-div-text-carousel-st2">
		                        	<p class="main-review-title">Harry Potter And the Sorcerer's Stone을 읽고..</p>
		                        	<p class="main-review-title2">

		                        	<a href="#" data-toggle="tooltip" title="<img src='resources/assets/img/book_img01.jpg' />">

		                        		Harry Potter And the Sorcerer's Stone
		                        	</a>
		                        	</p>
		                            <p class="main-review-content2">
										해리포터시리즈에서 특별한 점이라고 생각했던 것 중 하나가 꿈에 대한 묘사이다. 해리는 자신의 이마에 있는 번개 모양의 흉터를 만들어 놓은 숙적 볼드모트와 꿈으로 연결되어 있다. 꿈은 중요한 줄거리를 담당할 뿐만 아니라 해리의 감정 상태, 그리고 캐릭터를 더욱 현실적으로 보이게 하는 역할을 한다. 복선을 담당하기도 한다.
										작가는 큰 줄거리 사이사이에 복선을 여기저기 장치해 놓았다. 이 것들이 독자들을 방대한양의 시리즈인 7권 까지 읽게 하는 힘이다. 궁금 했던 것들이 하나하나 풀려져 가면서 느끼는 재미는 다음 권을 계속 읽고 싶게 만든다. 이 것들은 절대 억지스럽게 풀리지 않는다. 하나하나 모두 타당한 이유가 있고, 유치하지 않다.
									</p>
		                            <!-- 베스트 리뷰 태크 부분 시작 -->
		                            <p class="main-review-tag">
		                            	<span class="badge badge-success">SF</span>
		                            	<span class="badge badge-success">환타지</span>
		                            	<span class="badge badge-success">호구와트</span>
		                            	<span class="badge badge-success">마법</span>
		                            	<span class="badge badge-success">해리포터</span>
		                            </p>
		                            <!-- 베스트 리뷰 태크 부분 끝 -->

		                            <!-- 베스트 리뷰  태크, user name, hitcount 있는부분 시작-->
		                            <p class="main-review-tag">	                            
		                              <div class="row">
		                              	<div class="col-lg-7" style="text-align: left;padding-top: 4px;">
											<button class="btn btn-link btn-info uname-st">USER NAME</button>
										</div>
		                              	<div class="col-lg-5" style="text-align: right; padding-top: 4px;">
											<button class="btn btn-round" type="button" style="padding: 4px 8px 4px 8px; background-color: #ec407a;">
								                <i class="now-ui-icons ui-2_favourite-28" style="font-size: 0.8em; font-weight: 600;"></i> 203								            </button>
											<button class="btn btn-round" type="button" style="padding: 4px 8px 4px 8px; background-color: #2CA8FF;">
								                <i class="now-ui-icons ui-2_chat-round" style="font-size: 0.8em; font-weight: 600;"></i> 15								            </button>
										</div>
		                              </div>								  						             
              		                </p>
		                        </div>
		                      </div>
						  </div> --%>
						  
						  

						</div>	
						
						<div class="row">
							<div class="col-12 text-center" id="btn-wrap">
								<button class="btn btn-primary btn-round" id="reviewmore" type="button">더 보기</button>
							</div>				
						</div>	        

			        </div>
		          </div>
		        </div>
		      </div>  
	                  
            
          </div>
        </div>
      </div>
   <!-- main 태크 끝 -->

    <%@ include file="/WEB-INF/views/include/modal.jsp" %>
    <%@ include file="/WEB-INF/views/include/footer.jsp" %>
  </div>
  <%@ include file="/WEB-INF/views/include/coreJsFile.jsp" %>
</body>

</html>