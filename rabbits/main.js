const findButton = document.querySelector("#find-btn");
const rabbit = document.querySelector("#rabbit");

// 1. 버튼을 누르면 토끼를 찾아 이동하는 기능생성.
// * 이벤트 사용 - scrollIntoView(); 특정 요소가 보이는 영역으로 스크롤링된다.
findButton.addEventListener("click", () => {
  rabbit.scrollIntoView({ behavior: "smooth" });
});
