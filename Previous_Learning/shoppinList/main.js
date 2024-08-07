const itemList = document.querySelector(".item-list");
const input = document.querySelector("input");
const addBtn = document.querySelector(".item-add");
const addItem = document.querySelector(".add-item");

addItem.addEventListener("submit", (e) => {
  e.preventDefault(); // 새로고침 방지
  onAdd();
});

// 목록에 타이핑한 아이템 추가하기
function onAdd() {
  // 1) input 입력한 텍스트 갖고 오기
  const itemNm = input.value;
  //+ 버튼눌러 추가한 후 포커싱이 버튼으로 가는 것 해결
  // 값이 "" 빈문자열일경우 포커싱하는 함수 추가
  if (itemNm === "") {
    input.focus();
    return;
  }
  // 2) 새로운 item 생성 (추가 item)
  const item = createItem(itemNm);
  // 3) + 버튼 , enter 키 누르면 목록에 item 추가하기
  itemList.appendChild(item);
  // 6) 마지막 추가되는 item 보이게 설정
  item.scrollIntoView();

  // 4) input 초기화
  input.value = "";
  // 5) input 창에 포커스하도록 하여, input 창 다시 클릭하지 않아도 바로 타이핑 칠수있도록함
  input.focus();
}

// item 리스트에 id 지정
let id = 0;

// item 생성하기
function createItem(itemNm) {
  // 리팩토링
  // item 한 칸에 들어갈 html 요소 작성하여 넣기
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item-row");
  // data-id=${id} 데이터 id 지정해주기
  itemRow.innerHTML = `
    <div class="item" data-id=${id}>
      <span class="item-name">${itemNm}</span>
      <button class="item-delete">
        <i class="fas fa-trash-alt" data-id=${id}></i>
      </button>
    </div>
    <div class="item-divider"></div>
  `;
  // id : 1, 2, 3, 4, 5...
  id++;
  return itemRow;
}

// // 추가 버튼 기능 : 버튼 누를경우 item 추가
// addBtn.addEventListener("click", () => {
//   onAdd();
// });

// // 엔터키 기능 : item 추가   keypress -> keydown 변경 (keypress는 사용안할예정)
// input.addEventListener("keydown", (e) => {
//   // 에러 방지 : 글자가 생성중인 도중에는 이벤트가 작동안하도록 설정
//   if (e.isComposing) {
//     return;
//   }
//   if (e.key === "Enter") {
//     onAdd();
//   }
// });

// 삭제 버튼 기능 : 클릭한 요소 item의 속성값 id를 조회하여 해당 item 삭제
itemList.addEventListener("click", (e) => {
  // 지정해둔 data id 이용 -> dataset.id 데이터 셋에 담아둔 id 갖고오기
  const id = e.target.dataset.id;

  if (id) {
    // 해당 id 값을 가진 item 요소를 불러와 삭제한다.
    const deletedItem = document.querySelector(`.item[data-id="${id}"]`);
    deletedItem.remove();
  }
});
