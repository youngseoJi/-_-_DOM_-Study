const verticalLine = document.querySelector(".vertical-line");
const horizontalLine = document.querySelector(".horizontal-line");
const target = document.querySelector(".target");
const coordinates_value = document.querySelector(".coordinates_value");

/* 1) 좌표 위치의 값 출력 : 마우스의 실시간 위치를 출력
 * 1. 마우스 움직임을 따라 좌표가 이동해아함
 * - 마우스 움직이면 발생하는 이벤트 mousemove
 */
document.addEventListener("mousemove", (e) => {
  /* 
  2. 현재보이는 브라우저에서 mousemove 움직이는 이벤트를 따라 실시간 출력
       (해당 이벤트 없으면 브라우저 클릭하는 위치출력)*/
  // console.log(`${e.clientX}, ${e.clientY}`);
  const x = e.clientX;
  const y = e.clientY;

  // 3. css 스타일 이용하여 - 왼쪽에서 오른쪽으로, 위에서 아래로 시작축부터 값이 증가하도록 설정
  // 수직, 수평선 이동
  verticalLine.style.left = `${x}px`;
  horizontalLine.style.top = `${y}px`;
  // 좌표 타겟 이동
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  // 좌표 값 이동
  coordinates_value.style.left = `${x}px`;
  coordinates_value.style.top = `${y}px`;

  // 4. html coordinates_value 태그 값(좌표위치)을 변경해준다.
  coordinates_value.innerHTML = `${x}px, ${y}px`;
});
