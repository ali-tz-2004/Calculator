//Variables
const input = document.getElementById("input") as HTMLInputElement;
const calcHistory = document.getElementById("history") as HTMLDivElement;
const calcHistoryNumber = document.getElementsByClassName(
  "history-numbers"
) as HTMLCollectionOf<HTMLDivElement>;

//Btns not print in input
const notPrint: string[] = ["=", "DEL", "AC"];

//Count history
let count = 0;

//Btn equal
function BtnEqual() {
  if (input.value) {
    try {
      const reslut = input.value.toString();
      calcHistory.innerHTML += `
                              <div onclick="deleteHistory(${count})" class="history-numbers" id="history-number${count}">
                                  <span>${input.value} = ${eval(reslut)}</span>
                              </div>
                          `;
      input.value = eval(reslut);
      count++;
    } catch (error) {
      window.alert("Please enter the correct operation!");
    }
  }
}

//keys keyboar
input.addEventListener("keypress", (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    BtnEqual();
  }
});

//Clicks calculator
function clickBtn(element: string) {
  //Check btns print
  if (!notPrint.includes(element)) {
    input.value += element;
  }
  //Check btns not print
  else {
    switch (element) {
      //Check operation (=)
      case notPrint[0]:
        BtnEqual();
        break;
      //Check operation (DEL)
      case notPrint[1]:
        input.value = input.value.toString().slice(0, -1);
        break;
      //Check operation (AC)
      case notPrint[2]:
        input.value = "";
        break;
    }
  }
}

//Delete history
function deleteHistory(count: number) {
  document.getElementById(`history-number${count}`)?.remove();
}
