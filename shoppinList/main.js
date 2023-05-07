const itemList = document.querySelector(".item-list");
const input = document.querySelector("input");
const addBtn = document.querySelector(".item-add");
const deleteBtn = document.querySelector(".item-delete");

// 목록에 타이핑한 아이템 추가하기
function onAdd() {
  // 1) input 입력한 텍스트 갖고 오기
  const itemNm = input.value;
  // 2) 새로운 item 생성 (추가 item)
  const item = createItem(itemNm);
  // 3) + 버튼 , enter 키 누르면 목록에 item 추가하기
  itemList.appendChild(item);
  // 4) input 초기화
  input.value = "";
  // 5) input 창에 포커스하도록 하여, input 창 다시 클릭하지 않아도 바로 타이핑 칠수있도록함
  input.focus();
}

// item 생성하기
function createItem(itemNm) {
  // 입력받은 itme 과 item 구분선을 생성한다.

  // item 1줄 칸
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item-row");
  // 구분선
  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item-divider");

  // item 요소
  const item = document.createElement("div");
  item.setAttribute("class", "item");
  // item 이름
  const itemName = document.createElement("span");
  itemName.setAttribute("class", "item-name");
  itemName.innerText = itemNm;
  // 삭제 버튼
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item-delete");
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

  // 삭제 기능 생성 : 버튼 누르는 경우 -> itemRow 목록 1줄 삭제
  deleteBtn.addEventListener("click", () => {
    itemList.removeChild(itemRow);
  });

  item.appendChild(itemName);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

// 추가 버튼 기능 : 버튼 누를경우 item 추가
addBtn.addEventListener("click", () => {
  onAdd();
});
