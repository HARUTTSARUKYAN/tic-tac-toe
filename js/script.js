var workZone = document.querySelector(".work__zone");
var dataSetAll = document.querySelectorAll("[data-num]");
var newGameBtn = document.querySelector(".new__game__btn");
var winCombArr = [null, null, null, null, null, null, null, null, null];
var start = false;

function concatArr(a, b, c) {
    var result = "";
    result = winCombArr[a] + winCombArr[b] + winCombArr[c];
    if (result === "XXX" || result === "OOO") return result;
    if (result === "OOnull") return ["o", c];
    if (result === "OnullO") return ["o", b];
    if (result === "nullOO") return ["o", a];
    if (result === "XXnull") return ["x", c];
    if (result === "XnullX") return ["x", b];
    if (result === "nullXX") return ["x", a];
    
}

function changeColor(a, b, c) {
    dataSetAll[a].style.color = "blue";
    dataSetAll[b].style.color = "blue";
    dataSetAll[c].style.color = "blue";


    start = true;
}

function winComb() {
    for (var i = 0; i < 3; i++) {
        var result = concatArr(i, i + 3, i + 6);
        if (result === "XXX" || result === "OOO") {
            changeColor(i, i + 3, i + 6);
        }
    }
    for (i = 0; i <= 6; i += 3) {
        result = concatArr(i, i + 1, i + 2);
        if (result === "XXX" || result === "OOO") {
            changeColor(i, i + 1, i + 2);
        }
    }
    result = concatArr(0, 4, 8);
    if (result === "XXX" || result === "OOO") {
        changeColor(0, 4, 8);
    }
    result = concatArr(2, 4, 6);
    if (result === "XXX" || result === "OOO") {
        changeColor(2, 4, 6);
    }
}

function forO() {
    for (var i = 0; i < 3; i++) {
        var result = concatArr(i, i + 3, i + 6);
        if (typeof result === "object" && result[0] === "o") {
            dataSetAll[result[1]].innerHTML = "O";
            winCombArr[result[1]] = "O";
            return;
        }
        console.dir(result)
    }
    console.dir(result)
    for (i = 0; i < 6; i += 3) {
        result = concatArr(i, i + 1, i + 2);
        if ((typeof result === "object" && result[0] === "o")) {
            dataSetAll[result[1]].innerHTML = "O";
            winCombArr[result[1]] = "O";
            return;
        }
    }
    result = concatArr(0, 4, 8);
    if (typeof result === "object" && result[0] === "o") {
        dataSetAll[result[1]].innerHTML = "O";
        winCombArr[result[1]] = "O";
        return;
    }
    result = concatArr(2, 4, 6);
    if (typeof result === "object" && result[0] === "o") {
        dataSetAll[result[1]].innerHTML = "O";
        winCombArr[result[1]] = "O";
        return;
    }


    for (i = 0; i < 3; i++) {
        result = concatArr(i, i + 3, i + 6);
        if (typeof result === "object" && result[0] === "x") {
            dataSetAll[result[1]].innerHTML = "O";
            winCombArr[result[1]] = "O";
            return;
        }
    }
    for (i = 0; i <= 6; i += 3) {
        result = concatArr(i, i + 1, i + 2);
        if (typeof result === "object" && result[0] === "x") {
            dataSetAll[result[1]].innerHTML = "O";
            winCombArr[result[1]] = "O";
            return;
        }
    }
    result = concatArr(0, 4, 8);
    if (typeof result === "object" && result[0] === "x") {
        dataSetAll[result[1]].innerHTML = "O";
        winCombArr[result[1]] = "O";
        return;
    }
    result = concatArr(2, 4, 6);
    if (typeof result === "object" && result[0] === "x") {
        dataSetAll[result[1]].innerHTML = "O";
        winCombArr[result[1]] = "O";
        return;
    }


    var randomArr = [];
    for (var key = 0; key < 9; key++) {
        if (winCombArr[key] === null) {
            randomArr.push(key);
        }
    }
    var randomNum = Math.floor(Math.random() * randomArr.length);
    dataSetAll[randomArr[randomNum]].innerHTML = "O";
    winCombArr[randomArr[randomNum]] = "O";
s
}

workZone.addEventListener("click", function (event) {
    if (start === true) return;
    if (event.target.textContent === "") {
        event.target.innerHTML = "X";
        event.target.classList.add("color");
        winCombArr[event.target.dataset.num] = "X"
    } else return;
    console.log(winCombArr)

    winComb();
    if (start === true) return;
    forO();
    winComb();
})
newGameBtn.addEventListener("click", function () {
    window.location.reload();
})