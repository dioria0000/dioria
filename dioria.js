//TOPページ表示時のアニメーション
$(function() {
  // ページ遷移の検知
  var isReloaded = false;

  function checkIfReloaded() {
      if (performance.navigation.type === 1) {
          isReloaded = true;
      } else {
          isReloaded = false;
      }
  }

  // 最初のページロード時のみ実行されるアニメーション
  setTimeout(function(){
      $('.start p').fadeIn(1600);
  }, 500); // 0.5秒後にロゴをフェードイン!

  setTimeout(function(){
      $('.start').fadeOut(500);
  }, 4500); // 4.5秒後にロゴ含め真っ白背景をフェードアウト！

  // ページがリロードされたときのみ実行されるアニメーション
  checkIfReloaded();
  if (isReloaded) {
      $('.start p span').each(function(index) {
          var $span = $(this);
          setTimeout(function(){
              $span.fadeIn(200);
          }, index * 500); // 500ミリ秒ごとに1文字ずつフェードイン
      });
  }

  // ページ遷移時の検知
  $(window).on('beforeunload', function() {
      checkIfReloaded();
  });
});

//ページ遷移時のアニメーション
window.addEventListener('DOMContentLoaded', function() { /*ページ読み込み時にイベントを発生させる*/
	const fadeEls = document.querySelectorAll('body');
    fadeEls.forEach(function(el) { /*forEachメソッドで全ての要素に対して同じ処理をする*/
    el.classList.add('active');
  });
});

//モーダルウインドウ	
const modal = document.querySelector('.js-modal');
const modalButton = document.querySelector('.js-modal-button');
const modalClose = document.querySelector('.js-close-button');
modalButton.addEventListener('click', () => {
  modal.classList.add('is-open');
});
modalClose.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

// ハンバーガメニュー
$(".nav_toggle").on("click", function () { /*クリックしたらjQuery発動*/
$(".nav_toggle, .nav").toggleClass("show");
});

//フェードイン・フェードアウト
ScrollReveal({ 
  reset: false, /*trueの場合は下からスクロールしても上からスクロールしても表示させられる*/
  distance: "50px", /*distanceで60px距離を保って表示される*/
  duration: 2000, /*durationで1秒間で表示させられる*/
  delay: 200, 
}); 
ScrollReveal().reveal('.content img', { delay: 400, origin: "left" }); /*originで左からふわっと表示させる*/ 
ScrollReveal().reveal('.news-text', { delay: 400, origin: "left" }); /*derayはふわっと表示される速度*/
ScrollReveal().reveal('.news-text1', { delay: 400, origin: "left" });
ScrollReveal().reveal('.news-text2', { delay: 400, origin: "left" });
ScrollReveal().reveal('.diego', { delay: 400, origin: "right" });
ScrollReveal().reveal('.schedule-contaniner', { delay: 400, origin: "top" });
ScrollReveal().reveal('#footer', { delay: 400, origin: "top"});
