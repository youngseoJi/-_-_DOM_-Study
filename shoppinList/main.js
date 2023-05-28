const itemList = document.querySelector(".item-list");
const input = document.querySelector("input");
const addBtn = document.querySelector(".item-add");
const deleteBtn = document.querySelector(".item-delete");

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

let id = 0;

// item 생성하기
function createItem(itemNm) {
  // 리팩토링
  // item 한 칸에 들어갈 html 요소 작성하여 넣기
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item-row");
  itemRow.innerHTML = `
    <div class="item" data_id=${id}>
      <span class="item-name">${itemNm}</span>
      <button class="item-delete" data_id=${id}>
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
    <div class="item-divider"></div>
  `;

  id++;
  return itemRow;
}

// 추가 버튼 기능 : 버튼 누를경우 item 추가
addBtn.addEventListener("click", () => {
  onAdd();
});

// 엔터키 기능 : item 추가
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    onAdd();
  }
});
