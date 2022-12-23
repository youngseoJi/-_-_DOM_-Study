"use strict";

// window size - dom 을 이용해서 html 내용 변겅, 윈도우 사이즈 값 출력하기

const windowSize = document.querySelector(".window-background");

// 기본 출력값
windowSize.innerHTML = `
window.screen.size: ${window.screen.width}, ${window.screen.height}</br>
window.inner.size: ${window.innerWidth}, ${window.innerHeight}</br>
window.outer.size: ${window.outerWidth}, ${window.outerWidth}</br>
documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}
`;

// 사이즈 변경 될때마다 변경됨
window.addEventListener("resize", () => {
  windowSize.innerHTML = `
  window.screen.size: ${window.screen.width}, ${window.screen.height}</br>
  window.inner.size: ${window.innerWidth}, ${window.innerHeight}</br>
  window.outer.size: ${window.outerWidth}, ${window.outerWidth}</br>
  documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}
  `;
});
