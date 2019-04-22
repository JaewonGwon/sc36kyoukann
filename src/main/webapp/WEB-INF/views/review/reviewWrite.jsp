<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%@ include file="/WEB-INF/views/include/header.jsp" %>


<script src="resources/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="resources/react/index.bundle.js"></script>

<script>

/*리뷰 10개씩 뿌려주는 코드 시작 (더보기 버튼)*/
/* $(window).on('load', function () {
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
} */
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



/*태그검색 제이쿼리 시작*/
/*
    JavaScript autoComplete v1.0.4
    Copyright (c) 2014 Simon Steinberger / Pixabay
    GitHub: https://github.com/Pixabay/JavaScript-autoComplete
    License: http://www.opensource.org/licenses/mit-license.php
*/
$(function (){
   
   var autoComplete = (function(){
       // "use strict";
       function autoComplete(options){
           if (!document.querySelector) return;

           // helpers
           function hasClass(el, className){ return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className); }

           function addEvent(el, type, handler){
               if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
           }
           function removeEvent(el, type, handler){
               // if (el.removeEventListener) not working in IE11
               if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
           }
           function live(elClass, event, cb, context){
               addEvent(context || document, event, function(e){
                   var found, el = e.target || e.srcElement;
                   while (el && !(found = hasClass(el, elClass))) el = el.parentElement;
                   if (found) cb.call(el, e);
               });
           }

           var o = {
               selector: 0,
               source: 0,
               minChars: 3,
               delay: 150,
               offsetLeft: 0,
               offsetTop: 1,
               cache: 1,
               menuClass: '',
               renderItem: function (item, search){
                   // escape special characters
                   search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                   var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
                   return '<div class="autocomplete-suggestion" data-val="' + item + '">' + item.replace(re, "<b>$1</b>") + '</div>';
               },
               onSelect: function(e, term, item){}
           };
           for (var k in options) { if (options.hasOwnProperty(k)) o[k] = options[k]; }

           // init
           var elems = typeof o.selector == 'object' ? [o.selector] : document.querySelectorAll(o.selector);
           for (var i=0; i<elems.length; i++) {
               var that = elems[i];

               // create suggestions container "sc"
               that.sc = document.createElement('div');
               that.sc.className = 'autocomplete-suggestions '+o.menuClass;

               that.autocompleteAttr = that.getAttribute('autocomplete');
               that.setAttribute('autocomplete', 'off');
               that.cache = {};
               that.last_val = '';

               that.updateSC = function(resize, next){
                   var rect = that.getBoundingClientRect();
                   that.sc.style.left = Math.round(rect.left + (window.pageXOffset || document.documentElement.scrollLeft) + o.offsetLeft) + 'px';
                   that.sc.style.top = Math.round(rect.bottom + (window.pageYOffset || document.documentElement.scrollTop) + o.offsetTop) + 'px';
                   that.sc.style.width = Math.round(rect.right - rect.left) + 'px'; // outerWidth
                   if (!resize) {
                       that.sc.style.display = 'block';
                       if (!that.sc.maxHeight) { that.sc.maxHeight = parseInt((window.getComputedStyle ? getComputedStyle(that.sc, null) : that.sc.currentStyle).maxHeight); }
                       if (!that.sc.suggestionHeight) that.sc.suggestionHeight = that.sc.querySelector('.autocomplete-suggestion').offsetHeight;
                       if (that.sc.suggestionHeight)
                           if (!next) that.sc.scrollTop = 0;
                           else {
                               var scrTop = that.sc.scrollTop, selTop = next.getBoundingClientRect().top - that.sc.getBoundingClientRect().top;
                               if (selTop + that.sc.suggestionHeight - that.sc.maxHeight > 0)
                                   that.sc.scrollTop = selTop + that.sc.suggestionHeight + scrTop - that.sc.maxHeight;
                               else if (selTop < 0)
                                   that.sc.scrollTop = selTop + scrTop;
                           }
                   }
               }
               addEvent(window, 'resize', that.updateSC);
               document.body.appendChild(that.sc);

               live('autocomplete-suggestion', 'mouseleave', function(e){
                   var sel = that.sc.querySelector('.autocomplete-suggestion.selected');
                   if (sel) setTimeout(function(){ sel.className = sel.className.replace('selected', ''); }, 20);
               }, that.sc);

               live('autocomplete-suggestion', 'mouseover', function(e){
                   var sel = that.sc.querySelector('.autocomplete-suggestion.selected');
                   if (sel) sel.className = sel.className.replace('selected', '');
                   this.className += ' selected';
               }, that.sc);

               live('autocomplete-suggestion', 'mousedown', function(e){
                   if (hasClass(this, 'autocomplete-suggestion')) { // else outside click
                       var v = this.getAttribute('data-val');
                       that.value = v;
                       o.onSelect(e, v, this);
                       that.sc.style.display = 'none';
                   }
               }, that.sc);

               that.blurHandler = function(){
                   try { var over_sb = document.querySelector('.autocomplete-suggestions:hover'); } catch(e){ var over_sb = 0; }
                   if (!over_sb) {
                       that.last_val = that.value;
                       that.sc.style.display = 'none';
                       setTimeout(function(){ that.sc.style.display = 'none'; }, 350); // hide suggestions on fast input
                   } else if (that !== document.activeElement) setTimeout(function(){ that.focus(); }, 20);
               };
               addEvent(that, 'blur', that.blurHandler);

               var suggest = function(data){
                   var val = that.value;
                   that.cache[val] = data;
                   if (data.length && val.length >= o.minChars) {
                       var s = '';
                       for (var i=0;i<data.length;i++) s += o.renderItem(data[i], val);
                       that.sc.innerHTML = s;
                       that.updateSC(0);
                   }
                   else
                       that.sc.style.display = 'none';
               }

               that.keydownHandler = function(e){
                   var key = window.event ? e.keyCode : e.which;
                   // down (40), up (38)
                   if ((key == 40 || key == 38) && that.sc.innerHTML) {
                       var next, sel = that.sc.querySelector('.autocomplete-suggestion.selected');
                       if (!sel) {
                           next = (key == 40) ? that.sc.querySelector('.autocomplete-suggestion') : that.sc.childNodes[that.sc.childNodes.length - 1]; // first : last
                           next.className += ' selected';
                           that.value = next.getAttribute('data-val');
                       } else {
                           next = (key == 40) ? sel.nextSibling : sel.previousSibling;
                           if (next) {
                               sel.className = sel.className.replace('selected', '');
                               next.className += ' selected';
                               that.value = next.getAttribute('data-val');
                           }
                           else { sel.className = sel.className.replace('selected', ''); that.value = that.last_val; next = 0; }
                       }
                       that.updateSC(0, next);
                       return false;
                   }
                   // esc
                   else if (key == 27) { that.value = that.last_val; that.sc.style.display = 'none'; }
                   // enter
                   else if (key == 13 || key == 9) {
                       var sel = that.sc.querySelector('.autocomplete-suggestion.selected');
                       if (sel && that.sc.style.display != 'none') { o.onSelect(e, sel.getAttribute('data-val'), sel); setTimeout(function(){ that.sc.style.display = 'none'; }, 20); }
                   }
               };
               addEvent(that, 'keydown', that.keydownHandler);

               that.keyupHandler = function(e){
                   var key = window.event ? e.keyCode : e.which;
                   if (!key || (key < 35 || key > 40) && key != 13 && key != 27) {
                       var val = that.value;
                       if (val.length >= o.minChars) {
                           if (val != that.last_val) {
                               that.last_val = val;
                               clearTimeout(that.timer);
                               if (o.cache) {
                                   if (val in that.cache) { suggest(that.cache[val]); return; }
                                   // no requests if previous suggestions were empty
                                   for (var i=1; i<val.length-o.minChars; i++) {
                                       var part = val.slice(0, val.length-i);
                                       if (part in that.cache && !that.cache[part].length) { suggest([]); return; }
                                   }
                               }
                               that.timer = setTimeout(function(){ o.source(val, suggest) }, o.delay);
                           }
                       } else {
                           that.last_val = val;
                           that.sc.style.display = 'none';
                       }
                   }
               };
               addEvent(that, 'keyup', that.keyupHandler);

               that.focusHandler = function(e){
                   that.last_val = '\n';
                   that.keyupHandler(e)
               };
               if (!o.minChars) addEvent(that, 'focus', that.focusHandler);
           }

           // public destroy method
           this.destroy = function(){
               for (var i=0; i<elems.length; i++) {
                   var that = elems[i];
                   removeEvent(window, 'resize', that.updateSC);
                   removeEvent(that, 'blur', that.blurHandler);
                   removeEvent(that, 'focus', that.focusHandler);
                   removeEvent(that, 'keydown', that.keydownHandler);
                   removeEvent(that, 'keyup', that.keyupHandler);
                   if (that.autocompleteAttr)
                       that.setAttribute('autocomplete', that.autocompleteAttr);
                   else
                       that.removeAttribute('autocomplete');
                   document.body.removeChild(that.sc);
                   that = null;
               }
           };
       }
       return autoComplete;
   })();

   (function(){
       if (typeof define === 'function' && define.amd)
           define('autoComplete', function () { return autoComplete; });
       else if (typeof module !== 'undefined' && module.exports)
           module.exports = autoComplete;
       else
           window.autoComplete = autoComplete;
   })();


   new autoComplete({
       selector: '#myInput',
       minChars: 1,
       source: function(term, suggest){
           term = term.toLowerCase();
           var choices = [];
	       var matches = [];
           $.ajax({
   			url : 'request_wr_books',
   			method : 'GET',
   			data: 'tag=' + term,
   			success : function(resp) {
   				for(var i = 0 ; i < resp.length ; i++){
   					choices.push(resp[i]['book_title']);
   				}

   	            for (i=0; i<choices.length; i++)
   	               if (~choices[i].indexOf(term)) matches.push(choices[i]);
   	            suggest(matches);
   			}
           });
           /* choices = ["AppleScript",
                           "Asp",
                           "BASIC",
                           "C",
                           "C++",
                           "Clojure",
                           "COBOL",
                           "ColdFusion",
                           "Erlang",
                           "Fortran",
                           "Groovy",
                           "Haskell",
                           "Java",
                           "JavaScript",
                           "Lisp",
                           "Perl",
                           "PHP",
                           "Python",
                           "Ruby",
                           "Scala",
                           "Scheme"
                         ]; */

       }
   });

   
});





$(function() {
    $('#content').keyup(function (e){
        var content = $(this).val();
        /* $(this).height(((content.split('\n').length + 1) * 1.5) + 'em'); */
        $('#counter').html(content.length + '/2000');

    });
    $('#content').keyup();

});
$(function() {
   $('#reviewreg').on('click', reviewreg1);
   $('#reviewback').on('click', reviewback);
   
  
});
function reviewback(){
   location.href='http://localhost:8888/test/bookreview';
}
function reviewreg1(){
   $('#reviewSend').submit();
}
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
                     <h3 class="h3fontblack">Review Write</h3>
                   </div>                

                  <form id="reviewSend" action="reviewInsert" >

                     <div class="row review_content_wrap" id="itemwrap">
                     
                        <div class='col-lg-8 review_content'>
                            <div class='carousel-content text-carousel-st2'>
                             <div class='in-div-text-carousel-st2'>
                                 <!-- 베스트 리뷰  태크, user name, hitcount 있는부분 시작-->
                              
                                 <p class='main-review-tag'>                           
                                 <input class="review-mod-input-st text-info reviewreg-nick-input" type="text" name="id" value="${loginId}" readonly/>
                                 </p>
   
                                <p class='main-review-title' style="margin-top: 15px;">
                                   <input class="review-mod-input-st" type="text" name="rev_title" value="" id="booktitle" placeholder="글 제목을 입력 해주세요." />
                                </p>
                                <p class='main-review-title2'>
                                   
                                 <input class="review-mod-input-st" id="myInput" value="" type="text" name="book_title" placeholder="책 제목을 입력 해주세요." />
   
                                </p>
                                 <p class='main-review-content2'>
                                 <textarea class="review-mod-ta-st" name="rev_content" style="" value="" id="content" maxlength="2000" placeholder="글자수는 한글 2000자로 제한 합니다."></textarea>
                                 <span id="counter">###</span>
                              </p>                           
                                 <!-- 베스트 리뷰 태크 부분 시작 -->
                                 <p class='main-review-tag' style="padding-bottom: 15px;">
                                    <!-- <input class="review-mod-input-st" type="text" name="booktag" /> -->
                                 </p>
                                 <!-- 베스트 리뷰 태크 부분 끝 -->
                                 
                              </div>
                           </div>
                          </div>
   
                     </div>
                  
                     <div class="row">
                        <div class="col-12 text-center" id="btn-wrap">
                           <button class="btn btn-success btn-round" id="reviewreg" type="button">등록</button>
                           <button class="btn btn-primary btn-round" id="reviewreset" type="reset">취소</button>
                           <button class="btn btn-round" id="reviewback" type="button">목록</button>
                        </div>
                     </div>           
                  </form>      
               
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