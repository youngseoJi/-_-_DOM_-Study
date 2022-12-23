"use strict";

// 윈도우 객체 : 모든 브라우저의 변수, 자바스크립트, bom, dom을 모두 포함하고 있는 객체
// 그래서 자바스크립트로 브라우저를 동적으로 변경할 수 있는것

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
