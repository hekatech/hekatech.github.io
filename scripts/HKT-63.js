var svg = document.getElementById('HKT-63');
console.log('get svg');

// scrollbar

Ps.initialize($('.post-body')[0]);

$('.highlight table').each(function(){
  Ps.initialize($(this)[0]); 
});

if ($(".toc").length > 0) {
  Ps.initialize($('.toc')[0]);
}

if ($(".search-block").length > 0) {
  Ps.initialize($('.search-block')[0]);
}

if ($(".hidden-post").length > 0) {
  Ps.initialize($('.hidden-post')[0]);
}


// active sidebar

let actURL = window.location.pathname.split('/')[1],
actYear = window.location.pathname.split('/')[2];
if (actURL.length > 0) {
  if (actURL.indexOf('archives') >= 0) {
    $('.archive-list-container a:first').addClass('active');
    $('#linklist a[href*=' + actYear + ']').addClass('active');
  } else {
    $('#linklist a[href*=' + actURL + ']').each(function() {
      $(this).addClass('active');
    })
  }
} else {
  $('#linklist a:first').addClass('active');
}

// hide search result

$("a[title='搜索']").click(function(e){
  $('.search-block').toggleClass('in');
  $(this).toggleClass('active');
});

$('.search-block').click(function(e){
  $('.sidebar').removeClass('in');
});

// 定时器

function throttle(func, wait) {
  var timer;
  return function() {
    var context = this; // 注意 this 指向
    var args = arguments; // arguments中存着event
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args)
      }, wait)
    }
  }
}

// active toc

const actToc = function(){
  if ($('.article-toc').is(':visible')){
//    console.log('active');
    $('.article-entry h3').each(function(){
      var linkScrollX = $(this).position().top,
      linkName = $(this).children('a').attr('href'),
      encodeLink = '"' + encodeURI(linkName) + '"';
      if (linkScrollX < 100){
        $('.toc-link[href=' + encodeLink + ']').addClass('visited-h3');
      } else {
        $('.toc-link[href=' + encodeLink + ']').removeClass('visited-h3');
      }
    });
    $('.article-entry h4').each(function(){
      var linkScrollX = $(this).position().top,
      linkName = $(this).children('a').attr('href'),
      encodeLink = '"' + encodeURI(linkName) + '"';
      if (linkScrollX < 100){
        $('.toc-link[href=' + encodeLink + ']').addClass('visited-h4');
      } else {
        $('.toc-link[href=' + encodeLink + ']').removeClass('visited-h4');
      }
    });
    $('.toc-level-3 >.toc-link').not('.visited-h3:last').removeClass('active');
    $('.toc-level-4 >.toc-link').not('.visited-h4:last').removeClass('active');
    $('.visited-h3:last, .visited-h4:last').addClass('active');
    $('.toc-link').not('.visited-h3.active').next().slideUp('0.3s');
    $('.visited-h3.active').next().slideDown('0.3s');
  }
}

if ($('.toc-link').length > 1) {
  $(document).ready(function(){
    $('.post-body').trigger('ps-scroll-y');
  });
  $('.toc-link').click(function(e){
    $('.post-body').trigger('ps-scroll-y');
  });
  $('.post-body').on('ps-scroll-y',throttle(actToc,400));
}

// link img

if ($('#link-box').length > 0) {
  $('#link-box >ul').addClass('link-list');
  $('.link-list >li').addClass('link-item');
  $('#link-box .article-gallery-img img').unwrap();
  $('#link-box .article-gallery-img img').unwrap();
  $('.link-item').each(function(){
    var url = $(this).find('a').attr('href');
    $(this).wrap(document.createElement("a"));
    $(this).parent().attr("href",url).addClass('link-url');
    $(this).append('<span class="list-pointer"></span>');
  })
  $('.link-item').find('a').each(function(){
    $(this).replaceWith($('<span>' + this.innerHTML + '</span>'));
  })
  $('.link-item').each(function(){
    $(this).find('li:first').addClass('link-title')
  })
}

// danmu

if ($('#example-container').length > 0) {
  $(document).ready(function(){
    $("img[class*='yt-live-chat-author-badge-renderer']").unwrap().unwrap();
  });
}