<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp" %>
<script src="resources/jquery-3.3.1.min.js"></script>


<!-- <script>

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
	   listwriter += '<tr><th>책번호</th><th>책제목</th><th>id</th><th>날짜</th><th>리뷰제목</th><th>좋아요</th><th>스크랩</th>'
	   $.each(resp, function(index, item) {
	      listwriter += '<tr>';
	      listwriter += '<td>' + item.rev_num + '</td><td><a href="reviewDetail?rev_num='+item.rev_num+'">' + item.book_title + '</a></td><td>' + item.id + '</td><td>' + item.regdate + '</td><td>' + item.rev_title + '</td><td>' + item.rev_like + '</td><td>'+item.rev_scrap+'</td>';
		  listwriter += '</tr>';
	   });
	   $('#book').html(listwriter);
	   $('.btn-del').on('click', bookdelete);
	   $('.btn-mod').on('click', bookupdate);
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

</script> -->

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
						
						  <div class="item" OnClick="location.href ='reviewDetailTest'" style="cursor:pointer;">

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

						  </div>
						  
						  <div class="item">

							 <div class="carousel-content text-carousel-st2">
		                        <div class="in-div-text-carousel-st2">
		                        	<p class="main-review-title">영화보다 재미있는 트와일라잇 책</p>
		                            <p class="main-review-content2">
										영화 트와일라잇 너무 지루했어...ㅠㅠ나만 그런가...시리즈가 있는 영화들은 항상 1편이 지루하고 재미가 없다.난 그냥 책으로 만족하련다. 
									</p>
		                            <!-- 베스트 리뷰 태크 부분 시작 -->
		                            <p class="main-review-tag">
		                            	<span class="badge badge-success">SF</span>
		                            	<span class="badge badge-success">환타지</span>
		                            	<span class="badge badge-success">뱀파이어</span>
		                            	<span class="badge badge-success">사랑</span>
		                            	<span class="badge badge-success">늑대인간</span>
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

						  </div>
						  <div class="item">

							 <div class="carousel-content text-carousel-st2">
		                        <div class="in-div-text-carousel-st2">
		                        	<p class="main-review-title">일주일은 당신의 인생을 바꾸기에 충분한 시간이다.</p>
		                            <p class="main-review-content2">
										변화를 기피하는 건 인간의 본성이다. 우리는 변화를 힘들고 고통스러운 일이라고 생각하기 때문에 본능적으로 변화를 멀리한다. 《헬위크》는 하루하루를 똑같이 살아가며 스스로에게 실망한 사람들에게 내려진 최후의 처방전이자 특효약이다. 헬위크를 통과하며 우리는 기억에 남을 만한 도전, 새로운 것을 배울 기회, 가슴 벅차게 떠올릴 경험, 삶의 지침으로 삼을 교훈을 얻게 될 것이다. 
									</p>
		                            <!-- 베스트 리뷰 태크 부분 시작 -->
		                            <p class="main-review-tag">
		                            	<span class="badge badge-success">자기계발</span>
		                            	<span class="badge badge-success">성공</span>
		                            	<span class="badge badge-success">시간관리</span>
		                            	<span class="badge badge-success">일주일</span>
		                            	<span class="badge badge-success">핵빡쎄</span>
		                            </p>
		                            <!-- 베스트 리뷰 태크 부분 끝 -->

		                            <!-- 베스트 리뷰  태크, user name, hitcount 있는부분 시작-->
		                            <p class="main-review-tag">	                            
		                              <div class="row">
		                              	<div class="col-lg-7" style="text-align: left;">
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

						  </div>
						  <div class="item">

							 <div class="carousel-content text-carousel-st2">
		                        <div class="in-div-text-carousel-st2">
		                        	<p class="main-review-title">
		                        		따뜻한 커피와 잘 어울리는 책 [나도 아직 나를 모른다]
									</p>
		                            <p class="main-review-content2">
										첫 페이지를 넘기며 눈에 먼저 들어오던 문구
										"당신의 과거는 당신의 미래가 아닙니다"
										낮은 자존감, 완벽주의, 죄책감, 우울감 때문에
										자꾸만 스스로에게 무례해지는 당신에게.
										어쩌면 그 생각이 틀렸을지 모른다는 이야기를 해주는 책.
										어쩌면 나는, 어쩌면 이 글을 읽는 사람들은 그런사람이 아니란걸 계속해서 얘기해주고 싶었을지도 모르겠어요.
									</p>
		                            <!-- 베스트 리뷰 태크 부분 시작 -->
		                            <p class="main-review-tag">
		                            	<span class="badge badge-success">사람</span>
		                            	<span class="badge badge-success">임상심리학자</span>
		                            	<span class="badge badge-success">완벽주의</span>
		                            	<span class="badge badge-success">죄책감</span>
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

						  </div>
						  <div class="item">
							 <div class="carousel-content text-carousel-st2">
		                        <div class="in-div-text-carousel-st2">
		                        	<p class="main-review-title">
		                        		더 이상 아무것도 할 수 없을 것 같았던 때 조금씩 시도한 아주 작은 일들이 삶을 바꿨다!
									</p>
		                            <p class="main-review-content2">
										단계적이고 체계적인 자기계발 방법을 찾는 사람들을 위한 『아주 작은 습관의 힘』. 고교 시절 촉망받는 야구선수였던 저자는 연습 중 동료의 야구 배트에 얼굴을 정통으로 강타당하는 큰 사고를 당했고, 걸을 수조차 없었던 저자는 절망에 빠지는 대신 지금 당장 할 수 있는 아주 작은 일이라도 찾아 그것을 반복하자고 마음먹었다. 그 후 매일 걷기 연습을 해서 6개월 만에 운동을 할 수 있게 되었고, 6년 후에는 대학 최고 남자 선수가 되었다. 
									</p>
		                            <!-- 베스트 리뷰 태크 부분 시작 -->
		                            <p class="main-review-tag">
		                            	<span class="badge badge-success">습관</span>
		                            	<span class="badge badge-success">삶</span>
		                            	<span class="badge badge-success">인생변화</span>
		                            	<span class="badge badge-success">인지과학</span>
		                            	<span class="badge badge-success">행동과학</span>
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

						  </div>
						  <div class="item">


							 <div class="carousel-content text-carousel-st2">
		                        <div class="in-div-text-carousel-st2">
		                        	<p class="main-review-title">
		                        		우리가 우리 몸에 대해 꼭 알아야 할 사실들을 명확하게 보여 주는 새로운 인체 가이드북
									</p>
		                            <p class="main-review-content2">
										인간의 기도 끝에서 끝까지의 길이는 2400킬로미터에 달한다. 미세먼지로 전 국민이 고통을 받고 있는 이 시대, 우리가 들이마신 공기는 지금 이 순간 어디를 지나는 것일까? ㈜사이언스북스에서 펴낸 『인체 원리: 인포그래픽 인체 팩트 가이드(How the Body Works: The Facts Visually Explained)』는 우리가 우리 몸에 대해 꼭 알아야 할 사실들을 명확하게 보여 주는 새로운 인체 가이드북이다. 이 책에 담긴 명료한 인포그래픽은 우리 몸속 세포에서 시작해 마음과 정신까지, 말 그대로 인체의 모든 것을 알아보는 여정으로 독자를 안내하고 있다. 전 세계 9개국에서 번역·출간된 『인체 원리』는 교양 과학·의학 분야 베스트셀러인 『인체 완전판』을 비롯한 대백과사전 시리즈로 국내 독자들에게도 친숙한 영국의 출판 명가 DK(Dorling Kindersley)와 ㈜사이언스북스가 새롭게 선보이는 작지만 강력한 인체 안내서이다.  
									</p>
		                            <!-- 베스트 리뷰 태크 부분 시작 -->
		                            <p class="main-review-tag">
		                            	<span class="badge badge-success">과학</span>
		                            	<span class="badge badge-success">인체</span>
		                            	<span class="badge badge-success">건강</span>
		                            	<span class="badge badge-success">몸</span>
		                            	<span class="badge badge-success">음식</span>
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
						  </div>
						  <div class="item">
							 <div class="carousel-content text-carousel-st2">
		                        <div class="in-div-text-carousel-st2">
		                        	<p class="main-review-title">
		                        		지금 이 아이의 가슴에 칼을 꽂는다면, 그래서 아이의 심장이 멈춘다면, 딸을 죽인 사람은 저입니까?
									</p>
		                            <p class="main-review-content2">
										‘인간이란 무엇이며 삶과 죽음, 사랑의 정의는 무엇인가’라는 난제에 도전한 히가시노 게이고의 휴먼 미스터리 『인어가 잠든 집』. 히가시노 게이고의 작가 데뷔 30주년을 기념해 2015년에 발표된 이 작품은 어느 날 갑자기 사랑하는 딸에게 닥친 뇌사라는 비극에 직면한 부부가 겪는 가혹한 운명과 불가피한 선택, 그리고 충격과 감동의 결말을 그리고 있다.  
									</p>
		                            <!-- 베스트 리뷰 태크 부분 시작 -->
		                            <p class="main-review-tag">
		                            	<span class="badge badge-success">일본소설</span>
		                            	<span class="badge badge-success">영화원작</span>
		                            	<span class="badge badge-success">미스테리</span>
		                            	<span class="badge badge-success">감동</span>
		                            	<span class="badge badge-success">인어</span>
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
						  </div>
						  <div class="item">

							 <div class="carousel-content text-carousel-st2">
		                        <div class="in-div-text-carousel-st2">
		                        	<p class="main-review-title">
		                        		에어프라이어로 할 수 있는 요리의 A to Z!
									</p>
		                            <p class="main-review-content2">
										에어프라이어 조리법을 전문적으로 다룬 『에어프라이어 만능 레시피북』. 인기 요리 블로거이자 요리 분야스테디셀러 저자인 겨울딸기가 사람들이 인터넷 상에서 가장 많이 검색하는 고구마, 치킨, 삼겹살, 곱창 등의 재료 조리법을 비롯해 에어프라이어로 만들 수 있는 다양한 요리 레시피를 육류, 채소, 해산물, 냉동제품 등의 재료 별로 나눠 400여 컷의 사진과 함께 보기 쉽게 정리한 레시피북이다.   
									</p>
		                            <!-- 베스트 리뷰 태크 부분 시작 -->
		                            <p class="main-review-tag">
		                            	<span class="badge badge-success">집쿡</span>
		                            	<span class="badge badge-success">조리법</span>
		                            	<span class="badge badge-success">에어레시피</span>
		                            	<span class="badge badge-success">튀김</span>
		                            	<span class="badge badge-success">요리</span>
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
						  </div>
						  <div class="item">


							 <div class="carousel-content text-carousel-st2">
		                        <div class="in-div-text-carousel-st2">
		                        	<p class="main-review-title">
		                        		에어프라이어로 할 수 있는 요리의 A to Z!
									</p>
		                            <p class="main-review-content2">
										에어프라이어 조리법을 전문적으로 다룬 『에어프라이어 만능 레시피북』. 인기 요리 블로거이자 요리 분야스테디셀러 저자인 겨울딸기가 사람들이 인터넷 상에서 가장 많이 검색하는 고구마, 치킨, 삼겹살, 곱창 등의 재료 조리법을 비롯해 에어프라이어로 만들 수 있는 다양한 요리 레시피를 육류, 채소, 해산물, 냉동제품 등의 재료 별로 나눠 400여 컷의 사진과 함께 보기 쉽게 정리한 레시피북이다.   
									</p>
		                            <!-- 베스트 리뷰 태크 부분 시작 -->
		                            <p class="main-review-tag">
		                            	<span class="badge badge-success">집쿡</span>
		                            	<span class="badge badge-success">조리법</span>
		                            	<span class="badge badge-success">에어레시피</span>
		                            	<span class="badge badge-success">튀김</span>
		                            	<span class="badge badge-success">요리</span>
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
						  </div>
						  <div class="item">

							 <div class="carousel-content text-carousel-st2">
		                        <div class="in-div-text-carousel-st2">
		                        	<p class="main-review-title">
		                        		간질간질한 불안감으로 양념된 달콤한 러브 스토리!
									</p>
		                            <p class="main-review-content2">
										일생일대의 거짓말이 불러온 기적 같은 사랑을 그린 소설 『양지의 그녀』. 2013년 개봉될 예정인 마츠모토 준과 우에노 주리 주연의 영화 《양지의 그녀》의 원작소설이다. 누군가를 만나 사랑에 빠지는 순간은 물론, 그 애절한 감성까지 담아냈다. 오랫동안 떨어져 있던 동창과의 만남이라는 다소 흔한 설정이지만, 현재와 과거를 넘나들며 이야기가 그려지는 동안 의문은 점점 깊어진다. 러브 스토리 사이사이에 벌어지는 사건들, 그에 얽힌 비밀이 서서히 정체를 드러낸다.   
									</p>
		                            <!-- 베스트 리뷰 태크 부분 시작 -->
		                            <p class="main-review-tag">
		                            	<span class="badge badge-success">소설</span>
		                            	<span class="badge badge-success">일본소설</span>
		                            	<span class="badge badge-success">영화</span>
		                            	<span class="badge badge-success">러브스토리</span>
		                            	<span class="badge badge-success">마츠모토준</span>
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
						  </div>
						  <div class="item">

							 <div class="carousel-content text-carousel-st2">
		                        <div class="in-div-text-carousel-st2">
		                        	<p class="main-review-title">
		                        		NASA 출신 과학 전문 작가가 알려주는 SF의 어제, 오늘, 내일!
									</p>
		                            <p class="main-review-content2">
										애완 공룡이 비둘기를 쫓아다니는 구경을 하는 게 가능할까? 아이언맨처럼 하늘을 날려면 얼마나 기다려야 할까? 사람과 꼭 닮은 안드로이드 친구와 영화관을 함께 갈 날은? 설마…… 22세기까지 기다려야 하는 걸까? 
   
									</p>
		                            <!-- 베스트 리뷰 태크 부분 시작 -->
		                            <p class="main-review-tag">
		                            	<span class="badge badge-success">SF</span>
		                            	<span class="badge badge-success">예언</span>
		                            	<span class="badge badge-success">미래</span>
		                            	<span class="badge badge-success">영화</span>
		                            	<span class="badge badge-success">NASA</span>
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
						  </div>
						   <div class="item">
							 <div class="carousel-content text-carousel-st2">
		                        <div class="in-div-text-carousel-st2">
		                        	<p class="main-review-title">
		                        		인생의 3분의 1을 완벽하게 활용하는 법
									</p>
		                            <p class="main-review-content2">
										세계적인 신경 과학자이자 수면 전문가인 매슈 워커의 첫 번째 저서인 『우리는 왜 잠을 자야 할까』. 수면은 우리의 삶, 건강, 수명에 가장 중요하면서도 가장 덜 이해된 측면에 속한다. 아주 최근까지도 과학은 우리가 왜 잠을 자며, 수면이 우리의 몸과 뇌에 어떤 도움이 되는지, 잠을 못 자면 건강에 왜 극심한 문제가 생기는지 같은 질문들에 전혀 답할 수 없었다. 식욕, 갈증, 성욕 등 다른 기본 욕구들에 비해, 수면이 왜 있는지는 오랜 세월 도무지 갈피를 잡을 수가 없었다. 
   
									</p>
		                            <!-- 베스트 리뷰 태크 부분 시작 -->
		                            <p class="main-review-tag">
		                            	<span class="badge badge-success">신경과학</span>
		                            	<span class="badge badge-success">수면</span>
		                            	<span class="badge badge-success">뇌</span>
		                            	<span class="badge badge-success">수명</span>
		                            	<span class="badge badge-success">잠자자</span>
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
						  </div>

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