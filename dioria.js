//ページ遷移時のアニメーション
window.addEventListener('DOMContentLoaded', function() { /*ページ読み込み時にイベントを発生させる*/
	const fadeEls = document.querySelectorAll('body');
    fadeEls.forEach(function(el) { /*forEachメソッドで全ての要素に対して同じ処理をする*/
    el.classList.add('active');
  });
});

//モーダルウインドウ	
const modal = document.querySelector('.js-modal');
const modalButton = document.querySelector('.js-modal-button'); //PC表示
const modalButtons = document.querySelector('.js-modal-buttons'); //レスポンシブ
const modalClose = document.querySelector('.js-close-button');
modalButton.addEventListener('click', () => {
  modal.classList.add('is-open');
});
modalClose.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

//レスポンシブ時のモーダルウインドウ
modalButtons.addEventListener('click', () => {
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
ScrollReveal().reveal('.text', { delay: 500, origin: "left" });
ScrollReveal().reveal('#footer', { delay: 400, origin: "top"});
