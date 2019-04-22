<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp" %>
<script src="resources/jquery-3.3.1.min.js"></script>
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script>
/* 다음 주소  API 시작 */
function execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
            // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
            var extraRoadAddr = ''; // 도로명 조합형 주소 변수
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraRoadAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if(data.buildingName !== '' && data.apartment === 'Y'){
               extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if(extraRoadAddr !== ''){
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }
            // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
            if(fullRoadAddr !== ''){
                fullRoadAddr += extraRoadAddr;
            }
            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('post').value = data.zonecode; //5자리 새우편번호 사용
            document.getElementById('roadaddr').value = fullRoadAddr;
            document.getElementById('addr1').value = data.jibunAddress;
            // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
            if(data.autoRoadAddress) {
                //예상되는 도로명 주소에 조합형 주소를 추가한다.
                var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                document.getElementById('guide').innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
            } else if(data.autoJibunAddress) {
                var expJibunAddr = data.autoJibunAddress;
                document.getElementById('guide').innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
            } else {
                document.getElementById('guide').innerHTML = '';
            }
        }
    }).open();
}
/* 다음 주소  API 끝 */
/*아이디 한글입력 안되게 하는 소스 시작*/
$(document).ready(function(){
  
  //한글입력 안되게 처리
  $("input[name=id]").keyup(function(event){ 
   if (!(event.keyCode >=37 && event.keyCode<=40)) {
    var inputVal = $(this).val();
    $(this).val(inputVal.replace(/[^a-z0-9]/gi,''));
   
   }
  });
});
/*아이디 한글입력 안되게 하는 소스 끝*/
/*휴대폰번호 숫자만 입력되게 하는 소스 시작*/
function numkeyCheck(e){
   var keyValue = event.keyCode;
   if( ((keyValue >= 48) && (keyValue <= 57)) )
      return true;
      else
      return false;
   }
/*휴대폰번호 숫자만 입력되게 하는 소스 끝*/
$(function(){
   
   $("#id").on('keyup', function() {
      
   	var id=$("#id").val();
         $.ajax({
            method : 'post'
            , url  : 'duplicateCheck'
            , data : {
            	id : id
            }
            , success : function(resp) {
               if(resp == 0) {
                  $("#successDiv").attr('class','form-group has-success');
                  $("#id").css("color", "#40ff00");
                  $("#send").attr('href','javascript: formCheck();');
               } else {
                 
                  $("#successDiv").attr('class','form-group has-danger');
                  $("#id").css("color", "red");
                  $("#send").attr('href','javascript:void(0);');
                  return false;
               }
            }
         }); 
   });
   
    
});
function formCheck() {
	var id = document.getElementById("id").value;
	var pw = document.getElementById("pw").value;
    var repw= document.getElementById("repw").value;
    var name= document.getElementById("name").value;
    var disname= document.getElementById("display_name").value;
    
    
    
 
  
   
 
    
    	if(id.length==0){
    		alert("아이디를 입력해주세요");
    		return false;
    	}
    	
    	if(pw.length==0){
    		alert("비밀번호를 입력해주세요");
    		return false;
    	}
    	
		if(pw.length < 4 || pw.length > 10) {
			alert("비밀번호는 4~10자리 입니다.");
			return;
		}
		if(pw!= repw) {
			alert("비밀번호와 비밀번호 확인값이 다릅니다.");
			return;
		}
		
		if(name.length==0) {
			alert("이름을 입력해주세요");
			return;
		}
		
		if(disname.length==0) {
			alert("닉네임을 입력해주세요");
			return;
		}
   
   var phone1= document.getElementById("phone1").value; 
   var phone2= document.getElementById("phone2");
   var phone3= document.getElementById("phone3");
   document.getElementById("phone").value = phone1+phone2.value+phone3.value;
   
   var post = document.getElementById("post");
   var roadaddr = document.getElementById("roadaddr");
   var addr1= document.getElementById("addr1").value;
   var addr2= document.getElementById("addr2");
   
   document.getElementById("address").value = post.value+roadaddr.value+addr1+addr2.value;
   $("#joinus").submit();
   
}
   
/*이메일 직접입력 선택 소스 시작*/
function email_change(){
	if(document.join.email.options[document.join.email.selectedIndex].value == '0'){
	 document.join.email2.disabled = true;
	 document.join.email2.value = "";
	}
	if(document.join.email.options[document.join.email.selectedIndex].value == '9'){
	 document.join.email2.disabled = false;
	 document.join.email2.value = "";
	 document.join.email2.focus();
	} else {
	 document.join.email2.disabled = true;
	 document.join.email2.value = document.join.email.options[document.join.email.selectedIndex].value;
	}
}

//checkbox data 
var checkData = [];
$("input[name='userTaste']:checked").each(function (){
	
   $(this).val("1") 
   
});
$("input[name='userTaste']").each(function (){
	
   checkData.push($(this).val());
   
});

checkData.unshift( id );
alert(checkData);
//end of check box



/*이메일 직접입력 선택 소스 끝*/
</script>
<style>
 select option{
 background-color: #fff !important;
 color: #000;
 }
 </style> 
<body class="index-page sidebar-collapse">
<!-- Navbar include -->
  <%@ include file="/WEB-INF/views/include/navbar.jsp" %>

  <div class="wrapper">
      <div class="section section-signup" style="background-image: url('resources/assets/img/bg14.jpg'); background-size: cover; background-position: top center; min-height: 600px;">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-9 col-sm-12" style="margin:0 auto; background: none; min-width: 300px;">
            
            
            <!--  여기서 부터 form 시작!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
              <form class="form" id="joinus" method="post" action="joinus" name="join">
               <div class="card-header text-center">
                  <h3 class="card-title title-up" style="color: white; font-size: 22pt; box-shadow:none;">회원가입</h3>
               </div>
                          
               <div class="row" style="margin: 10px;">
                  
                  <div class="col-lg-3 text-center" style="padding: 8px 0px;">
                    <span style="color: white; font-size: 12pt; font-weight: 600;">아이디</span>
                  </div>

                 
                  <div class="col-lg-9 text-center">
                   <div class="form-group" id="successDiv" >
                     <input type="text" value="" id="id" name="id" placeholder="사용가능한 경우 ✓ , 사용불가의 경우 X " class="form-control" required />
                   </div>
                   
                   </div>
                  
                  <div class="col-lg-3 text-center" style="padding: 8px 0px;">
                    <span style="color: white; font-size: 12pt; font-weight: 600;">비밀번호</span>
                  </div>
                  <div class="col-lg-9 text-center">
                   <div class="form-group">
                      <input type="password" id="pw" name="pw" value="" placeholder="비밀번호를 입력하세요.." class="form-control" required />
                   </div>
                   </div>
                  
                  <div class="col-lg-3 text-center" style="padding: 8px 0px;">
                    <span style="color: white; font-size: 12pt; font-weight: 600;">비밀번호 확인</span>
                  </div>
                  <div class="col-lg-9 text-center">
                   <div class="form-group">
                      <input type="password" id="repw" value="" placeholder="비밀번호를 다시 한번 입력하세요.." class="form-control" required />
                   </div>
                   </div>
     
                  
                  <div class="col-lg-3 text-center" style="padding: 8px 0px;">
                    <span style="color: white; font-size: 12pt; font-weight: 600;">이름</span>
                  </div>
                  <div class="col-lg-9 text-center">
                   <div class="form-group">
                      <input type="text" id="name" name="name" value="" placeholder="이름을 입력하세요.." class="form-control" required />
                   </div>
                   </div>
                  
                  <div class="col-lg-3 text-center" style="padding: 8px 0px;">
                    <span style="color: white; font-size: 12pt; font-weight: 600;">닉네임</span>
                  </div>
                  <div class="col-lg-9 text-center">
                   <div class="form-group">
                      <input type="text" id="display_name" name="display_name" value="" placeholder="사용할 닉네임을 입력하세요.." class="form-control" required />
                   </div>
                   </div>
                  
                  <div class="col-lg-3 text-center" style="padding: 8px 0px;">
                    <span style="color: white; font-size: 12pt; font-weight: 600;">성별</span>
                  </div>
                  <div class="col-lg-9 text-center">
                  <div class="form-check form-check-radio" style="width: 49%; display: inline-block;">
                     <label class="form-check-label">
                     <input class="form-check-input" type="radio" name="gender" id="exampleRadios1" value="남">
                     <span class="form-check-sign"></span>
                        남      
                     </label>
                   </div>
                  <div class="form-check form-check-radio" style="width: 49%; display: inline-block;">
                     <label class="form-check-label">
                     <input class="form-check-input" type="radio" name="gender" id="exampleRadios1" value="여">
                     <span class="form-check-sign"></span>
                        여   
                     </label>
                   </div>
                   </div>
 
                 

                
                
                  <div class="col-lg-3 text-center mt-10" style="padding: 14px 0px;">
                   <span style="color: white; font-size: 12pt; font-weight: 600;">이메일</span>
                  </div>
                  <div class="col-lg-9 text-center mt-10">
                   <div class="form-group">
                   
 					<div class="row" style="padding: 8px 0px; margin-bottom: -16px;">
                   	
	                   	<div class="col-5" style="padding-right: 0px;">
	                     <input type="text" id="email1" name="email1" placeholder="이메일을 입력하세요.." class="form-control emailst" required  onfocus="this.value='';"/>
	                    </div>
 
 	                   	<div class="col-2" style="padding-top: 4px;">
	                    <p style="color: #fff; font-weight: 500">@</p>
	                    </div>
   
	                   	<div class="col-5" style="padding-left: 0px;">
	                     <input type="text" id="email2" name="email2" placeholder="이메일을 입력하세요.." class="form-control emailst" required disabled />                   
	                    </div>
                    
                    </div>
                    
                   </div>
                  </div>
  
                
                  <div class="col-lg-3 text-center">
                   <span style="color: white; font-size: 12pt; font-weight: 600;"></span>
                  </div>
                  
                  <div class="col-lg-9 text-center">
                   <div class="form-group">
                      <select id="age" name="email" class="form-control selectst" onchange="email_change()" required>
                      <option value="0" selected">선택하세요</option>
                      <option value="9">직접입력</option>
                      <option value="gmail.com">gmail.com</option>
                      <option value="nate.com">nate.com</option>
                      <option value="naver.com">naver.com</option>
                      <option value="daum.net">daum.net</option>
                      </select>
                   </div>
                   </div>
                   
                   
                   
                   
                 <div class="col-lg-3 text-center mt-10" style="padding: 8px 0px;">
                    <span style="color: white; font-size: 12pt; font-weight: 600;">연령대</span>
                  </div>
                  
                  <div class="col-lg-9 text-center mt-10">
                   <div class="form-group">
                      <select id="age" name="age" class="form-control" required>
                      <option value="10" selected  style="color: #000 !important;">10대</option>
                      <option value="20" style="color: #000 !important;">20대</option>
                      <option value="30" style="color: #000 !important;">30대</option>
                      <option value="40" style="color: #000 !important;">40대</option>
                      <option value="50" style="color: #000 !important;">50대</option>
                      <option value="60" style="color: #000 !important;">60대 이상</option>
                      </select>
                   </div>
                   </div>
                   
                 
                
                 <div class="col-lg-3 text-center mt-10" style="padding: 8px 0px;">
                    <span style="color: white; font-size: 12pt; font-weight: 600;">휴대폰 번호</span>
                  </div>
                  <div class="col-lg-3 text-center mt-10">
                   <div class="form-group">
                      <select id="phone1"class="form-control" required>
                      <option value="010" selected  style="color: #000 !important;">010</option>
                      <option value="011" style="color: #000 !important;">011</option>
                      <option value="016" style="color: #000 !important;">016</option>
                      <option value="017" style="color: #000 !important;">017</option>
                      <option value="019" style="color: #000 !important;">019</option>
                      </select>
                   </div>
                   </div>
                  <div class="col-lg-3 text-center mt-10" style="padding: 0x 4x;">
                   <div class="form-group">
                      <input type="text" id="phone2" value="" placeholder="휴대폰 번호" class="form-control" maxlength="4" required onKeyPress="return numkeyCheck(event)" />
                   </div>
                   </div>
                   
                  <div class="col-lg-3 text-center mt-10" style="padding: 0x 4px;">
                   <div class="form-group">
                      <input type="text" id="phone3" value="" placeholder="휴대폰 번호" class="form-control"  maxlength="4" required onKeyPress="return numkeyCheck(event)" />
                   </div>
                   </div>
                  <input id="phone" type="hidden" name="phone" value="" />
                  
                  <div class="col-lg-3 text-center" style="padding: 20px 0px 4px 0px;">
                    <span style="color: white; font-size: 12pt; font-weight: 600;">주소</span>
                  </div>
                  <div class="col-lg-6 text-center" style="padding: 12px 8px 4px 8px;">
                   <div class="form-group">
                      <input type="text" id="post" readonly value="" placeholder="우편번호 " class="form-control"  required />
                   </div>
                   </div>
                   
                  <div class="col-lg-3 text-center" style="padding-top: 2px;">
                   <div class="form-group">
                      <button class="btn btn-primary btn-simple btn-round" onclick="execDaumPostcode()" type="button" style="width: 100%; background-color: #fff; display: inline-block;">
                  <i class="now-ui-icons ui-1_zoom-bold"></i>
                 </button>
                   </div>
                   </div>
                  
                  <div class="col-lg-3 text-center" style="padding: 8px 0px;">
                    <span style="color: white; font-size: 12pt; font-weight: 600;"></span>
                  </div>
                  <div class="col-lg-9 text-center">
                   <div class="form-group">
                      <input type="text" id="roadaddr" value="" placeholder="도로명 주소" class="form-control" required />
                   </div>
                   <div class="form-group">
                      <input type="text" id="addr1" value="" placeholder="지번 주소" class="form-control" required />
                   </div>
                   <div class="form-group">
                      <input type="text" id="addr2" value="" placeholder="나머지 주소" class="form-control" required />
                   </div>
                   <span id="guide" style="color:#999"></span>
                   </div>
                      <input id="address" type="hidden" name="address" value="" />
                </div>
                
                


							<div>선호하는 태그를 선택해주세요</div>
							<div class ="form-check" id="form-check-userTaste">
								
									<label class="form-check-label"> <input
										class="form-check-input" id="q1" name="userTaste" type="checkbox" value="0">
										<span class="form-check-sign"></span> 과학,기술,컴퓨터
									</label>

									<label class="form-check-label"> <input
										class="form-check-input" id="q2" name="userTaste" type="checkbox" value="0">
										<span class="form-check-sign"></span> 장르소설
									</label>

									<label class="form-check-label"> <input
										class="form-check-input" id="q3" name="userTaste" type="checkbox" value="0">
										<span class="form-check-sign"></span> 취미,오락,여행,건강
									</label>

									<label class="form-check-label"> <input
										class="form-check-input" id="q4" name="userTaste" type="checkbox" value="0">
										<span class="form-check-sign"></span> 철학,사상,종교
									</label>

									<label class="form-check-label"> <input
										class="form-check-input" id="q5" name="userTaste" type="checkbox" value="0">
										<span class="form-check-sign"></span> 자기계발
									</label>

									<label class="form-check-label"> <input
										class="form-check-input" id="q6" name="userTaste" type="checkbox" value="0">
										<span class="form-check-sign"></span> 경제,경영
									</label>

									<label class="form-check-label"> <input
										class="form-check-input" id="q7" name="userTaste" type="checkbox" value="0"> <span
										class="form-check-sign"></span> 가정,육아,요리
									</label>

									<label class="form-check-label"> <input
										class="form-check-input" id="q8" name="userTaste" type="checkbox" value="0">
										<span class="form-check-sign"></span> 정치,사회,시사
									</label>

									<label class="form-check-label"> <input
										class="form-check-input" id="q9" name="userTaste" type="checkbox" value="0"> <span
										class="form-check-sign"></span> 예술,문화
									</label>

									<label class="form-check-label"> <input
										class="form-check-input" id="q10" name="userTaste" type="checkbox" value="0">
										<span class="form-check-sign"></span> 역사,지리
									</label>


									<label class="form-check-label"> <input
										class="form-check-input" id="q11" name="userTaste" type="checkbox" value="0">
										<span class="form-check-sign"></span> 제태크,부동산
									</label>

									<label class="form-check-label"> <input
										class="form-check-input" id="q12" name="userTaste" type="checkbox" value="0">
										<span class="form-check-sign"></span> 어학,외국어
									</label>


									<label class="form-check-label"> <input
										class="form-check-input" id="q13" name="userTaste" type="checkbox" value="0">
										<span class="form-check-sign"></span> '문학'
									</label>
							</div>
                
                
                
                <div class="card-footer text-center" style="background: none; border: none;">   
                           
                  <a href="javascript: formCheck();" id="send" class="btn btn-login btn-round btn-lg">회원 가입 완료 <i class="now-ui-icons arrows-1_minimal-right"></i></a> 
                              
                </div>
                          
              
              </form>
                       
  
              
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