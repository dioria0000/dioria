window.addEventListener('DOMContentLoaded', function() { /*ページ読み込み時にイベントを発生させる*/
    const fadeEls = document.querySelectorAll('body');
    fadeEls.forEach(function(el) { /*forEachメソッドで全ての要素に対して同じ処理をする*/
      el.classList.add('active');
    });
  });

  const hamburger = document.querySelector(".hamburger");
		const navLinks = document.querySelectorAll("nav ul li");
		const nav = document.querySelector("nav");

		hamburger.addEventListener("click", () => {
			nav.classList.toggle("active");
		});

		navLinks.forEach(link => {
			link.addEventListener("click", () => {
				nav.classList.toggle("active");
			});
		});
