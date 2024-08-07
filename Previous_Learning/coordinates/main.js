const verticalLine = document.querySelector(".vertical-line");
const horizontalLine = document.querySelector(".horizontal-line");
const target = document.querySelector(".target");
const coordinatesValue = document.querySelector(".coordinates_value");

//  윈도우가 로드 되었을때 실행되도록 설정
addEventListener("load", () => {
  // 좌표 크기의 절반 만큼 이동하기위해설정
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  /* 1) 좌표 위치의 값 출력 : 마우스의 실시간 위치를 출력
   * 1. 마우스 움직임을 따라 좌표가 이동해아함
   * - 마우스 움직이면 발생하는 이벤트 mousemove */

  document.addEventListener("mousemove", (e) => {
    /*   2. 현재보이는 브라우저에서 mousemove 움직이는 이벤트를 따라 실시간 출력
       (해당 이벤트 없으면 브라우저 클릭하는 위치출력)*/
    // console.log(`${e.clientX}, ${e.clientY}`);
    const x = e.clientX;
    const y = e.clientY;

    /* 3. css 스타일 이용하여 - 왼쪽에서 오른쪽으로, 위에서 아래로 시작축부터 값이 증가하도록 설정
   수직, 수평선, 좌표 타겟, 좌표값 이동
   verticalLine.style.left = `${x}px`;
   horizontalLine.style.top = `${y}px`
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  coordinatesValue.style.left = `${x}px`;
  coordinatesValue.style.top = `${y}px`; */

    // 5. 성능 게선 : top, left 는 css 에서 레이아웃까지 재조정하므로 컴포짓만 건드는 애니메이션 요소로 변경
    verticalLine.style.transform = `translateX(${x}px)`;
    horizontalLine.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px) `;
    coordinatesValue.style.transform = `translate(${x}px, ${y}px)`;

    // 4. html coordinatesValue 태그 값(좌표위치)을 변경해준다.
    coordinatesValue.innerHTML = `${x}px, ${y}px`;
  });
});
