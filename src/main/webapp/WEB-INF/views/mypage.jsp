<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp"%>
<script src="resources/jquery-3.3.1.min.js"></script>

<script>

$(window).ready(function(){
	counter();
	submit_profile_content();
	init();
	$.ajax({
		url : 'profile',
		method : 'POST',
		success : function(resp) {
			list(resp);
		}
	})
	$('#i_scroll_wrap').scroll(function(){
    
	
     var scrollH = $('#i_scroll_wrap').scrollTop() + $('#i_scroll_wrap').height();
     var documentH = $('#i_scroll').height();
      /* alert(scrollH); */
     var temp = '';
     if (scrollH == documentH){
       for (var i=0; i<10; i++){
          $("#i_scroll").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>");
       };
     };  
   });
   
   $("#mem_modify").on("click", function(){
	   var id = '${sessionScope.m.id}';
		$.ajax({
		      type : "GET"
		      ,url : "getinfo"
		      ,data : {id: id}
		      ,success : function(resp){
				console.log(resp.display_name);
			   $( '#display_name' ).replaceWith( '<input type="text" id="display_name" name="display_name" value="'+resp.display_name+'">');
			   $( '#phone' ).replaceWith( '<input type="text" id="phone" name="phone" value="'+resp.phone+'">');
			   $( '#address' ).replaceWith( '<input type="textarea" id="address" name="address" value="'+resp.address+'">');
			   $( '#mem_modify' ).replaceWith( '<button class="btn btn-info" id="modify"> 정보 수정 완료</button>');
			   $('#modify').on('click', updateinfo);
		      }
		});
        
   });
   $("#reedit").on("click", function(){
	      $( '#newedit' ).replaceWith( '<textarea class="form-control" maxlength="300" rows="5" id="profileContent" style="padding: 20px; background-color: #fff !important; color: black !important;">${sessionScope.m.contents}</textarea>');
	      $( '#reedit' ).replaceWith( ' <button class="btn btn-info" id="resend">완료 </button>');    
	         $('#resend').on('click', editnew);   
	   
	   });
	   
	   function editnew(){
	      var content= $('#profileContent').val();
	      alert(content);
	         $.ajax({
	            url : 'submit_content',
	            method : 'POST',
	            data: 'content=' + content,
	            success : function(resp) {
	               $( '#profileContent' ).replaceWith( '<div id="newedit"class="col-12 text-left" style="background-color: #fff;line-height: 18pt; padding: 20px;">'+content+'</div>');
	              $( '#resend' ).replaceWith('<button class="btn btn-info" id="reedit">자기소개 등록 </button>'); 
	              location.reload();
	            }
	         })
	      
	   }

   $("#add_face").on("click", function(){
        var temp = '';
        temp += '<p><input class="sns-input" type="text" id="faddr" placeholder="Facebook 주소를 입력해주세요." /></p>'
        $(".sns-addr").html(temp);
        $("#add_face").val('Facebook 등록');
        $("#add_insta").css('display', 'none');
        $("#add_twit").css('display', 'none');
   });   
   
   $("#add_insta").on("click", function(){
        var temp = '';
        temp += '<p><input class="sns-input" type="text" id="iaddr" placeholder="Instagram 주소를 입력해주세요." /></p>'
        $(".sns-addr").html(temp);
        $("#add_insta").val('Instagram 등록');
        $("#add_face").css('display', 'none');
        $("#add_twit").css('display', 'none');
   });   
   
   $("#add_twit").on("click", function(){
        var temp = '';
        temp += '<p><input class="sns-input" type="text" id="taddr" placeholder="Twitter 주소를 입력해주세요." /></p>'
        $(".sns-addr").html(temp);
        $("#add_twit").val('Twitter 등록');
        $("#add_face").css('display', 'none');
        $("#add_insta").css('display', 'none');
   });
   
	
	
   
});

/* Profile summary counter */
function counter() {
    $('#profileContent').keyup(function (e){
        var content = $(this).val();
        $(this).height(((content.split('\n').length + 1) * 1.5) + 'em');
        $('#counter').html(content.length + '/300');
    });
    $('#profileContent').keyup();
}

function list(resp) {
	var listwriter = '';
	$.each(
					resp,
					function(index, tt) {
						listwriter +='	<div class="col-3" style="padding: 6px;">';
						listwriter +='      <img src="resources/assets/img/kwon.jpg" alt="Circle Image" class="rounded-circle">';
						listwriter +='    </div>';
						listwriter +='     <div class="col-9 text-left" style="padding: 10px 6px; font-size:11pt;">';
						listwriter +='         <p style="font-size: 11pt; font-weight: 500; margin: 0;">'+tt.pushid+'</p>';
						listwriter +='        <a href="#" style="text-decoration: none;">';
						listwriter +='         <i class="now-ui-icons shopping_shop" style="font-weight: 600; font-size: 9pt; color: #56B9FF;"></i>';
						listwriter +='        <span style="font-size: 9pt; color: #56B9FF; font-weight: 600;">'+tt.regdate+'</span>';
						listwriter +='         </a>';
						listwriter +='        </div>';
		
					});

	$('#likefriends').html(listwriter);
}

function submit_profile_content() {
	$('#profile_content').click(function(){
		var content = $('#profileContent').val();
		$.ajax({
			url : 'submit_content',
			method : 'POST',
			data: 'content=' + content,
			success : function() {
				location.reload(true);
			}
		})
	})
}

function updateinfo(){
	console.log("updateInfo")
   var id = '${sessionScope.m.id}';
   var display_name = $('#display_name').val();
   var phone = $('#phone').val();
   var address = $('#address').val();
   var totalInfo = {
         "display_name" : display_name
         ,"phone" : phone
         ,"address" : address
         ,"id" : id
   };
   
   $.ajax({
      type : "POST"
      ,url : "updateinfo"
      ,data : totalInfo
      ,success : location.reload(true)
   }); 
   
}

function updatecheck(resp){
	
	init();
}

function init(){
	var id = '${sessionScope.m.id}';
	 
	$.ajax({
	      type : "GET"
	      ,url : "getinfo"
	      ,data : {id: id}
	      ,success : function(resp){
			console.log(resp.display_name);
		   $( '#display_name' ).replaceWith('<p style="font-size: 12pt; font-weight: 500;" name="display_name" id="display_name">'+resp.display_name+'</p>');
		   $( '#phone' ).replaceWith('<a id=phone>'+resp.phone+'</a>');
		   $( '#address' ).replaceWith('<a id=address>'+resp.address+'</a>');
		   $( '#modify' ).replaceWith( '<button class="btn btn-info" id="mem_modify">회원 정보 수정</button>');
		   $( '#point' ).replaceWith('<a id="point">'+ resp.point +'</a>')
	      }
	});
	
}
 
</script>
<style>

.tab-a-st{
border-radius: none;
box-shadow: none !important;
background-color: #eee;
color: #ddd;
border: 1px solid red;
}
@media screen and (min-width: 991px) and (max-width: 1920px) {
  .figure-margin{
    margin: 10px 15px !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 990px) {
  .figure-margin{
    margin: 10px 30px !important;
  }
}
@media screen and (min-width: 576px) and (max-width: 768px) {
  .figure-margin{
    margin: 10px 0px !important;
  }   
}
@media screen and (min-width: 200px) and (max-width: 575px) {
  .figure-margin{
    margin: 40px 0px !important;
  }
}
#i_scroll_wrap{
   overflow: auto;
   height: 390px; 
   
}

.sns-icon{
   display: none;
}
.sns-btn{
   font-size: 9pt;
   padding: 6px;
   display: inline;
}
.sns-form{
   /* display: inline-block; */
   width: 100%
}
.sns-input{
   font-size: 10pt;
   width: 100%;
   padding: 0px 4px;
}
#counter {
  background:rgb(35, 149, 255);
  border-radius: 0.5em;
  padding: 0 .5em 0 .5em;
  font-size: 0.75em;
  color: #FFF;
}
</style>

<body class="index-page sidebar-collapse">
   <!-- Navbar include -->
   <%@ include file="/WEB-INF/views/include/navbar.jsp"%>
   <div class="wrapper">
      <!-- main 태크 시작 -->
      <div class="main">
         <div class="section section-signup"   style="background-color: #eee; padding-top: 15vh !important">
            <div class="container">
            
              <div class="title text-center">
                 <h3 class="h3fontblack">My Page</h3>
               </div>   
                <div class="row" style="margin: 0; padding: 10px; background-color: #fff;">
                  <div class="col-md-6">
                      <div class="row">
                          <div class="col-4" style="padding: 10px;">
                            <img src='resources/assets/img/saram.jpg' alt='Circle Image' class='rounded-circle'>
                        </div>
                          <div class="col-8">
                            <p style="font-size: 30pt;" id="userid">${sessionScope.m.id}</p>
							<input type="hidden" name="id" value="${sessionScope.m.id}">                            
                  
                 
                            <p style="font-size: 12pt; font-weight: 500;" name="display_name" id="display_name"></p>
                            <p></p>
                          <button class="btn btn-info" id="mem_modify">
                        회원 정보 수정
                          </button>

                        </div>
                     </div>
                  </div>

                  <div class="col-md-6" style="padding: 10px;">
                     <div class="row" id="edit">
                        <div class="col-4 p-10">
                        휴대폰 번호
                        </div>
                        <div class="col-8 p-10">
                        <a id=phone></a>
                        </div>
                        <div class="col-4 p-10">
                        주소
                        </div>
                        <div class="col-8 p-10">
                        <a id="address"></a>
                        </div>
                        <div class="col-4 p-10">
                        포인트
                        </div>
                        <div class="col-8 p-10">
                        <a id="point"></a>
                        </div>
                     </div>
                     <form id="face_form" action="post" class="sns-form">
                        <div class="row text-center">
                             
                             <div class="col-12 text-center p-10 sns-icon" style="border-top: 1px dashed #ddd;">
                              
                               <a class="nav-link" rel="tooltip" title="Follow me on Twitter" data-placement="bottom" href="#" style="display: inline;">
                                <i class="fab fa-twitter" style="color: #56B9FF;"></i>
   
                              </a>
                              <a class="nav-link" rel="tooltip" title="Like me on Facebook" data-placement="bottom" href="#" style="display: inline;">
                                <i class="fab fa-facebook-square" style="color: #56B9FF;"></i>
   
                              </a>
                              <a class="nav-link" rel="tooltip" title="Follow me on Instagram" data-placement="bottom" href="#" style="display: inline;">
                                <i class="fab fa-instagram" style="color: #56B9FF;"></i>
                              </a>                  
                           </div>
                        
                        
                
                        
                        
                             <div class="col-12 text-center p-10">                           
                            
                            <input type="button" class="btn btn-info sns-btn" id="add_face" value="Facebook 추가">
   
                            <input type="button" class="btn btn-info sns-btn" id="add_insta" value="Instagram 추가">
                             
                            <input type="button" class="btn btn-info sns-btn" id="add_twit" value="Twitter 추가">                  
                           </div>
                           
                           <div class="col-12 text-center p-10 sns-addr" style="padding: 0px; margin:0;"></div>

                        </div>
                     </form>                 
                  </div>
                </div>
                  

            
            </div>
         </div>
         <!-- 윗 div 끝 -->
         
         
         
      
         <!-- 아래  div 시작 -->
         <div class="section section-tabs">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <!-- Tabs with Background on Card -->
                    <div class="card" style="box-shadow: none; background-color: #eee;">
                      <div class="card-header">
                        <ul class="nav nav-tabs nav-tabs-info justify-content-left" role="tablist" style="background-color: #eee; box-shadow: none;">
                          <li class="nav-item" style="box-shadow: none;">
                            <a class="nav-link tab-a-st active" data-toggle="tab" href="#home1" role="tab">Profile</a>
                          </li>
                          
                          <li class="nav-item">
                            <a class="nav-link tab-a-st" data-toggle="tab" href="#profile1" role="tab">My Books</a>
                          </li>
                        </ul>
                      </div>
                      <div class="card-body" style="padding: 0px; margin-top: 20px;">
                      
                   
                      
                        <!-- Tab panes -->
                        <div class="tab-content text-center">
                        
                          <div class="tab-pane active" id="home1" role="tabpanel">
                            <div class="row" style="margin:0; padding: 0px;">
                               

                               <div class="col-lg-3 col-sm-12" style="padding: 0px;">
                                  <div class="col-12 text-left" style="padding: 0px;">
                                     <h5 style="padding: 6px;">Friends Profiles</h5><!-- or recent visitor -->
                                  </div>
                                  <div class="row" id="likefriends" style="margin:0; padding: 0px;">
                                  </div>
                               </div>
                               
                               <div class="col-lg-9 col-sm-12" style="padding: 0px;">
                                  <div class="row" style="margin:0; padding: 0px;">
                                     
                                     <div class="col-12">
                                        <div class="col-12 text-left" style="padding: 0px;">
                                        <h5 style="padding: 6px;">About Me</h5><!-- or recent visitor -->
                                        </div>
                                     </div>
                                     
                                    <c:if test="${sessionScope.m.contents != null}">
                                     <div id="newedit"class="col-12 text-left" style="background-color: #fff;line-height: 18pt; padding: 20px;">
          
                                        ${sessionScope.m.contents}
                                     </div>
                                     <button class="btn btn-info" id="reedit">
                                       자기소개 등록
                                       </button>
                                     </c:if>
                                     
                                     <c:if test="${sessionScope.m.contents == null}">
                                     <div class="col-12 text-left" style="background-color: #fff;line-height: 18pt; padding: 20px;">
                                        <div class="wrapper">
                                  <label for="profileContent">Profile summary</label>
                                   <textarea class="form-control" maxlength="300" rows="5" id="profileContent" style="background-color: #fff !important; color: black !important;"></textarea>
                                  <span id="counter">###</span>
                              </div>
                                        <button class="btn btn-info" id="profile_content">
                                       자기소개 등록
                                       </button>
                                     </div>
                                     </c:if>
                                     <div class="col-12 text-left" style="background-color: #fff; margin-top: 20px; padding: 20px;">
                                        <div class="col-12 text-left" style="padding: 0px;">
                                        <h5 style="padding: 6px;">My Tag</h5><!-- or recent visitor -->
                                        </div>
                                        
                                        
                                        <a href="#" class="btn btn-simple btn-round btn-sm">SF</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">환타지</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">영웅</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">사람</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">로맨스</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">무협</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">지구</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">UI</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">안드로이드</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">파이썬</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">자바</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">아이폰</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">스프링</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">HTML</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">CSS</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">PHP</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">UX</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">AI</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">Phothshop</a>
                                        <a href="#" class="btn btn-simple btn-round btn-sm">C#</a>
                                     </div>
                                     
                                  </div>
                                  

                               </div>
                            </div>
                          </div>
                          
                         
                          
                          
                          
                          
                          <div class="tab-pane" id="profile1" role="tabpanel">
                            <div class="row" style="margin:0; padding: 0px;">
                               

                               <!-- <div class="col-lg-3 col-sm-12" style="padding: 0px;">
                                  <div class="col-12 text-left" style="padding: 0px;">
                                     <h5 style="padding: 6px;">Friends Profiles</h5>or recent visitor
                                  </div>
                       
                       

                                  <div class="row" style="margin:0; padding: 0px;">
                                     
                                     <div class="col-3" style="padding: 6px;">
                                       <img src='resources/assets/img/julie.jpg' alt='Circle Image' class='rounded-circle'>
                                     </div>
                                     <div class="col-9 text-left" style="padding: 10px 6px; font-size:11pt;">
                                        <p style="font-size: 11pt; font-weight: 500; margin: 0;">Paul Jason</p>
                                        <a href="#" style="text-decoration: none;">
                                        <i class="now-ui-icons shopping_shop" style="font-weight: 600; font-size: 9pt; color: #56B9FF;"></i>
                                        <span style="font-size: 9pt; color: #56B9FF; font-weight: 600;">Visit Profile</span>
                                        </a>
                                     </div>
                                     
                                     <div class="col-3" style="padding: 6px;">
                                       <img src='resources/assets/img/julie.jpg' alt='Circle Image' class='rounded-circle'>
                                     </div>
                                     <div class="col-9 text-left" style="padding: 10px 6px; font-size:11pt;">
                                        <p style="font-size: 11pt; font-weight: 500; margin: 0;">Paul Jason</p>
                                        <a href="#" style="text-decoration: none;">
                                        <i class="now-ui-icons shopping_shop" style="font-weight: 600; font-size: 9pt; color: #56B9FF;"></i>
                                        <span style="font-size: 9pt; color: #56B9FF; font-weight: 600;">Visit Profile</span>
                                        </a>
                                     </div>
                                     
                                     <div class="col-3" style="padding: 6px;">
                                       <img src='resources/assets/img/julie.jpg' alt='Circle Image' class='rounded-circle'>
                                     </div>
                                     <div class="col-9 text-left" style="padding: 10px 6px; font-size:11pt;">
                                        <p style="font-size: 11pt; font-weight: 500; margin: 0;">Paul Jason</p>
                                        <a href="#" style="text-decoration: none;">
                                        <i class="now-ui-icons shopping_shop" style="font-weight: 600; font-size: 9pt; color: #56B9FF;"></i>
                                        <span style="font-size: 9pt; color: #56B9FF; font-weight: 600;">Visit Profile</span>
                                        </a>
                                     </div>
                                     
                                     <div class="col-3" style="padding: 6px;">
                                       <img src='resources/assets/img/julie.jpg' alt='Circle Image' class='rounded-circle'>
                                     </div>
                                     <div class="col-9 text-left" style="padding: 10px 6px; font-size:11pt;">
                                        <p style="font-size: 11pt; font-weight: 500; margin: 0;">Paul Jason</p>
                                        <a href="#" style="text-decoration: none;">
                                        <i class="now-ui-icons shopping_shop" style="font-weight: 600; font-size: 9pt; color: #56B9FF;"></i>
                                        <span style="font-size: 9pt; color: #56B9FF; font-weight: 600;">Visit Profile</span>
                                        </a>
                                     </div>
                                     
                                     <div class="col-3" style="padding: 6px;">
                                       <img src='resources/assets/img/julie.jpg' alt='Circle Image' class='rounded-circle'>
                                     </div>
                                     <div class="col-9 text-left" style="padding: 10px 6px; font-size:11pt;">
                                        <p style="font-size: 11pt; font-weight: 500; margin: 0;">Paul Jason</p>
                                        <a href="#" style="text-decoration: none;">
                                        <i class="now-ui-icons shopping_shop" style="font-weight: 600; font-size: 9pt; color: #56B9FF;"></i>
                                        <span style="font-size: 9pt; color: #56B9FF; font-weight: 600;">Visit Profile</span>
                                        </a>
                                     </div>
                                    
                                  </div>
                         
                               </div> -->
                               <div class="col-lg-12 col-sm-12" style="padding: 0px;">
                                  <div class="row" style="margin:0; padding: 0px;">
                                     
                                     <div class="col-12">
                                        <div class="col-12 text-center" style="padding: 0px;">
                                        <h5 style="padding: 6px;">My Books</h5><!-- or recent visitor -->
                                        </div>
                                     </div>
                                   
                                   <div class="col-12 i_scroll_wrap" id="i_scroll_wrap" style="background-color: #fff; padding: 30px;">
                                 
	                                   <div class="row i_scroll" id="i_scroll">
	                                   
	                                       <div class="col-lg-2 col-md-4 col-sm-12">
	                                          <figure class="snip1283 figure-margin">
	                                         <img src="resources/assets/img/book_img01.jpg" alt="book_image"/>
	                                         <figcaption>
	                                           <a href="#" class="read-more">책정보<br/>보러가기</a>
	                                         </figcaption>
	                                       </figure>
	                                       </div> 
	                                    
	                                       <div class="col-lg-2 col-md-4 col-sm-12">
	                                          <figure class="snip1283 figure-margin">
	                                         <img src="resources/assets/img/book_img02.jpg" alt="book_image" />
	                                         <figcaption>
	                                           <a href="#" class="read-more">책정보<br/>보러가기</a>
	                                         </figcaption>
	                                       </figure>
	                                       </div> 
	                                       
	                                       <div class="col-lg-2 col-md-4 col-sm-12">
	                                          <figure class="snip1283 figure-margin">
	                                         <img src="resources/assets/img/book_img03.jpg" alt="book_image" />
	                                         <figcaption>
	                                           <a href="#" class="read-more">책정보<br/>보러가기</a>
	                                         </figcaption>
	                                       </figure>
	                                       </div> 
	                                       
	                                       <div class="col-lg-2 col-md-6 col-sm-12"> 
	                                          <figure class="snip1283 figure-margin">
	                                         <img src="resources/assets/img/book_img04.jpg" alt="book_image" />
	                                         <figcaption>
	                                           <a href="#" class="read-more">책정보<br/>보러가기</a>
	                                         </figcaption>
	                                       </figure>
	                                       </div> 
	                                       
	                                       <div class="col-lg-2 col-md-4 col-sm-12"> 
	                                          <figure class="snip1283 figure-margin">
	                                         <img src="resources/assets/img/book_img05.jpg" alt="book_image" />
	                                         <figcaption>
	                                           
	                                           <a href="#" class="read-more">책정보<br/>보러가기</a>
	                                         </figcaption>
	                                       </figure>
	                                       </div> 
	                                       <div class="col-lg-2 col-md-4 col-sm-12"> 
	                                          <figure class="snip1283 figure-margin">
	                                         <img src="resources/assets/img/book_img06.jpg" alt="book_image" />
	                                         <figcaption>
	                                           
	                                           <a href="#" class="read-more">책정보<br/>보러가기</a>
	                                         </figcaption>
	                                       </figure>
	                                       </div> 
	                                       <div class="col-lg-2 col-md-4 col-sm-12"> 
	                                          <figure class="snip1283 figure-margin">
	                                         <img src="resources/assets/img/book_img07.jpg" alt="book_image" />
	                                         <figcaption>
	                                           
	                                           <a href="#" class="read-more">책정보<br/>보러가기</a>
	                                         </figcaption>
	                                       </figure>
	                                       </div> 
	                                       
	                                       <div class="col-lg-2 col-md-4 col-sm-12"> 
	                                          <figure class="snip1283 figure-margin">
	                                         <img src="resources/assets/img/book_img08.jpg" alt="book_image" />
	                                         <figcaption>
	                                           <a href="#" class="read-more">책정보<br/>보러가기</a>
	                                         </figcaption>
	                                       </figure>
	                                       </div>                                             
	                                   
	                                       <div class="col-lg-2 col-md-4 col-sm-12">
	                                          <figure class="snip1283 figure-margin">
	                                         <img src="resources/assets/img/book_img01.jpg" alt="book_image"/>
	                                         <figcaption>
	                                           <a href="#" class="read-more">책정보<br/>보러가기</a>
	                                         </figcaption>
	                                       </figure>
	                                       </div> 
	               
	                                    
	                                       <div class="col-lg-2 col-md-4 col-sm-12">
	                                          <figure class="snip1283 figure-margin">
	                                         <img src="resources/assets/img/book_img02.jpg" alt="book_image" />
	                                         <figcaption>
	                                           <a href="#" class="read-more">책정보<br/>보러가기</a>
	                                         </figcaption>
	                                       </figure>
	                                       </div> 
	 
	                                       <div class="col-lg-2 col-md-4 col-sm-12">
	                                          <figure class="snip1283 figure-margin">
	                                         <img src="resources/assets/img/book_img03.jpg" alt="book_image" />
	                                         <figcaption>
	                                           <a href="#" class="read-more">책정보<br/>보러가기</a>
	                                         </figcaption>
	                                       </figure>
	                                       </div> 
	                                       
	                                       <div class="col-lg-2 col-md-6 col-sm-12"> 
	                                          <figure class="snip1283 figure-margin">
	                                         <img src="resources/assets/img/book_img04.jpg" alt="book_image" />
	                                         <figcaption>
	                                           <a href="#" class="read-more">책정보<br/>보러가기</a>
	                                         </figcaption>
	                                       </figure>
	                                       </div> 
	                                    
	                                     </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    <!-- End Tabs on plain Card -->
                  </div>
                </div>
              </div>
            </div>
            <!-- End Section Tabs -->
      
         
      </div>   
      <!-- main 태크 끝 -->
      <%@ include file="/WEB-INF/views/include/footer.jsp"%>
      <%@ include file="/WEB-INF/views/include/coreJsFile.jsp"%>
      <%@ include file="/WEB-INF/views/include/modal.jsp"%>
   </div>

</body>

</html>