//Variables
var input = document.getElementById("input");
var calcHistory = document.getElementById("history");
var calcHistoryNumber = document.getElementsByClassName("history-numbers");
//Btns not print in input
var notPrint = ["=", "DEL", "AC"];
//Count history
var count = 0;
//Btn equal
function BtnEqual() {
    if (input.value) {
        try {
            var reslut = input.value.toString();
            calcHistory.innerHTML += "\n                              <div onclick=\"deleteHistory(".concat(count, ")\" class=\"history-numbers\" id=\"history-number").concat(count, "\">\n                                  <span>").concat(input.value, " = ").concat(eval(reslut), "</span>\n                              </div>\n                          ");
            input.value = eval(reslut);
            count++;
        }
        catch (error) {
            window.alert("Please enter the correct operation!");
        }
    }
}
//keys keyboar
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        BtnEqual();
    }
});
//Clicks calculator
function clickBtn(element) {
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
function deleteHistory(count) {
    var _a;
    (_a = document.getElementById("history-number".concat(count))) === null || _a === void 0 ? void 0 : _a.remove();
}
