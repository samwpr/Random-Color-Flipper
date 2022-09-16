let dict = {0:0, 1: 1, 2: 2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10: "a", 11: "b", 12: "c", 13:"d", 14: "e", 15: "f"}; 

function hexC(){
    let hex = 16; 
    let r = Math.floor(Math.random() * 220);
    let rInt = r/hex;
    let rIntFloor = Math.floor(rInt);
    let rIntRemainder = rInt - rIntFloor;
    let rIntRemainderXST = rIntRemainder * 16;
    let r_as_hex = String(dict[rIntFloor]) + String(dict[rIntRemainderXST]);
    return String(r_as_hex)
    console.log(r_as_hex);
}

hexR = ""
hexG = ""
hexB = ""

document.getElementById("btn").onclick = function generate(){
    hexR = hexC();
    hexG = hexC();
    hexB = hexC();
    hexCode = "#"+hexR + hexG + hexB;
    document.getElementById("color-code").innerHTML = hexCode;
    document.body.style.backgroundColor = hexCode;
};

