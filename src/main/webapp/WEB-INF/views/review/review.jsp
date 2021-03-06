<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp"%>
<script src="resources/jquery-3.3.1.min.js"></script>


<script>

	$(document).ready(function() {
		$("#test").on("click", orderbydregdate);
		$("#test1").on("click", orderbylike);
		
		
			init();
			/*검색버튼 클릭시 모달창 검색 인풋박스에 포커스 주는 코드 시작*/
			$("#modalClick").click(function() {
				$("#myModal").modal("show");
			});
			$("#myModal").on('shown.bs.modal', function() {
				$("#reviewSearch").focus();
				$("#reviewSearch").select();
			});
			/*검색버튼 클릭시 모달창 검색 인풋박스에 포커스 주는 코드 끝*/
			
		
	});
	function orderbylike(){
		$.ajax({
			url : 'selectbylike',
			method : 'GET',
			success : function(resp) {
				output(resp);
			}

		})
	}

	function orderbydregdate(){
		$.ajax({
			url : 'selectbydate',
			method : 'GET',
			success : function(resp) {
				output(resp);
			}

		})
	}
	function init() {
		$.ajax({
			url : 'review',
			method : 'POST',
			success : function(resp) {
				output(resp);
			}

		})
	}
	
	function output(resp) {
		var listwriter = '';
		var book_title = '';
		var reviewlink = "'reviewDetail?rev_num=";
		$.each(
						resp,
						function(index, tt) {
							var img = '';
/* 							console.log(tt.book_title);
							$.ajax({
								url : 'request_review_image',
								method : 'GET',
								data : 'book_title=' + tt.book_title,
								success : function(resp){
									console.log(resp);
								}
							}) */
							
							listwriter += '<div class="item">';
							listwriter += '<div class="carousel-content text-carousel-st2">';
							listwriter += '<div class="in-div-text-carousel-st2">';
							listwriter += '<p class="main-review-title">'
									+ tt.rev_title + '</p>';
							listwriter += '<p class="main-review-title2">';
							listwriter += '<a href="#" data-toggle="tooltip" title="' + tt.book_title + '">';

							//<a href="boardDetail?boardnum=${board.boardnum}">${board.title}</a>
							listwriter += tt.book_title;
							listwriter += '</a>';
							listwriter += '</p>';
							listwriter += '<a href="reviewDetail?rev_num='
									+ tt.rev_num + '">';
							listwriter += "<p class='main-review-content4'>";

		
							
							listwriter += tt.rev_content;
							listwriter += '</p>';
							listwriter += '</a>';
/* 							listwriter += '<p class="main-review-tag">';
							listwriter += '<span class="badge badge-success">SF</span>';
							listwriter += '<span class="badge badge-success">환타지</span>';
							listwriter += '<span class="badge badge-success">호구와트</span>';
							listwriter += '<span class="badge badge-success">마법</span>';
							listwriter += '<span class="badge badge-success">해리포터</span>';
							listwriter += '</p>'; */
							
							listwriter += '<p class="main-review-tag" style="border-top: 1px dashed #ddd;">';
							listwriter += '</p>';
							listwriter += '<p class="main-review-tag">';
							listwriter += '<div class="row">';
							listwriter += '<div class="col-7" style="text-align: left;padding-top: 4px;">';
							listwriter += '<button class="btn btn-link btn-info uname-st">'
									+ tt.id + '</button>';
							listwriter += '</div>';
							listwriter += '<div class="col-5" style="text-align: right; padding-top: 4px;">';
							listwriter += '<button class="btn btn-round revlike" type="button" style="padding: 4px 8px 4px 8px; background-color: #ec407a; color: #fff;" data-value="';
							listwriter += tt.rev_num;
          					listwriter += '">';
          					listwriter += "♡ " + tt.rev_like;
							listwriter += '</button>';
							listwriter += '</div>';
							listwriter += '</div>';
							listwriter += '</p>';
							listwriter += '</div>';
							listwriter += '</div>';
							listwriter += '</div>';
						});

		$('#itemwrap').html(listwriter);

		/*리뷰 뿌려주는 부분 첫 10개 뿌려주기 시작*/
		load('#itemwrap', '10');
		$("#btn-wrap button").on("click", function() {
			load('#itemwrap', '10', '#btn-wrap');
		})
		/*리뷰 뿌려주는 부분 첫 10개 뿌려주기 끝*/
		
		$('.btn.btn-round.revlike').on('click', revlike);

	}

	function bookdelete() {
		var rev_num = $(this).attr("data-value");

		$.ajax({
			url : 'delete',
			method : 'POST',
			data : {
				rev_num : rev_num
			},
			success : init()
		})

	}

	   function revlike() {
		      var rev_num = $(this).attr("data-value");
				 console.log(rev_num)
		      	 $.ajax({
		         method : 'POST',
		         url : 'addLike',
		         data : {
		            rev_num : rev_num
		         },
		         success : function(data) {
		        	 console.log(data)
		            $('.btn.btn-round.revlike[data-value=' + rev_num + ']').html("♡ " + data);
		         }
		      })
		      /*Python 서버로 보낼 favor list 받기*/
		      $.ajax({
		    	  
		      })
		      /*Python 서버로 연결하여 group number 받기 */
		      $.ajax({
		    	 
		      })
		      /*해당 group number로 DB에서 book_log 기록하기 */
			  $.ajax({

			  }) 
		   }
	

	/*리뷰 10개씩 뿌려주는 코드 시작 (더보기 버튼)*/
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

	/* 리뷰 제목부분 툴팁 그림 나오게 하는 소스 시작*/
	$(function() {
		$('[data-toggle="tooltip"]').tooltip({
			html: true,
			open: function(){console.log("tooltip")}
/* 			$.ajax({
				url : 'request_review_image',
				method : 'GET',
				data : 'book_title='
				success : function(resp){
					console.log(resp);
				}
			}); */
			
		});
	});
	/* 리뷰 제목부분 툴팁 그림 나오게 하는 소스 끝*/
	
	/* 검색 요청 */
	function _review_search() {
		console.log("review search");
		if(event.keyCode == 13) {
			console.log("search triggered");
			var input = 'input=' + $('#review_search').val();
			console.log(input);
			$.ajax({
				method : 'get',
				url : 'reviewSearch',
				data : input,
				success : function(resp) {
					console.log(resp);
					output(resp);
					$("#myModal").modal("hide");
				}
			})
		}
	}
</script>


<body class="index-page sidebar-collapse">


	<!-- Navbar include -->
	<%@ include file="/WEB-INF/views/include/navbar.jsp"%>

	<div class="wrapper">
		<div class="section section-signup"	style="min-height: 600px; background-color: #eee;">
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
											<i class="now-ui-icons tech_watch-time"></i> <span>조회</span>
										</a>
										<ul class="dropdown-menu latest-drop-ui" role="menu"
											aria-labelledby="dropdownMenu1">
											<li role="presentation"><a role="menuitem" tabindex="-1"
												href="#" id="test"> <i class="now-ui-icons tech_watch-time"></i>
													날짜순
											</a></li>
											<li role="presentation"><a role="menuitem" tabindex="-1"
												href="#" id="test1"> <i class="now-ui-icons ui-2_favourite-28"></i>
													인기순
											</a></li>
											<li role="presentation"><a role="menuitem" tabindex="-1"
												href="#"> <i class="now-ui-icons ui-2_chat-round"></i>
													댓글순
											</a></li>
										</ul>
									</div>

									<div class="dropdown m-30" style="display: inline;">
										<a id="dropdownMenu1" class="latest-st" data-toggle="modal"
											data-target="#myModal" id="modalClick" href="#"> <i
											class="now-ui-icons ui-1_zoom-bold text-dark"></i> <span>검색</span>
										</a>
									</div>
  								<c:if test="${not empty sessionScope.loginId}"> 
									<div class="dropdown m-30" style="display: inline;">
										<a class="latest-st" href="reviewWrite"> <i
											class="now-ui-icons text_align-left"></i> <span>리뷰작성</span>
										</a>
									</div>
									  </c:if>
								</div>
							
								<div class="masonry" id="itemwrap"></div>
									
								<div class="row">
									<div class="col-12 text-center" id="btn-wrap">
										<button class="btn btn-primary btn-round" id="reviewmore"
											type="button">더 보기</button>
									</div>
								</div>


							</div>
						
						</div>
					</div>
				</div>


			</div>
		</div>
	</div>
	<form id="reviewDetailForm" action="reviewDetail" method="get">
		<input id="rev_num" type="hidden">
	</form>
	<!-- main 태크 끝 -->

	<%@ include file="/WEB-INF/views/include/modal.jsp"%>
	<%@ include file="/WEB-INF/views/include/footer.jsp"%>
	</div>
	<%@ include file="/WEB-INF/views/include/coreJsFile.jsp"%>
</body>

</html>